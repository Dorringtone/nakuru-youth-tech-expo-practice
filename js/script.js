// Mobile navigation: shared by Home, Programme, and Register.
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");

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

// Expo countdown: runs only on the page with the countdown element.
const expoCountdown = document.querySelector("#expo-countdown");

if (expoCountdown) {
  // The programme runs from 09:00 to 15:30 Kenya time (UTC+03:00).
  const expoStart = Date.parse("2026-12-05T09:00:00+03:00");
  const expoEnd = Date.parse("2026-12-05T15:30:00+03:00");

  function formatUnit(value, unit, width = 2) {
    const number = String(value).padStart(width, "0");
    return `${number} ${unit}${value === 1 ? "" : "s"}`;
  }

  function updateExpoCountdown() {
    const now = Date.now();

    if (now >= expoEnd) {
      expoCountdown.textContent = "The expo has ended.";
    } else if (now >= expoStart) {
      expoCountdown.textContent = "The expo is underway!";
    } else {
      // Recalculate from the clock on each update so the timer doesn't drift.
      const secondsLeft = Math.ceil((expoStart - now) / 1000);
      const days = Math.floor(secondsLeft / 86_400);
      const hours = Math.floor((secondsLeft % 86_400) / 3_600);
      const minutes = Math.floor((secondsLeft % 3_600) / 60);
      const seconds = secondsLeft % 60;

      expoCountdown.textContent = [
        formatUnit(days, "day", 1),
        formatUnit(hours, "hour"),
        formatUnit(minutes, "minute"),
        formatUnit(seconds, "second"),
      ].join(" · ") + " until the expo.";
    }

    expoCountdown.hidden = false;
  }

  // Show the timer immediately, then refresh it once per second.
  updateExpoCountdown();
  setInterval(updateExpoCountdown, 1000);
}