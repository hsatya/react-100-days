import { useState } from "react";

const MyForm1 = () => {
  const [form, setForm] = useState({
    firstName: "Barbera",
    lastName: "Hepworth",
    email: "barberahp@gg.com",
  });
  return (
    <>
      <label>First Name: </label>{" "}
      <input
        type='text'
        value={form.firstName}
        onChange={(e) => {
          setForm({ ...form, firstName: e.target.value });
        }}
      />{" "}
      <br />
      <label>Last Name: </label>{" "}
      <input
        type='text'
        value={form.lastName}
        onChange={(e) => {
          setForm({ ...form, lastName: e.target.value });
        }}
      />{" "}
      <br />
      <label>Email Name: </label>{" "}
      <input
        type='text'
        value={form.email}
        onChange={(e) => {
          setForm({ ...form, email: e.target.value });
        }}
      />
      <p>
        {form.firstName} {form.lastName} <br /> ({form.email})
      </p>
    </>
  );
};

export default MyForm1;
