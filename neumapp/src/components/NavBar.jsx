import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useActiveSectionContext } from "../context/ActiveSectionContext";
import { motion } from "framer-motion";
import Logo from "../images/logo/Logo.jsx";

import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

function NavBar() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const menuItems = [
    { name: "Inicio", path: "#inicio" },
    { name: "Servicios", path: "#servicios" },
    { name: "About", path: "#about" },
    { name: "FAQs", path: "#faq" },
    { name: "Contacto", path: "#contacto" },
    { name: "Ingresar", path: "/ingresar" },
    { name: "Registrarme", path: "/registrar" },
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className=" bg-firstInk text-white bg-opacity-75 "
      maxWidth="2xl"
    >
      {/* Vista Desktop */}

      <NavbarBrand className="flex justify-center items-center my-10">
        <div className="w-fit sm:w-[20%] flex justify-end items-center mr-1">
          <Logo width={30} color="#FF6668" />
        </div>

        <p className="font-bold text-3xl bg-gradient-to-r from-buttonDegrade-two via-orange-100 to-buttonDegrade-one bg-clip-text text-transparent leading-10">
          Neumapp
        </p>
      </NavbarBrand>

      <NavbarContent className="hidden md:flex gap-4 " justify="center">
        {menuItems.map(
          (item, index) =>
            item.name !== "Ingresar" &&
            item.name !== "Registrarme" && (
              <NavbarItem key={`${item}-${index}`}>
                <Link
                  href={item.path}
                  className={
                    item.name === activeSection
                      ? "text-white hover:no-underline hover:bg-firstInk-800 focus:font-medium font-medium transition"
                      : " text-white hover:no-underline focus:font-medium font-normal transition"
                  }
                  color={location !== item.path && "foreground"}
                  onPress={() => {
                    setActiveSection(item.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {item.name}
                  {item.name === activeSection && (
                    <motion.span
                      className="border-b-3 mt-6 border-secundary absolute inset-0 -z-10"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    ></motion.span>
                  )}
                </Link>
              </NavbarItem>
            )
        )}
      </NavbarContent>

      <NavbarContent justify="end" className="hidden md:flex ">
        <NavbarItem>
          <Button
            as={Link}
            href="/ingresar"
            variant="flat"
            className="bg-gradient-to-r from-buttonDegrade-one to-buttonDegrade-two text-white px-unit-3 w-unit-3xl  lg:w-unit-4xl font-semibold"
          >
            Ingresar
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            href="/registrar"
            variant="flat"
            className=" bg-gradient-to-r from-buttonDegrade-one to-buttonDegrade-two text-white px-unit-3 w-unit-3xl  lg:w-unit-4xl font-semibold"
          >
            Registrar
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Vista Mobile */}

      <NavbarContent className="md:hidden" justify="center">
        <NavbarMenu className="bg-firstInk-700 py-5  text-center hover:opacity-95 transition">
          {menuItems.map((item, index) => (
            <NavbarMenuItem
              key={`${item}-${index}`}
              className="p-2 rounded-2xl hover:bg-firstInk-500"
            >
              <Link
                className={
                  item.name === activeSection
                    ? "text-white hover:no-underline focus:font-medium font-medium transition"
                    : " text-white hover:no-underline focus:font-medium font-normal transition"
                }
                color={location !== item.path && "foreground"}
                href={item.path}
                size="lg"
                onPress={() => {
                  setActiveSection(item.name);
                  setTimeOfLastClick(Date.now());
                  setIsMenuOpen(false);
                }}
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </NavbarContent>

      <NavbarContent className="md:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
    </Navbar>
  );
}
export default NavBar;
