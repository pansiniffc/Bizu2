import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import styles from './LoginForm.module.css';
import stylesBtn from '../Forms/Button.module.css';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const LoginForm = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  function handleSignIn(event) {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  }

  return (
    <section>
      <h1>Login</h1>
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
