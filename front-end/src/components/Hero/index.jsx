import React from "react";
import styles from "./styles.module.css";

const { 
  hero,
  hero__container, 
  hero__content, 
  hero__firstTitle, 
  hero__secondTitle, 
  hero__text, 
  hero__button
} = styles;

export function Hero() {

  return(
    <section className={hero}>
      <div className={hero__container}>
        <div className={hero__content}>
          <h1 className={hero__firstTitle}>Lorem, ipsum dolor sit amet?</h1>
          <h2 className={hero__secondTitle}>Lorem ipsum dolor sit amet consectetur.</h2>
          <p className={hero__text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur corporis quasi nam labore eius! Repellat inventore, voluptas magnam rerum aliquam saepe nemo distinctio laboriosam laudantium deleniti, consequatur natus quibusdam.
          </p>
          <button type='button' className={hero__button}>
            <a href="/findMentor">Busque seu mentor</a>
          </button>
        </div>
      </div>
    </section>
  );
};