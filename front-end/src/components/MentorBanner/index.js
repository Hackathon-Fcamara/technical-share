// STYLES
import styles from "./styles.module.css";

const {
  mentorBanner,
  mentorBanner__tag,
  mentorBanner__img,
  mentorBanner__ctaBtn,
  mentorBanner__content,
  mentorBanner__textWrapper,
  mentorBanner__name,
  mentorBanner__role,
  mentorBanner__bio,
} = styles;

export const MentorBanner = ({ userList }) => {
  return userList.map((user, index) => {
    const { id, nome, cargo, descricao, skills } = user;
    return (
      <article key={id} className={mentorBanner}>
        <figure className="mentorBanner__imgWrapper">
          <img
            src="http://via.placeholder.com/640x360"
            alt="Foto do mentor"
            className={mentorBanner__img}
          />
        </figure>
        <div className={mentorBanner__content}>
          <div className={mentorBanner__textWrapper}>
            <h3 className={mentorBanner__name}>{nome}</h3>
            <span className={mentorBanner__role}>{cargo}</span>
            <p className={mentorBanner__bio}>{descricao}</p>
          </div>
          <ul>
            {skills.map((skill) => {
              return (
                <li key={skill.id} className={mentorBanner__tag}>
                  {skill.skill}
                </li>
              );
            })}
          </ul>
          <a
            href="/schedule"
            className={`${mentorBanner__ctaBtn} globalBtn globalBtn--primary`}
          >
            Visitar perfil
          </a>
        </div>
      </article>
    );
  });
};
