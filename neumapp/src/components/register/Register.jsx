import SwitchRegister from "./SwitchRegister";
import Logo from "../../images/logo/Logo.jsx";
import { FaArrowLeft } from "react-icons/fa";
import { Link, Button } from "@nextui-org/react";

const Register = () => {
  return (
    <section className="min-h-screen bg-zinc-700 flex justify-center items-center">
      <div className="flex flex-col lg:flex-row justify-between w-full max-w-7xl mx-auto gap-y-8 lg:gap-0">
        <div className="flex flex-row-reverse justify-center items-center mx-10 mt-10 lg:flex-col lg:m-0 lg:items-start">
          <section className="flex  justify-start items-center mx-auto lg:mx-0 h-full">
            <Logo width={"10vw"} color="white" />
            <span className="text-4xl lg:text-9xl text-white antialiased">
              Neumapp
            </span>
          </section>
          <Button
            href="/"
            as={Link}
            size="sm"
            variant="light"
            startContent={
              <FaArrowLeft color="white" size={30} className="mx-2 lg:mx-0" />
            }
          >
            <span className="  text-lg text-white ml-5 hidden lg:block lg:mx-5">
              Volver al Inicio
            </span>
          </Button>
          <div className="flex items-center lg:h-1/6"></div>
        </div>

        <section className="h-full w-full lg:w-1/3 p-8 rounded-2xl">
          <SwitchRegister />
        </section>
      </div>
    </section>
  );
};
export default Register;
