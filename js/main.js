// JumpFun — interações da página

(function () {
  "use strict";

  var ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();

  // Header muda de fundo ao fazer scroll
  var header = document.getElementById("header");
  function onScroll() {
    if (header) header.classList.toggle("scrolled", window.scrollY > 40);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Elementos que rodam ao fazer scroll (bola, bolo)
  var spinners = Array.prototype.slice.call(document.querySelectorAll("[data-spin]"));
  var ticking = false;
  function spin() {
    var y = window.scrollY || window.pageYOffset;
    spinners.forEach(function (el) {
      var speed = parseFloat(el.getAttribute("data-spin")) || 0.3;
      var axis = el.getAttribute("data-spin-axis") || "z";
      var ang = y * speed;
      el.style.transform = axis === "y" ? "rotateY(" + ang + "deg)" : "rotate(" + ang + "deg)";
    });
    ticking = false;
  }
  if (spinners.length) {
    window.addEventListener("scroll", function () {
      if (!ticking) { window.requestAnimationFrame(spin); ticking = true; }
    }, { passive: true });
    spin();
  }

  // Menu mobile
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
})();
