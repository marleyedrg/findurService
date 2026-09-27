const formulario = document.querySelector("#form-cadastro");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const profissional = {
    id: Date.now(),
    nome: document.querySelector("#nome").value.trim(),
    profissao: document.querySelector("#profissao").value.trim(),
    categoria: document.querySelector("#categoria").value,
    localizacao: document.querySelector("#estado").value,
    descricao: document.querySelector("#descricao").value.trim(),
    whatsapp:
      "55" + document.querySelector("#whatsapp").value.replace(/\D/g, ""),
    avaliacao: 0,
    numeroAvaliacoes: 0,
  };

  const profissionais = JSON.parse(localStorage.getItem("profissionais")) || [];

  profissionais.push(profissional);

  localStorage.setItem("profissionais", JSON.stringify(profissionais));

  window.location.href = "../index.html";
});
