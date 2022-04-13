import styles from "./styles.module.css";
import { FormInput } from "../FormInput";
import { FormSelect } from "../FormSelect";
import { FormTextarea } from "../FormTextarea";

const {
  signUp,
  signUp__container,
  signUpForm,
  signUpForm__wrapper,
  signUpForm__textDivider,
  signUpForm__textNote,
  signUpForm__btn,
} = styles;

export const SignUp = () => {
  return (
    <section className={signUp}>
      <div className={signUp__container}>
        <h2 className="globalRegister__title">Cadastre-se agora</h2>
        <p className="globalRegister__message">
          E conheça o melhor caminho para o seu desenvolvimento profissional
        </p>
        <form className={signUpForm}>
          <div className={signUpForm__wrapper}>
            <FormInput labelText="Nome*" inputType="text" idVal="firstName" />
            <FormInput
              labelText="Sobrenome*"
              inputType="text"
              idVal="lastName"
            />
          </div>
          <FormInput labelText="E-mail*" inputType="email" idVal="email" />
          <FormInput labelText="Senha*" inputType="password" idVal="password" />
          <FormInput
            labelText="Confirmar senha*"
            inputType="password"
            idVal="password"
          />
          <p className={signUpForm__textDivider}>Informações do perfil</p>
          <div className={signUpForm__wrapper}>
            <FormSelect labelText="Cargo" idVal="role" optList={[]} />
            <FormSelect labelText="Nível" idVal="level" optList={[]} />
          </div>
          <FormSelect labelText="Habilidade" idVal="skill" optList={[]} />
          <p className={signUpForm__textNote}>
            Cite pelo menos uma habilidade que você se sente confortável em
            mentorar.
          </p>
          <FormTextarea labelText="Sobre" idVal="about" optList={[]} />
          <FormInput labelText="LinkedIn" inputType="text" idVal="linkedin" />
          <FormInput labelText="Portfolio" inputType="text" idVal="portfolio" />
          <FormInput labelText="Rede Social" inputType="text" idVal="social" />
          <button
            type="submit"
            className={`${signUpForm__btn} globalBtn globalBtn--primary`}
          >
            Cadastrar
          </button>
        </form>
      </div>
    </section>
  );
};
