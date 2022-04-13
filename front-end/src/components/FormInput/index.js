export const FormInput = ({ labelText, inputType, idVal }) => {
  return (
    <label htmlFor={idVal} className="globalForm__label">
      <span className="globalForm__labelText">{labelText}</span>
      <input type={inputType} id={idVal} className="globalForm__input" />
    </label>
  );
};
