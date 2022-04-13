// STYLES
import styles from "./styles.module.css";

// IMAGES
import logo from "../../assets/images/placeholder-logo.svg";

const {
  header,
  header__container,
  header__wrapper,
  header__wrapperButton,
  hamburguer,
  hamburguer__wrapper,
  hamburguer__pipe,
} = styles;

export const Header = () => {
  return (
    <header className={header}>
      <div className={header__container}>
        <a href="/">
          <img src={logo} alt="Logo da Technical Share" />
        </a>
        <div className={header__wrapper}>
          <a href="/mentorPage">
            <input
              type="submit"
              value="Seja um mentor"
              className={header__wrapperButton}
            />
          </a>{" "}
        </div>
        <div className={hamburguer__wrapper}>
          <button type="button" className={hamburguer}>
            <span className={hamburguer__pipe}></span>
            <span className={hamburguer__pipe}></span>
            <span className={hamburguer__pipe}></span>
          </button>{" "}
        </div>
      </div>
    </header>
  );
};
