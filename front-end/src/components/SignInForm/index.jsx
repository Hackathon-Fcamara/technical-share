import React from "react";
import styles from "./styles.module.css";

const { 
  signInForm, 
  signInForm__container,
  signInForm__containerTitle,
  signInForm__containerButton
} = styles;

export function SignInFom() {
  return(
    <div className={signInForm}>
      <div className={signInForm__container}>
        <h1 className={signInForm__containerTitle}>Já é cadastrado?</h1>
        <label>
          <input type="email" />
        </label>
        <label>
          <input type="password" />
        </label>
        <button type="button" className={signInForm__containerButton}>Logar</button>
      </div>
    </div>
  )
}