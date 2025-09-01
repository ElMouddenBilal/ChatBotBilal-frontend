import bilalNeon from "../assets/bilalneon.png";

function Hero() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Texto */}
        <div className="flex-1 text-center md:text-left max-w-xl">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-snug mb-6">
            Bienvenido a mi{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
              ChatBot
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Un asistente creado para simular una{" "}
            <span className="font-semibold text-blue-400">
              entrevista interactiva
            </span>{" "}
            conmigo, <span className="font-semibold">Bilal El Moudden</span>.  
            Pregúntame sobre mis{" "}
            <span className="font-semibold">estudios</span>,{" "}
            <span className="font-semibold">proyectos</span> y{" "}
            <span className="font-semibold">experiencia profesional</span> 🚀
          </p>

          {/* Botones */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={() => scrollToSection("chatbot")}
              className="px-8 py-4 rounded-xl text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:scale-105 transition-transform"
            >
              Probar el ChatBot
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="px-8 py-4 rounded-xl text-lg font-semibold border border-blue-400 text-blue-400 hover:bg-blue-400/10 hover:scale-105 transition-transform"
            >
              Más información
            </button>
          </div>
        </div>

        {/* Imagen */}
        <div className="flex-1 flex justify-center">
          <img
            src={bilalNeon}
            alt="Bilal El Moudden"
            className="w-[380px] sm:w-[420px] md:w-[480px] h-auto hover:scale-105 transition-transform drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
