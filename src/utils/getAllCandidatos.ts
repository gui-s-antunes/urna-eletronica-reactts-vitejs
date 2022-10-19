import candidatos_dep_federal from './../extra/candidatos-dep-federal.json';
import candidatos_dep_estadual from './../extra/candidatos-dep-estadual.json';
import candidatos_governador from './../extra/candidatos-governador.json';
import candidatos_presidente from './../extra/candidatos-presidente.json';

import {
  Candidato,
  CandidatosPorCargo as Candidatos,
} from './../interfaces/candidatos-interface';

// type Candidatos = {
//   nome: string;
//   numero: number;
// }[];
// export interface Candidato {
//   nome: string;
//   numero: number;
// }

// export interface Candidatos {
//   'deputado federal': Candidato[];
//   'deputado estadual': Candidato[];
//   governador: Candidato[];
//   presidente: Candidato[];
// }

export default function getAllCandidatos(): Candidatos {
  // colocar em um array cada array
  // const candidatos = [];
  // candidatos.push({ deputado_federal: candidatos_dep_federal });
  // candidatos.push({ deputado_estadual: candidatos_dep_estadual });
  // candidatos.push({ governador: candidatos_governador });
  // candidatos.push({ presidente: candidatos_presidente });
  const candidatos: Candidatos = {
    'deputado federal': candidatos_dep_federal,
    'deputado estadual': candidatos_dep_estadual,
    governador: candidatos_governador,
    presidente: candidatos_presidente,
  };
  return candidatos;
}
