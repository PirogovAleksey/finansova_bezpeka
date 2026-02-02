function toggleTheme() {
  document.documentElement.classList.toggle('dark');
  const isDark = document.documentElement.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  document.getElementById('theme-icon').textContent = isDark ? '☀️' : '🌙';
  document.getElementById('theme-label').textContent = isDark ? 'Світла тема' : 'Темна тема';
}

// Update toggle button to match theme applied by head script
if (document.documentElement.classList.contains('dark')) {
  document.getElementById('theme-icon').textContent = '☀️';
  document.getElementById('theme-label').textContent = 'Світла тема';
}
