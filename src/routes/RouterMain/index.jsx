import { Route, Routes } from "react-router-dom";
import { Dashboard, Register, Login, NotFound } from "../../pages";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const RouterMain = () => {
  const userAuthentica = localStorage.getItem("user");
  const [user, setUser] = useState(userAuthentica ? JSON.parse(userAuthentica) : null);

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);


  const userLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <Routes>
      <Route path="/" element={<Login setUser={setUser} />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={<Dashboard user={user} userLogout={userLogout} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
