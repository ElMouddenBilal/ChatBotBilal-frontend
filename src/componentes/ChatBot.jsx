import { useState, useEffect, useRef } from "react";
import axios from "axios";

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("https://chatbotbilal-backend.onrender.com/chat", {
      message: input,
    });
      const botMessage = { sender: "bot", text: res.data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Error al conectar con el servidor." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <section id="chatbot" className="relative w-full py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Título */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold inline-block py-2 leading-snug bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-sm">
            Habla conmigo en tiempo real
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            Este chat está diseñado para simular una entrevista interactiva
            conmigo. Pregúntame sobre mis estudios, proyectos y perfil
            profesional 🚀
          </p>
        </div>

        {/* Caja futurista */}
        <div className="relative rounded-2xl sm:rounded-3xl p-[2px] bg-gradient-to-r from-blue-500 to-purple-600 shadow-xl">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl flex flex-col h-[550px] sm:h-[650px] overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-3 sm:py-4 font-semibold text-sm sm:text-base tracking-wide shadow-inner">
              🤖 ChatBot Bilal
            </div>

            {/* Mensajes */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3 sm:space-y-4 bg-black/20">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`px-4 py-2 rounded-2xl max-w-[75%] sm:max-w-sm text-sm sm:text-base shadow-md ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white self-end ml-auto"
                      : "bg-white/90 text-gray-900 self-start mr-auto"
                  }`}
                >
                  {msg.text}
                </div>
              ))}

              {loading && (
                <div className="bg-white/40 text-gray-800 px-4 py-2 rounded-2xl max-w-[60%] sm:max-w-xs self-start mr-auto italic shadow-md text-sm sm:text-base">
                  Escribiendo...
                </div>
              )}

              <div ref={messagesEndRef}></div>
            </div>

            {/* Input futurista */}
            <div className="p-3 sm:p-4 flex space-x-2 sm:space-x-3 border-t border-white/20 bg-black/30 backdrop-blur-md">
              <textarea
                rows="1"
                className="flex-1 bg-white/10 text-white border border-white/20 rounded-xl px-3 sm:px-4 py-2 sm:py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-sm sm:text-base"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Escribe un mensaje..."
              />
              <button
                onClick={sendMessage}
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:scale-105 transition text-sm sm:text-base"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChatBot;
