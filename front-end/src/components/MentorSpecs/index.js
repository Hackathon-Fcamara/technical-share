import React from "react";
import styles from "./styles.module.css";
import illustration from "../../assets/images/image-foto-illustration.png";
import { IoLogoLinkedin } from "react-icons/io";
import { RiEarthLine } from "react-icons/ri";

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
  return(
    <div className={mentorSpecs}>
      <div className={mentorSpecs__container}>
        <div className={mentorSpecs__content}>
            <figure className={mentorSpecs__contentPhoto}>
              <img 
                src={illustration} 
                alt="Foto do perfil" 
                className={mentorSpecs__contentImg}
              />
            </figure>
            <div className={mentorSpecs__contentId}>
              <h1>Noberto Hashimoto</h1>
              <h2>Dev Front-End Sênior</h2>
            </div>
            <h1>Habilidades</h1>
            <div className={mentorSpecs__contentSkills}>
              <h1>Tags</h1>
              <h1>Tags</h1>
              <h1>Tags</h1>
              <h1>Tags</h1>
            </div>
            <h1>Redes Sociais</h1>
            <div className={mentorSpecs__contentSocial}>
              <span><IoLogoLinkedin className={mentorSpecs__contentIcon} /></span>
              <span><RiEarthLine className={mentorSpecs__contentIcon} /></span>
            </div>
        </div>
      </div>
    </div>
  )
}