const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");

// The shared script can also run on pages without this header.
if (menuToggle && mainNav) {
  const wideScreen = window.matchMedia("(min-width: 768px)");

  function setMobileMenu(open) {
    mainNav.hidden = !open;
    menuToggle.setAttribute("aria-expanded", String(open));
  }

  function syncMenuLayout() {
    const isWide = wideScreen.matches;
    menuToggle.hidden = isWide;
    setMobileMenu(false);

    // Desktop navigation is always visible.
    if (isWide) {
      mainNav.hidden = false;
    }
  }

  menuToggle.addEventListener("click", () => {
    setMobileMenu(mainNav.hidden);
  });

  wideScreen.addEventListener("change", syncMenuLayout);
  syncMenuLayout();
}