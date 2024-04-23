import TestimonialCard from "./TestimonialCard";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="mt-10 mb-32">
      <h3 className=" text-center text-4xl font-bold tracking-tight text-secondInk sm:text-7xl my-5 sm:mb-12 text-shadow-sm shadow-firstInk/50">
        Testimonios
      </h3>
      <div className="container mx-auto w-full max-w-sm md:max-w-3xl lg:mx-0 lg:max-w-6xl">
        <TestimonialCard />
      </div>
    </section>
  );
}


