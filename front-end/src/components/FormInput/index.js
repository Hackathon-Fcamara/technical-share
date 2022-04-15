export const FormInput = ({ labelText, inputType, idVal, value, onChange, disabled }) => {
  return (
    <label htmlFor={idVal} className="globalForm__label">
      <span className="globalForm__labelText">{labelText}</span>
      <input 
        type={inputType} 
        id={idVal} 
        className="globalForm__input" 
        value={value}
        onChange={onChange} 
        disabled={disabled}/>
    </label>
  );
};
