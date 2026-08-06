import Background from "./components/Background";

export default function Home() {
  return (
    <>
      <Background />

      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-5xl font-bold text-white">
          Lada Portfolio
        </h1>
      </main>
    </>
  );
}