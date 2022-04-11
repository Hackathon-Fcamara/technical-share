export function loginModal() {
  return (
    <section className={login}>
      <h2 className={login__title}></h2>
      <form className={login__form} action="">
        <h3 className={login__email}></h3>
        <div className={login__emailWrapper}>
          <input className={login__emailInput} type="text" />
        </div>
        <h3 className={login__password}></h3>
        <div className={login__passwordWrapper}>
          <input className={login__passwordInput} type="text" />
          <button className={login__forgot}></button>
        </div>
        <button className={login__enter}></button>
      </form>
    </section>
  );
}
