import React from "react";
import { useLocation } from "react-router-dom";
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

const Logo = (props) => {
  return (
    <svg
      width={props.width}
      height={props.width}
      viewBox="0 0 93 93"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M63.4766 84.9705C73.0376 84.9705 80.7883 67.7466 80.7883 46.4999C80.7883 25.2532 73.0376 8.0293 63.4766 8.0293"
        stroke={props.color}
        stroke-width="5.77059"
      />
      <path
        d="M46.1646 46.4999C46.1646 67.7466 38.4138 84.9705 28.8528 84.9705C19.2918 84.9705 11.541 67.7466 11.541 46.4999C11.541 25.2532 19.2918 8.0293 28.8528 8.0293C38.4138 8.0293 46.1646 25.2532 46.1646 46.4999Z"
        stroke={props.color}
        stroke-width="5.77059"
      />
      <path
        d="M28.853 84.9705C38.4141 84.9705 46.1648 67.7466 46.1648 46.4999C46.1648 25.2532 38.4141 8.0293 28.853 8.0293"
        stroke={props.color}
        stroke-width="5.77059"
      />
      <path
        d="M34.6235 46.5003C34.6235 59.2484 32.0399 69.5827 28.8529 69.5827C25.6659 69.5827 23.0823 59.2484 23.0823 46.5003C23.0823 33.7523 25.6659 23.418 28.8529 23.418C32.0399 23.418 34.6235 33.7523 34.6235 46.5003Z"
        stroke={props.color}
        stroke-width="5.77059"
      />
      <path
        d="M28.853 8.0293L63.4766 8.0293"
        stroke={props.color}
        stroke-width="5.77059"
      />
    </svg>
  );
};

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const menuItems = [
    { name: "Inicio", path: "/" },
    { name: "Servicios", path: "/servicios" },
    { name: "About", path: "/about" },
    { name: "FAQ", path: "/faq" },
    { name: "Contacto", path: "/contacto" },
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
                  color={location !== item.path && "foreground"}
                  href={item.path}
                >
                  {item.name}
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
