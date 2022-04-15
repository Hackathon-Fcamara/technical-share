import React, { useState } from "react";
import styles from "./styles.module.css";
import { FormInput } from "../FormInput";
import { api } from "../../services/api";

const {
  signInForm,
  signInForm__container,
  signInForm__containerTitle,
  signInForm__containerInput,
  signInForm__containerButton,
  signInForm__Checkbox,
} = styles;

export function SignInForm() {
  const [login, setLogin] = useState();
  const [senha, setSenha] = useState();

  async function submit(e) {
    e.preventDefault();

    const data = {
      usuario: login,
      senha: senha,
    };

    console.log(data);

    const response = await api.post("usuarios/logar", data);

    if (response.status === 200) {
      console.log("Dados enviados");
      if (response.data.status === 1) {
        //... localstorage
      }
    } else {
      console.log("erro");
    }
  }

  return (
    <div className={signInForm}>
      <div className={signInForm__container}>
        <p>Já tem cadastro em nossa plataforma?</p>
        <h1 className={signInForm__containerTitle}>Faça seu login!</h1>
        <form onSubmit={submit}>
          <div className={signInForm__containerInput}>
            <FormInput
              labelText="E-mail*"
              inputType="email"
              idVal="email"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
            <FormInput
              labelText="Senha*"
              inputType="password"
              idVal="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          <div className={signInForm__Checkbox}>
            <label htmlFor="checkbox">
              <span>Lembrar minha senha</span>
              <input type="checkbox" name="checkbox" id="signInCheckbox" />
            </label>
          </div>
          <button type="submit" className={signInForm__containerButton}>
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
