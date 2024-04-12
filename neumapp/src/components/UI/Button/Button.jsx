import React from 'react';
import { Button } from "@nextui-org/react";

const ButtonUI = ({ children, ...props }) => {
  return (
    <Button {...props}>
      {children}
    </Button>
  );
};

export default ButtonUI;

