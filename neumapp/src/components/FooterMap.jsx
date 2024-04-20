import React from "react";
import { FaTools } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { FaFolderClosed } from "react-icons/fa6";

const iconSize = 25;

function MenuItem({ icon, text }) {
  return (
    <span className="flex gap-x-4 text-lg">
      {icon}
      {text}
    </span>
  );
}

function FooterMap() {
  return (
    <footer className="fixed bottom-0 w-full">
      <div className="w-[90%] mx-auto rounded-t-2xl text-3xl font-bold bg-[#4036ED66] bg-opacity-60  p-4 text-white text-center">
        Hola, Usuario
      </div>
      <div className="w-[90%] mx-auto flex justify-between items-center bg-white py-4 px-20 text-black">
        <MenuItem icon={<FaTools size={iconSize} />} text="Mis servicios" />
        <MenuItem
          icon={<FaFolderClosed size={iconSize} />}
          text="Facturación"
        />
        <MenuItem icon={<BiSupport size={iconSize} />} text="Soporte" />
      </div>
    </footer>
  );
}

export default FooterMap;
