import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>

      <Background />

      <Navbar />

      <main>
        <Hero />
      </main>
    </>
  );
}