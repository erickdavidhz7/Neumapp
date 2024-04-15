import Logo from "../../images/Logo.svg";

export default function AboutHistorySection() {
  return (
    <section id="aboutHistory" className="bg-zinc-700 mt-20">
      <div className="container w-[90%] mx-auto max-w-md lg:max-w-4xl">
        <img src={Logo} alt="Logo" className="h-20 w-48 lg:h-28 lg:w-80" />
        <h3 className="text-2xl lg:text-4xl text-white text-center font-semibold my-10">
          ¿ Por qué creamos Neumapp ?
        </h3>
        <p className="text-sm lg:text-lg text-center text-white leading-normal">
          Lorem ipsum dolor sit amet consectetur. Porta feugiat leo ut non
          mauris tincidunt blandit urna. Lacus aliquam egestas tellus cursus
          tristique purus egestas tristique. Ipsum non eget nunc aliquet duis
          vitae sem porttitor. Volutpat leo aenean ut vitae. Lorem ipsum dolor
          sit amet consectetur. Porta feugiat leo ut non mauris tincidunt
          blandit urna. Lacus aliquam egestas tellus cursus tristique purus
          egestas tristique. Ipsum non eget nunc aliquet duis vitae sem
          porttitor. Volutpat leo aenean ut vitae. Lorem ipsum dolor sit amet
          consectetur. Porta feugiat leo ut non mauris tincidunt blandit urna.
          Lacus aliquam egestas tellus cursus tristique purus egestas tristique.
          Ipsum non eget nunc aliquet duis vitae sem porttitor. Volutpat leo
          aenean ut
        </p>
      </div>
    </section>
  );
}
