export const FormTextarea = ({ labelText, idVal, value, onChange }) => {
  return (
    <label htmlFor={idVal} className="globalForm__label">
      <span className="globalForm__labelText">{labelText}</span>
      <textarea
        name="about"
        id={idVal}
        cols="30"
        rows="10"
        className="globalForm__message"
        value={value}
        onChange={onChange}
      ></textarea>
    </label>
  );
};
