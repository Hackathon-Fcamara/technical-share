import styles from "./styles.module.css";
import iconArrow from "../../assets/images/icon-arrow.svg";
const {
  contactForm,
  contactForm__container,
  contactForm__wrapper,
  contactForm__btn,
} = styles;

export const ContactForm = () => {
  return (
    <form action="" className={contactForm}>
      <div className={contactForm__container}>
        <label htmlFor="name" className="globalForm__label">
          <span className="globalForm__labelText">Nome*</span>
          <input type="text" id="name" className="globalForm__input" />
        </label>
        <label htmlFor="lastName" className="globalForm__label">
          <span className="globalForm__labelText">Sobrenome*</span>
          <input type="text" id="lastName" className="globalForm__input" />
        </label>
        <label htmlFor="email" className="globalForm__label">
          <span className="globalForm__labelText">E-mail*</span>
          <input type="text" id="email" className="globalForm__input" />
        </label>
        <label htmlFor="role" className="globalForm__label">
          <span className="globalForm__labelText">Cargo</span>
          <div className="globalForm__selectWrapper">
            <select name="role" id="role" className="globalForm__select">
              <option value="default" className="contactForm__option">
                Default
              </option>
            </select>
            <span className="globalForm__selectArrow">
              <svg
                width="18"
                height="10"
                viewBox="0 0 18 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 1L9 9.27586L1 0.999999"
                  stroke="black"
                  stroke-width="0.928783"
                />
              </svg>
            </span>
          </div>
        </label>
        <label htmlFor="level" className="globalForm__label">
          <span className="globalForm__labelText">Nível</span>
          <select name="level" id="level" className="globalForm__select">
            <option value="default" className="contactForm__option">
              Default
            </option>
          </select>
        </label>
        <label htmlFor="skill" className="globalForm__label">
          <span className="globalForm__labelText">
            Habilidade que gostaria de saber mais na mentoria:
          </span>
          <select name="skill" id="skill" className="globalForm__select">
            <option value="skill" className="contactForm__option">
              Default
            </option>
          </select>
        </label>
        <label htmlFor="start" className="globalForm__label">
          <span className="globalForm__labelText">
            Horários do mentor disponíveis:
          </span>
          <div className={contactForm__wrapper}>
            <select name="start" id="start" className="globalForm__select">
              <option value="start" className="contactForm__option">
                Default
              </option>
            </select>
            <span>às</span>
            <select name="end" id="end" className="globalForm__select">
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
            className="globalForm__message"
          ></textarea>
        </label>
        <button className={`globalBtn globalBtn--primary ${contactForm__btn}`}>
          Agendar mentoria!
        </button>
      </div>
    </form>
  );
};
