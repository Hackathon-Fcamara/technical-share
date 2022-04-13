export const FormSelect = ({ labelText, idVal, optList }) => {
  return (
    <label htmlFor={idVal} className="globalForm__label">
      <span className="globalForm__labelText">{labelText}</span>
      <div className="globalForm__selectWrapper">
        <select name={idVal} id={idVal} className="globalForm__select">
          <option value="default" className="contactForm__option">
            Default
          </option>
          {optList.map((opt) => {
            return (
              <option value={opt} className="contactForm__option">
                {opt}
              </option>
            );
          })}
        </select>
        <span className="globalForm__selectArrow">
          <svg
            width="18"
            height="10"
            viewBox="0 0 18 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 1L9 9.27586L1 0.999999"
              stroke="black"
              stroke-width="0.928783"
            />
          </svg>
        </span>
      </div>
    </label>
  );
};
