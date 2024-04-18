import React, { useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { motion } from "framer-motion";
import UserRegister from "../userRegister/UserRegister";
import ProviderRegister from "../providerRegister/ProviderRegister";

function SwitchRegister() {
  const [selected, setSelected] = useState("usuario");

  return (
    <Tabs
      fullWidth
      color="primary"
      aria-label="Tabs form"
      selectedKey={selected}
      onSelectionChange={setSelected}
      classNames={{
        tabList: "p-0 font-semibold ",
        tab: " h-10 transition-all duration-700",
        cursor: "w-full  ",
        tabContent:
          "group-data-[selected=true]:text-white border-black ",
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
  );
}

export default SwitchRegister;
