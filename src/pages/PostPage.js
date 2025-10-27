// src/pages/PostPage.js
import React from "react";
import { useParams } from "react-router-dom";
import { primeiroPost } from "../posts/primeiro-post";
import { segundoPost } from "../posts/segundo-post";

export default function PostPage() {
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
  } else {
    return (
      <div className="min-h-screen bg-[#0d1117] text-gray-200 flex items-center justify-center">
        <p>Post não encontrado.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-200 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#161b22] border-r border-gray-700 p-6">
        <h2 className="text-xl font-bold text-blue-400 mb-6">Rádio.Telecon</h2>
        <p className="text-sm text-gray-400 mb-8">Conteúdos sobre Redes de Computadores e Segurança da Informação</p>

        <h3 className="text-lg font-semibold text-blue-300 mb-4">Últimas Publicações</h3>
        <div className="space-y-4">
          {[primeiroPost, segundoPost].map(p => (
            <a
              key={p.id}
              href={`/post/${p.id}`}
              className={`block p-3 rounded-lg ${
                p.id === postId ? "bg-blue-700" : "bg-[#0d1117]"
              } hover:bg-[#161b22] border border-gray-700 transition`}
            >
              <h4 className="text-sm font-medium text-blue-400">{p.title}</h4>
              <p className="text-xs text-gray-500 mt-1">{p.date}</p>
            </a>
          ))}
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 container mx-auto px-6 py-8 max-w-4xl">
        <article className="bg-[#161b22] p-6 rounded-lg border border-gray-700">
          {/* Imagens lado a lado */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="rounded-lg overflow-hidden border border-gray-700">
              <img
                src={image1}
                alt="Imagem 1 do post"
                className="w-full h-auto object-cover"
              />
              <p className="text-xs text-gray-500 text-center mt-2">
                {postId === 1 ? "A nuvem: invisível, mas essencial." : "MikroTik RB750Gr3 — frente"}
              </p>
            </div>
            <div className="rounded-lg overflow-hidden border border-gray-700">
              <img
                src={image2}
                alt="Imagem 2 do post"
                className="w-full h-auto object-cover"
              />
              <p className="text-xs text-gray-500 text-center mt-2">
                {postId === 1 ? "Onde a nuvem realmente vive." : "MikroTik RB750Gr3 — traseira"}
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
        </article>
      </main>
    </div>
  );
}