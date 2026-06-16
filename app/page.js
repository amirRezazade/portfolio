import Background from "@/components/background/Background";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Skils from "./Skils";
import Projects from "./Projects";
import ContactMe from "./ContactMe";

export default function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <Header />
      <AboutMe />
      <Skils />
      <Projects />
      <ContactMe />
      <Footer />
    </>
  );
}
