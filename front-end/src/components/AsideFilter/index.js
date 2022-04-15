import styles from "./styles.module.css";

const {
  asideFilter,
  asideFilter__container,
  asideFilter__mainTitle,
  asideFilter__skillListWrapper,
  asideFilter__skillList,
  asideFilter__skillItem,
  asideFilter__label,
  asideFilter__check,
  asideFilter__labelText,
  asideFilter__collideBtn,
  asideFilter__filterBtn,
  asideFilter__filterBtnText,
} = styles;

export const AsideFilter = () => {
  return (
    <aside className={asideFilter}>
      <div className={asideFilter__container}>
        <h3 className={asideFilter__mainTitle}>Filtros</h3>
        <div className={asideFilter__skillListWrapper}>
          <button className={asideFilter__collideBtn}>
            <span className="asideFilter__skillListTitle">Expertise</span>
            <svg
              width="20"
              height="11"
              viewBox="0 0 20 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 9.75L10.6757 10.4872C10.2934 10.8376 9.7066 10.8376 9.32428 10.4872L10 9.75ZM0.324275 2.23715C-0.0828437 1.86396 -0.110347 1.23139 0.262846 0.824275C0.636038 0.417156 1.26861 0.389653 1.67572 0.762846L0.324275 2.23715ZM18.3243 0.762846C18.7314 0.389653 19.364 0.417156 19.7372 0.824275C20.1103 1.23139 20.0828 1.86396 19.6757 2.23715L18.3243 0.762846ZM9.32428 10.4872L0.324275 2.23715L1.67572 0.762846L10.6757 9.01285L9.32428 10.4872ZM9.32428 9.01285L18.3243 0.762846L19.6757 2.23715L10.6757 10.4872L9.32428 9.01285Z"
                fill="#25145A"
              />
            </svg>
          </button>
          <ul className={asideFilter__skillList}>
            <li className={asideFilter__skillItem}>
              <label htmlFor="" className={asideFilter__label}>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className={asideFilter__check}
                />
                <span className={asideFilter__labelText}>UX Design</span>
              </label>
            </li>
            <li className={asideFilter__skillItem}>
              <label htmlFor="" className={asideFilter__label}>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className={asideFilter__check}
                />
                <span className={asideFilter__labelText}>Dev Front-End</span>
              </label>
            </li>
            <li className={asideFilter__skillItem}>
              <label htmlFor="" className={asideFilter__label}>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className={asideFilter__check}
                />
                <span className={asideFilter__labelText}>Dev Back-End</span>
              </label>
            </li>
            <li className={asideFilter__skillItem}>
              <label htmlFor="" className={asideFilter__label}>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className={asideFilter__check}
                />
                <span className={asideFilter__labelText}>Dev Full-Stack</span>
              </label>
            </li>
            <li className={asideFilter__skillItem}>
              <label htmlFor="" className={asideFilter__label}>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className={asideFilter__check}
                />
                <span className={asideFilter__labelText}>Product Owner</span>
              </label>
            </li>
          </ul>
        </div>
        <div className={asideFilter__skillListWrapper}>
          <button className={asideFilter__collideBtn}>
            <span className="asideFilter__skillListTitle">Habilidades</span>
            <svg
              width="20"
              height="11"
              viewBox="0 0 20 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 9.75L10.6757 10.4872C10.2934 10.8376 9.7066 10.8376 9.32428 10.4872L10 9.75ZM0.324275 2.23715C-0.0828437 1.86396 -0.110347 1.23139 0.262846 0.824275C0.636038 0.417156 1.26861 0.389653 1.67572 0.762846L0.324275 2.23715ZM18.3243 0.762846C18.7314 0.389653 19.364 0.417156 19.7372 0.824275C20.1103 1.23139 20.0828 1.86396 19.6757 2.23715L18.3243 0.762846ZM9.32428 10.4872L0.324275 2.23715L1.67572 0.762846L10.6757 9.01285L9.32428 10.4872ZM9.32428 9.01285L18.3243 0.762846L19.6757 2.23715L10.6757 10.4872L9.32428 9.01285Z"
                fill="#25145A"
              />
            </svg>
          </button>
          <ul className={asideFilter__skillList}>
            <li className={asideFilter__skillItem}>
              <label htmlFor="" className={asideFilter__label}>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className={asideFilter__check}
                />
                <span className={asideFilter__labelText}>Liderança</span>
              </label>
            </li>
            <li className={asideFilter__skillItem}>
              <label htmlFor="" className={asideFilter__label}>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className={asideFilter__check}
                />
                <span className={asideFilter__labelText}>Comunicação</span>
              </label>
            </li>
            <li className={asideFilter__skillItem}>
              <label htmlFor="" className={asideFilter__label}>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className={asideFilter__check}
                />
                <span className={asideFilter__labelText}>Python</span>
              </label>
            </li>
            <li className={asideFilter__skillItem}>
              <label htmlFor="" className={asideFilter__label}>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className={asideFilter__check}
                />
                <span className={asideFilter__labelText}>CSS</span>
              </label>
            </li>
            <li className={asideFilter__skillItem}>
              <label htmlFor="" className={asideFilter__label}>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className={asideFilter__check}
                />
                <span className={asideFilter__labelText}>Figma</span>
              </label>
            </li>
          </ul>
        </div>
        <div className={asideFilter__skillListWrapper}>
          <button className={asideFilter__collideBtn}>
            <span className="asideFilter__skillListTitle">Nível</span>
            <svg
              width="20"
              height="11"
              viewBox="0 0 20 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 9.75L10.6757 10.4872C10.2934 10.8376 9.7066 10.8376 9.32428 10.4872L10 9.75ZM0.324275 2.23715C-0.0828437 1.86396 -0.110347 1.23139 0.262846 0.824275C0.636038 0.417156 1.26861 0.389653 1.67572 0.762846L0.324275 2.23715ZM18.3243 0.762846C18.7314 0.389653 19.364 0.417156 19.7372 0.824275C20.1103 1.23139 20.0828 1.86396 19.6757 2.23715L18.3243 0.762846ZM9.32428 10.4872L0.324275 2.23715L1.67572 0.762846L10.6757 9.01285L9.32428 10.4872ZM9.32428 9.01285L18.3243 0.762846L19.6757 2.23715L10.6757 10.4872L9.32428 9.01285Z"
                fill="#25145A"
              />
            </svg>
          </button>
          <ul className={asideFilter__skillList}>
            <li className={asideFilter__skillItem}>
              <label htmlFor="" className={asideFilter__label}>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className={asideFilter__check}
                />
                <span className={asideFilter__labelText}>Trainnee</span>
              </label>
            </li>
            <li className={asideFilter__skillItem}>
              <label htmlFor="" className={asideFilter__label}>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className={asideFilter__check}
                />
                <span className={asideFilter__labelText}>Junior</span>
              </label>
            </li>
            <li className={asideFilter__skillItem}>
              <label htmlFor="" className={asideFilter__label}>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className={asideFilter__check}
                />
                <span className={asideFilter__labelText}>Pleno</span>
              </label>
            </li>
            <li className={asideFilter__skillItem}>
              <label htmlFor="" className={asideFilter__label}>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className={asideFilter__check}
                />
                <span className={asideFilter__labelText}>Senior</span>
              </label>
            </li>
            <li className={asideFilter__skillItem}>
              <label htmlFor="" className={asideFilter__label}>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className={asideFilter__check}
                />
                <span className={asideFilter__labelText}>Lead</span>
              </label>
            </li>
          </ul>
        </div>
        <button
          className={`${asideFilter__filterBtn} globalBtn globalBtn--secondary`}
        >
          <span className={asideFilter__filterBtnText}>Filtrar</span>
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 17C8.44772 17 8 17.4477 8 18C8 18.5523 8.44772 19 9 19V17ZM27 19C27.5523 19 28 18.5523 28 18C28 17.4477 27.5523 17 27 17V19ZM9 19H18V17H9V19ZM18 19H21V17H18V19ZM24 19H27V17H24V19Z"
              fill="#E9542E"
            />
            <path
              d="M9 10C8.44772 10 8 10.4477 8 11C8 11.5523 8.44772 12 9 12V10ZM27 12C27.5523 12 28 11.5523 28 11C28 10.4477 27.5523 10 27 10V12ZM19.5078 12H27V10H19.5078V12ZM9 12H16.4732V10H9V12Z"
              fill="#E9542E"
            />
            <path
              d="M9 24C8.44772 24 8 24.4477 8 25C8 25.5523 8.44772 26 9 26V24ZM27 26C27.5523 26 28 25.5523 28 25C28 24.4477 27.5523 24 27 24V26ZM9 26H12V24H9V26ZM15 26H27V24H15V26Z"
              fill="#E9542E"
            />
            <rect x="12" y="22" width="3" height="6" rx="1" stroke="#E9542E" />
            <rect x="21" y="15" width="3" height="6" rx="1" stroke="#E9542E" />
            <rect x="16.5" y="8" width="3" height="6" rx="1" stroke="#E9542E" />
          </svg>
        </button>
      </div>
    </aside>
  );
};
