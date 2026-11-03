# ONG Health Nova — Site institucional

Projeto integrador da disciplina **Fundamentos da Web e Desenvolvimento Front-end (HTML, CSS e JavaScript)**.

> ⚠️ **Protótipo acadêmico.** A ONG Health Nova é fictícia. Este site não representa nenhuma organização real, não envia e-mails, não coleta nem armazena dados e não processa pagamentos. A confirmação do formulário de contato é apenas simulada.

## Integrantes

- Lucas de Oliveira
- Clara Costa Gonçalves
- Kaio da Silva Oliveira
- Alefe Richard Silva
- João Victor de Almeida Ferreira
- Jesus David Casanova Molano

## Objetivo

Planejar, desenvolver e apresentar um site responsivo e interativo para divulgar a atuação da ONG Health Nova, que promove **saúde e bem-estar** por meio de atividade física, esporte e convivência. O projeto usa HTML5, CSS3 e JavaScript básico, sem frameworks e sem back-end.

## Causa e público atendido

- **Causa:** promoção da saúde integral, prevenção de doenças e hábitos de vida ativos.
- **Público:** crianças, jovens, adultos e idosos sem acesso facilitado a serviços de saúde e bem-estar, especialmente em situação de vulnerabilidade social.

## Páginas

| Página | Arquivo | Conteúdo |
|---|---|---|
| Início | `index.html` | Nome da ONG, apresentação, menu giratório de navegação (destaque visual) e três caixas de texto sobre a causa |
| Sobre | `Sobre/sobre.html` | Missão, visão, valores, público atendido e ações da ONG |
| Projetos | `Projetos/projetos.html` | Três iniciativas com descrição e imagem: Projeto Movimente-se, Esportes Coletivos e Recreação, Clube de Corrida e Caminhada |
| Contato | `Contato/contatos.html` | Orientações de voluntariado, formulário (nome, e-mail, assunto e mensagem) e aviso de envio simulado |

## Estrutura de arquivos

```
ONG_HealthNova/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   ├── script.js
│   └── menu-mobile.js
├── img/
│   └── logo.png
├── Sobre/
│   ├── sobre.html
│   └── sobre.css
├── Projetos/
│   ├── projetos.html
│   ├── projetos.css
│   ├── projetos.js
│   └── movimente.png · recreacao.png · corrida.png
└── Contato/
    ├── contatos.html
    ├── contatos.css
    └── contato.js
```

## Funcionalidades JavaScript

### 1. Formulário validado (`Contato/contato.js`)

- Registra o evento `submit` com `addEventListener()` e usa `preventDefault()` para impedir o recarregamento da página.
- Lê os campos com `value` e remove espaços desnecessários com `trim()`.
- Regras de validação:
  - **Nome:** no mínimo 3 caracteres, apenas letras.
  - **E-mail:** preenchido e em formato válido.
  - **Assunto:** não vazio.
  - **Mensagem:** no mínimo 10 caracteres.
- Mostra mensagens de erro no próprio HTML, abaixo de cada campo e em um resumo no topo do formulário. Os campos com erro ficam com a borda vermelha.
- Quando tudo está válido, exibe uma confirmação **simulada** no HTML e limpa o formulário. Nenhum dado é enviado.
- O código está comentado.

### 2. Interação adicional: zoom nas imagens dos projetos (`Projetos/projetos.js`)

- Cada imagem dos projetos recebe um `addEventListener("click", ...)`.
- Ao clicar, o JavaScript altera o DOM: abre uma janela (modal) com a imagem ampliada.
- Para fechar, clique no **X** ou fora da imagem. A ação pode ser repetida várias vezes, sem recarregar a página.

### Recursos de apoio

- `js/menu-mobile.js`: menu hambúrguer para telas pequenas.
- `js/script.js`: menu giratório da página inicial, que alterna automaticamente entre Projetos, Sobre e Contato.

## HTML e CSS

- Todas as páginas têm `<!DOCTYPE html>`, `lang="pt-br"`, UTF-8, `<title>` e meta viewport.
- Estrutura com `header`, `nav`, `footer` e, nas páginas Sobre e Contato, também `main` e `section`.
- Menu de navegação nas quatro páginas, com caminhos relativos.
- Imagens com atributo `alt`.
- Formulário com `label` associado a cada campo, `type="email"` e os atributos `required` e `minlength`.
- Folhas de estilo externas (`css/style.css` e um CSS por pasta de página), com paleta de cores, tipografia, espaçamentos, `box-sizing: border-box` e **Flexbox**.
- Layout responsivo com larguras flexíveis, imagens adaptáveis e regras `@media` para telas pequenas.

## Como executar

1. Baixe e extraia o arquivo `.zip`.
2. Abra o arquivo `index.html` em qualquer navegador moderno (Chrome, Edge ou Firefox).
3. Navegue pelo menu entre as quatro páginas. Não é necessário servidor nem instalação.

## Como testar

- **Formulário com erro:** nome curto, e-mail inválido, assunto vazio e mensagem curta.
- **Formulário correto:** preencha todos os campos e verifique a confirmação simulada.
- **Interação adicional:** em Projetos, clique em uma imagem, feche e repita.
- **Celular:** reduza a janela para cerca de 390 px e use o menu hambúrguer.
- **Teclado:** use `Tab` e `Enter`/`Espaço` nos links e botões.

## Fontes e créditos

- **Fontes tipográficas:** Google Fonts (Archivo Black, Grandstander, Google Sans).
- **Foto da seção "Quem Nós Atendemos" (página Sobre):** Unsplash — _completar com o nome do autor da foto e o link_.
- **Logo e imagens dos projetos:** _completar com a origem (criadas pela equipe ou geradas por ferramenta de IA)_.
- **Textos:** elaborados pela equipe para este projeto acadêmico.
