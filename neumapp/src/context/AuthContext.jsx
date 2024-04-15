import React, { useState, useEffect } from "react";

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const initialState = {
    login: localStorage.getItem("Login") === "true",
    type: JSON.parse(localStorage.getItem("User")) || null,
    token: JSON.parse(localStorage.getItem("Token")) || null,
  };

  const [authData, setAuthData] = useState(initialState);

  useEffect(() => {
    if (localStorage.getItem("Login") === null) {
      setAuthData({
        login: false,
        type: null,
        token: null,
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Login", authData.login);
    localStorage.setItem("User", JSON.stringify(authData.type));
    localStorage.setItem("Token", JSON.stringify(authData.token));
  }, [authData]);

  const handlerLogin = (token, type) => {
    setAuthData({
      ...authData,
      login: true,
      type,
      token,
    });
  };

  const handlerLogout = () => {
    setAuthData({
      ...authData,
      login: false,
      type: null,
      token: null,
    });
  };

  return (
    <AuthContext.Provider value={{ ...authData, handlerLogin, handlerLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
