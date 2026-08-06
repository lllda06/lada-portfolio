import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <Background />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
      </main>
    </>
  );
}