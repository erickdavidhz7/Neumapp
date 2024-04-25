import React, { useState } from "react";
import { Tabs, Tab, Link } from "@nextui-org/react";
import UserRegister from "../register/userRegister/UserRegister.jsx";
import ProviderRegister from "../register/providerRegister/ProviderRegister";

function SwitchRegister() {
  const [selected, setSelected] = useState("usuario");

  return (
    <React.Fragment>
      <Tabs
        fullWidth
        color="primary"
        aria-label="Tabs form"
        selectedKey={selected}
        onSelectionChange={setSelected}
        classNames={{
          tabList: "p-0 font-semibold border-2 border-firstInk ",
          tab: " h-10 transition-all duration-700 ",
          cursor: "w-full",
          tabContent: "group-data-[selected=true]:text-white",
        }}
        disableAnimation
      >
        <Tab key="usuario" title="Usuario" children={<UserRegister />}></Tab>

        <Tab
          key="prestador"
          title="Prestador"
          children={<ProviderRegister />}
        ></Tab>
      </Tabs>
      <div className="text-center mt-2">
        <span className=" text-secondInk font-semibold ">
          ¿Tienes una cuenta?{" "}
          <Link className="text-primary font-semibold" href="/ingresar">
            Inicia Sesión
          </Link>
        </span>
      </div>
    </React.Fragment>
  );
}

export default SwitchRegister;
