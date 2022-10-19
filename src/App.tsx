import { useEffect, useState } from 'react';

import isNumeric from './utils/isNumeric';
import { UrnaContainer } from './style';

import Buttons from './components/Buttons';
import Screen from './components/Screen';

import cargos from './extra/cargos.json';
import legendas from './extra/legendas.json';

import getAllCandidatos from './utils/getAllCandidatos';
import getCandidato from './utils/getCandidato';
import getLegenda from './utils/getLegenda';

import { btnAction } from './utils/btnAction';

import { BtnNumero, SpecialBtn } from './interfaces/buttons-interface';
import { EleitorNumeros } from './interfaces/eleitor-numeros-interface';
import {
  CargoPolitico,
  CargosList,
} from './interfaces/cargos-politicos-interface';
import {
  Candidato,
  CandidatosPorCargo as Candidatos,
} from './interfaces/candidatos-interface';

function App() {
  const candidatos = getAllCandidatos();

  const [cargosPolicos, setCargosPoliticos] = useState<CargosList>([]);
  const [cargoVotar, setCargoVotar] = useState<CargoPolitico>();

  const [btnNumero, setBtnNumero] = useState<BtnNumero>({ value: '' });
  const [eleitorNumeros, setEleitorNumeros] = useState<EleitorNumeros>([]);

  const [primeiroConfirma, setPrimeiroConfirma] = useState(false);

  const [opcaoCargoTexto, setOpcaoCargoTexto] = useState('');

  const [fimMsg, setFimMsg] = useState(false);

  // set political offices
  useEffect(() => {
    let newCargosPoliticos: CargosList = [];
    cargos.map((cargo) => newCargosPoliticos.push(cargo));
    setCargosPoliticos(newCargosPoliticos);
  }, []);

  // set Next political office to vote
  useEffect(() => {
    setCargoVotar(cargosPolicos[0]);
  }, [cargosPolicos]);

  // add new pressed numbers to an array or action to special buttons
  useEffect(() => {
    console.log(`btn number is '${btnNumero.value}'`);
    if (!cargoVotar) return;

    if (
      isNumeric(btnNumero.value) &&
      eleitorNumeros.length < cargoVotar?.numDigitos
    ) {
      console.log('enter isnumber');
      if (primeiroConfirma) return;
      const newEleitorNumeros = [...eleitorNumeros];
      newEleitorNumeros.push(Number(btnNumero.value));
      setEleitorNumeros(newEleitorNumeros);
      return;
    }

    if (btnAction[btnNumero.value as SpecialBtn]) {
      actionBtn(btnNumero.value as SpecialBtn);
    }
  }, [btnNumero]);

  // check if user pressed all needed numbers
  useEffect(() => {
    if (eleitorNumeros.length !== cargoVotar?.numDigitos) return;
    setPrimeiroConfirma(true);
    const candidatoValido = isCandidatoValid();

    if (candidatoValido) {
      setOpcaoCargoTexto(`Candidato válido: ${candidatoValido.nome}`);
      return;
    }

    if (cargoVotar && cargoVotar.legenda) {
      console.log('legenda effect');
      const candidatoLegenda = getLegenda(
        legendas,
        cargoVotar.legenda,
        eleitorNumeros,
      );
      if (candidatoLegenda) {
        setOpcaoCargoTexto(`Legenda válida: ${candidatoLegenda.nome}`);
        return;
      }
    }

    setOpcaoCargoTexto('Voto nulo');
  }, [eleitorNumeros]);

  // actions to special buttons
  const actionBtn = (option: SpecialBtn) => {
    if (option === 'confirma') actionToConfirmaButton();

    if (option === 'corrige') actionToCorrigeButton();

    if (option === 'branco') actionToBrancoButton();
  };

  // move array to next political office
  const goToNextCandidato = () => {
    const newCargosPoliticos = [...cargosPolicos];
    newCargosPoliticos.shift();
    if (newCargosPoliticos.length === 0) setFimMsg(true);
    setCargosPoliticos(newCargosPoliticos);
  };

  // reset pressed numbers, special buttons and special texts
  const resetVotacaoDados = () => {
    const clearEleitorNumeros = [...eleitorNumeros];
    clearEleitorNumeros.splice(0, clearEleitorNumeros.length);
    setEleitorNumeros(clearEleitorNumeros);

    setPrimeiroConfirma(false);

    setOpcaoCargoTexto('');
  };

  // action to special button 'branco'
  const actionToBrancoButton = () => {
    if (eleitorNumeros.length) {
      setOpcaoCargoTexto(
        'Aperte Corrige para apagar os números e então o botão Branco',
      );
      return;
    }
    setPrimeiroConfirma(true);
    setOpcaoCargoTexto('Voto em Branco');
  };

  // actions to special button 'corrige'
  const actionToCorrigeButton = () => {
    resetVotacaoDados();
  };

  // action to special button 'confirma'
  const actionToConfirmaButton = () => {
    if (primeiroConfirma) {
      console.log('Próximo candidato');
      goToNextCandidato();
      resetVotacaoDados();
      return;
    }

    if (cargoVotar?.legenda) {
      if (eleitorNumeros.length < cargoVotar.legenda) return;
      setPrimeiroConfirma(true);

      if (eleitorNumeros.length === cargoVotar.numDigitos) {
        const candidatoValido = isCandidatoValid();
        if (candidatoValido) {
          setOpcaoCargoTexto(`Candidato válido: ${candidatoValido.nome}`);
          return;
        }
      }

      const eleitorLegenda = getLegenda(
        legendas,
        cargoVotar.legenda,
        eleitorNumeros,
      );
      if (eleitorLegenda) {
        setOpcaoCargoTexto(`Legenda válida: ${eleitorLegenda.nome}`);
        return;
      }

      setOpcaoCargoTexto(`Voto nulo`);
      return;
    }

    if (cargoVotar && eleitorNumeros.length < cargoVotar.numDigitos) return;

    setPrimeiroConfirma(true);
    const candidatoValido = isCandidatoValid();

    if (candidatoValido) {
      setOpcaoCargoTexto(`Candidato válido: ${candidatoValido.nome}`);
      return;
    }

    setOpcaoCargoTexto(`Voto nulo`);
    return;
  };

  // get candidate or undefined
  const isCandidatoValid = (): Candidato | undefined => {
    return getCandidato(
      candidatos[cargoVotar?.nome as keyof Candidatos],
      eleitorNumeros,
    );
  };

  return (
    <UrnaContainer>
      <Screen
        cargo={cargoVotar ? cargoVotar.nome : ''}
        digitos={cargoVotar ? cargoVotar.numDigitos : 0}
        digitosPos={eleitorNumeros.length}
        numerosDigitados={eleitorNumeros}
        opcaoCargoTexto={opcaoCargoTexto}
        fimMsg={fimMsg}
      />
      <Buttons btnNumero={btnNumero} setBtnNumero={setBtnNumero} />
    </UrnaContainer>
  );
}

export default App;
