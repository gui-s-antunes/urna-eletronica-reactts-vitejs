import { Legenda } from '../interfaces/legenda-interface';

export default function getLegenda(
  legendas: Legenda[],
  numeroLegenda: number,
  eleitorNumeros: number[],
): Legenda | undefined {
  const legendaEleitor = Number(
    eleitorNumeros.slice(0, numeroLegenda).join(''),
  );
  return legendas.filter((legenda) => legenda.numero === legendaEleitor)[0];
}
