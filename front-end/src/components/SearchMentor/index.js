export const Search = () => {
  return (
    <section className={search}>
      <h2 className={search__title}></h2>
      <div className={search__barWrapper}>
        <input className={search__bar} type="text" placeholder="" />
      </div>
      <div className={search__organizeWrapper}>
        <h3 className={search__organize}></h3>
        <button className={search__organizeButton}></button>
      </div>
      <div className={search__filterWrapper}>
        <h3 className={search__filter}></h3>
        <button className={search__filterButton}></button>
      </div>
    </section>
  );
};
