// src/App.js
import React from "react";
import { primeiroPost } from "./posts/primeiro-post";

function App() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-200 flex flex-col">
      {/* Cabeçalho */}
      <header className="bg-[#161b22] border-b border-gray-700 p-4">
        <h1 className="text-2xl font-bold text-blue-400">Rádio.Telecon</h1>
        <p className="text-sm text-gray-400">
          Conteúdos sobre Redes de Computadores e Segurança da Informação
        </p>
      </header>

      {/* Corpo principal */}
      <main className="flex-1 container mx-auto px-4 py-8 max-w-3xl">
        {/* Título do post */}
        <article className="bg-[#161b22] p-6 rounded-lg border border-gray-700">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-300 mb-2">
            {primeiroPost.title}
          </h1>
          <p className="text-sm text-gray-500 mb-6">{primeiroPost.date}</p>

          {/* Conteúdo do post (HTML seguro) */}
          <div
            className="prose prose-invert max-w-none text-gray-300"
            dangerouslySetInnerHTML={{ __html: primeiroPost.content }}
          />
        </article>
      </main>

      {/* Rodapé */}
      <footer className="bg-[#161b22] border-t border-gray-700 p-4 text-center text-gray-500 text-sm">
        © 2025 Rádio.Telecon — Desenvolvido por Cícero Jorge
      </footer>
    </div>
  );
}

export default App;