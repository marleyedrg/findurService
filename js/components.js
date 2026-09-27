export async function carregarComponentes(e) {
  const pagina = document.querySelector(e);

  if (!pagina) {
    return;
  }

  const componentes = pagina.querySelectorAll("[data-component]");

  for (const elemento of componentes) {
    const nome = elemento.dataset.component;

    try {
      const resposta = await fetch(`./components/${nome}.html`);

      if (!resposta.ok) {
        throw new Error(`Erro ao carregar ${nome}.html`);
      }

      const html = await resposta.text();

      elemento.innerHTML = html;
    } catch (erro) {
      console.error(`Erro no componente "${nome}":`, erro);
    }
  }
}
