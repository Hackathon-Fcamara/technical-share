import styles from "./styles.module.css";

const {
  signUpForm__container,
  signUpForm__nameWrapper,
  signUpForm__label,
  signUpForm__input,
  signUpForm__labelText,
} = styles;

export const SignUpForm = () => {
  return (
    <form className="signUpForm">
      <div className={signUpForm__container}>
        <div className={signUpForm__nameWrapper}>
          <label htmlFor="firstName" className={signUpForm__label}>
            <span className={signUpForm__labelText}>Nome</span>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className={signUpForm__input}
            />
          </label>
          <label htmlFor="lastName" className={signUpForm__label}>
            <span className={signUpForm__labelText}>Sobrenome</span>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className={signUpForm__input}
            />
          </label>
        </div>
        <label htmlFor="email" className={signUpForm__label}>
          <span className={signUpForm__labelText}>E-mail</span>
          <input
            type="email"
            name="email"
            id="email"
            className="signUpForm__input"
          />
        </label>
        <label htmlFor="password" className={signUpForm__label}>
          <span className={signUpForm__labelText}>Senha</span>
          <input
            type="password"
            name="password"
            id="password"
            className="signUpForm__input"
          />
        </label>
        <label htmlFor="password" className={signUpForm__label}>
          <span className={signUpForm__labelText}>Confirmar senha*</span>
          <input
            type="password"
            name="password"
            id="password"
            className="signUpForm__input"
          />
        </label>
        <p>Informações do perfil</p>
        <label htmlFor="role" className={signUpForm__label}>
          <span className={signUpForm__labelText}>Cargo</span>
          <select id="role" className="signUpForm__select">
            <option value="default">Default</option>
          </select>
        </label>
        <label htmlFor="level" className={signUpForm__label}>
          <span className={signUpForm__labelText}>Nível</span>
          <select id="level" className="signUpForm__select">
            <option value="default">Default</option>
          </select>
        </label>
        <p>
          Cite pelo menos uma habilidade que você se sente confortável em
          mentorar
        </p>
        <label htmlFor="skill" className={signUpForm__label}>
          <span className={signUpForm__labelText}>Habilidade</span>
          <select id="skill" className="signUpForm__select">
            <option value="default">Default</option>
          </select>
        </label>
        <label htmlFor="about" className={signUpForm__label}>
          <span className={signUpForm__labelText}>Sobre</span>
          <textarea
            name="about"
            id="about"
            cols="30"
            rows="10"
            className="signUpForm__about"
          ></textarea>
        </label>
        <label htmlFor="linkedin" className={signUpForm__label}>
          <span className={signUpForm__labelText}></span>
          <input
            type="text"
            name="linkedin"
            id="linkedin"
            className="signUpForm__input"
          />
        </label>
        <label htmlFor="portfolio" className={signUpForm__label}>
          <span className={signUpForm__labelText}></span>
          <input
            type="text"
            name="portfolio"
            id="portfolio"
            className="signUpForm__input"
          />
        </label>
        <label htmlFor="social" className={signUpForm__label}>
          <span className={signUpForm__labelText}></span>
          <input
            type="text"
            name="social"
            id="social"
            className="signUpForm__input"
          />
        </label>
        <button type="submit" className="signUpForm__submitBtn">
          Cadastrar
        </button>
      </div>
    </form>
  );
};
