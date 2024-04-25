import React from "react";
import { Button, Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useSectionInView } from "../hooks/useSectionInView";
import LandingSvg from "../images/logo/LandingSvg";

const LandingOne = () => {
  const { ref } = useSectionInView("Inicio", 0.5);
  return (
    <section
      ref={ref}
      className="sm:h-screen flex  justify-center items-cente scroll-mt-32"
      id="inicio"
    >
      <div className=" w-full flex flex-col sm:flex-row items-center justify-center gap-5">
        <div className="w-full p-5 sm:w-1/2 sm:mx-10">
          <motion.h1
            className="mt-10 text-5xl md:text-7xl md:mt-0 lg:text-8xl font-bold tracking-tight text-firstInk text-shadow-lg shadow-firstInk/40"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Auxilio <span className="text-secondInk ">vehicular</span> que marca{" "}
            <span className="text-secondInk">la diferencia</span>
          </motion.h1>

          {/* estilo para usar el degradado  */}
          {/* bg-gradient-to-r from-firstInk from-30% via-orange-600 via-50% to-thirdInk to-90% bg-clip-text text-transparent leading-10 */}
          <motion.p
            className=" text-firstInk font-semibold mt-6 text-lg leading-8"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Te ayudamos a reunirte con un mecánico mas cercano, solo tenes que
            registrarte para poder acceder a nuestros servicios.
          </motion.p>

          <motion.div
            className="flex flex-row gap-2 sm:gap-10 items-center mt-10 "
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Button
              size="lg"
              radius="full"
              className="bg-secondInk text-white font-semibold text-[10px] sm:text-sm lg:text-lg shadow-lg shadow-indigo-600/70 px-unit-6 sm:px-unit-16 py-unit-7 md:w-unit-6xl"
              as={Link}
              href="/registrar"
            >
              Quiero ser prestador
            </Button>
            <Button
              size="lg"
              radius="full"
              className=" bg-firstInk text-white font-semibold text-[10px] sm:text-sm lg:text-lg shadow-lg shadow-firstShadow-600/70 px-unit-8 sm:px-unit-18 py-unit-7 md:w-unit-6xl"
              as={Link}
              href="/ingresar"
            >
              Pedir un servicio
            </Button>
          </motion.div>
        </div>
        <motion.div
          className="lg:w-1/2 lg:mx-10"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <LandingSvg />
        </motion.div>
      </div>
    </section>
  );
};

export default LandingOne;
