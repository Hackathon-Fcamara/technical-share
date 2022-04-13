export const Testmonial = () => {
  return (
    <section className={testimonial}>
      <h2 className={testimonial__firstTitle}></h2>
      <div className={testimonial__wrapper}>
        <figure className={testimonial__imgWrapper}>
          <img className={testimonial__img} src="" alt="" />
        </figure>
        <div className={testimonial__textWrapper}>
          <h3 className={testimonial__secondTitle}></h3>
          <span className={testimonial__role}></span>
          <div className={testimonial__starsWrapper}>
            <span className={testimonial__star}></span>
            <span className={testimonial__star}></span>
            <span className={testimonial__star}></span>
            <span className={testimonial__star}></span>
            <span className={testimonial__star}></span>
          </div>
          <p className={testimonial__aboutTitle}></p>
          <p className={testimonial__aboutText}></p>
          <span className={testimonial__author}></span>
        </div>
      </div>
    </section>
  );
};
