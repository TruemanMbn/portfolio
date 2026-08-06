import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";

function App() {
  return (
    <div className="bg-slate-950 text-white">
      <Navbar />

      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default App;