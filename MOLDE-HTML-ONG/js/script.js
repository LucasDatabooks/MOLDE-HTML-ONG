document.addEventListener("DOMContentLoaded", function () {
  const secao = document.getElementById("menupizza");
  const frase = document.getElementById("frase");
  const fatias = document.querySelectorAll(".fatia");
  if (!secao || !frase || fatias.length === 0) return;

  // Um tema para cada fatia, na mesma ordem do HTML (Projetos, Sobre, Contato).
  const temas = [
    { fundo: "#fed65c", texto: "#181818", frase: "Conheça os projetos que transformam vidas." },
    { fundo: "#5F0F40", texto: "#ffffff", frase: "Uma história feita de pessoas e de cuidado." },
    { fundo: "#f38836", texto: "#181818", frase: "Fale com a gente e venha fazer parte." }
  ];

  const INTERVALO = 5000; // 5 segundos
  const GRAUS_POR_FATIA = 360 / temas.length;
  let passo = 0; // só aumenta, assim a pizza nunca gira para trás

  function mostrar(primeiraVez) {
    const i = passo % temas.length;
    const tema = temas[i];

    // 30° deixa a 1ª fatia centralizada no meio visível; cada passo gira 120°.
    secao.style.setProperty("--rot", (30 - GRAUS_POR_FATIA * passo) + "deg");
    secao.style.setProperty("--bg-menu", tema.fundo);
    secao.style.setProperty("--cor-frase", tema.texto);

    fatias.forEach(function (fatia, k) {
      fatia.classList.toggle("ativa", k === i);
    });

    if (primeiraVez) {
      frase.textContent = tema.frase;
      return;
    }
    frase.classList.add("some");
    setTimeout(function () {
      frase.textContent = tema.frase;
      frase.classList.remove("some");
    }, 500);
  }

  mostrar(true);
  setInterval(function () {
    passo++;
    mostrar(false);
  }, INTERVALO);
});
