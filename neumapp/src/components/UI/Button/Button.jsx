import React from "react";
import { Button } from "@nextui-org/react";

const ButtonUI = ({ children, ...props }) => {
  const data = {
    items: [
      {
        title: "Reparacion",
        quantity: 1,
        unit_price: 10,
        description: "",
      },
    ],
    payer: {
      name: "Nicolas",
      email: "michiqueli@gmail.com",
    },
  };
  const pedirServicio = async (data) => {
    const postPayment = async (data) => {
      try {
        const response = await fetch(`https://localhost:3001/payments`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const responseData = await response.json();
        return responseData;
      } catch (error) {
        if (error instanceof Error) {
          window.alert(error.message);
        } else {
          window.alert("Ocurrió un error, reintente por favor.");
        }
      }
    };
    await postPayment(data).then((responseData) => {
      window.location.href = responseData.result.init_point;
    });
  };

  return (
    <Button {...props} onClick={() => pedirServicio(data)}>
      {children}
    </Button>
  );
};

export default ButtonUI;
