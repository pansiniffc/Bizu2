import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import { UserAuth } from '../../Contexts/AuthContext';

const LoginCreate = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/conta');
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };

  return (
    <section>
      <h1>Criar Conta</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input
          label="Usuário"
          type="text"
          name="username"
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          label="Senha"
          type="password"
          name="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button>Criar</Button>
      </form>
    </section>
  );
};

export default LoginCreate;
