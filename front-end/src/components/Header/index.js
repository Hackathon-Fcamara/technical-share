// STYLES
import styles from "./styles.module.css";

// IMAGES
import logo from "../../assets/images/placeholder-logo.svg";

const {
  header,
  header__container,
  header__wrapper,
  hamburguer,
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
          <a href="/mentor">
            <input type="submit" value="Seja um mentor"/>
          </a>
          <button type="button" className={hamburguer}>
            <span className={hamburguer__pipe}></span>
            <span className={hamburguer__pipe}></span>
            <span className={hamburguer__pipe}></span>
          </button>
        </div>
      </div>
    </header>
  );
};
