import { FormSelect } from "../FormSelect";

// STYLES
import styles from "./styles.module.css";

// IMAGES
import faqImage from "../../assets/images/image-faq-illustration.png";

const {
  faq,
  faq__container,
  faq__contentFAQ,
  faq__selectWrapper,
  faq__title,
  faq__contentCta,
  faq__imgWrapper,
  faq__img,
  faq__ctaBtn,
} = styles;

export function Faq() {
  return (
    <section className={faq}>
      <div className={faq__container}>
        <div className={faq__selectWrapper}>
          <h2 className={`globalTitle ${faq__title}`}>FAQ</h2>
          <FormSelect optList={[]} />
          <FormSelect optList={[]} />
          <FormSelect optList={[]} />
          <FormSelect optList={[]} />
          <FormSelect optList={[]} />
        </div>
        <div className={faq__contentCta}>
          <figure className="faq__imgWrapper">
            <img
              src={faqImage}
              alt="Ilustração de uma garota curiosa"
              className={faq__img}
            />
          </figure>
          <a
            href="/findMentor"
            className={`${faq__ctaBtn} globalBtn globalBtn--primary`}
          >
            Busque um mentor
          </a>
        </div>
      </div>
    </section>
  );
}
