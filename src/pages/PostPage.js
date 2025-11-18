// src/pages/PostPage.js
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { primeiroPost } from "../posts/primeiro-post";
import { segundoPost } from "../posts/segundo-post";
import { terceiroPost } from "../posts/terceiro-post";

export default function PostPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { id } = useParams();
  const postId = parseInt(id, 10);

  let post;
  let image1, image2;
  if (postId === 1) {
    post = primeiroPost;
    image1 = require("../assets/cloud.jpg");
    image2 = require("../assets/servers.jpg");
  } else if (postId === 2) {
    post = segundoPost;
    image1 = require("../assets/mikrotik1.jpg");
    image2 = require("../assets/mikrotik2.jpg");
  } else if (postId === 3) {
    post = terceiroPost;
    image1 = require("../assets/ipv6-structure.jpg");
    image2 = require("../assets/submarine-cable.jpg");
  } else {
    return (
      <div className="min-h-screen bg-[#0d1117] text-gray-200 flex items-center justify-center">
        <p className="text-xl text-gray-400">Post não encontrado.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-200 flex flex-col md:flex-row">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      <aside
        className={`fixed md:static inset-y-0 left-0 z-50 w-64 bg-[#161b22] border-r border-gray-700 p-6 transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0`}
      >
        <div className="flex justify-between items-center mb-6">
          <Link to="/" className="text-xl font-bold text-blue-400 hover:text-blue-300 transition">
            Rádio.Telecon
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden text-gray-400 hover:text-white text-xl"
            aria-label="Fechar menu"
          >
            &times;
          </button>
        </div>
        <p className="text-sm text-gray-400 mb-8 hidden md:block">
          Conteúdos sobre Redes de Computadores e Segurança da Informação
        </p>

        <h3 className="text-lg font-semibold text-blue-300 mb-4">Últimas Publicações</h3>
        <div className="space-y-3">
          {[primeiroPost, segundoPost, terceiroPost].map(p => (
            <Link // Usando Link em vez de <a>
              key={p.id}
              to={`/post/${p.id}`} // Usando to em vez de href
              onClick={() => setSidebarOpen(false)}
              className={`block p-2 rounded hover:bg-[#0d1117] border border-gray-700 text-sm ${
                p.id === postId ? 'bg-blue-700' : ''
              }`}
            >
              <h4 className="font-medium text-blue-400 truncate">{p.title}</h4>
              <p className="text-xs text-gray-500 mt-1 md:hidden">{p.date}</p>
            </Link>
          ))}
        </div>

        {/* --- ATUALIZADO: Link para o Gerador de Senhas Interno --- */}
        <div className="mt-6 pt-4 border-t border-gray-700">
          <Link // Usando Link em vez de <a>
            to="/senha-forte" // Rota interna para o componente React
            onClick={() => setSidebarOpen(false)} // Fecha sidebar em mobile
            className="block p-2 rounded hover:bg-[#0d1117] border border-gray-700 text-sm text-blue-400 font-medium"
          >
            🔐 Gerador de Senhas Fortes
          </Link>
        </div>
        {/* --- FIM ATUALIZADO --- */}

      </aside>

      <main className={`flex-1 container mx-auto px-4 py-8 md:px-6 max-w-4xl ${sidebarOpen ? 'md:ml-64' : 'md:ml-0'}`}>
        <header className="md:hidden mb-6 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition">
            Rádio.Telecon
          </Link>
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-blue-400 text-2xl focus:outline-none"
            aria-label="Abrir menu"
          >
            ☰
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="rounded-lg overflow-hidden border border-gray-700">
            <img
              src={image1}
              alt="Imagem 1 do post"
              className="w-full h-auto object-cover"
            />
            <p className="text-xs text-gray-500 text-center mt-2">
              {postId === 1
                ? "A nuvem: invisível, mas essencial."
                : postId === 2
                ? "MikroTik RB750Gr3 — frente"
                : "IPv6: estrutura de endereçamento"}
            </p>
          </div>
          <div className="rounded-lg overflow-hidden border border-gray-700">
            <img
              src={image2}
              alt="Imagem 2 do post"
              className="w-full h-auto object-cover"
            />
            <p className="text-xs text-gray-500 text-center mt-2">
              {postId === 1
                ? "Onde a nuvem realmente vive."
                : postId === 2
                ? "MikroTik RB750Gr3 — traseira"
                : "Cabo submarino: espinha dorsal da internet"}
            </p>
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-blue-300 mb-2">
          {post.title}
        </h1>
        <p className="text-sm text-gray-500 mb-6">{post.date}</p>

        <div
          className="prose prose-invert space-y-4 text-gray-300 max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

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
      </main>
    </div>
  );
}