document.addEventListener("DOMContentLoaded", function() {
  // Seleciona as imagens dos cards pelos IDs definidos no seu HTML
  const imagens = [
    document.getElementById("movimente"),
    document.getElementById("recreacao"),
    document.getElementById("corrida")
  ];

  // Cria ou seleciona os elementos da modal
  const modal = document.getElementById("modal-zoom");
  const modalImg = document.getElementById("img-ampliada");
  const spanFechar = document.querySelector(".fechar-zoom");

  // Para cada imagem, adiciona o evento de clique para abrir o zoom
  imagens.forEach(img => {
    if (img) {
      img.addEventListener("click", function() {
        modal.style.display = "flex"; // Usa flex para centralizar
        modalImg.src = this.src;      // Copia o link da imagem clicada
      });
    }
  });

  // Função para fechar a modal ao clicar no X
  if (spanFechar) {
    spanFechar.addEventListener("click", function() {
      modal.style.display = "none";
    });
  }

  // Fecha a modal se o usuário clicar em qualquer lugar fora da imagem
  window.addEventListener("click", function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});