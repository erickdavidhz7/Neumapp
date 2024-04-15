import TestimonialCard from "./TestimonialCard";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-zinc-700">
      <h2 className="text-center text-5xl font-bold text-white mb-8 md:mb-12">
        Testimonios
      </h2>
      <div className="container mx-auto w-full max-w-sm md:max-w-3xl lg:mx-0 lg:max-w-6xl">
        <TestimonialCard />
      </div>
    </section>
  );
}
