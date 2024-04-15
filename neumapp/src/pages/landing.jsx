import Faq from "../components/faq";
import Contact from "../components/contact";
import AboutHistorySection from "../components/aboutHistory/AboutHistorySection";
import AboutSection from "../components/about/AboutSection";
import TestimonialsSection from "../components/testimonial/TestimonialsSection";
import NavBar from "../components/NavBar";
import LandingOne from "../components/landingOne";
import LandingTwo from "../components/landingTwo";
import Servicios from "../components/Servicios";

export default function Landing() {
  return (
    <main className="bg-zinc-700 ">
      <NavBar />
      <div className="w-[90%] max-w-6xl mx-auto">
        <LandingOne />
        <LandingTwo />
        <Servicios />
        <TestimonialsSection />
        <AboutSection />
        <AboutHistorySection />
        <Faq />
        <Contact />
      </div>
    </main>
  );
}
