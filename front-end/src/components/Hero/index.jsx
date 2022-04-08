import React from "react";
import styles from "./styles.module.css";

const { 
  hero,
  hero__container, 
  hero__content, 
  hero__main__firstTitle, 
  hero__main__secondTitle, 
  hero__main__text, 
  hero__main__button
} = styles;

export function Hero() {

  return(
    <section className={hero}>
      <div className={hero__container}>
        <div className={hero__content}>
          <h1 className={hero__main__firstTitle}>Lorem, ipsum dolor sit amet?</h1>
          <h2 className={hero__main__secondTitle}>Lorem ipsum dolor sit amet consectetur.</h2>
          <p className={hero__main__text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur corporis quasi nam labore eius! Repellat inventore, voluptas magnam rerum aliquam saepe nemo distinctio laboriosam laudantium deleniti, consequatur natus quibusdam.
          </p>
          <button className={hero__main__button}>Busque seu mentor</button>
        </div>
      </div>
    </section>
  );
};