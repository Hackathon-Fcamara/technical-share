// STYLES
import styles from "./styles.module.css";

const {
  benefits__container,
  benefits__title,
  benefits__cardImg,
  benefits__cardTitle,
} = styles;

export const Benefits = () => {
  return (
    <section>
      <div className={benefits__container}>
        <h2 className={benefits__title}>Vantagens</h2>
        <div>
          <figure>
            <img
              src="http://via.placeholder.com/640x360"
              alt="Ilustração sobre benefícios da plataforma"
              className={benefits__cardImg}
            />
          </figure>
          <h3 className={benefits__cardTitle}>Placeholder title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sed
            ipsam, sapiente omnis tempora vitae tempore magnam molestiae maxime
            labore.
          </p>
        </div>
      </div>
    </section>
  );
};
