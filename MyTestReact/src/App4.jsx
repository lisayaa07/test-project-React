import { useState } from "react";
import "./App4.css"
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

    <main className="app4">
      <input className="input-app4"
        type="text"
        name="firstName"
        placeholder="First Name"
        value={form.firstName}
        onChange={handleChange}
      />

      <br />

      <input className="input-app4"
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={form.lastName}
        onChange={handleChange}
      />

      <br />

      <input className="input-app4"
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />

      <p className="text-app4">First Name: {form.firstName}</p>
      <p className="text-app4">Last Name: {form.lastName}</p>
      <p className="text-app4">Email: {form.email}</p>

    </main>
    </>
  );
}
