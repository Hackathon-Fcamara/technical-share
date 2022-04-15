import styles from "./styles.module.css";

const { about, about__container, about__textWrapper } = styles;

export const MentorAbout = () => {
  return (
    <section className={about}>
      <div className={about__container}>
        <div className={about__textWrapper}>
          <h2 className="globalAbout__title">Sobre</h2>
          <p className="globalAbout__text">
            Sou Formado em Engenharia Civil e acabei conhecendo o
            desenvolvimento de sistemas por um amigo. Fiz cursos na área, sempre
            me aperfeiçoando nas diversas linguagens. Me tornei head em uma
            equipe e nunca parei de me aperfeiçoar em outras áreas pessoais.
            Hoje sou Sênior na FCamara.
          </p>
        </div>
      </div>
    </section>
  );
};
