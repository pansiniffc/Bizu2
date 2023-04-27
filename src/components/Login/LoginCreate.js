import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import Error from '../Helper/Error';
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
  const { createLogin, loading, error, userLogin } = UserAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email.validate() && password.validate() && displayName.validate()) {
      createLogin(email.value, password.value, displayName.value);
    }
  };

  return (
    <section className={`${styles.create} container`}>
      <form onSubmit={handleSubmit}>
        <h1 className="title">Criar Conta</h1>
        <Input
          label="Nome do usuário"
          type="text"
          name="text"
          {...displayName}
        />
        <Input label="Email" type="email" name="username" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginCreate;
