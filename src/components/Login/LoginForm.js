import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import styles from './LoginForm.module.css';
import stylesBtn from '../Forms/Button.module.css';
import { UserAuth } from '../../Contexts/AuthContext';
import useForm from '../../Hooks/useForm';

const LoginForm = () => {
  const email = useForm();
  const password = useForm();
  const { userLogin, loading, error } = UserAuth();

  const handleSignIn = async (event) => {
    event.preventDefault();

    if (email.validate() && password.validate()) {
      userLogin(email.value, password.value);
    }
  };

  return (
<<<<<<< Updated upstream
    <section className="container">
      <form onSubmit={handleSignIn}>
        <h1 className={styles.subtitle}>Login</h1>
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
=======
    <section className={`${styles.login} container`}>
      <form onSubmit={handleSignIn}>
        <h1 className="title">Login</h1>

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
>>>>>>> Stashed changes
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        {error && <p>{error}</p>}
      </form>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={stylesBtn.button} to="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
