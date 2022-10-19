import React from 'react';

import {
  ButtonsView,
  ButtonsContainer,
  ActionButtonsContainer,
  JusticaTitulo,
} from './styled';

export default function Buttons({ ...rest }): JSX.Element {
  const handleClickButton = (e: any) => {
    console.log('entrou handleclickbtn, valor do e: ', e.target.value);
    rest.setBtnNumero({ value: e.target.value });
  };

  return (
    <ButtonsView>
      <JusticaTitulo>
        {/* <img src="" alt="imagem justiça eleitoral" /> */}
        <p>Justiça Eleitoral</p>
      </JusticaTitulo>
      <ButtonsContainer onClick={(e) => handleClickButton(e)}>
        <button value={1} type="button">
          1
        </button>
        <button value={2} type="button">
          2
        </button>
        <button value={3} type="button">
          3
        </button>
        <button value={4} type="button">
          4
        </button>
        <button value={5} type="button">
          5
        </button>
        <button value={6} type="button">
          6
        </button>
        <button value={7} type="button">
          7
        </button>
        <button value={8} type="button">
          8
        </button>
        <button value={9} type="button">
          9
        </button>
        <button className="zeroBtn" value={0} type="button">
          0
        </button>
      </ButtonsContainer>
      <ActionButtonsContainer onClick={(e) => handleClickButton(e)}>
        <button className="brancoBtn" value={'branco'} type="button">
          Branco
        </button>
        <button className="corrigeBtn" value={'corrige'} type="button">
          Corrige
        </button>
        <button className="confirmaBtn" value={'confirma'} type="button">
          Confirma
        </button>
      </ActionButtonsContainer>
    </ButtonsView>
  );
}
