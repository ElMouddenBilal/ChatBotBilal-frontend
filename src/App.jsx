import Hero from "./componentes/Hero";
import About from "./componentes/About";
import ChatBot from "./componentes/ChatBot";

function App() {
  return (
    <div className="min-h-screen w-full relative text-white overflow-hidden">
      {/* Fondo Azure Depths */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)",
        }}
      />

      {/* Luces difusas IA */}
      <div className="absolute top-[-10%] left-[-10%] w-[35rem] h-[35rem] bg-blue-500/25 rounded-full blur-[160px] animate-pulse" />
      <div className="absolute top-[20%] right-[-15%] w-[30rem] h-[30rem] bg-purple-600/25 rounded-full blur-[160px] animate-pulse delay-700" />
      <div className="absolute top-[40%] left-[65%] w-[25rem] h-[25rem] bg-cyan-400/20 rounded-full blur-[140px] animate-pulse delay-1000" />

      {/* Contenido */}
      <div className="relative z-10">
        <Hero />
        <About />
        <ChatBot />
      </div>
    </div>
  );
}

export default App;
