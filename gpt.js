  let currentLang = "es";

  function toggleLanguage() {
    currentLang = currentLang === "es" ? "en" : "es";

    document.querySelectorAll("[data-es]").forEach(el => {
      el.textContent = el.dataset[currentLang];
    });
  }

