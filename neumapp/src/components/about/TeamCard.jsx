export default function TeamCard({ image, person, description, role }) {
  return (
    <article className="flex gap-4 lg:gap-6 w-[90%] mx-auto ">
      <img
        src={image}
        alt={person}
        className="h-40 w-40 lg:h-56 lg:w-56 rounded-xl object-cover border-[0.2rem] border-secondInk/50 shadow-xl"
      />
      <div className="w-auto text-secondInk rounded-2xl bg-secondInk-200/30 py-4 px-3 lg:py-8 lg:px-6">
        <h2 className="text-lg text-center font-bold">{person}</h2>
        <h2 className="text-sm italic text-center font-semibold">{role}</h2>
        <p className="text-sm text-firstInk text-center mt-2">{description}</p>
      </div>
    </article>
  );
}
