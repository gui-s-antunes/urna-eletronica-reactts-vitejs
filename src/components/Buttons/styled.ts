import styled from 'styled-components';

export const ButtonsView = styled.div`
  /* display: flex;
  flex-direction: column; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #736f6e;
  padding: 20px;
`;

export const JusticaTitulo = styled.div`
  p {
    text-align: center;
    color: white;
    font-size: 25px;
  }
`;

export const ButtonsContainer = styled.div`
  display: grid;

  grid-template-rows: repeat(4, 40px);
  grid-template-columns: repeat(3, 60px);
  grid-gap: 10px;

  .zeroBtn{
    grid-row: 4 / -1;
    grid-column: 2 / 3;
  }

  button {
    background-color: black;
    color: white;
    font-size: 25px;
    padding: 2px;
    border-radius: 5px;
    border-bottom: 3px solid gray;
  }

  button:active {
    border-bottom: 0;
  }
`;

export const ActionButtonsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;

  button {
    font-size: 20px;
    border-radius: 5px;
    padding: 5px 5px;
  }

  .brancoBtn {
    background-color: white;

    border: 1px solid gray;
    border-bottom: 3px solid gray;
  }

  .brancoBtn:active {
    border-bottom: 1px solid gray;
  }

  .corrigeBtn {
    background-color: #e55b3c;

    border: 1px solid #f88158;
    border-bottom: 3px solid #f88158;
  }

  .corrigeBtn:active {
    border-bottom: 1px solid #f88158;
  }

  .confirmaBtn {
    background-color: #5efb6e;

    border: 1px solid #77dd77;
    border-bottom: 3px solid #77dd77;
  }

  .confirmaBtn:active {
    border-bottom: 1px solid #77dd77;
  }
`;
