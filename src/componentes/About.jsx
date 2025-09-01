function About() {
  return (
    <section id="about" className="relative w-full py-32 mt-20">
      <div className="max-w-4xl mx-auto text-center px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold inline-block py-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            ¿De qué va este ChatBot?
          </h2>
        </div>

        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Este ChatBot fue creado para simular una entrevista interactiva
          conmigo, <span className="font-semibold">Bilal El Moudden</span>.  
          Está entrenado para responder únicamente sobre mi{" "}
          <span className="font-semibold text-purple-400">perfil profesional</span>,{" "}
          <span className="font-semibold text-purple-400">estudios</span>,{" "}
          <span className="font-semibold text-purple-400">experiencia</span> y proyectos.
        </p>

        <p className="mt-8 text-lg md:text-xl text-gray-300 leading-relaxed">
          Su objetivo es mostrar de manera dinámica mis habilidades como{" "}
          <span className="font-semibold text-blue-400">desarrollador fullstack</span>, 
          con especial inclinación hacia el{" "}
          <span className="font-semibold text-purple-400">Frontend</span>, además de mi interés en la{" "}
          <span className="font-semibold text-blue-400">Inteligencia Artificial</span> 
          y la <span className="font-semibold text-blue-400">automatización</span>.
        </p>
      </div>
    </section>
  );
}

export default About;
