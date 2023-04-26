import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import { auth } from '../../firebase';
import { updateProfile, createUserWithEmailAndPassword } from 'firebase/auth';
import { UserAuth } from '../../Contexts/AuthContext';
import styles from './LoginCreate.module.css';

const LoginCreate = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [displayName, setdisplayName] = React.useState('');
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userCredencial = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredencial.user;

    await updateProfile(user, {
      displayName: displayName,
    });
    navigate('/conta');
  };

  return (
    <section>
      <h1 className="title">Criar Conta</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input
          label="Nome do usuário"
          type="text"
          name="displayname"
          onChange={(event) => setdisplayName(event.target.value)}
        />
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
