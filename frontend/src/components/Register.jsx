import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !password) return;
      console.log("submit event");
      const { data } = await axios.post("/register", {
        name,
        password,
        email,
      });
    } catch (error) {
      console.log(error.message);
      return;
    }
    setEmail("");
    setName("");
    setPassword("");
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <form className="w-96 mb-64" onSubmit={handleSubmit}>
        <h2 className="text-4xl text-center font-bold mb-8">Register</h2>
        <input
          type="text"
          placeholder="type name here"
          value={name}
          onChange={handleNameChange}
          className="p-3 border border-1 block my-2 w-full rounded-2xl"
        />
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="type email here"
          className="p-3 border border-1 block my-2 w-full rounded-2xl"
        />
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="type password here"
          className="p-3 border border-1 block my-2 w-full rounded-2xl"
        />
        <button
          type="submit"
          className="bg-red-500  p-3 rounded-2xl text-white w-full"
        >
          Register
        </button>
        <div className="py-2 text-center">
          if you have account <Link to={"/login"}>login Here</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
