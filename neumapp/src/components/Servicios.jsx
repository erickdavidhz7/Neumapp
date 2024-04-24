import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "../hooks/useSectionInView";
import {
  ServicesSvgRim,
  ServicesSvgCar,
  ServicesSvgMotorcycle,
  ServicesSvgCycle,
  ServicesSvgCarArrangement,
  ServicesSvgTools,
} from "../images/logo/ServicesSvg";
import {
  SmilinFace,
  SignOfTheHorns,
  HandOk,
  FlexedBiceps,
} from "../images/emoji/Emoji";

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

export const Card = ({ index, picture, title, emoji, text }) => {
  const [isHovered, setIsHovered] = useState(Array(7).fill(false));
  const handleHover = (index) => {
    setIsHovered((prevState) =>
      prevState.map((state, i) => (i === index ? !state : state))
    );
  };
  return (
    <motion.li
      key={index}
      className="w-full h-52 flex items-center justify-center rounded-3xl bg-firstInk-200 hover:bg-firstInk-300 transition-all ease-in-out duration-600 border-secondInk-700/20 border-3 shadow-sm shadow-secondShadow-700/60"
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
        <React.Fragment>{picture}</React.Fragment>
      ) : (
        <div>
          <h3 className="text-firstInk text-sm sm:text-3xl font-bold text-center mb-3 tracking-tight">
            {title}
            <div className="flex justify-center my-2">{emoji}</div>
          </h3>
          <p className="text-firstInk font-semibold mx-5 text-center text-[10px] sm:text-[1rem]">
            {text}
          </p>
        </div>
      )}
    </motion.li>
  );
};

const Servicios = () => {
  const { ref } = useSectionInView("Servicios", 0.75);

  return (
    <motion.section
      ref={ref}
      id="servicios"
      className="min-h-screen flex flex-col  justify-center items-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <h3 className="text-4xl text-center font-bold tracking-tight text-firstInk sm:text-7xl my-5 sm:mb-12 text-shadow-sm shadow-firstInk/70">
        Nuestros <span className="text-secondInk"> servicios</span>
      </h3>

      <ul className=" w-full max-w-screen-lg h-auto grid grid-cols-2 justify-items-center md:grid-cols-3 gap-2 mt-10">
        <Card
          index={1}
          picture={<ServicesSvgRim />}
          title="Neumático pinchado"
          emoji={<SmilinFace width="25" />}
          text="Cambiaremos el neumático que pinchaste en el camino ! "
        />
        <Card
          index={2}
          picture={<ServicesSvgCar />}
          title="Cambio de aceite"
          emoji="🚀"
          text="Cambiaremos el aceite de tu vehículo. "
        />
        <Card
          index={3}
          picture={<ServicesSvgMotorcycle />}
          title="Asistencia para motos"
          emoji={<SignOfTheHorns width="35" />}
          text="Estamos equipados con respuestos y mucho conocimiento."
        />
        <Card
          index={4}
          picture={<ServicesSvgCycle />}
          title="Auxilio para bicissssss !!"
          emoji={<HandOk width="35" />}
          text="Pedaliemos juntos! No te pierdas de tu paseo, nos vemos en el camino !"
        />
        <Card
          index={5}
          picture={<ServicesSvgCarArrangement />}
          title="Desperfecto técnico (automóvil)"
          emoji={<FlexedBiceps width="35" />}
          text="Sabemos de autos,vos relajate !"
        />
        <Card
          index={6}
          picture={<ServicesSvgTools />}
          title="Tuercas mágicas"
          emoji="🥇"
          text="Coleccionalas y obtené descuentos y beneficios."
        />
      </ul>
    </motion.section>
  );
};

export default Servicios;
