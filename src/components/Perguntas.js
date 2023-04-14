import React from 'react';

const Perguntas = ({ active, titulo, opcoes, onChange, value, id }) => {
  if (active === false) return null;
  return (
    <div>
      <p>{titulo}</p>
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
