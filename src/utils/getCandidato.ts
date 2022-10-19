import {
  Candidato,
  CandidatosValidos,
} from './../interfaces/candidatos-interface';

// export type Candidato = {
//   nome: string;
//   numero: number;
// };

// type CandidatosValidos = Candidato[];

export default function getCandidato(
  candidatos: CandidatosValidos,
  eleitorNumeros: number[],
): Candidato | undefined {
  const candidatoEleitor = Number(eleitorNumeros.join(''));
  return candidatos.filter(
    (candidato) => candidato.numero == candidatoEleitor,
  )[0];
}
