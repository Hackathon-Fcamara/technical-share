import { FormInput } from "../FormInput";
import { FormSelect } from "../FormSelect";
import { FormTextarea } from "../FormTextarea";

// STYLES
import styles from "./styles.module.css";

const {
  mentorForm,
  mentorForm__container,
  mentorForm__form,
  mentorForm__btn,
  mentorForm__title,
} = styles;

export const MentorForm = () => {
  return (
    <section className={mentorForm}>
      <div className={mentorForm__container}>
        <h2 className={`${mentorForm__title} globalAbout__title`}>
          Editar informações
        </h2>
        <form className={mentorForm__form}>
          <FormInput labelText="Nome*" inputType="text" idVal="firstName" />
          <FormInput labelText="Sobrenome*" inputType="text" idVal="lastName" />
          <FormSelect labelText="Cargo" idVal="role" optList={[]} />
          <FormSelect labelText="Nível" idVal="level" optList={[]} />
          <FormSelect labelText="Habilidade" idVal="skill" optList={[]} />
          <FormTextarea labelText="Sobre" idVal="about" optList={[]} />
          <button
            type="submit"
            className={`${mentorForm__btn} globalBtn globalBtn--primary`}
          >
            Editar
          </button>
        </form>
      </div>
    </section>
  );
};
