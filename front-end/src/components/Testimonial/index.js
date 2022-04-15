import { useEffect, useState } from "react";

// STYLES
import styles from "./styles.module.css";

// IMAGES
import imageGuy from "../../assets/images/image-guy.jpg";

// AXIOS
import { api } from "../../services/api";

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
  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    api.get("depoimentos").then(({ data }) => {
      setTestimonial(data);
    });
  }, []);

  return (
    <section>
      <div className={testimonial__container}>
        <h2 className={`globalTitle ${testimonial__firstTitle}`}>
          Depoimentos
        </h2>
        <ul className={testimonial__cardList}>
          {testimonial?.map((r) => {
            return (
              <li className={testimonial__card}>
                <figure>
                  <img
                    className={testimonial__img}
                    src={imageGuy}
                    alt="Foto do mentor"
                  />
                </figure>
                <div className={testimonial__textWrapper}>
                  <h3 className={testimonial__secondTitle}>{r.nome}</h3>
                  <span className={testimonial__role}>{r.usuarios.cargo}</span>
                  <p className={testimonial__aboutTitle}>O que falam sobre</p>
                  <p className={testimonial__aboutText}>{r.depoimentos}</p>
                  <span
                    className={testimonial__author}
                  >{`Depoimento de ${r.usuarios.nome}`}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
