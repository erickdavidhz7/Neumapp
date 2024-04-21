import React from "react";
import { FaSearch, FaTools } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { AiFillAlert } from "react-icons/ai";
import { FaFolderClosed } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const iconSize = 25;

function MenuItem({ icon, text }) {
  return (
    <div className="flex items-center flex-col lg:flex-row gap-x-4 text-lg">
      {icon}
      <span className="text-red-500">{text}</span>
    </div>
  );
}

function FooterMap() {
  const context = useContext(AuthContext);

  return (
    <footer className="fixed bottom-0 w-full z-30">
      <div className="w-full lg:w-[90%] lg:mx-auto rounded-t-2xl text-3xl font-bold bg-[#4036ED66] bg-opacity-60 p-2 lg:p-4 text-white text-center">
        {`Hola, ${context.user}`}
      </div>
      {context.type === "provider" ? (
        <div className="w-full lg:w-[90%] lg:mx-auto flex justify-between items-center bg-white py-2 lg:py-4 px-8 lg:px-20 text-black">
          <MenuItem icon={<FaTools size={iconSize} />} text="Mis servicios" />
          <MenuItem
            icon={<FaFolderClosed size={iconSize} />}
            text="Facturación"
          />
          <MenuItem icon={<BiSupport size={iconSize} />} text="Soporte" />
        </div>
      ) : (
        <div className="w-full lg:w-[90%] lg:mx-auto flex justify-between items-center bg-white py-2 lg:py-4 px-8 lg:px-20 text-black">
          <MenuItem icon={<FaSearch size={iconSize} />} text="Buscar" />
          <MenuItem icon={<FaTools size={iconSize} />} text="Mis solicitudes" />
          <MenuItem icon={<AiFillAlert size={iconSize} />} text="Emergencia" />
          <MenuItem icon={<BiSupport size={iconSize} />} text="Soporte" />
        </div>
      )}
    </footer>
  );
}

export default FooterMap;
