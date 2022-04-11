import React from "react";
import styles from "./styles.module.css";

const { 
  footer,  
  footer__imgWrapper, 
  footer__img,
  footer__title,
  footer__iconWrapper,
  footer__icon
} = styles;

export const Footer = () => {
  return (
    <section className={footer}>
      <figure className={footer__imgWrapper}>
        <img className={footer__img} src="https://picsum.photos/410/66" alt="" />
      </figure>
      <h2 className={footer__title}>Lorem ipsum, dolor sit amet consectetur adipisicing elit!</h2>
      <div className={footer__iconWrapper}>
        <span className={footer__icon}></span>
        <span className={footer__icon}></span>
        <span className={footer__icon}></span>
        <span className={footer__icon}></span>
      </div>
    </section>
  );
}