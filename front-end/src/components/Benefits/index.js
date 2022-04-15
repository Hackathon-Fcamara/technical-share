// STYLES
import styles from "./styles.module.css";

import imgBenefits1 from "../../assets/images/image-benefits-1.jpg";
import imgBenefits2 from "../../assets/images/image-benefits-2.jpg";
import imgBenefits3 from "../../assets/images/image-benefits-3.jpg";
import imgBenefits4 from "../../assets/images/image-benefits-4.jpg";

const {
  benefits,
  benefits__container,
  benefits__title,
  benefits__cardList,
  benefits__card,
  benefits__cardImg,
  benefits__cardTitle,
  benefits__textWrapper,
  benefits__text,
} = styles;

export const Benefits = () => {
  return (
    <section className={benefits} id="benefits">
      <div className={benefits__container}>
        <h2 className={`${benefits__title} globalTitle`}>Vantagens</h2>
        <ul className={`${benefits__cardList}`}>
          <li className={`${benefits__card}`}>
            <figure>
              <img
                src={imgBenefits1}
                alt="Ilustração sobre benefícios da plataforma"
                className={`${benefits__cardImg}`}
              />
            </figure>
            <div className={benefits__textWrapper}>
              <h3 className={benefits__cardTitle}>Orientação</h3>
              <p className={benefits__text}>
                Suporte à escolha por habilidades e expetises para otimizar à
                sua escolha na hora de decidir por um mentorando.
              </p>
            </div>
          </li>
          <li className={`${benefits__card}`}>
            <figure>
              <img
                src={imgBenefits2}
                alt="Ilustração sobre benefícios da plataforma"
                className={`${benefits__cardImg}`}
              />
            </figure>
            <div className={benefits__textWrapper}>
              <h3 className={benefits__cardTitle}>Acesso à talentos</h3>
              <p className={benefits__text}>
                Possibilidade de desenvolver uma network assertiva com os jovens
                mais talentosos na sua área.
              </p>
            </div>
          </li>
          <li className={`${benefits__card}`}>
            <figure>
              <img
                src={imgBenefits3}
                alt="Ilustração sobre benefícios da plataforma"
                className={`${benefits__cardImg}`}
              />
            </figure>
            <div className={benefits__textWrapper}>
              <h3 className={benefits__cardTitle}>Carreira</h3>
              <p className={benefits__text}>
                Navegue pelos níveis de mentores para ter conselhor e dicas de
                como conseguir aquela promoção tão desejada.
              </p>
            </div>
          </li>
          <li className={`${benefits__card}`}>
            <figure>
              <img
                src={imgBenefits4}
                alt="Ilustração sobre benefícios da plataforma"
                className={`${benefits__cardImg}`}
              />
            </figure>
            <div className={benefits__textWrapper}>
              <h3 className={benefits__cardTitle}>Evolução pessoal</h3>
              <p className={benefits__text}>
                Desenvolver por meio de mentoria com liders habilidades de
                comunicação como ter mais destaque em um trabalho de equipe.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
