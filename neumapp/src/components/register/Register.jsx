import React, { Children } from "react";
import LayoutRegister from "../layout/LayoutRegister";


const Register = () => {
  return (
    <React.Fragment>
      <LayoutRegister>{Children}</LayoutRegister>
    </React.Fragment>
  );
};
export default Register;
