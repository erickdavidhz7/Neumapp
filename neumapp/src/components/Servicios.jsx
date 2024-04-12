import { useState } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "../hooks/useSectionInView";

const faceInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => {
    return {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.075 * index,
      },
    };
  },
};

const Servicios = () => {
  const [isHovered, setIsHovered] = useState(Array(6).fill(false));
  const handleHover = (index) => {
    setIsHovered((prevState) =>
      prevState.map((state, i) => (i === index ? !state : state))
    );
  };
  const { ref } = useSectionInView("Servicios", 0.75);

  const generateCard = (index) => (
    <motion.li
      key={index}
      className="w-full sm:w-full h-52 flex items-center justify-center rounded-3xl bg-slate-300 hover:bg-slate-500 transition-all ease-in-out duration-600"
      onMouseEnter={() => handleHover(index)}
      onMouseLeave={() => handleHover(index)}
      variants={faceInAnimationVariants}
      initial="initial"
      whileInView={"animate"}
      viewport={{
        once: true,
      }}
      custom={index}
    >
      {!isHovered[index] ? (
        <h3 className=" text-white text-3xl font-semibold ">ICONO</h3>
      ) : (
        <div>
          <h3 className=" text-white text-3xl font-semibold text-center mb-3">
            Servicio
          </h3>
          <p className="text-white mx-5 text-center text-[10px] sm:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            quod consequuntur fuga, maxime non ab illo qui odio recusandae totam
            molestias sed?.
          </p>
        </div>
      )}
    </motion.li>
  );
  const cards = Array(6)
    .fill(null)
    .map((_, index) => generateCard(index));

  return (
    <motion.section
      ref={ref}
      id="servicios"
      className="bg-zinc-700 min-h-screen flex flex-col  justify-center items-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <div>
        <h3 className="text-4xl font-bold tracking-tight text-white sm:text-5xl my-5 sm:mb-12">
          Nuestros servicios
        </h3>
      </div>
      <ul className="w-full lg:w-[1192px] h-auto grid grid-cols-2 justify-items-center md:grid-cols-3 gap-4 mt-10">
        {cards}
      </ul>
    </motion.section>
  );
};

export default Servicios;
