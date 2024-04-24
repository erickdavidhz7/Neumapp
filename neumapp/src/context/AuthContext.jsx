import React, { useState, useEffect } from "react";

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const initialState = {
    login: localStorage.getItem("Login") === "true",
    type: JSON.parse(localStorage.getItem("Type")) || null,
    token: JSON.parse(localStorage.getItem("Token")) || null,
    user: JSON.parse(localStorage.getItem("User")) || null,
    email: JSON.parse(localStorage.getItem("Email")) || null,
    photo: JSON.parse(localStorage.getItem("Photo")) || null,
  };

  const [authData, setAuthData] = useState(initialState);

  useEffect(() => {
    if (localStorage.getItem("Login") === null) {
      setAuthData({
        login: false,
        type: null,
        token: null,
        user: null,
        email: null,
        photo: null,
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Login", authData.login);
    localStorage.setItem("Type", JSON.stringify(authData.type));
    localStorage.setItem("Token", JSON.stringify(authData.token));
    localStorage.setItem("User", JSON.stringify(authData.user));
    localStorage.setItem("Email", JSON.stringify(authData.email));
    localStorage.setItem("Photo", JSON.stringify(authData.photo));
  }, [authData]);

  const handlerLogin = (token, firstName, lastName, email, photo, type) => {
    const user = `${firstName} ${lastName}`;
    setAuthData({
      ...authData,
      login: true,
      type,
      token,
      user,
      email,
      photo,
    });
  };

  const handlerLogout = () => {
    setAuthData({
      ...authData,
      login: false,
      type: null,
      token: null,
      user: null,
      email: null,
      photo: null,
    });
  };

  return (
    <AuthContext.Provider value={{ ...authData, handlerLogin, handlerLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
