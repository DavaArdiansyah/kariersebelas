/******/ (() => { // webpackBootstrap
    var __webpack_exports__ = {};
    /*!****************************************************!*\
      !*** ./public/assets/static/js/components/dark.js ***!
      \****************************************************/
    var THEME_KEY = "theme";
    function toggleDarkTheme() {
      setTheme(document.documentElement.getAttribute("data-bs-theme") === 'dark' ? "light" : "dark");
    }

    /**
     * Set theme for mazer
     * @param {"dark"|"light"} theme
     * @param {boolean} persist
     */
    function setTheme(theme) {
      var persist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      document.body.classList.add(theme);
      document.documentElement.setAttribute('data-bs-theme', theme);
      // Mendapatkan referensi ke elemen gambar dengan ID 'logo'
      var logoImg = document.getElementById('logo');

      // Mengubah src gambar berdasarkan tema yang dipilih
      if (theme === 'dark') {
        logoImg.src = logoImg.getAttribute('data-dark-logo'); // Ganti '/path/to/dark-logo.png' dengan path menuju gambar logo untuk tema gelap
      } else {
        logoImg.src = logoImg.getAttribute('data-light-logo'); // Ganti '/path/to/light-logo.png' dengan path menuju gambar logo untuk tema terang
      }
      if (persist) {
        localStorage.setItem(THEME_KEY, theme);
      }
      if (persist) {
        localStorage.setItem(THEME_KEY, theme);
      }
    }

    /**
     * Init theme from setTheme()
     */
    function initTheme() {
      //If the user manually set a theme, we'll load that
      var storedTheme = localStorage.getItem(THEME_KEY);
      if (storedTheme) {
        return setTheme(storedTheme);
      }
      //Detect if the user set his preferred color scheme to dark
      if (!window.matchMedia) {
        return;
      }

      //Media query to detect dark preference
      var mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

      //Register change listener
      mediaQuery.addEventListener("change", function (e) {
        return setTheme(e.matches ? "dark" : "light", true);
      });
      return setTheme(mediaQuery.matches ? "dark" : "light", true);
    }
    window.addEventListener('DOMContentLoaded', function () {
      var toggler = document.getElementById("toggle-dark");
      var theme = localStorage.getItem(THEME_KEY);
      if (toggler) {
        toggler.checked = theme === "dark";
        toggler.addEventListener("input", function (e) {
          setTheme(e.target.checked ? "dark" : "light", true);
        });
      }
    });
    initTheme();
    /******/ })()
    ;

