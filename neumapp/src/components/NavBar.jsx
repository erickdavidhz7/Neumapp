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
    { name: "FAQ", path: "#faq" },
    { name: "Contacto", path: "#contacto" },
    { name: "Ingresar", path: "/ingresar" },
    { name: "Registrar", path: "/registrar" },
  ];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      {/* Vista Desktop */}

      <NavbarBrand>
        <Logo width={30} color="#4036ED" />
        <p className="font-bold text-inherit">Neumapp</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map(
          (item, index) =>
            item.name !== "Ingresar" &&
            item.name !== "Registrarme" && (
              <NavbarItem key={`${item}-${index}`}>
                <Link
                  href={item.path}
                  className={
                    item.name === activeSection
                      ? "hover:no-underline focus:font-medium font-medium transition"
                      : "hover:no-underline focus:font-medium font-normal transition"
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
                      className="border-b-3 mt-6 border-[#4036ED] absolute inset-0 -z-10"
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

      <NavbarContent justify="end" className="hidden sm:flex">
        <NavbarItem>
          <Button as={Link} color="primary" href="/ingresar" variant="flat">
            Ingresar
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/registrar" variant="flat">
            Registrar
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Vista Mobile */}

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={location !== item.path && "foreground"}
                href={item.path}
                size="lg"
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
    </Navbar>
  );
}
export default NavBar;
