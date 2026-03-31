const moonIcon = '<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>';
const sunIcon = '<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>';

// Navigation
function renderNav() {
  const nav = document.querySelector('aside nav[aria-label="Головна навігація"]');
  if (!nav) return;

  // Determine base path from current location
  const path = window.location.pathname;
  const depth = (path.match(/lectures\/|practicals\//g) || []).length;
  const base = depth ? '../../' : '';

  const pages = [
    { href: 'index.html', label: 'Лекції', icon: '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>' },
    { href: 'practicals.html', label: 'Практичні', icon: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>' },
    { href: 'module1.html', label: 'Модулі', icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>' },
    { href: 'materials.html', label: 'Матеріали', icon: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/>' }
  ];

  // Match active page
  const filename = path.split('/').pop() || 'index.html';
  // lecture.html is part of Лекції section
  const activePage = filename === 'lecture.html' ? 'index.html' : filename;
  // For conspects inside lectures/N/, activate Лекції
  const isConspect = /lectures\/\d+\//.test(path);

  nav.innerHTML = pages.map(p => {
    const isActive = isConspect ? p.href === 'index.html' : activePage === p.href;
    return `<a href="${base}${p.href}"${isActive ? ' class="active"' : ''}>
        <span class="nav-icon" aria-hidden="true"><svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${p.icon}</svg></span>
        ${p.label}
      </a>`;
  }).join('\n');
}

// Footer HTML template
const footerHTML = `
  <div class="footer-content">
    <div>
      <strong>Фінансова безпека</strong><br>
      Викладач: Пирогов Олексій Олександрович<br>
      <a href="mailto:oleksii.pyrohov@uzhnu.edu.ua">oleksii.pyrohov@uzhnu.edu.ua</a>
    </div>
    <div class="footer-right">
      Кафедра твердотільної електроніки та інформаційної безпеки (ТЕІБ)<br>
      Ужгородський національний університет<br>
      <a href="https://teib.info/" target="_blank" rel="noopener">teib.info</a>
    </div>
  </div>
`;

function renderFooter() {
  const footer = document.querySelector('footer');
  if (footer && !footer.innerHTML.trim()) {
    footer.innerHTML = footerHTML;
  }
}

function toggleTheme() {
  const isDark = !document.documentElement.classList.contains('dark');
  document.documentElement.classList.toggle('dark', isDark);
  document.body.classList.toggle('dark', isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateThemeUI(isDark);
}

function updateThemeUI(isDark) {
  const icon = document.getElementById('theme-icon');
  const label = document.getElementById('theme-label');
  const mobileIcon = document.getElementById('mobile-theme-icon');

  if (icon) icon.outerHTML = isDark ? sunIcon.replace('aria-hidden="true"', 'id="theme-icon" aria-hidden="true"') : moonIcon.replace('aria-hidden="true"', 'id="theme-icon" aria-hidden="true"');
  if (label) label.textContent = isDark ? 'Світла тема' : 'Темна тема';
  if (mobileIcon) mobileIcon.outerHTML = isDark ? sunIcon.replace('aria-hidden="true"', 'id="mobile-theme-icon" aria-hidden="true"') : moonIcon.replace('aria-hidden="true"', 'id="mobile-theme-icon" aria-hidden="true"');
}

// Update toggle button to match theme applied by head script
document.addEventListener('DOMContentLoaded', function() {
  const isDark = document.documentElement.classList.contains('dark');
  updateThemeUI(isDark);
  renderNav();
  renderFooter();
});
