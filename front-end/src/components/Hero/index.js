import React from "react";
import styles from "./styles.module.css";
import illustration from "../../assets/images/image-hero-illustration.png";

const {
  hero,
  hero__container,
  hero__textWrapper,
  hero__title,
  hero__firstTitle,
  hero__secondTitle,
  hero__text,
  hero__ctaBtn,
  hero__imgWrapper,
  hero__img,
} = styles;

export function Hero() {
  return (
    <section className={hero}>
      <div className={hero__container}>
        <div className={hero__textWrapper}>
          <h1 className={`${hero__title} ${hero__firstTitle}`}>
            Technical Share
          </h1>
          <h2 className={`${hero__title} ${hero__secondTitle}`}>
            Onde você encontra sua mentoria
          </h2>
          <p className={hero__text}>
            A plataforma onde você encontra pessoas da tecnologia para te ajudar
            a trilhar caminhos para um novo nível.
          </p>
          <a
            href="/findMentor"
            className={`${hero__ctaBtn} globalBtn globalBtn--primary`}
          >
            Busque um mentor
          </a>
        </div>
        <figure className={hero__imgWrapper}>
          <img
            src={illustration}
            alt="Ilustração de uma garota em estado de paz"
            className={hero__img}
          />
        </figure>
      </div>
    </section>
  );
}
