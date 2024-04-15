import TeamCard from "./TeamCard";
import Logo from "../../images/Logo.svg";
import TeamsData from "../../data/team.json";

export default function AboutSection() {
  return (
    <section id="about" className="bg-zinc-700 mt-8">
      <img src={Logo} alt="Logo" className="h-20 lg:h-40 w-full" />
      <h4 className="text-center text-3xl font-bold text-white mt-4 mb-8 md:mb-12">
        founders
      </h4>
      <div className="container mx-auto w-full max-w-sm md:max-w-3xl lg:mx-0 lg:max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {TeamsData.map((team, _) => (
          <TeamCard
            key={team.id}
            image={team.image}
            person={team.person}
            description={team.description}
            role={team.role}
          />
        ))}
      </div>
    </section>
  );
}
