import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';

const LoginCreate = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  function handleSignIn(event) {
    event.preventDefault();
    createUserWithEmailAndPassword(email, password);
  }

  if (loading) return <p>Loading...</p>;
  return (
    <section>
      <h1>Criar Conta</h1>
      <form action="" onSubmit={handleSignIn}>
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
