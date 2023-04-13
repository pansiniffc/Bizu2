import React from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import firebaseApp from '../firebase';
import classes from '../styles/AddQuestao.module.css';

const AddQuestao = () => {
  const [titulo, setTitulo] = React.useState('');
  const [resposta, setResposta] = React.useState('');
  const [opcoes, setOpcoes] = React.useState(['', '', '', '']);

  const db = getFirestore(firebaseApp);
  const perguntasCollectionRef = collection(db, 'perguntas');

  const handleChange = (event, index) => {
    const novoArray = [...opcoes];
    novoArray[index] = event.target.value;
    setOpcoes(novoArray);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const pergunta = await addDoc(perguntasCollectionRef, {
      titulo,
      resposta,
      opcoes,
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Titulo da questão"
        />
        Escreva quatro opções:
        <input
          type="text"
          value={opcoes[0]}
          onChange={(e) => handleChange(e, 0)}
        />
        <input
          type="text"
          value={opcoes[1]}
          onChange={(e) => handleChange(e, 1)}
        />
        <input
          type="text"
          value={opcoes[2]}
          onChange={(e) => handleChange(e, 2)}
        />
        <input
          type="text"
          value={opcoes[3]}
          onChange={(e) => handleChange(e, 3)}
        />
        <input
          placeholder="opção correta"
          type="text"
          value={resposta}
          onChange={(e) => setResposta(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default AddQuestao;
