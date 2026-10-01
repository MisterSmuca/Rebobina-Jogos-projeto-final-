import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Jogos from "../sections/Jogos";
import Sobre from "../sections/Sobre";
import ChamadaFinal from "../sections/ChamadaFinal";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Jogos />
        <Sobre />
        <ChamadaFinal />
      </main>

      <Footer />
    </>
  );
}

export default LandingPage;