import styles from "./styles.module.css";
import illustration from "../../assets/images/image-becomeMentor-illustration.png";

const {
  becomeMentor__container,
  becomeMentor__imgWrapper,
  becomeMentor__textWrapper,
  becomeMentor__image,
  becomeMentor__title,
  becomeMentor__text,
  becomeMentor__ctaBtn,
} = styles;

export const BecomeMentor = () => {
  return (
    <section>
      <div className={becomeMentor__container}>
        <figure className={becomeMentor__imgWrapper}>
          <img
            src={illustration}
            alt="Ilustração sobre porque ser uma mentor da plataforma"
            className={becomeMentor__image}
          />
        </figure>
        <div className={becomeMentor__textWrapper}>
          <h2 className={`${becomeMentor__title} globalTitle`}>
            Por que ser um mentor?
          </h2>
          <p className={becomeMentor__text}>
            Ajude pessoas de todos os níveis a alcançarem seus objetivos
            profissionais. Ensine, inspire e contribua para o desenvolvimento de
            novos talentos.
          </p>
        </div>
        <a
          href="/mentorPage"
          className={`globalBtn globalBtn--primary ${becomeMentor__ctaBtn}`}
        >
          Seja um mentor
        </a>
      </div>
    </section>
  );
};
