import axios from "axios";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./context/userContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { user, setUser, setName } = useContext(UserContext);
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async (e) => {
    try {
      console.log(user, setUser);
      e.preventDefault();
      const { data } = await axios.post("/login", {
        password,
        email,
      });
      setUser(data);

      toast.success("Successfully logged in");
      console.log(data);
      setName(data.user.name);
      navigate("/");
      if (data.success) {
      }
    } catch (error) {
      toast.error("failed logged in");

      console.log(error.message);
    }
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <form className="w-96 mb-64" onSubmit={handleSubmit}>
        <h2 className="text-4xl text-center font-bold mb-8">Login</h2>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="type your email here"
          className="p-3 border border-1 block my-2 w-full rounded-2xl"
        />
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="type your password here"
          className="p-3 border border-1 block my-2 w-full rounded-2xl"
        />
        <button className="bg-red-500 p-3 hover:bg-red-600 rounded-2xl text-white w-full">
          login
        </button>
        <div className="py-2 text-center">
          don't have account <Link to={"/register"}>Register Here</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
