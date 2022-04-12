import React from "react";
import styles from "./styles.module.css";
import illustration from "../../assets/images/image-hero-illustration.png";

const {
  hero,
  hero__container,
  hero__content,
  hero__title,
  hero__firstTitle,
  hero__secondTitle,
  hero__text,
  hero__illustration,
} = styles;

export function Hero() {
  return (
    <section className={hero}>
      <div className={hero__container}>
        <div className={hero__content}>
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
          <a href="/findMentor" className="globalBtn">
            Busque um mentor
          </a>
          <img
            src={illustration}
            alt="Ilustração de uma garota em estado de paz"
            className={hero__illustration}
          />
        </div>
      </div>
    </section>
  );
}
