import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import mentorPhoto from "../../assets/images/image-foto-illustration.png";
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
  mentorSpecs__name,
  mentorSpecs__role,
  mentorSpecs__skillTitle,
  mentorSpecs__skillList,
  mentorSpecs__socialLink,
} = styles;

export function MentorSpecs() {
  const [mentorInfo, setMentorInfo] = useState([]);

  useEffect(() => {
    api.get("usuarios/all").then(({ data }) => {
      setMentorInfo(data);
    });
  }, []);

  return (
    <div className={mentorSpecs}>
      <div className={mentorSpecs__container}>
        <div className={mentorSpecs__content}>
          <figure className={mentorSpecs__contentPhoto}>
            <img
              src={mentorPhoto}
              alt="Foto do perfil"
              className={mentorSpecs__contentImg}
            />
          </figure>
          <div className={mentorSpecs__contentId}>
            <h2 className={mentorSpecs__name}>Luciano Tavares </h2>
            <p className={mentorSpecs__role}>Dev Front-End Senior</p>
          </div>
          <div className={mentorSpecs__contentSkills}>
            <h3 className={mentorSpecs__skillTitle}>Habilidades</h3>
            <ul className={mentorSpecs__skillList}></ul>
          </div>
          <h1>Redes Sociais</h1>
          <div className={mentorSpecs__contentSocial}>
            <a href="" className={mentorSpecs__socialLink}>
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.166748 2.31084C0.166748 1.74213 0.392669 1.19671 0.794809 0.794567C1.19695 0.392427 1.74237 0.166507 2.31108 0.166507H23.6868C23.9686 0.166046 24.2477 0.22118 24.5083 0.328751C24.7688 0.436322 25.0055 0.594218 25.2049 0.793399C25.4043 0.99258 25.5624 1.22913 25.6703 1.48952C25.7781 1.7499 25.8336 2.029 25.8334 2.31084V23.6865C25.8337 23.9684 25.7784 24.2476 25.6707 24.5081C25.5631 24.7686 25.405 25.0053 25.2058 25.2047C25.0065 25.4041 24.7699 25.5622 24.5094 25.6701C24.249 25.7779 23.9698 25.8333 23.6879 25.8332H2.31108C2.02939 25.8332 1.75045 25.7777 1.49021 25.6698C1.22997 25.562 0.993532 25.4039 0.794397 25.2047C0.595261 25.0055 0.437335 24.7689 0.329641 24.5086C0.221947 24.2483 0.166595 23.9694 0.166748 23.6877V2.31084ZM10.3261 9.95251H13.8016V11.6978C14.3033 10.6945 15.5866 9.79151 17.5151 9.79151C21.2123 9.79151 22.0884 11.79 22.0884 15.4568V22.2492H18.3469V16.2922C18.3469 14.2038 17.8453 13.0255 16.5713 13.0255C14.8038 13.0255 14.0688 14.296 14.0688 16.2922V22.2492H10.3261V9.95251ZM3.90942 22.0893H7.65208V9.79151H3.90942V22.0882V22.0893ZM8.18758 5.78051C8.19464 6.10096 8.13762 6.41959 8.01986 6.71771C7.90211 7.01582 7.72599 7.28741 7.50185 7.51654C7.27771 7.74567 7.01006 7.92773 6.71461 8.05201C6.41916 8.1763 6.10186 8.24033 5.78133 8.24033C5.4608 8.24033 5.1435 8.1763 4.84805 8.05201C4.5526 7.92773 4.28495 7.74567 4.06081 7.51654C3.83667 7.28741 3.66056 7.01582 3.5428 6.71771C3.42505 6.41959 3.36803 6.10096 3.37508 5.78051C3.38893 5.1515 3.64853 4.55293 4.09828 4.11297C4.54803 3.67302 5.15218 3.42666 5.78133 3.42666C6.41049 3.42666 7.01463 3.67302 7.46438 4.11297C7.91413 4.55293 8.17373 5.1515 8.18758 5.78051V5.78051Z"
                  fill="#25145A"
                />
              </svg>
            </a>
            <a href="" className={mentorSpecs__socialLink}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9999 0.333496C5.56692 0.333496 0.333252 5.56716 0.333252 12.0002C0.333252 18.4332 5.56692 23.6668 11.9999 23.6668C18.4329 23.6668 23.6666 18.4332 23.6666 12.0002C23.6666 5.56716 18.4329 0.333496 11.9999 0.333496ZM2.66659 12.0002C2.66659 10.9513 2.84859 9.9445 3.16942 9.003L4.99992 10.8335L7.33325 13.1668V15.5002L9.66659 17.8335L10.8333 19.0002V21.253C6.23775 20.6755 2.66659 16.7508 2.66659 12.0002ZM19.3849 17.6853C18.6231 17.0717 17.4681 16.6668 16.6666 16.6668V15.5002C16.6666 14.8813 16.4208 14.2878 15.9832 13.8502C15.5456 13.4127 14.9521 13.1668 14.3333 13.1668H9.66659V9.66683C10.2854 9.66683 10.8789 9.421 11.3165 8.98341C11.7541 8.54583 11.9999 7.95234 11.9999 7.3335V6.16683H13.1666C13.7854 6.16683 14.3789 5.921 14.8165 5.48341C15.2541 5.04583 15.4999 4.45233 15.4999 3.8335V3.354C18.9159 4.74116 21.3333 8.09183 21.3333 12.0002C21.333 14.059 20.6476 16.0592 19.3849 17.6853V17.6853Z"
                  fill="#25145A"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
