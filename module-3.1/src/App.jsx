import { useState } from "react";
import ("./App.css")
export default function RegistrationForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,        
      [name]: value   
    }));
  };

  return (
    <>
    <header>
      <h2>Registration Form</h2>
    </header>

    <main>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={form.firstName}
        onChange={handleChange}
      />

      <br />

      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={form.lastName}
        onChange={handleChange}
      />

      <br />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />

      <p>First Name: {form.firstName}</p>
      <p>Last Name: {form.lastName}</p>
      <p>Email: {form.email}</p>

    </main>
    </>
  );
}
