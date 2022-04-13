import styles from "./styles.module.css";
import illustration from "../../assets/images/image-becomeMentor-illustration.png";

const {
  mentor__container,
  mentor__wrapperFirst,
  mentor__pic,
  mentor__title,
  mentor__text,
  mentor__ctaBtn,
} = styles;

export const BecomeMentor = () => {
  return (
    <section>
      <div className={mentor__container}>
        <div className={mentor__wrapperFirst}>
          <img
            src={illustration}
            alt="Ilustração sobre porque ser uma mentor da plataforma"
            className={mentor__pic}
          />
        </div>
        <h2 className={mentor__title}>Por que ser um mentor?</h2>
        <p className={mentor__text}>
         Ajude pessoas de todos os níveis a alcançarem seus objetivos profissionais. Ensine, inspire e contribua para o desenvolvimento de novos talentos.
        </p>
        <a href="/mentorPage">
          <input type="submit" value="Seja um mentor" className={mentor__ctaBtn}/>
        </a>
      </div>
    </section>
  );
};
