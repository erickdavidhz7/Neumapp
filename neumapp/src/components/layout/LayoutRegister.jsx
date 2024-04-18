import SwitchRegister from "./SwitchRegister";
import Logo from "../../images/logo/Logo.jsx";
import { useState } from "react";

const LayoutRegister = () => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <section className="min-h-screen bg-zinc-700 flex justify-center items-center">
      <div className="flex flex-col lg:flex-row justify-between w-[90%] max-w-7xl mx-auto gap-y-8 lg:gap-0">
        <article className="flex justify-start items-center mx-auto lg:mx-0">
          <Logo width={"10vw"} color="white" />
          <span className="text-5xl lg:text-9xl text-white">Neumapp</span>
        </article>
        <article className="h-full w-full lg:w-1/3 p-8 rounded-2xl">
          <SwitchRegister>
            
          </SwitchRegister>
        </article>
      </div>
    </section>
  );
};
export default LayoutRegister;
