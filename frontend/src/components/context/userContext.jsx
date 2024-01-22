import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [ready, setReady] = useState(false);
  const [name, setName] = useState("");
  useEffect(() => {
    if (user != null) {
      const profile = async () => {
        const { data } = await axios.get("/profile");
        setUser(data);
        setReady(true);
        setName(data.name)
      };
      profile();

      if (user.success) setReady(true);
    }
    console.log("profile");
  }, []);
  return (
    <UserContext.Provider
      value={{ user, setUser, name, setName, ready, setReady }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
