import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import Logo from "../../images/logo/Logo.jsx";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function NavBarDash() {
  const navigate = useNavigate();
  const context = useContext(AuthContext);

  const handleLogout = () => {
    context.handlerLogout();
    navigate("/");
  };

  return (
    <Navbar isBordered className="w-[90%] mx-auto rounded-2xl mt-8">
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <Logo width={30} color="#4036ED" />
          <p className="hidden sm:block font-bold text-inherit">Neumapp</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name={context.user ? context.user : "Héctor G"}
              size="sm"
              src={
                context.photo
                  ? context.photo
                  : "https://i.pravatar.cc/150?u=a042581f4e29026704d"
              }
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Registrado como</p>
              <p className="font-semibold">
                {context.email ? context.email : "test-1"}
              </p>
            </DropdownItem>
            <DropdownItem key="mi_cuenta">Mi Cuenta</DropdownItem>
            <DropdownItem key="privacidad">Privacidad</DropdownItem>
            <DropdownItem key="seguridad">Seguridad</DropdownItem>
            <DropdownItem key="configuracion">Configuración</DropdownItem>
            <DropdownItem key="accesibilidad">Accesibilidad</DropdownItem>
            <DropdownItem key="contacto">Contacto</DropdownItem>
            <DropdownItem key="logout" color="danger" onClick={handleLogout}>
              Cerrar Sesión
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
export default NavBarDash;
