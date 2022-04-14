import styles from "./styles.module.css";

import imageGuy from "../../assets/images/image-guy.jpg";

const {
  testimonial__container,
  testimonial__firstTitle,
  testimonial__cardList,
  testimonial__card,
  testimonial__img,
  testimonial__textWrapper,
  testimonial__secondTitle,
  testimonial__role,
  testimonial__aboutTitle,
  testimonial__aboutText,
  testimonial__author,
} = styles;

export const Testimonial = () => {
  return (
    <section>
      <div className={testimonial__container}>
        <h2 className={`globalTitle ${testimonial__firstTitle}`}>
          Depoimentos
        </h2>
        <ul className={testimonial__cardList}>
          <li className={testimonial__card}>
            <figure>
              <img
                className={testimonial__img}
                src={imageGuy}
                alt="Foto do mentor"
              />
            </figure>
            <div className={testimonial__textWrapper}>
              <h3 className={testimonial__secondTitle}>Luciano Tavares</h3>
              <span className={testimonial__role}>Dev Front-End Sênior</span>
              <p className={testimonial__aboutTitle}>O que falam sobre</p>
              <p className={testimonial__aboutText}>
                Com a plataforma Technical Share pude encontrar exatamente o que
                eu precisava do meu mentor. E através de uma mentoria assertiva
                consegui organizar melhor meus estudos.{" "}
              </p>
              <span className={testimonial__author}>Depoimento de Matheus</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
