const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.site-nav');
const isEnglish = document.documentElement.lang.startsWith('en');
const menuOpenLabel = isEnglish ? 'Open menu' : '메뉴 열기';
const menuCloseLabel = isEnglish ? 'Close menu' : '메뉴 닫기';

if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? menuOpenLabel : menuCloseLabel);
    menu.classList.toggle('open', !isOpen);
  });

  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', menuOpenLabel);
      menu.classList.remove('open');
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1090) {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', menuOpenLabel);
      menu.classList.remove('open');
    }
  });
}

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

document.querySelectorAll('[data-copy-email]').forEach((button) => {
  const feedback = button.nextElementSibling;
  if (!feedback?.classList.contains('copy-feedback')) return;
  let clearFeedback;

  if (button.dataset.copyEmail) {
    button.setAttribute('aria-label', isEnglish ? `Copy ${button.dataset.copyEmail}` : `${button.dataset.copyEmail} 복사`);
  }

  button.addEventListener('click', async () => {
    const email = button.dataset.copyEmail;
    if (!email) return;

    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(email);
      feedback.textContent = isEnglish ? 'Copied' : '복사됨';
    } catch {
      feedback.textContent = isEnglish ? 'Copy failed' : '복사 실패';
    }

    window.clearTimeout(clearFeedback);
    clearFeedback = window.setTimeout(() => { feedback.textContent = ''; }, 2000);
  });
});
