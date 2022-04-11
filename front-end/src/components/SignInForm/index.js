import React from "react";
import styles from "./styles.module.css";

const {
  signInForm,
  signInForm__container,
  signInForm__containerTitle,
  signInForm__containerInput,
  signInForm__containerButton,
} = styles;

export function SignInForm() {
  return (
    <div className={signInForm}>
      <div className={signInForm__container}>
        <h1 className={signInForm__containerTitle}>Já é cadastrado?</h1>
        <div className={signInForm__containerInput}>
          <label htmlFor="email">
            <span>E-mail</span>
            <input type="email" name="email" id="signInEmail" />
          </label>
          <label htmlFor="password">
          <span>Senha</span>
            <input type="password" name="password" id="signInPassword" />
          </label>
        </div>
        <button type="button" className={signInForm__containerButton}>
          Logar
        </button>
      </div>
    </div>
  );
}
