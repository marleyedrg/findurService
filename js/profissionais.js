export async function carregarProfissionais() {
  const listaProfissionais = document.querySelector(".lista-profissionais");

  if (!listaProfissionais) {
    return [];
  }

  const resposta = await fetch("./profissionaisPreset.json");
  const dados = await resposta.json();

  const profissionaisLocal =
    JSON.parse(localStorage.getItem("profissionais")) || [];

  const todosProfissionais = [...dados.profissionais, ...profissionaisLocal];

  todosProfissionais.forEach(() => {
    const card = document.createElement("div");

    card.setAttribute("data-component", "card-profissional");

    listaProfissionais.appendChild(card);
  });

  return todosProfissionais;
}

export function preencherCards(profissionais) {
  const cards = document.querySelectorAll(
    '[data-component="card-profissional"]',
  );

  cards.forEach((card, index) => {
    const profissional = profissionais[index];

    if (!profissional) {
      return;
    }

    const foto = card.querySelector(".profissional-foto");
    const nome = card.querySelector(".profissional-nome");
    const nota = card.querySelector(".profissional-nota");
    const quantidadeNota = card.querySelector(".quant-nota");
    const profissao = card.querySelector(".profissao");
    const localizacao = card.querySelector(".localizacao");
    const whatsapp = card.querySelector(".whatsapp");

    const imagemId = profissional.id % 100;

    foto.src = `https://randomuser.me/api/portraits/men/${imagemId}.jpg`;
    foto.alt = profissional.nome;

    nome.textContent = profissional.nome;

    nota.textContent = profissional.avaliacao ?? 0;

    quantidadeNota.textContent = `(${profissional.numeroAvaliacoes ?? 0} avaliações)`;

    profissao.textContent = profissional.profissao;

    localizacao.textContent =
      profissional.localizacao ??
      `${profissional.bairro}, ${profissional.cidade} - ${profissional.estado}`;

    whatsapp.href = `https://wa.me/${profissional.whatsapp}`;
  });

  cards.forEach((card, index) => {
    if (index >= 3) {
      card.style.display = "none";
    }
  });

  const botaoVerTodos = document.querySelector(".ver-todos");

  botaoVerTodos.addEventListener("click", (event) => {
    event.preventDefault();

    const mostrandoTodos = botaoVerTodos.textContent.includes("menos");

    if (mostrandoTodos) {
      cards.forEach((card, index) => {
        if (index >= 3) {
          card.style.display = "none";
        }
      });

      botaoVerTodos.textContent = "Ver todos →";
    } else {
      cards.forEach((card) => {
        card.style.display = "";
      });

      botaoVerTodos.textContent = "Ver menos ↑";
    }
  });
}
