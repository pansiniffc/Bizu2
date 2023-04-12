import React from 'react';
import { getDocs, getFirestore, collection } from 'firebase/firestore';
import firebaseApp from '../firebase';

const Questoes = () => {
  const [perguntas, setPerguntas] = React.useState('');

  const db = getFirestore(firebaseApp);
  const perguntasCollectionRef = collection(db, 'perguntas');

  React.useEffect(() => {
    const getPerguntas = async () => {
      const data = await getDocs(perguntasCollectionRef);
      setPerguntas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPerguntas();
  }, []);
  console.log(perguntas);

  return (
    <form>
      {perguntas.map((pergunta) => (
        <div>
          <h1 key={pergunta}>{pergunta.titulo}</h1>
          {/* {pergunta.opcoes.keys(opcoes).map(opcao)} */}
        </div>
      ))}
    </form>
  );
};

export default Questoes;
