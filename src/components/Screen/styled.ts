import styled from 'styled-components';

export const ScreenContainer = styled.div`
  flex-grow: 2;
  background: #efefef;
  display: flex;
  justify-content: center;
  align-items: center;

  div p {
    text-align: center;
    font-size: 20px;
    text-transform: capitalize;
  }

  .fim {
    font-size: 50px;
    text-transform: uppercase;
  }
`;

export const DigitosContainer = styled.div`
  /* background: yellow; */
  display: flex;
  justify-content: center;
  gap: 10px;

  div {
    border: 1px solid black;
    /* padding: 5px 1px; */
    width: 30px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
  }

  div.digitoAtual {
    animation-name: digitoAnimation;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
  }

  @keyframes digitoAnimation {
    0% {
      border-color: transparent;
    }
    50%{
      border-color: black;
    }

    100% {
      border-color: transparent;
    }
  }
`;

export const TextoResposta = styled.div`
  font-size: 20px;
  min-height: 25px;
  text-align: center;
  margin-top: 15px;
  padding: 5px;
  border-top: 1px solid black;
`;
