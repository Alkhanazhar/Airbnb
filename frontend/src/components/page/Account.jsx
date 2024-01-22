import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Places from "./Places";
import AccountNav from "./AccountNav";
import AccountProfile from "./AccountProfile";
import Spinner from "./Spinner";

const Account = () => {
  const { user, ready, setUser, setName } = useContext(UserContext);
  const navigate = useNavigate();
  const { subpage = "profile" } = useParams();
  if (!ready) {
    return <Spinner />;
  }
  const logout = async () => {
    await axios.post("/logout");
    setUser({ ...user, user: null, token: "" });
    setName("");
    navigate("/login");
  };
  if (ready && !user) {
    return navigate("/login");
  }

  return (
    <>
      <AccountNav subpage={subpage} />
      <>
        {subpage === "profile" && (
        <AccountProfile user={user} logout={logout}/>
        )}
        {subpage === "places" && <Places />}
      </>
    </>
  );
};

export default Account;
