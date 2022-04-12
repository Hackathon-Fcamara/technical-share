import styles from "./styles.module.css";

const { contactForm__container } = styles;

export const ContactForm = () => {
  return (
    <form action="" className="contactForm">
      <div className={contactForm__container}>
        <label htmlFor="name" className="globalForm__label">
          <span className="globalForm__labelText">Nome</span>
          <input type="text" id="name" className="globalForm__input" />
        </label>
        <label htmlFor="lastName" className="globalForm__label">
          <span className="globalForm__labelText">Sobrenome</span>
          <input type="text" id="lastName" className="globalForm__input" />
        </label>
        <label htmlFor="email" className="globalForm__label">
          <span className="globalForm__labelText">E-mail</span>
          <input type="text" id="email" className="globalForm__input" />
        </label>
        <label htmlFor="role" className="globalForm__label">
          <span className="globalForm__labelText">Cargo</span>
          <select name="role" id="role" className="contactForm__select">
            <option value="default" className="contactForm__option">
              Default
            </option>
          </select>
        </label>
        <label htmlFor="level" className="globalForm__label">
          <span className="globalForm__labelText">Nível</span>
          <select name="level" id="level" className="contactForm__select">
            <option value="default" className="contactForm__option">
              Default
            </option>
          </select>
        </label>
        <label htmlFor="skill" className="globalForm__label">
          <span className="globalForm__labelText">
            Habilidade que gostaria de saber mais na mentoria:
          </span>
          <select name="skill" id="skill" className="contactForm__select">
            <option value="skill" className="contactForm__option">
              Default
            </option>
          </select>
        </label>
        <label htmlFor="start" className="globalForm__label">
          <span className="globalForm__labelText">
            Horários do mentor disponíveis:
          </span>
          <div className="contactForm__wrapper">
            <select name="start" id="start" className="contactForm__select">
              <option value="start" className="contactForm__option">
                Default
              </option>
            </select>
            <select name="end" id="end" className="contactForm__select">
              <option value="end" className="contactForm__option">
                Default
              </option>
            </select>
          </div>
        </label>
        <label htmlFor="about" className="globalForm__label">
          <span className="globalForm__labelText">
            Fale mais um pouco sobre a mentoria que você quer:
          </span>
          <textarea
            name="about"
            id="about"
            cols="30"
            rows="10"
            className="contactForm__description"
          ></textarea>
        </label>
        <button>Agendar mentoria!</button>
      </div>
    </form>
  );
};
