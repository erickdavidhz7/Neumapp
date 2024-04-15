/* eslint-disable jsx-a11y/anchor-is-valid */

import { useSectionInView } from "../hooks/useSectionInView";
import { motion } from "framer-motion";
export default function Contact() {
  const { ref } = useSectionInView("Contacto", 0.75);

  return (
    <motion.section id="contacto" ref={ref}>
      <section className="bg-zinc-700 h-screen w-full flex justify-center items-center">
        <div className=" w-full h-full flex flex-col items-center justify-center">
          <div className="mb-5 w-[100%] h-[300px] bg-white rounded-lg flex flex-col items-center justify-center">
            <h4 className=" text-2xl text-zinc-700 font-bold m-3 sm:text-5xl">
              {" "}
              ¿Queres prestar servicios?
            </h4>
            <h3 className=" text-3xl sm:text-5xl text-zinc-700 font-extrabold  m-3">
              SE PARTE DE NEUMAPP
            </h3>
            <button className="bg-zinc-500 hover:bg-zinc-700 text-white font-bold sm:py-4 py-2 px-8 rounded-lg m-3">
              Contactar
            </button>
          </div>
          <div className="w-[100%] h-[60%] bg-zinc-500 rounded-lg flex flex-col-reverse sm:flex-col-reverse items-center justify-center sm:h-[50%]">
            <div className="flex flex-col h-1/2 w-[100%] justify-around font-bold ">
              <div className="flex flex-row items-center justify-around sm:justify-around">
                <div className="flex flex-row justify-between mt-10 text-base sm:w-3/4 sm:mt-0 sm:gap-40">
                  <li className="flex flex-col w-3/4 text-start">
                    <div className="text-white font-bold">
                      ${"(icon-rueda)"}
                    </div>
                    <a href=""> inicio </a>
                    <a href=""> About </a>
                    <a href=""> FAQ </a>
                    <a className="items-center" href="">
                      {" "}
                      Trabajá con nosotros{" "}
                    </a>
                  </li>
                  <li className="flex flex-col w-3/4 text-start ">
                    <p className="text-white font-bold">Servicios</p>
                    <a href=""> Prestar un servicio </a>
                    <a href=""> Registrarme </a>
                  </li>
                  <li className="flex flex-col w-3/4 justify-between text-start">
                    <p className="text-white font-bold">Contacto</p>
                    <a href=""> Correo </a>
                    <a href=""> Linkedin </a>
                    <a href=""> Instagram </a>
                    <a href=""> Twitter </a>
                  </li>
                </div>
              </div>
            </div>
            <div className="flex flex-row text-white font-bold items-center sm:h-1/2 w-[100%] justify-around">
              <div className="text-white text-4xl sm:text-7xl"> Logo </div>
              <div className="flex flex-col justify-center items-center">
                <p className="text-sm sm:text-2xl">
                  Unite a nuestro newsletter
                </p>
                <div className=" flex flex-row h-[40px] w-[200px] bg-white rounded-full mt-5 sm:w-[300px] justify-around">
                  <input
                    className="w-[90px] m-2 text-sm "
                    type="text"
                    placeholder="Email adress"
                  />
                  <button className="bg-zinc-500 hover:bg-zinc-700 text-white text-sm font-bold py-0.5 px-0.5 rounded-lg m-1">
                    Contactar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.section>
  );
}
