import SwitchRegister from "./SwitchRegister";
import Logo from "../../images/logo/Logo.jsx";
import { FaArrowLeft } from "react-icons/fa";
import { Link, Button } from "@nextui-org/react";

const Register = () => {
  return (
    <section className="min-h-screen bg-firstInk-200/50 flex justify-center items-center">
      <div className="flex flex-col lg:flex-row justify-between w-full max-w-7xl mx-auto gap-y-8 lg:gap-0">
        <div className="flex flex-row-reverse justify-end items-center mt-10 lg:flex-col lg:m-0 lg:items-start">
          <section className=" flex justify-center items-center x:w-1/2 lg:mx-0 lg:w-4/5">
            <div className="size-12 lg:size-32 ">
              <Logo/>
            </div>

            <div className="relative flex items-center lg:h-screen lg:items-center ">
              <span className=" absolute text-3xl sm:text-5xl lg:text-9xl font-bold antialiased text-slate-500/50 pt-1">
                Neumapp
              </span>

              <span className="absolute text-3xl sm:text-5xl lg:text-9xl pb-2 font-bold antialiased bg-gradient-to-r from-[#F3D08D] to-[#fe5e63] to-90% bg-clip-text text-transparent ">
                Neumapp
              </span>
            </div>
          </section>
          <Button
            href="/"
            as={Link}
            variant="light"
            
            startContent={
              <FaArrowLeft color="" size={30} className="lg:mx-0 text-firstInk-800" />
            }
          >
            <span className="  text-lg text-firstInk font-medium ml-5 hidden lg:block lg:mx-5">
              Volver al Inicio
            </span>
          </Button>
          <span className="mt-20"></span>
        </div>

        <section className="h-full w-full lg:w-1/3 p-8 rounded-2xl">
          <SwitchRegister />
        </section>
      </div>
    </section>
  );
};
export default Register;
