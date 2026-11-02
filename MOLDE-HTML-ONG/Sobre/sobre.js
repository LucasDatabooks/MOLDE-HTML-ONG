// ==========================================================================
// INTERATIVIDADE JAVASCRIPT - MENU HAMBÚRGUER EM DISPOSITIVOS MÓVEIS
// ==========================================================================

// Aguarda o carregamento completo do DOM da página antes de executar
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona o elemento do botão hambúrguer pelo seu ID
    const menuToggle = document.getElementById('mobile-menu');
    
    // Seleciona a lista de links da navegação
    const navLinks = document.querySelector('.nav-links');

    // Verifica se os dois elementos existem na página antes de adicionar o evento
    if (menuToggle && navLinks) {
        
        // Adiciona um ouvinte de evento para o clique no botão hambúrguer
        menuToggle.addEventListener('click', () => {
            
            // Alterna a classe 'active' para abrir ou fechar o menu no celular
            navLinks.classList.toggle('active');
        });
    }
});