// ===== Formulário de contato: validação com JavaScript =====

// Padrões simples para validar nome (só letras) e e-mail (formato básico)
const padraoNome = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;
const padraoEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;

// Lista dos campos. Cada um tem o id, o nome exibido e a função que valida o valor.
// A função devolve o texto do erro, ou "" quando o valor está correto.
const campos = [
  {
    id: "nome",
    rotulo: "Nome",
    validar(valor) {
      if (valor === "") return "Preencha o nome.";
      if (valor.length < 3) return "O nome deve ter pelo menos 3 caracteres.";
      if (!padraoNome.test(valor))
        return "O nome deve ter apenas letras, sem números ou caracteres especiais (ex.: João Silva).";
      return "";
    }
  },
  {
    id: "email",
    rotulo: "Email",
    validar(valor) {
      if (valor === "") return "Preencha o email.";
      if (!padraoEmail.test(valor))
        return "Email inválido. Use o formato seunome@email.com.";
      return "";
    }
  },
  {
    id: "assunto",
    rotulo: "Assunto",
    validar(valor) {
      if (valor === "") return "Preencha o assunto.";
      return "";
    }
  },
  {
    id: "mensagem",
    rotulo: "Mensagem",
    validar(valor) {
      if (valor === "") return "Preencha a mensagem.";
      if (valor.length < 10) return "A mensagem deve ter pelo menos 10 caracteres.";
      return "";
    }
  }
];

// Elementos da página que o script usa
const form = document.getElementById("form-contato");
const resumo = document.getElementById("resumo-erros");
const mensagemSucesso = document.getElementById("mensagem-sucesso");

// Valida um campo, mostra o erro embaixo dele e devolve o texto do erro
function validarCampo(campo) {
  const elemento = document.getElementById(campo.id);
  // trim() remove os espaços do começo e do fim antes de validar
  const erro = campo.validar(elemento.value.trim());
  document.getElementById("erro-" + campo.id).textContent = erro;
  // Marca a borda em vermelho quando há erro
  elemento.classList.toggle("invalido", erro !== "");
  return erro;
}

// Valida cada campo quando o usuário sai dele (evento blur)
campos.forEach(campo => {
  document.getElementById(campo.id).addEventListener("blur", () => validarCampo(campo));
});

// Mostra no topo do formulário a lista com todos os erros encontrados
function mostrarResumo(problemas) {
  if (problemas.length === 0) {
    resumo.innerHTML = "";
    return;
  }

  resumo.innerHTML =
    "<strong>Corrija os campos abaixo:</strong><ul>" +
    problemas
      .map(p => `<li>${p.rotulo}: ${p.erro}</li>`)
      .join("") +
    "</ul>";
}

// Evento submit: roda quando o usuário clica em "Enviar"
form.addEventListener("submit", function (evento) {
  // Impede o envio e o recarregamento padrão da página
  evento.preventDefault();
  mensagemSucesso.textContent = "";

  // Valida todos os campos e guarda os erros em uma lista
  const problemas = [];
  campos.forEach(campo => {
    const erro = validarCampo(campo);
    if (erro !== "") problemas.push({ id: campo.id, rotulo: campo.rotulo, erro });
  });

  mostrarResumo(problemas);

  // Se houver erro, leva o foco ao primeiro campo com problema e para aqui
  if (problemas.length > 0) {
    document.getElementById(problemas[0].id).focus();
    return;
  }

  // Tudo certo: confirmação simulada (nenhum dado é enviado)
  mensagemSucesso.textContent = "Mensagem validada com sucesso! (Confirmação simulada: nenhum dado foi enviado.)";
  form.reset();
});

// Quando o usuário volta a digitar, a mensagem de sucesso some
form.addEventListener("input", function () {
  mensagemSucesso.textContent = "";
});
