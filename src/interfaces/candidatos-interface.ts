export type Candidato = {
  nome: string;
  numero: number;
};

export type CandidatosValidos = Candidato[];

export interface CandidatosPorCargo {
  'deputado federal': Candidato[];
  'deputado estadual': Candidato[];
  governador: Candidato[];
  presidente: Candidato[];
}
