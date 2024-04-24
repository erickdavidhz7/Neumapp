import { useSectionInView } from "../hooks/useSectionInView";
import { motion } from "framer-motion";
import Logo from "../images/logo/Logo.jsx";
import { RimIcon } from "../images/logo/RimIcon.jsx";
export default function Contact() {
  const { ref } = useSectionInView("Contacto", 0.75);

  return (
    <motion.section id="contacto" ref={ref}>
      <section className="w-full flex justify-center items-center">
        <div className=" w-full h-full flex flex-col items-center justify-center">
          <div className="mb-5 w-full h-auto  rounded-lg flex flex-col items-center justify-center">
            <h4 className=" text-2xl text-firstInk font-bold m-3 sm:text-6xl text-shadow-sm shadow-firstInk/60 text-center">
              {" "}
              ¿Queres prestar servicios?
            </h4>
            <h3 className=" text-3xl text-center sm:text-5xl text-secondInk font-extrabold m-3 text-shadow-sm shadow-secondInk/60">
              SE PARTE DE NEUMAPP
            </h3>
            <button className=" mt-10 mb-24 relative bg-secondInk text-white w-48 h-14 overflow-hidden font-bold rounded-lg m-3 hover:bg-firstInk shadow-lg shadow-firstShadow-500/50 hover:shadow-firstShadow-500/70 transition">
              <span className=" absolute top-0 left-0 w-96 h-1 bg-gradient-to-r from-firstInk via-secondInk to-thirdInk animate-[linerInfinityTopX_2s_linear_infinite] rounded-3xl " />
              <span className="absolute top-0 right-0 w-[5px] h-96 bg-gradient-to-b from-firstInk via-secondInk to-thirdInk  animate-[linerInfinityRightY_2s_linear_infinite] rounded-3xl" />
              <span className="absolute bottom-0 left-0 w-96 h-1 bg-gradient-to-l from-firstInk via-secondInk to-thirdInk  animate-[linerInfinityButtonX_2s_linear_infinite] rounded-3xl" />
              <span className="absolute top-0 left-0 w-[5px] h-96 bg-gradient-to-t from-firstInk via-secondInk to-thirdInk  animate-[linerInfinityLeftY_2s_linear_infinite] rounded-3xl" />
              Registrarme
            </button>
          </div>
          <div className="w-full rounded-lg flex flex-col-reverse sm:flex-col-reverse items-center justify-center sm:h-[50%] ">
            <div className="flex flex-col h-1/2 w-[100%] justify-around">
              <div className="flex flex-row items-center justify-around sm:justify-around ">
                <div className="flex flex-row justify-between mt-10 text-base sm:w-3/4 sm:mt-0 sm:gap-40 text-firstInk font-medium">
                  <li className="flex flex-col w-3/4 text-start ">
                    <RimIcon width="40" />
                    <a className="my-1" href="#inicio">
                      {" "}
                      Inicio{" "}
                    </a>
                    <a className="my-1" href="#about">
                      {" "}
                      About{" "}
                    </a>
                    <a className="my-1" href="#faq">
                      {" "}
                      FAQ{" "}
                    </a>
                    <a className="my-1"  href="#contacto">
                      {" "}
                      Trabajá con nosotros{" "}
                    </a>
                  </li>
                  <li className="flex flex-col w-3/4 text-start">
                    <p className="my-1 font-extrabold">
                      Servicios
                    </p>
                    <a className="my-1" href="/registrar">
                      {" "}
                      Prestar un servicio{" "}
                    </a>
                    <a className="my-1" href="/registrar">
                      {" "}
                      Registrarme{" "}
                    </a>
                  </li>
                  <li className="flex flex-col w-3/4 justify-between text-start">
                    <p className=" font-extrabold">Contacto</p>
                    <a className="my-1" href="#contacto">
                      {" "}
                      Correo{" "}
                    </a>
                    <a className="my-1" href="#contacto">
                      {" "}
                      Linkedin{" "}
                    </a>
                    <a className="my-1" href="#contacto">
                      {" "}
                      Instagram{" "}
                    </a>
                    <a className="my-1" href="#contacto">
                      {" "}
                      Twitter{" "}
                    </a>
                  </li>
                </div>
              </div>
            </div>
            <div className="w-full h-full mb-10 flex flex-col text-white font-bold items-center  justify-around sm:h-1/2  md:flex-row">
              <div className=" w-1/2 flex justify-center items-center">
              <Logo width={60} color="#FF6668" />
                <div>
                  <h2 className="text-3xl sm:text-6xl font-bold bg-gradient-to-r from-firstInk to-secondInk bg-clip-text text-transparent leading-10 text-shadow-sm shadow-firstInk/10">Neumapp</h2>
                </div>
              </div>
              <div className="w-4/5 flex flex-col justify-center items-center sm:w-1/2">
                <p className=" text-firstInk-800 font-extrabold text-xl text-center mt-8 md:mt-0">
                  Unite a nuestro newsletter
                </p>
                <div className=" flex flex-row h-[50px] w-full px-10 py-1 bg-[#4336ED] rounded-full mt-5 md:w-3/4 justify-around text-secondInk-100 ">
                  <input
                    className="w-[90%] m-2 text-sm bg-transparent text-secondInk-100 placeholder-secondInk-100 placeholder-opacity-75 focus:outline-none"
                    type="text"
                    placeholder="Correo"
                  />
                  <button className="text-sm rounded-lg my-2 bg-gradient-to-r from-buttonDegrade-one to-buttonDegrade-two text-white w-unit-4xl font-semibold hover:bg-gradient-to-r hover:from-buttonDegrade-one hover:to-orange-500 hover:scale-95 transition">
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-2 bg-gradient-to-r from-firstInk via-thirdInk-800 to-secondInk rounded-full shadow-lg shadow-firstShadow-800/50 mt-5" />
          <p className=" text-firstInk-800 font-medium text-sm my-2">
            Created and developed by S.14/35
          </p>
        </div>
      </section>
    </motion.section>
  );
}
