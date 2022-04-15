import { useState } from "react";

// STYLES
import styles from "./styles.module.css";

// IMAGES
import logoLg from "../../assets/images/image-logo-horizontal.svg";

const {
  header,
  header__container,
  header__logoSm,
  header__logoLg,
  header__ctaBtn,
  header__menuWrapper,
  header__menu,
  header__menuList,
  header__menuLink,
  hamburguer,
  hamburguer__wrapper,
  hamburguer__pipe,
  hamburguer__menu,
  hamburguer__opt,
  hamburguer__optLink,
  hamburguer__optBtn,
} = styles;

export const Header = () => {
  const [showHamburguerOpts, setShowHamburguerOpts] = useState(false);
  return (
    <header className={header}>
      <div className={header__container}>
        <a href="/" className={header__logoSm}>
          <svg
            viewBox="0 0 30 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.436 14.4438L24.6934 15.3644C26.714 16.1888 27.6757 18.475 26.8423 20.4739C26.4256 21.4737 25.6399 22.2098 24.7046 22.5952C23.7714 22.9812 22.6873 23.0126 21.6774 22.6004L12.6743 18.9284C10.6557 18.1053 9.69271 15.8152 10.5254 13.8189C10.9421 12.8191 11.7279 12.083 12.6631 11.6976C13.5983 11.3129 14.6804 11.2802 15.6903 11.6924L18.5119 12.8433C19.4174 11.6224 18.914 9.98855 18.914 9.98855L16.7817 9.11897C15.0527 8.41362 13.1975 8.46793 11.5982 9.12617C9.99828 9.78702 8.65232 11.0485 7.93932 12.7589C6.51465 16.1777 8.16155 20.0937 11.6194 21.5044L20.6449 25.1863C22.3738 25.8916 24.2271 25.8366 25.8284 25.1791C27.4276 24.5208 28.7736 23.2593 29.4866 21.5483C30.9126 18.1269 29.2657 14.2108 25.8072 12.8008L23.2158 11.7428C23.2158 11.7428 23.2185 13.0723 22.436 14.4438Z"
              fill="url(#paint0_linear_461_4619)"
            />
            <path
              d="M12.2261 16.8417L13.2182 17.2468C14.9471 17.9521 16.8003 17.8971 18.4016 17.2396C20.0009 16.5813 21.3468 15.3198 22.0598 13.6088C23.4858 10.1874 21.8389 6.27133 18.3804 4.86128L9.35489 1.18013C7.62598 0.474777 5.77074 0.529084 4.17146 1.18732C2.57152 1.84818 1.22556 3.10969 0.512563 4.82006C-0.912104 8.23884 0.734796 12.1549 4.19262 13.5656L6.10342 14.3449L6.79591 14.6275C6.78996 13.1841 7.6068 11.9527 7.6068 11.9527L6.82766 11.6347L5.2469 10.9902C3.22829 10.1671 2.26529 7.87701 3.098 5.8807C3.51468 4.88091 4.30043 4.14481 5.23566 3.75942C6.17089 3.37469 7.25295 3.34197 8.26291 3.75419L17.266 7.42619C19.2866 8.25062 20.2482 10.5368 19.4149 12.5357C18.9982 13.5355 18.2124 14.2716 17.2772 14.657C16.344 15.043 15.2599 15.0744 14.25 14.6622L12.2816 13.8594L11.5322 13.5918C11.5322 13.5918 10.472 15.1634 11.23 16.4361L12.2261 16.8417Z"
              fill="url(#paint1_linear_461_4619)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_461_4619"
                x1="7.53864"
                y1="17.7083"
                x2="29.8825"
                y2="16.5707"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#ED7347" />
                <stop offset="0.3535" stop-color="#EC6F44" />
                <stop offset="0.7071" stop-color="#EB633A" />
                <stop offset="1" stop-color="#E9532D" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_461_4619"
                x1="0.115564"
                y1="9.76706"
                x2="22.4588"
                y2="8.62955"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#ED7347" />
                <stop offset="0.3535" stop-color="#EC6F44" />
                <stop offset="0.7071" stop-color="#EB633A" />
                <stop offset="1" stop-color="#E9532D" />
              </linearGradient>
            </defs>
          </svg>
        </a>
        <a href="/" className={header__logoLg}>
          <img src={logoLg} alt="Logo da Technical Share" />
        </a>
        <div className={header__menuWrapper}>
          <nav className={header__menu}>
            <ul className={header__menuList}>
              <li className="header__menuOpt">
                <a href="/" className={header__menuLink}>
                  Home
                </a>
              </li>
              <li className="header__menuOpt">
                <a href="/findMentor" className={header__menuLink}>
                  Busque um mentor
                </a>
              </li>
              <li className="header__menuOpt">
                <a href="#benefits" className={header__menuLink}>
                  Vantagens
                </a>
              </li>
              <li className="header__menuOpt">
                <a href="#faq" className={header__menuLink}>
                  FAQ
                </a>
              </li>
              <li className="header__menuOpt">
                <a href="/register" className={header__menuLink}>
                  Login do mentor
                </a>
              </li>
            </ul>
          </nav>
          <a
            href="/register"
            className={`${header__ctaBtn} globalBtn globalBtn--secondary `}
          >
            Seja um mentor
          </a>
        </div>
        <div className={hamburguer__wrapper}>
          <button
            type="button"
            className={hamburguer}
            onClick={() => setShowHamburguerOpts(!showHamburguerOpts)}
          >
            <span className={hamburguer__pipe}></span>
            <span className={hamburguer__pipe}></span>
            <span className={hamburguer__pipe}></span>
          </button>
        </div>
      </div>
      {showHamburguerOpts && (
        <nav className={hamburguer__menu}>
          <ul className="hamburguer__optList">
            <li className={hamburguer__opt}>
              <a href="#findMentor" className={hamburguer__optLink}>
                Busque um mentor
              </a>
            </li>
            <li className={hamburguer__opt}>
              <a href="#benefits" className={hamburguer__optLink}>
                Vantagens
              </a>
            </li>
            <li className={hamburguer__opt}>
              <a href="#faq" className={hamburguer__optLink}>
                FAQ
              </a>
            </li>
            <li className={hamburguer__opt}>
              <button className={hamburguer__optBtn}>Login do mentor</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
