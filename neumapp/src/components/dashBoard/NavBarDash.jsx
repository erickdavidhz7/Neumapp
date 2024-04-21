import React, { forwardRef } from "react";
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
  Avatar as NextUIAvatar,
} from "@nextui-org/react";
import Logo from "../../images/logo/Logo.jsx";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

// Eliminamos originalProps para evitar la advertencia en el navegador
const Avatar = forwardRef(({ originalProps, ...rest }, ref) => {
  const { originalProps: _, ...props } = rest;
  return <NextUIAvatar {...props} ref={ref} />;
});

function NavBarDash() {
  const navigate = useNavigate();
  const context = useContext(AuthContext);

  const handleLogout = () => {
    context.handlerLogout();
    navigate("/");
  };

  return (
    <Navbar isBordered className="w-[90%] mx-auto rounded-2xl mt-6">
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <Logo width={40} color="#4036ED" />
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
              name={context.user}
              size="md"
              src={context.photo}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem
              key="profile"
              className="h-14 gap-2"
              textValue="Registrado como"
            >
              <p className="font-semibold">Registrado como</p>
              <p className="font-semibold">
                {context.email ? context.email : "test-1"}
              </p>
            </DropdownItem>
            <DropdownItem key="mi_cuenta" textValue="Mi Cuenta">
              Mi Cuenta
            </DropdownItem>
            <DropdownItem key="privacidad" textValue="Privacidad">
              Privacidad
            </DropdownItem>
            <DropdownItem key="seguridad" textValue="Seguridad">
              Seguridad
            </DropdownItem>
            <DropdownItem key="configuracion" textValue="Configuración">
              Configuración
            </DropdownItem>
            <DropdownItem key="accesibilidad" textValue="Accesibilidad">
              Accesibilidad
            </DropdownItem>
            <DropdownItem key="contacto" textValue="Contacto">
              Contacto
            </DropdownItem>
            <DropdownItem
              key="logout"
              color="danger"
              onClick={handleLogout}
              textValue="Cerrar Sesión"
            >
              Cerrar Sesión
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
export default NavBarDash;
