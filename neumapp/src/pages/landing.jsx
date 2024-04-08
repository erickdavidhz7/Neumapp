import Faq from "../components/faq";
import Contact from "../components/contact";
import NavBar from "../components/NavBar";
import LandingOne from "../components/landingOne";
import LandingTwo from "../components/landingTwo";
import Servicios from "../components/Servicios";
export default function Landing() {
    return (
        <>
          <NavBar />
          <LandingOne />
          <LandingTwo />
          <Servicios />
          <Faq />
          <Contact />
        </>
    );
}