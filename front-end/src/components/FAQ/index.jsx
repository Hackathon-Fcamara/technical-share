import React from "react";
import styles from "./styles.module.css";

const { 
  faq, 
  faq__container, 
  faq__contentFAQ,
  faq__select,
  faq__selectTitle, 
  faq__contentCTA,
  faq__CTA,
} = styles;

export function FAQ() {
  return(
    <section className={faq}>
      <div className={faq__container}>
        <div className={faq__contentFAQ}>
          <div className={faq__select}>
            <div className={faq__selectTitle}>
              <h1>FAQ</h1>
            </div>
            <select></select>
            <select></select>
            <select></select>
            <select></select>
            <select></select>
          </div>
        </div>
        <div className={faq__contentCTA}>
          <a href="/findMentor">
            <div className={faq__CTA}>
              <input type="submit" value="Busque um mentor" />
           </div>
          </a>
        </div>
      </div>
    </section>
  )
};