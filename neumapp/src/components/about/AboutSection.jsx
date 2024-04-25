import TeamCard from "./TeamCard";
import Logo from "../../images/logo/Logo.jsx";
import TeamsData from "../../data/team.json";

export default function AboutSection() {
  return (
    <section id="about" className="mt-8 scroll-mt-24">
      <div className="flex flex-col justify-center items-center my-10 sm:flex-row">
        <div className="size-36">
          <Logo />
        </div>

        <h2 className="text-5xl md:text-9xl font-extrabold mt-4 mb-8 md:mb-12 bg-gradient-to-r from-firstInk to-secondInk bg-clip-text text-transparent leading-10 text-shadow-sm shadow-firstInk/10">
          Neumapp
        </h2>
      </div>

      <h4 className="text-center text-3xl sm:text-5xl font-bold text-secondInk mt-2 mb-8 sm:mb-16  text-shadow-lg shadow-firstShadow-300/15">
        Founders
      </h4>

      <div className="container mx-auto w-full max-w-sm md:max-w-3xl lg:mx-0 lg:max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {TeamsData.map((team, _) => (
          <TeamCard
            key={team.id}
            image={team.image}
            person={team.person}
            description={team.description}
            role={team.role}
            gender={team.gender}
            social={team.social}
          />
        ))}
      </div>
    </section>
  );
}
