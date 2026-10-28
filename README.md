# MOLDE-HTML-ONG
Trabalho de desenvolvimento pra testar as habilidades com HTML

# AULA 27/10 - JAVASCRIPT
// Localiza os dois elementos da página.
const botao = document.getElementById("botaoAjuda");
const aviso = document.getElementById("aviso");
 
// Declara a ação a realizar.
function mostrarAjuda() {
    aviso.textContent = "Você pode ser voluntário!";
}
 
// Executa a função a cada clique.
botao.addEventListener("click", mostrarAjuda);



# IGUAIS NO JS
= AGREGACAO
== IGUALDADE
=== IGALDADE (valor e tipo)


# STYLE.DISPLAY,IF, ELIF
EXEMPLO:

// Localiza o botão e o painel pelo id do HTML.
const botaoParticipar = document.getElementById("botaoParticipar");
const painelParticipar = document.getElementById("painelParticipar");
 
// Oculta o painel quando o JavaScript é executado.
painelParticipar.style.display = "none";
 
// A função de clique será criada no próximo slide.

// Alterna a visibilidade quando ocorre um clique.
function alternarParticipacao() {
    // Verifica se o painel está oculto.
    if (painelParticipar.style.display === "none") {
        painelParticipar.style.display = "block";
        botaoParticipar.textContent = "Ocultar oportunidades";
    } else {
        // Se estiver visível, esconde o painel.
        painelParticipar.style.display = "none";
        botaoParticipar.textContent = "Ver oportunidades";
    }
}

// Executa a função a cada clique.
botaoParticipar.addEventListener("click", alternarParticipacao);


# ENTREGA
Como enviar o projeto:

Enviar o projeto completo zipado (todos os arquivos) para:

tech33g@gmail.com

No assunto do email escreva:

3a Noite + Projeto + nomeRepresentante do grupo

No email, além de anexar o arquivo zipado, escreva o nome de todos participantes com RGM

Data limite: 03/11/26

SOMENTE UMA PESSOA DO GRUPO ENVIA O EMAIL. 

