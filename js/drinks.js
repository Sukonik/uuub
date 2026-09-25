/*
 * UUUB Cocoa House — drinks.js
 * Sample drink builder: turns four validated choices into a concept order
 * phrase and a shareable URL. This is a preview only — never an order, a
 * price, or a nutrition calculator.
 */
(function () {
  "use strict";

  var SAVE_KEY = "uuub-saved-drink";

  var ORIGIN_LABELS = {
    grenada: "Grenada",
    mexico: "Mexico",
    peru: "Peru",
    jamaica: "Jamaica",
    "dominican-republic": "Dominican Republic",
    "cote-divoire": "Côte d'Ivoire"
  };

  var FORM_LABELS = {
    straight: "Impasto",
    latte: "Impasto Latte",
    freddo: "Impasto Freddo"
  };

  var STRENGTH_LABELS = {
    mild: "mild",
    classic: "classic",
    bold: "bold"
  };

  var SWEETNESS_LABELS = {
    unsweetened: "unsweetened",
    light: "lightly sweet",
    sweet: "sweet"
  };

  var ALLOWED = {
    origin: Object.keys(ORIGIN_LABELS),
    form: Object.keys(FORM_LABELS),
    strength: Object.keys(STRENGTH_LABELS),
    sweetness: Object.keys(SWEETNESS_LABELS)
  };

  var originSelect = document.getElementById("drink-origin");
  var formSelect = document.getElementById("drink-form");
  var strengthSelect = document.getElementById("drink-strength");
  var sweetnessSelect = document.getElementById("drink-sweetness");
  var phraseEl = document.getElementById("builder-phrase");
  var shareBtn = document.getElementById("builder-share");
  var saveBtn = document.getElementById("builder-save");
  var statusEl = document.getElementById("builder-status");

  if (!originSelect || !formSelect || !strengthSelect || !sweetnessSelect || !phraseEl) {
    return;
  }

  function isValid(field, value) {
    return ALLOWED[field].indexOf(value) !== -1;
  }

  function currentSelection() {
    return {
      origin: originSelect.value,
      form: formSelect.value,
      strength: strengthSelect.value,
      sweetness: sweetnessSelect.value
    };
  }

  function applySelection(selection) {
    if (selection.origin && isValid("origin", selection.origin)) {
      originSelect.value = selection.origin;
    }
    if (selection.form && isValid("form", selection.form)) {
      formSelect.value = selection.form;
    }
    if (selection.strength && isValid("strength", selection.strength)) {
      strengthSelect.value = selection.strength;
    }
    if (selection.sweetness && isValid("sweetness", selection.sweetness)) {
      sweetnessSelect.value = selection.sweetness;
    }
  }

  function readFromURL() {
    var params = new URLSearchParams(window.location.search);
    var selection = {
      origin: params.get("origin"),
      form: params.get("form"),
      strength: params.get("strength"),
      sweetness: params.get("sweetness")
    };
    var hasAny = selection.origin || selection.form || selection.strength || selection.sweetness;
    return hasAny ? selection : null;
  }

  function readFromStorage() {
    try {
      var raw = localStorage.getItem(SAVE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function updateURL(selection) {
    var params = new URLSearchParams();
    params.set("origin", selection.origin);
    params.set("form", selection.form);
    params.set("strength", selection.strength);
    params.set("sweetness", selection.sweetness);
    var newUrl = window.location.pathname + "?" + params.toString();
    window.history.replaceState(null, "", newUrl);
  }

  function buildPhrase(selection) {
    var origin = ORIGIN_LABELS[selection.origin] || "Your origin";
    var form = FORM_LABELS[selection.form] || FORM_LABELS.straight;
    var strength = STRENGTH_LABELS[selection.strength] || STRENGTH_LABELS.classic;
    var sweetness = SWEETNESS_LABELS[selection.sweetness] || SWEETNESS_LABELS.light;
    return origin + " " + form + ", " + strength + " strength, " + sweetness;
  }

  function render() {
    var selection = currentSelection();
    phraseEl.textContent = "“" + buildPhrase(selection) + ".”";
    updateURL(selection);
  }

  [originSelect, formSelect, strengthSelect, sweetnessSelect].forEach(function (select) {
    select.addEventListener("change", render);
  });

  if (shareBtn) {
    shareBtn.addEventListener("click", function () {
      var selection = currentSelection();
      var text = buildPhrase(selection) + " — a concept preview from UUUB Cocoa House.";
      var url = window.location.href;

      if (navigator.share) {
        navigator
          .share({ title: "UUUB sample cup", text: text, url: url })
          .catch(function () {
            /* user cancelled the share sheet — no error state needed */
          });
        return;
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard
          .writeText(url)
          .then(function () {
            if (statusEl) statusEl.textContent = "Link copied to your clipboard.";
          })
          .catch(function () {
            if (statusEl) statusEl.textContent = "Copy the link from your browser’s address bar.";
          });
      } else if (statusEl) {
        statusEl.textContent = "Copy the link from your browser’s address bar.";
      }
    });
  }

  if (saveBtn) {
    saveBtn.addEventListener("click", function () {
      var selection = currentSelection();
      try {
        localStorage.setItem(SAVE_KEY, JSON.stringify(selection));
        if (statusEl) statusEl.textContent = "Saved this cup locally on this device.";
      } catch (e) {
        if (statusEl) statusEl.textContent = "Couldn’t save — local storage is unavailable in this browser.";
      }
    });
  }

  var fromURL = readFromURL();
  var initial = fromURL || readFromStorage();
  if (initial) {
    applySelection(initial);
  }
  render();
})();
