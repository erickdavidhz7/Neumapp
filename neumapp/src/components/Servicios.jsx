import { useState } from "react";

const Servicios = () => {
  const [isHovered, setIsHovered] = useState(Array(6).fill(false));

  const handleHover = (index) => {
    setIsHovered((prevState) =>
      prevState.map((state, i) => (i === index ? !state : state))
    );
  };
  const generateCard = (index) => (
    <div
      key={index}
      className="w-full sm:w-full h-52 flex items-center justify-center rounded-3xl bg-slate-300 hover:bg-slate-500 transition-all ease-in-out duration-600"
      onMouseEnter={() => handleHover(index)}
      onMouseLeave={() => handleHover(index)}
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
    </div>
  );
  const cards = Array(6)
    .fill(null)
    .map((_, index) => generateCard(index));

  return (
    <section className="bg-zinc-700 min-h-screen flex flex-col  justify-center items-center">
      <div>
        <h3 className="text-4xl font-bold tracking-tight text-white sm:text-5xl my-5 sm:mb-12">
          Nuestros servicios
        </h3>
      </div>
      <div className="w-full lg:w-[1192px] h-auto grid grid-cols-2 justify-items-center md:grid-cols-3 gap-4 mt-10">
        {cards}
      </div>
    </section>
  );
};

export default Servicios;