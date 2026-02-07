// Reusable components for the site
// This file contains the sidebar and footer that are shared across all pages

// Determine if we're in a subdirectory (for correct paths)
const isSubdir = window.location.pathname.includes('/conspects/') ||
                 window.location.pathname.includes('/practicals/');
const prefix = isSubdir ? '../' : '';

// Get current page for active nav highlighting
const currentPage = window.location.pathname.split('/').pop().split('?')[0] || 'index.html';

function getActivePage() {
  if (currentPage === 'index.html' || currentPage === '') return 'index';
  if (currentPage === 'practicals.html' || currentPage.startsWith('practical-')) return 'practicals';
  if (currentPage === 'tests.html') return 'tests';
  if (currentPage === 'materials.html') return 'materials';
  if (currentPage === 'lecture.html' || currentPage.startsWith('lecture-')) return 'index';
  return '';
}

const activePage = getActivePage();

// Sidebar HTML
const sidebarHTML = `
  <div class="logo">
    <div class="logo-icon">
      <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    </div>
    <div class="logo-text">
      Фінансова<br>Безпека
      <span>онлайн-курс</span>
    </div>
  </div>

  <nav aria-label="Головна навігація">
    <a href="${prefix}index.html"${activePage === 'index' ? ' class="active"' : ''}>
      <span class="nav-icon" aria-hidden="true"><svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg></span>
      Лекції
    </a>
    <a href="${prefix}practicals.html"${activePage === 'practicals' ? ' class="active"' : ''}>
      <span class="nav-icon" aria-hidden="true"><svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></span>
      Практичні
    </a>
    <a href="${prefix}tests.html"${activePage === 'tests' ? ' class="active"' : ''}>
      <span class="nav-icon" aria-hidden="true"><svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></span>
      Тести
    </a>
    <a href="${prefix}materials.html"${activePage === 'materials' ? ' class="active"' : ''}>
      <span class="nav-icon" aria-hidden="true"><svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg></span>
      Матеріали
    </a>
  </nav>

  <div class="sidebar-footer">
    <button class="theme-toggle" onclick="toggleTheme()" aria-label="Перемкнути тему">
      <svg id="theme-icon" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
      <span id="theme-label">Темна тема</span>
    </button>
  </div>
`;

// Footer HTML
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

// Mobile theme toggle HTML
const mobileThemeToggleHTML = `
  <svg id="mobile-theme-icon" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
`;

// Insert components when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  // Insert sidebar content
  const aside = document.querySelector('aside');
  if (aside && !aside.innerHTML.trim()) {
    aside.innerHTML = sidebarHTML;
  }

  // Insert footer content
  const footer = document.querySelector('footer');
  if (footer && !footer.innerHTML.trim()) {
    footer.innerHTML = footerHTML;
  }

  // Insert mobile theme toggle content
  const mobileToggle = document.querySelector('.mobile-theme-toggle');
  if (mobileToggle && !mobileToggle.innerHTML.trim()) {
    mobileToggle.innerHTML = mobileThemeToggleHTML;
  }

  // Update theme UI after components are loaded
  if (typeof updateThemeUI === 'function') {
    const isDark = document.documentElement.classList.contains('dark');
    updateThemeUI(isDark);
  }
});
