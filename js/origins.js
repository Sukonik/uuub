/*
 * UUUB Cocoa House — origins.js
 * Origin explorer: loads data/origins.json, renders a keyboard-accessible
 * grid of origin stamps synced with a detail panel. Every action here also
 * exists as a plain-text fallback list already in the page markup, which
 * this script hides only once the interactive view has rendered.
 */
(function () {
  "use strict";

  var SAVE_KEY = "uuub-saved-origin";

  var grid = document.getElementById("origin-grid");
  var detail = document.getElementById("origin-detail");
  var fallback = document.getElementById("origin-list-fallback");

  if (!grid || !detail) {
    return;
  }

  var origins = [];

  function statusLabel(status) {
    return status === "verified" ? "Verified" : "Exploring";
  }

  function renderDetail(origin) {
    var metaRows = "";
    if (origin.status === "verified") {
      metaRows =
        "<dt>Producer</dt><dd>" + (origin.producer || "—") + "</dd>" +
        "<dt>Lot</dt><dd>" + (origin.lot || "—") + "</dd>" +
        "<dt>Process</dt><dd>" + (origin.process || "—") + "</dd>";
    }

    detail.innerHTML =
      '<p class="origin-detail__flag" aria-hidden="true">' + origin.flag + "</p>" +
      '<h3 class="origin-detail__name">' + origin.country + "</h3>" +
      '<p class="origin-detail__status"><span class="badge' +
      (origin.status === "verified" ? " badge--verified" : " badge--muted") +
      '">' + statusLabel(origin.status) + "</span></p>" +
      '<p class="origin-detail__note">' + origin.notes + "</p>" +
      (metaRows ? '<dl class="origin-detail__meta">' + metaRows + "</dl>" : "") +
      '<div class="origin-detail__save">' +
      '<button type="button" class="btn btn--secondary" id="origin-save-btn">Save this exploration</button>' +
      '<p class="builder__status" id="origin-save-status" role="status"></p>' +
      "</div>";

    var saveBtn = document.getElementById("origin-save-btn");
    var saveStatus = document.getElementById("origin-save-status");
    if (saveBtn) {
      saveBtn.addEventListener("click", function () {
        try {
          localStorage.setItem(SAVE_KEY, origin.id);
          saveStatus.textContent = "Saved " + origin.country + " as your local favorite.";
        } catch (e) {
          saveStatus.textContent = "Couldn't save — local storage is unavailable in this browser.";
        }
      });
    }
  }

  function selectOrigin(id) {
    var origin = null;
    for (var i = 0; i < origins.length; i++) {
      if (origins[i].id === id) {
        origin = origins[i];
        break;
      }
    }
    if (!origin) {
      return;
    }

    var stamps = grid.querySelectorAll(".origin-stamp");
    stamps.forEach(function (stamp) {
      stamp.setAttribute("aria-pressed", stamp.dataset.id === id ? "true" : "false");
    });

    renderDetail(origin);
  }

  function renderGrid() {
    var html = "";
    origins.forEach(function (origin) {
      html +=
        '<button type="button" class="origin-stamp" data-id="' + origin.id +
        '" data-status="' + origin.status + '" aria-pressed="false">' +
        '<span class="origin-stamp__flag" aria-hidden="true">' + origin.flag + "</span>" +
        '<span class="origin-stamp__name">' + origin.country + "</span>" +
        '<span class="origin-stamp__status">' + statusLabel(origin.status) + "</span>" +
        "</button>";
    });
    grid.innerHTML = html;

    grid.addEventListener("click", function (event) {
      var stamp = event.target.closest(".origin-stamp");
      if (stamp) {
        selectOrigin(stamp.dataset.id);
      }
    });
  }

  fetch("data/origins.json")
    .then(function (response) {
      if (!response.ok) {
        throw new Error("origins.json request failed");
      }
      return response.json();
    })
    .then(function (data) {
      origins = data;
      renderGrid();
      if (fallback) {
        fallback.hidden = true;
      }

      var savedId = null;
      try {
        savedId = localStorage.getItem(SAVE_KEY);
      } catch (e) {
        savedId = null;
      }
      var initial = origins.some(function (o) {
        return o.id === savedId;
      })
        ? savedId
        : null;

      if (initial) {
        selectOrigin(initial);
      } else {
        detail.innerHTML =
          '<p class="origin-detail__empty">Select an origin to see what we know — and what we’re still exploring.</p>';
      }
    })
    .catch(function () {
      detail.innerHTML =
        '<p class="origin-detail__empty">The origin explorer couldn’t load right now. The full list below still works.</p>';
    });
})();
