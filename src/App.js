// src/App.js
import React from "react";
import { primeiroPost } from "./posts/primeiro-post";
import cloudImg from "./assets/cloud.jpg";
import serversImg from "./assets/servers.jpg";

function App() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-200 flex flex-col">
      <header className="bg-[#161b22] border-b border-gray-700 p-4">
        <h1 className="text-2xl font-bold text-blue-400">Rádio.Telecon</h1>
        <p className="text-sm text-gray-400">
          Conteúdos sobre Redes de Computadores e Segurança da Informação
        </p>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8 max-w-3xl">
        <article className="bg-[#161b22] p-6 rounded-lg border border-gray-700">
          {/* Imagens lado a lado */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="rounded-lg overflow-hidden border border-gray-700">
              <img
                src={cloudImg}
                alt="Ilustração de computação em nuvem"
                className="w-full h-auto object-cover"
              />
              <p className="text-xs text-gray-500 text-center mt-2">
                A nuvem: invisível, mas essencial.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden border border-gray-700">
              <img
                src={serversImg}
                alt="Sala de servidores de um data center"
                className="w-full h-auto object-cover"
              />
              <p className="text-xs text-gray-500 text-center mt-2">
                Onde a nuvem realmente vive.
              </p>
            </div>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-blue-300 mb-2">
            {primeiroPost.title}
          </h1>
          <p className="text-sm text-gray-500 mb-6">{primeiroPost.date}</p>

          <div
            className="space-y-4 text-gray-300 max-w-none"
            dangerouslySetInnerHTML={{ __html: primeiroPost.content }}
          />

          {/* ✅ Link para o currículo — adicionado aqui */}
          <div className="mt-10 pt-6 border-t border-gray-700">
            <a
              href="https://apresentacao-coral.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow hover:shadow-blue-500/20"
            >
              📄 Acesse meu currículo profissional
            </a>
            <p className="mt-3 text-sm text-gray-500">
              Saiba mais sobre minha trajetória em redes e segurança da informação.
            </p>
          </div>
        </article>
      </main>

      <footer className="bg-[#161b22] border-t border-gray-700 p-4 text-center text-gray-500 text-sm">
        © 2025 Rádio.Telecon — Desenvolvido por Cícero Jorge
      </footer>
    </div>
  );
}

export default App;