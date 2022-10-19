import React, { useEffect, useState, ReactNode } from 'react';
import { useRef } from 'react';

// import PropTypes from 'prop-types';

import { ScreenContainer, DigitosContainer, TextoResposta } from './styled';

import { Candidato } from '../../utils/getCandidato';

export type QuadradosType = number[];

interface Props {
  cargo: string;
  digitos: number;
  digitosPos: number;
  numerosDigitados: number[];
  opcaoCargoTexto: string;
  fimMsg: boolean;
}

export default function Screen({
  cargo,
  digitos,
  digitosPos,
  numerosDigitados,
  opcaoCargoTexto,
  fimMsg,
}: Props): JSX.Element {
  const [quadrados, setQuadrados] = useState<QuadradosType>([]);

  useEffect(() => {
    console.log('numero de digitos: ', digitos);
    console.log('numero de cargo: ', cargo);
    const newQuadrados = [];
    for (let pos = 0; pos < digitos; pos++) {
      newQuadrados.push(numerosDigitados[pos]);
    }
    console.log('newQuadrados: ', newQuadrados);
    setQuadrados(newQuadrados);
    console.log('digito pos: ', digitosPos);
  }, [numerosDigitados, cargo, digitosPos]);

  useEffect(() => {
    console.log('fimMsg está: ', fimMsg);
  }, [fimMsg]);

  return (
    <ScreenContainer>
      {!fimMsg ? (
        <div>
          <p>{cargo}</p>
          <DigitosContainer>
            {quadrados
              ? quadrados.map((quadrado, index) => (
                  <div
                    className={index === digitosPos ? 'digitoAtual' : 'f'}
                    key={index}
                  >
                    {quadrado ?? ''}
                  </div>
                ))
              : null}
          </DigitosContainer>
          <TextoResposta>{opcaoCargoTexto}</TextoResposta>
        </div>
      ) : (
        <p className="fim">Fim</p>
      )}
    </ScreenContainer>
  );
}

// Screen.propTypes = {
//   cargo: PropTypes.string.isRequired,
//   digitos: PropTypes.string.isRequired,
//   digitoPos: PropTypes.string.isRequired,
// };
