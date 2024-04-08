import Faq from "../components/faq";
import Contact from "../components/contact";
import AboutHistorySection from "../components/AboutHistorySection";
import AboutSection from "../components/AboutSection";
import TestimonialsSection from "../components/TestimonialsSection";

export default function Landing() {
  return (
    <main className="bg-zinc-700">
      <div className="w-[90%] max-w-6xl mx-auto">
        <Faq />
        <Contact />
        <TestimonialsSection />
        <AboutSection />
        <AboutHistorySection />
      </div>
    </main>
  );
}
