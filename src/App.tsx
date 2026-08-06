import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar />

      <main className="pt-24">
        <section
          id="home"
          className="flex min-h-screen items-center justify-center"
        >
          <div className="text-center">
            <h1 className="text-6xl font-extrabold">
              Mpumelelo Mbonambi
            </h1>

            <p className="mt-6 text-2xl text-slate-300">
              Software Engineer • Full Stack Developer
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;