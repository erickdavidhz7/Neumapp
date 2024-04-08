/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Contact() {
  return (
    <section className="bg-zinc-700 h-screen w-full flex justify-center items-center">
      <div className=" w-full h-full flex flex-col items-center justify-center">
        <div className="mb-5 w-3/4 h-[300px] bg-white rounded-lg flex flex-col items-center justify-center">
          <h4 className=" text-3xl text-zinc-700 font-bold m-3">
            {" "}
            ¿Queres prestar servicios?
          </h4>
          <h3 className=" text-5xl text-zinc-700 font-extrabold  m-3">
            SE PARTE DE NEUMAPP
          </h3>
          <button className="bg-zinc-500 hover:bg-zinc-700 text-white font-bold py-4 px-8 rounded-lg m-3">
            Contactar
          </button>
        </div>
        <div className="w-3/4 h-[400px] bg-zinc-500 rounded-lg flex flex-row items-center justify-center">
          <div className="flex flex-col h-1/2 w-3/5 justify-between font-bold">
            <div className="text-white"> Logo </div>
            <div className="flex flex-row justify-end">
              <div className="flex flex-row w-3/4 justify-between mt-10 ">
                <li className="flex flex-col w-3/4 justify-between">
                  <div className="text-white font-bold">${"(icon-rueda)"}</div>
                  <a href=""> inicio </a>
                  <a href=""> About </a>
                  <a href=""> FAQ </a>
                  <a href=""> Trabajá con nosotros </a>
                </li>
                <li className="flex flex-col w-3/4 ">
                  <p className="text-white font-bold">Servicios</p>
                  <a href=""> Prestar un servicio </a>
                  <a href=""> Registrarme </a>
                </li>
                <li className="flex flex-col w-3/4 justify-between">
                  <p className="text-white font-bold">Contacto</p>
                  <a href=""> Correo </a>
                  <a href=""> Linkedin </a>
                  <a href=""> Instagram </a>
                  <a href=""> Twitter </a>
                </li>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-white font-bold h-1/2">
            <p>Unite a nuestro newsletter</p>
            <div className=" flex flex-row h-[50px] w-[250px] bg-white rounded-full mt-5">
              <input
                className="w-[120px] m-3"
                type="text"
                placeholder="Email"
              />
              <button className="bg-zinc-500 hover:bg-zinc-700 text-white text-1xl font-bold py-0.5 px-0.5 rounded-lg m-1">
                Contactar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
