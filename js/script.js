import { carregarComponentes } from "./components.js";
import { carregarProfissionais } from "./profissionais.js";
import { preencherCards } from "./profissionais.js";

async function iniciar() {
  await carregarComponentes("body");

  const profissionais = await carregarProfissionais();

  await carregarComponentes(".lista-profissionais");

  preencherCards(profissionais);
}

iniciar();
