export function aboutMentor() {
  return (
    <section className={about}>
      <div className={about__infoWrapper}>
        <button className={about__button}>
          <p className={about__info}></p>
        </button>
        <div className={about__depoimentsWrapper}>
          <button className={about__secondButton}>
            <p className={about__depoiments}></p>
          </button>
          <div className={about__statisticsWrapper}>
            <button className={about__thirdButton}>
              <p className={about__statistics}></p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
