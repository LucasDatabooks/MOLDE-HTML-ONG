## Identidade visual

| Elemento | Cor | Código |
|---|---|---|
| Roxo principal | Roxo profundo | `#5F0F40` |
| Roxo secundário | Roxo claro | `#9A2985` |
| Roxo de destaque | Rosa-arroxeado | `#CF51B8` |
| Amarelo principal | Amarelo vibrante | `#FCBA07` |
| Amarelo secundário | Amarelo suave | `#FED65C` |
| Laranja principal | Laranja queimado | `#D35D14` |
| Laranja secundário | Laranja vibrante | `#F38836` |
| Cor do texto | Preto suave | `#181818` |

### Tipografia

- **Archivo Black:** títulos principais e chamadas de destaque.
- **Grandstander:** navegação e elementos que pedem uma identidade mais descontraída.
- **Google Sans:** textos corridos, parágrafos e informações gerais.



# ------------------------------------- OBESERVAÇÕES ------------------------ #


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

