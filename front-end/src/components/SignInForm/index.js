import React, { useState } from "react";
import styles from "./styles.module.css";
import { FormInput } from "../FormInput";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

const {
  signInForm,
  signInForm__container,
  signInForm__form,
  signInForm__containerButton,
  signInForm__checkLabel,
  signInForm__checkbox,
  signInForm__labelText,
} = styles;

export function SignInForm() {
  const [login, setLogin] = useState();
  const [senha, setSenha] = useState();

  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();

    const data = {
      usuario: login,
      senha: senha,
    };

    const response = await api.post("usuarios/logar", data);

    localStorage.setItem(
      "tokens",
      JSON.stringify(`Basic ${response.data.token}`)
    );

    if (response.status === 200) {
      console.log(response.data);
      navigate("/mentorPage");
    }
  }

  return (
    <div className={signInForm}>
      <div className={signInForm__container}>
        <p className={"globalRegister__message"}>
          Já tem cadastro em nossa plataforma?
        </p>
        <h2 className={"globalRegister__title"}>Faça seu login!</h2>
        <form onSubmit={submit} className={signInForm__form}>
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
          <label className={signInForm__checkLabel} htmlFor="signInCheckbox">
            <input
              className={signInForm__checkbox}
              type="checkbox"
              name="checkbox"
              id="signInCheckbox"
            />
            <span className={signInForm__labelText}>Lembrar minha senha</span>
          </label>
          <button
            type="submit"
            className={`${signInForm__containerButton} globalBtn globalBtn--primary`}
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
