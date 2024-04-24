import React from "react";
import { Button, Link } from "@nextui-org/react";
import HerramientaSvg from "../images/logo/HerramientaSvg";


const LandingTwo = () => {
  return (
    <section className="mt-12 sm:h-auto sm:mt-28 flex justify-center items-center sm:text-start text-center scroll-mt-0">
      <div className=" w-full flex flex-wrap-reverse sm:flex-nowrap justify-center content-between gap-5">
        <div className="w-full mb-10 sm:w-full lg:mr-16 flex justify-center">
          <HerramientaSvg />
        </div>

        <div className="w-full p-5 sm:w-1/2 sm:mx-10">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tight text-firstInk text-shadow-sm shadow-firstInk/50">
            En Neumapp <span className="text-secondInk">encontrá</span> o prestá{" "}
            <span className="text-secondInk">servicios de mecanica.</span>
          </h1>
          <p className="text-firstInk font-semibold mt-6 text-lg leading-8">
            Tenemos una plataforma preparada para que encuentres rapidamente un
            auxilio en tu zona. O bien puedas prestar un servicio mecánico.
          </p>
          <div className="my-8 flex justify-center">
            <Button
              size="lg"
              radius="full"
              className=" text-white font-semibold bg-gradient-to-r from-buttonDegrade-one to-buttonDegrade-two leading-10 px-unit-6 text-sm sm:text-lg sm:px-unit-16 py-unit-7 "
              as={Link}
              href="/registrar"
            >
              MÁS INFORMACIÓN
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LandingTwo;
