/* ==========================================================================
   Kavach — site-nav.js
   "Live Demos" dropdown toggle, shared by index.html, architecture.html,
   and documents.html. No dependencies, no network calls.
   ========================================================================== */
(function () {
  var trigger = document.querySelector(".nav-dropdown-trigger");
  var menu = document.querySelector(".nav-dropdown-menu");
  if (!trigger || !menu) return;

  function closeMenu() {
    menu.classList.remove("is-open");
    trigger.setAttribute("aria-expanded", "false");
  }

  function openMenu() {
    menu.classList.add("is-open");
    trigger.setAttribute("aria-expanded", "true");
  }

  trigger.addEventListener("click", function (e) {
    e.stopPropagation();
    var isOpen = menu.classList.contains("is-open");
    if (isOpen) { closeMenu(); } else { openMenu(); }
  });

  document.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && e.target !== trigger) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeMenu();
      trigger.focus();
    }
  });
})();
