// Menu hambúrguer (só aparece no mobile; no desktop o botão fica escondido pelo CSS)
document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector(".navbar");
  var botao = document.querySelector(".navbar .menu-toggle");
  if (!navbar || !botao) return;

  function definir(aberto) {
    navbar.classList.toggle("menu-aberto", aberto);
    botao.setAttribute("aria-expanded", aberto ? "true" : "false");
    botao.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
  }

  botao.addEventListener("click", function () {
    definir(!navbar.classList.contains("menu-aberto"));
  });
  navbar.querySelectorAll("ul a").forEach(function (a) {
    a.addEventListener("click", function () { definir(false); });
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") definir(false); });
  window.addEventListener("resize", function () { if (window.innerWidth > 768) definir(false); });
});
