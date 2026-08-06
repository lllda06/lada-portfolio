import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

export default function Home() {
  return (
    <>
      <Background />

      <Navbar />

      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}