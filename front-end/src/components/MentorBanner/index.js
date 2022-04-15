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

export const MentorBanner = () => {
  return (
    <article className={mentorBanner}>
      <figure className="mentorBanner__imgWrapper">
        <img
          src="http://via.placeholder.com/640x360"
          alt="Foto do mentor"
          className={mentorBanner__img}
        />
      </figure>
      <div className={mentorBanner__content}>
        <div className={mentorBanner__textWrapper}>
          <h3 className={mentorBanner__name}>Luciano Tavares</h3>
          <span className={mentorBanner__role}>Dev Front-End Senior</span>
          <p className={mentorBanner__bio}>
            Imperdiet in risus, ultricies sed quis amet, sagittis. Pretium
            senectus ullamcorper tempus sed ut tincidunt libero, nulla in.
            Venenatis pellentesque faucibus nibh pellentesque dignissim...
          </p>
        </div>
        <ul className="mentorBanner__tagList">
          <li className={mentorBanner__tag}>CSS</li>
        </ul>
        <button
          className={`${mentorBanner__ctaBtn} globalBtn globalBtn--primary`}
        >
          Visitar perfil
        </button>
      </div>
    </article>
  );
};
