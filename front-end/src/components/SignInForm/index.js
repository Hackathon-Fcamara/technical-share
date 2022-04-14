import React from "react";
import styles from "./styles.module.css";

const {
  signInForm,
  signInForm__container,
  signInForm__containerTitle,
  signInForm__containerInput,
  signInForm__containerButton,
  signInForm__input,
  signInForm__Checkbox
} = styles;

export function SignInForm() {
  return (
    <div className={signInForm}>
      <div className={signInForm__container}>
        <p>Já tem cadastro em nossa plataforma?</p>
        <h1 className={signInForm__containerTitle}>Faça seu login!</h1>
        <div className={signInForm__containerInput}>
          <label htmlFor="email">
            <span>E-mail</span>
            <input type="email" name="email" id="signInEmail" className={signInForm__input} />
          </label>
          <label htmlFor="password">
            <span>Senha</span>
            <input type="password" name="password" id="signInPassword" className={signInForm__input} />
          </label>
        </div>
        <div className={signInForm__Checkbox}>
          <label htmlFor="checkbox">
            <span>Lembrar minha senha</span>
            <input type="checkbox" name="checkbox" id="signInCheckbox" />
          </label>
        </div>
        <button type="button" className={signInForm__containerButton}>
          Entrar
        </button>
      </div>
    </div>
  );
}
