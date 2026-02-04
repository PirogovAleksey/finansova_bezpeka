const moonIcon = '<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>';
const sunIcon = '<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>';

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
  renderFooter();
});
