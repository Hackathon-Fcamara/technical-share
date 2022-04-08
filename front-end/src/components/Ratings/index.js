export const Ratings = () => {
  return (
    <section className={ratings}>
      <h2 className={ratings__firstTitle}></h2>
      <div className={ratings__wrapper}>
        <figure className={ratings__imgWrapper}>
          <img className={ratings__img} src="" alt="" />
        </figure>
        <div className={ratings__textWrapper}>
          <h3 className={ratings__secondTitle}></h3>
          <span className={ratings__role}></span>
          <div className={ratings__starsWrapper}>
            <span className={ratings__star}></span>
            <span className={ratings__star}></span>
            <span className={ratings__star}></span>
            <span className={ratings__star}></span>
            <span className={ratings__star}></span>
          </div>
          <p className={ratings__aboutTitle}></p>
          <p className={ratings__aboutText}></p>
          <span className={ratings__author}></span>
        </div>
      </div>
    </section>
  );
};
