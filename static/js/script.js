(function () {
  "use strict";

  /* ---- Sticky nav background on scroll ---- */
  var nav = document.getElementById("nav");
  var toggleNavState = function () {
    if (window.scrollY > 24) {
      nav.classList.add("is-scrolled");
    } else {
      nav.classList.remove("is-scrolled");
    }
  };
  toggleNavState();
  window.addEventListener("scroll", toggleNavState, { passive: true });

  /* ---- Mobile menu ---- */
  var navToggle = document.getElementById("nav-toggle");
  var navLinks = document.getElementById("nav-links");

  var closeMenu = function () {
    navToggle.setAttribute("aria-expanded", "false");
    navLinks.classList.remove("is-open");
  };

  navToggle.addEventListener("click", function () {
    var isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navLinks.classList.toggle("is-open");
  });

  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  /* ---- Scroll reveal: slide/fade in on the way down, ---- */
  /* ---- reverse on the way back up (re-triggerable).    ---- */
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var animatedEls = document.querySelectorAll("[data-anim]");

  if (reduceMotion) {
    animatedEls.forEach(function (el) { el.classList.add("is-visible"); });
  } else if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    animatedEls.forEach(function (el) { observer.observe(el); });
  } else {
    animatedEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---- Hero load-in sequence ---- */
  var heroEls = document.querySelectorAll(".hero [data-anim]");
  window.requestAnimationFrame(function () {
    heroEls.forEach(function (el, i) {
      setTimeout(function () {
        el.classList.add("is-visible");
      }, 120 + i * 110);
    });
  });
})();
