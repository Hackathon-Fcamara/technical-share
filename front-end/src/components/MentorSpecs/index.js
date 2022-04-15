import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import illustration from "../../assets/images/image-foto-illustration.png";
import { IoLogoLinkedin } from "react-icons/io";
import { RiEarthLine } from "react-icons/ri";
import { api } from "../../services/api";

const { 
  mentorSpecs, 
  mentorSpecs__container,
  mentorSpecs__content,
  mentorSpecs__contentPhoto,
  mentorSpecs__contentImg,
  mentorSpecs__contentId,
  mentorSpecs__contentSkills,
  mentorSpecs__contentSocial,
  mentorSpecs__contentIcon
} = styles;

export function MentorSpecs() {

  const [ mentorInfo, setMentorInfo ] = useState([]);

  useEffect(() => {
    api.get("usuarios/all").then(({data}) => {
      setMentorInfo(data)
    })
  }, [])

  console.log(mentorInfo)

  return(
    <div className={mentorSpecs}>
      {mentorInfo?.map((r) => (
        <div key={r.id} className={mentorSpecs__container}>
        <div className={mentorSpecs__content}>
            <figure className={mentorSpecs__contentPhoto}>
              <img 
                src={illustration} 
                alt="Foto do perfil" 
                className={mentorSpecs__contentImg}
              />
            </figure>
            <div className={mentorSpecs__contentId}>
              <h1>{r.nome}</h1>
              <h2>{`${r.cargo} ${r.nivel}`}</h2>
            </div>
            <h1>Habilidades</h1>
            <div className={mentorSpecs__contentSkills}>
              {r.skils.map((skils) => (
                <h1 key={skils.id}>{skils.skil}</h1>
              ))}
            </div>
            <h1>Redes Sociais</h1>
            <div className={mentorSpecs__contentSocial}>
              <span><IoLogoLinkedin className={mentorSpecs__contentIcon} /></span>
              <span><RiEarthLine className={mentorSpecs__contentIcon} /></span>
            </div>
        </div>
      </div>
      ))}
    </div>
  )
}