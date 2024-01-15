/* eslint-disable react/prop-types */

const Input = ({ heading, type, name, value, required, onChange }) => {
  const inputStyles = {
    border: required ? "1px solid red" : "1px solid black",
  };
  return (
    <>
      <label>{heading}: </label>
      <input
        style={inputStyles}
        type={type}
        value={value}
        name={name}
        placeholder={heading}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
