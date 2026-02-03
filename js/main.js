function toggleTheme() {
  document.documentElement.classList.toggle('dark');
  const isDark = document.documentElement.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateThemeUI(isDark);
}

function updateThemeUI(isDark) {
  const icon = document.getElementById('theme-icon');
  const label = document.getElementById('theme-label');
  const mobileIcon = document.getElementById('mobile-theme-icon');

  if (icon) icon.textContent = isDark ? '☀️' : '🌙';
  if (label) label.textContent = isDark ? 'Світла тема' : 'Темна тема';
  if (mobileIcon) mobileIcon.textContent = isDark ? '☀️' : '🌙';
}

// Update toggle button to match theme applied by head script
document.addEventListener('DOMContentLoaded', function() {
  const isDark = document.documentElement.classList.contains('dark');
  updateThemeUI(isDark);
});
