const padraoNome = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;
const padraoEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;

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
      if (!padraoNome.test(valor))
        return "Email inválido. Use o formato seunome@email.com.";
      return "";
    }
  },
  {
    id: "assunto",
    rotulo: "Assunto",
    validar(valor) {
      if (valor === "") return "Preencha o assunto.";
      if (valor.length < 10) return "O assunto deve ter pelo menos 10 caracteres.";
      return "";
    }
  }
];

const form = document.getElementById("form-contato");
const resumo = document.getElementById("resumo-erros");
const mensagemSucesso = document.getElementById("mensagem-sucesso");

function validarCampo(campo) {
  const elemento = document.getElementById(campo.id);
  const erro = campo.validar(elemento.value.trim());
  document.getElementById("erro-" + campo.id).textContent = erro;
  elemento.classList.toggle("invalido", erro !== "");
  return erro;
}

campos.forEach(campo => {
  document.getElementById(campo.id).addEventListener("blur", () => validarCampo(campo));
});

form.addEventListener("submit", function (evento) {
  evento.preventDefault();
  mensagemSucesso.textContent = "";

  const problemas = [];
  campos.forEach(campo => {
    const erro = validarCampo(campo);
    if (erro !== "") problemas.push({ id: campo.id, rotulo: campo.rotulo, erro });
  });

  mostrarResumo(problemas);

  if (problemas.length > 0) {
    document.getElementById(problemas[0].id).focus();
    return;
  }

  mensagemSucesso.textContent = "Mensagem validada com sucesso!";
  form.reset();
});