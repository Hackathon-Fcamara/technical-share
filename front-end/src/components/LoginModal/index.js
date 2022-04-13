import React from "react";
import styles from "./styles.css";

const {
  login,
  login__title,
  login__form,
  login__email,
  login__emailWrapper,
  login__emailInput,
  login__password,
  login__passwordWrapper,
  login__passwordInput,
  login__forgot,
  login__enter,
} = styles;

export function loginModal() {
  return (
    <section className={login}>
      <h2 className={login__title}>Login</h2>
      <form className={login__form} action="">
        <h3 className={login__email}>E-mail</h3>
        <div className={login__emailWrapper}>
          <input className={login__emailInput} type="text" />
        </div>
        <h3 className={login__password}>Senha</h3>
        <div className={login__passwordWrapper}>
          <input className={login__passwordInput} type="text" />
          <button className={login__forgot}>Esqueci minha senha</button>
        </div>
        <button className={login__enter}>Entrar</button>
      </form>
    </section>
  );
}
