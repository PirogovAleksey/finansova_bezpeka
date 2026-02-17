const slides = document.querySelectorAll('.slide');
const progressBar = document.getElementById('progress');
const counter = document.getElementById('counter');
const deck = document.querySelector('.slide-deck');
let current = 0;

// Navigation between presentations
const nextUrl = deck && deck.dataset.next;
const prevUrl = deck && deck.dataset.prev;

// Theme toggle
const moonIcon = '<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>';
const sunIcon = '<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>';

function toggleTheme() {
  const isLight = !document.body.classList.contains('light');
  document.body.classList.toggle('light', isLight);
  localStorage.setItem('slides-theme', isLight ? 'light' : 'dark');
  updateThemeButton(isLight);
}

function updateThemeButton(isLight) {
  const themeIcon = document.getElementById('theme-icon');
  const themeLabel = document.getElementById('theme-label');
  if (themeIcon) themeIcon.innerHTML = isLight ? moonIcon : sunIcon;
  if (themeLabel) themeLabel.textContent = isLight ? 'Темна' : 'Світла';
}

// Apply saved theme
if (localStorage.getItem('slides-theme') === 'light') {
  document.body.classList.add('light');
  document.addEventListener('DOMContentLoaded', () => updateThemeButton(true));
} else {
  document.addEventListener('DOMContentLoaded', () => updateThemeButton(false));
}

function navigateTo(url) {
  document.body.style.transition = 'opacity 0.4s ease';
  document.body.style.opacity = '0';
  setTimeout(() => { window.location.href = url; }, 400);
}

/* ---- Entrance animations ---- */
const ANIM_SELECTORS = '.card, .icon-list-item, .step, .stat-box, .highlight-box, .slide-icon, h1, h2, p.subtitle, .tag';
const STAGGER = 0.07; // seconds between each element

function prepareAnimations(slide) {
  const els = slide.querySelectorAll(ANIM_SELECTORS);
  els.forEach((el, i) => {
    el.classList.add('anim');
    el.style.setProperty('--delay', (i * STAGGER) + 's');
  });
}

function resetAnimations(slide) {
  const els = slide.querySelectorAll('.anim');
  els.forEach(el => {
    el.classList.remove('anim');
    el.style.removeProperty('--delay');
  });
}

/* ---- Count-up for stat values ---- */
function animateCountUp(slide) {
  const statValues = slide.querySelectorAll('.stat-value');
  statValues.forEach(el => {
    const text = el.textContent.trim();
    // Parse numbers like "4,315", "+75%", "100+", "3.5M", "24/7", "0 днів"
    const match = text.match(/^([+]?)([\d,.]+)([%+MKБТмкбт]?)(.*)/);
    if (!match) return;

    const prefix = match[1];
    const numStr = match[2].replace(/,/g, '');
    const suffix = match[3] + match[4];
    const target = parseFloat(numStr);
    if (isNaN(target) || target === 0) return;

    const hasComma = match[2].includes(',');
    const hasDecimal = match[2].includes('.');
    const duration = 1200;
    const start = performance.now();

    el.classList.remove('counted');

    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      let val = target * eased;

      if (!hasDecimal) val = Math.round(val);
      else val = Math.round(val * 10) / 10;

      let display = hasDecimal ? val.toFixed(1) : val.toString();
      if (hasComma) {
        display = display.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }

      el.textContent = prefix + display + suffix;

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = text; // restore exact original
        el.classList.add('counted');
      }
    }

    requestAnimationFrame(tick);
  });
}

/* ---- Slide switching ---- */
function show(index) {
  resetAnimations(slides[current]);
  slides[current].classList.remove('active');
  current = (index + slides.length) % slides.length;
  prepareAnimations(slides[current]);
  slides[current].classList.add('active');
  animateCountUp(slides[current]);
  updateProgress();
}

function next() {
  if (current === slides.length - 1 && nextUrl) {
    navigateTo(nextUrl);
  } else {
    show(current + 1);
  }
}

function prev() {
  if (current === 0 && prevUrl) {
    navigateTo(prevUrl);
  } else {
    show(current - 1);
  }
}

function updateProgress() {
  const percent = ((current + 1) / slides.length) * 100;
  progressBar.style.width = percent + '%';
  counter.textContent = (current + 1) + ' / ' + slides.length;
}

/* ---- Keyboard navigation ---- */
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === ' ') {
    e.preventDefault();
    next();
  }
  if (e.key === 'ArrowLeft') {
    e.preventDefault();
    prev();
  }
});

/* ---- Touch / Swipe navigation ---- */
let touchStartX = 0;
let touchStartY = 0;
const SWIPE_THRESHOLD = 50;

document.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].clientX;
  touchStartY = e.changedTouches[0].clientY;
}, { passive: true });

document.addEventListener('touchend', (e) => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  const dy = e.changedTouches[0].clientY - touchStartY;

  // Only handle horizontal swipes (ignore vertical scrolling)
  if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy) * 1.5) {
    if (dx < 0) next();  // swipe left → next
    else prev();          // swipe right → prev
  }
});

/* ---- Init first slide ---- */
// Remove active from HTML so we can trigger animation
slides[current].classList.remove('active');
prepareAnimations(slides[current]);
// Small delay so browser registers the non-active state first
requestAnimationFrame(() => {
  slides[current].classList.add('active');
  animateCountUp(slides[current]);
});
updateProgress();
