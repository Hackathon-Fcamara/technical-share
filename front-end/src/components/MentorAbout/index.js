import React from "react";
import styles from "./styles.css";

const { about, about__info } = styles;

export function mentorAbout() {
  return (
    <section className={about}>
      <h2>Sobre</h2>
      <p className={about__info}>
        Sou Formado em Engenharia Civil e acabei conhecendo o desenvolvimento de
        sistemas por um amigo. Fiz cursos na área, sempre me aperfeiçoando nas
        diversas linguagens. Me tornei head em uma equipe e nunca parei de me
        aperfeiçoar em outras áreas pessoais. Hoje sou Sênior na FCamara.
      </p>
    </section>
  );
}
