import React from "react";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useSectionInView } from "../hooks/useSectionInView";

const LandingOne = () => {
  const { ref } = useSectionInView("Inicio", 0.5);
  return (
    <section
      ref={ref}
      className="bg-zinc-700 mt-12 sm:h-auto sm:mt-52 flex  justify-center items-cente scroll-mt-32"
      id="inicio"
    >
      <div className=" w-full flex flex-col sm:flex-row items-center justify-center gap-5">
        <div className="w-full p-5 sm:w-1/2 sm:mx-10">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-8xl font-bold tracking-tight text-white "
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            SUBHEADING
          </motion.h1>
          <motion.p
            className=" text-white mt-6 text-lg leading-8"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
            ducimus harum neque tenetur repudiandae architecto beatae odit.
          </motion.p>

          <motion.div
            className="flex gap-10 items-center mt-10"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Button
              color="default"
              size="lg"
              radius="full"
              className="px-unit-12 py-unit-7 sm:w-unit-6xl"
            >
              button
            </Button>
            <Button
              color="default"
              size="lg"
              radius="full"
              className="px-unit-12 py-unit-7 sm:w-unit-6xl"
            >
              button
            </Button>
          </motion.div>
        </div>
        <motion.div
          className=" w-4/5 lg:w-1/2 lg:mx-10"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <img
            className="lg:w-full h-auto rounded-3xl"
            src="https://www.viewhotels.jp/ryogoku/wp-content/uploads/sites/9/2020/03/test-img.jpg"
            alt="banner"
          ></img>
        </motion.div>
      </div>
    </section>
  );
};

export default LandingOne;
