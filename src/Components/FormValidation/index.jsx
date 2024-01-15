import { useState } from "react";
import Input from "../Input";

const FormValidation = () => {
  const [name, setName] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  function handleInputChange(e) {
    setName(e.target.value);
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      setError("All fields are required!");
      return;
    }

    console.log("Form data submitted:", formData);
    setFormData({ name: "", email: "", password: "" });
    setError("");
  }

  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <Input
          heading='Username'
          type='text'
          name='name'
          value={name}
          onChange={handleInputChange}
          required={true}
        />
        <br />
        <br />
        <label htmlFor='username'>
          User Name:
          <input
            type='text'
            name='name'
            id='username'
            value={formData.name}
            onChange={handleChange}
          />
        </label>{" "}
        <br />
        <br />
        <label htmlFor='email'>
          User Email:
          <input
            type='email'
            name='email'
            id='email'
            value={formData.email}
            onChange={handleChange}
          />
        </label>{" "}
        <br />
        <br />
        <label htmlFor='password'>
          User Password:
          <input
            type='password'
            name='password'
            id='password'
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <button type='submit'>Submit</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default FormValidation;
