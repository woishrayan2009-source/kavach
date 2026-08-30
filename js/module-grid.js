/* ==========================================================================
   Kavach — module-grid.js
   Filter bar (All / Built / Software Demo / Concept) and concept-card
   accordion behaviour for index.html. No dependencies, no network calls.
   ========================================================================== */
(function () {
  var pills = document.querySelectorAll(".filter-pill");
  var cards = document.querySelectorAll(".module-card");
  var countEl = document.getElementById("filter-count");
  var totalsByStatus = { built: 1, demo: 2, concept: 5 };

  function applyFilter(status) {
    cards.forEach(function (card) {
      var match = status === "all" || card.getAttribute("data-status") === status;
      card.classList.toggle("is-hidden", !match);
    });

    pills.forEach(function (p) {
      p.setAttribute("aria-pressed", String(p.getAttribute("data-filter") === status));
    });

    if (status === "all") {
      countEl.textContent = "Showing all 8 modules";
    } else {
      var n = totalsByStatus[status];
      var label = status === "built" ? "Built" : status === "demo" ? "Software Demo" : "Concept";
      countEl.textContent = "Showing " + n + " " + label + " module" + (n === 1 ? "" : "s");
    }
  }

  pills.forEach(function (pill) {
    pill.addEventListener("click", function () {
      applyFilter(pill.getAttribute("data-filter"));
    });
  });

  var toggles = document.querySelectorAll(".accordion-toggle");
  toggles.forEach(function (toggle) {
    toggle.addEventListener("click", function () {
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      var panel = document.getElementById(toggle.getAttribute("aria-controls"));
      toggle.setAttribute("aria-expanded", String(!expanded));
      panel.classList.toggle("is-open", !expanded);
      toggle.querySelector(".accordion-toggle-icon").textContent = expanded ? "▸" : "▾";
      toggle.lastChild.textContent = expanded ? " Read the full concept" : " Hide the full concept";
    });
  });
})();
