import styles from "./styles.module.css";

const {
  mentorCard,
  mentorCard__img,
  mentorCard__textWrapper,
  mentorCard__skillList,
  mentorCard__scheduleLink,
} = styles;

export const MentorCard = () => {
  return (
    <div className={mentorCard}>
      <figure className="mentorCard__imgWrapper">
        <img
          src="http://via.placeholder.com/640x360"
          alt="Foto do mentor"
          className={mentorCard__img}
        />
      </figure>
      <div className={mentorCard__textWrapper}>
        <h3 className="mentorCard__name">Placeholder name</h3>
        <span className="mentorCard__role">Placeholder skill</span>
        <ul className={mentorCard__skillList}>
          <li className="mentorCard__skill"></li>
        </ul>
        <a href="" className={mentorCard__scheduleLink}>
          Visitar perfil
        </a>
      </div>
    </div>
  );
};
