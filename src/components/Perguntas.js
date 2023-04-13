import React from 'react';

const Perguntas = ({ titulo, opcoes, onChange, value, id }) => {
  return (
    <div>
      <h1>{titulo}</h1>
      {opcoes.map((opcao) => (
        <label key={opcao}>
          <input
            type="radio"
            id={id}
            checked={value === opcao}
            value={opcao}
            onChange={onChange}
          />
          {opcao}
        </label>
      ))}
    </div>
  );
};

export default Perguntas;
