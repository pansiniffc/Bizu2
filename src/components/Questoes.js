import React from 'react';
import { getDocs, getFirestore, collection } from 'firebase/firestore';
import firebaseApp from '../firebase';
import Perguntas from './Perguntas';

const Questoes = () => {
  const [perguntas, setPerguntas] = React.useState('');
  const [respostas, setRespostas] = React.useState('');

  const db = getFirestore(firebaseApp);
  const perguntasCollectionRef = collection(db, 'perguntas');

  //Carregando as perguntas do Firebase
  React.useEffect(() => {
    async function getPerguntas() {
      const data = await getDocs(perguntasCollectionRef);
      setPerguntas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getPerguntas();
  }, []);

  // Pegando os IDs das perguntas
  React.useEffect(() => {
    setRespostas(
      perguntas.reduce((acumulador, pergunta, index) => {
        acumulador[index] = pergunta.id;
        return acumulador;
      }, {}),
    );
  }, [perguntas]);

  // console.log(perguntas.map((pergunta) => pergunta.id));
  // console.log(respostas);

  function handleChange({ target }) {
    setRespostas({ ...respostas, [target.id]: target.value });
  }

  return (
    <form>
      {perguntas.map((pergunta, index) => (
        <Perguntas
          key={pergunta.id}
          value={respostas[pergunta.id]}
          onChange={handleChange}
          {...pergunta}
        />
      ))}
    </form>
  );
};

export default Questoes;
