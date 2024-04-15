import React from 'react';
import logo from './Css/Logo.png';
import Neumapp from './Css/Neumapp.svg'

const Logo = () => {
  return (
    <>
      <div className="logo">
      <img src={Neumapp} alt="Neumapp Logo" className="logoimg" />
      </div>
    </>
  );
};

export default Logo;
