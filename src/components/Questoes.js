import React from 'react';
import { getDocs, getFirestore, collection } from 'firebase/firestore';
import firebaseApp from '../firebase';
import Perguntas from './Perguntas';

const Questoes = () => {
  const [perguntas, setPerguntas] = React.useState('');
  const [respostas, setRespostas] = React.useState('');
  const [resultado, setResultado] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setloading] = React.useState(null);
  const [slide, setSlide] = React.useState(0);

  //Concetando com o Firebase
  const db = getFirestore(firebaseApp);
  const perguntasCollectionRef = collection(db, 'perguntas');

  //Carregando as perguntas do Firebase
  React.useEffect(() => {
    const getPerguntas = async () => {
      try {
        setError(null);
        setloading(true);
        const data = await getDocs(perguntasCollectionRef);
        setPerguntas(
          data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          })),
        );
      } catch (erro) {
        setError('erro');
      } finally {
        setloading(false);
      }
    };
    getPerguntas();
  }, []);

  //Setando respostas com o id da alternativa selecionada
  function handleChange({ target }) {
    setRespostas({ ...respostas, [target.id]: target.value });
  }

  //Calculando o resultado final
  function resultadoFinal() {
    const corretas = perguntas.filter(
      ({ id, resposta }) => respostas[id] === resposta,
      console.log(respostas),
    );
    setResultado(`Você acertou: ${corretas.length} de ${perguntas.length}`);
  }

  //Slide para aparecer uma questão por vez
  function handleClick() {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      resultadoFinal();
    }
  }

  if (error) return <p>{error}</p>;
  if (loading) return <p>Carregando</p>;
  if (perguntas)
    return (
      <form onSubmit={(e) => e.preventDefault()}>
        {perguntas.map((pergunta, index) => (
          <Perguntas
            active={slide === index}
            key={pergunta.id}
            value={respostas[pergunta.id]}
            onChange={handleChange}
            {...pergunta}
          />
        ))}
        {resultado ? (
          <p>{resultado}</p>
        ) : (
          <button onClick={handleClick}>Próxima</button>
        )}
      </form>
    );
};

export default Questoes;
