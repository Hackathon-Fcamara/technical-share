import styles from "./styles.module.css";

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
            src="http://via.placeholder.com/640x360"
            alt="Ilustração sobre porque ser uma mentor da plataforma"
            className={mentor__pic}
          />
        </div>
        <h2 className={mentor__title}>Por que ser um mentor?</h2>
        <p className={mentor__text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
          autem, error itaque quo doloribus porro? Officiis ducimus, quam quod
          neque reprehenderit est odio commodi dignissimos similique corporis
          voluptatibus labore nam.
        </p>
        <button className={mentor__ctaBtn}>Seja um mentor</button>
      </div>
    </section>
  );
};
