import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import { auth } from '../../firebase';
import { updateProfile, createUserWithEmailAndPassword } from 'firebase/auth';
import { UserAuth } from '../../Contexts/AuthContext';
import styles from './LoginCreate.module.css';
import useForm from '../../Hooks/useForm';

const LoginCreate = () => {
  const email = useForm();
  const password = useForm();
  const displayName = useForm();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email.validate() && password.validate() && displayName.validate()) {
      const userCredencial = await createUserWithEmailAndPassword(
        auth,
        email.value,
        password.value,
      );
      const user = userCredencial.user;

      await updateProfile(user, {
        displayName: displayName.value,
      });
      navigate('/conta');
    }
  };

  return (
    <section className="container">
      <h1 className="title">Criar Conta</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nome do usuário"
          type="text"
          name="text"
          {...displayName}
        />
        <Input label="Email" type="email" name="username" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Criar</Button>
      </form>
    </section>
  );
};

export default LoginCreate;
