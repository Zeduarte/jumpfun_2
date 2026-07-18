// BalizasLândia — interações da página

(function () {
  "use strict";

  // Ano atual no rodapé
  var ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();

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

    // Fecha o menu ao clicar num link
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Formulário de contacto (demo — não envia para servidor)
  var form = document.getElementById("contactForm");
  var note = document.getElementById("formNote");

  if (form && note) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        note.textContent = "Por favor preenche todos os campos.";
        note.className = "form-note err";
        return;
      }
      var nome = document.getElementById("nome").value.trim();
      note.textContent =
        "Obrigado, " + nome + "! Mensagem registada. (Demonstração — sem envio real.)";
      note.className = "form-note ok";
      form.reset();
    });
  }
})();
