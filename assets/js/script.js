// Smooth-scroll is via CSS. Set dynamic links and last-updated date.
document.addEventListener('DOMContentLoaded', () => {
  // Placeholders — update these with your real links
  const githubUrl = 'https://github.com/emireroglu2k/Mootion';

  const g1 = document.getElementById('githubLink');
  const g2 = document.getElementById('githubLink2');
  if (g1) g1.href = githubUrl;
  if (g2) g2.href = githubUrl;

  // Last updated: current date in user's locale (Europe/Istanbul suggested)
  try {
    const span = document.getElementById('last-updated');
    if (span) {
      const now = new Date();
      const fmt = new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short', year: 'numeric', timeZone: 'Europe/Istanbul' });
      span.textContent = fmt.format(now).replace(/ /g, '-');
    }
  } catch(e) {}

  // Mobile menu toggle functionality
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });
  }
});
