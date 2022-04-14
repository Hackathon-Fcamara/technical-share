import styles from "./styles.module.css";
import illustration from "../../assets/images/image-foto-illustration.png";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

const {
  mentorCard,
  mentorCard__img,
  mentorCard__textWrapper,
  mentorCard__skillList,
  mentorCard__scheduleLink,
} = styles;

export const MentorCard = () => {

  const [ mentorInfo, setMentorInfo ] = useState([]);

  useEffect(() => {
    api.get("usuarios/all").then(({data}) => {
      setMentorInfo(data)
    })
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(mentorInfo)
  
  return (
    <>
      {mentorInfo?.map((r) => (
        <div key={r.id} className={mentorCard}>
          <figure className="mentorCard__imgWrapper">
            <img
              src={illustration}
              alt="Foto do mentor"
              className={mentorCard__img}
            />
          </figure>
          <div className={mentorCard__textWrapper}>
            <h3 className="mentorCard__name">{r.nome}</h3>
            <span className="mentorCard__role">{`${r.cargo} ${r.nivel}`}</span>
            <ul className={mentorCard__skillList}>
              {r.skils.map((skils) => (
                <li key={skils.id} >{skils.skil}</li>
              ))}
            </ul>
            <a href="" className={mentorCard__scheduleLink}>
              Visitar perfil
            </a>
          </div>
        </div>
      ))}
    </>
  );
};
