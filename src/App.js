// src/App.js
import React from "react";
import { Link } from "react-router-dom";

function App() {
  const posts = [
    {
      id: 1,
      title: "Quando a Nuvem Cai: A História de Como a AWS Parou o Mundo — Duas Vezes",
      date: "22 de outubro de 2025",
      excerpt: "Do apagão de 2017 ao colapso de 2025: lições de infraestrutura que todo profissional deve conhecer."
    },
    {
      id: 2,
      title: "MikroTik RB750Gr3: Um roteador robusto que cabe no bolso — e no seu rack",
      date: "28 de outubro de 2025",
      excerpt: "Firewall, failover, controle por MAC e mais: o que esse roteador de R$ 600 pode fazer pela sua rede."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-200 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#161b22] border-r border-gray-700 p-6">
        <h2 className="text-xl font-bold text-blue-400 mb-6">Rádio.Telecon</h2>
        <p className="text-sm text-gray-400 mb-8">Conteúdos sobre Redes de Computadores e Segurança da Informação</p>

        <h3 className="text-lg font-semibold text-blue-300 mb-4">Últimas Publicações</h3>
        <div className="space-y-4">
          {posts.map(post => (
            <Link
              key={post.id}
              to={`/post/${post.id}`}
              className="block p-3 rounded-lg bg-[#0d1117] hover:bg-[#161b22] border border-gray-700 transition"
            >
              <h4 className="text-sm font-medium text-blue-400">{post.title}</h4>
              <p className="text-xs text-gray-500 mt-1">{post.date}</p>
            </Link>
          ))}
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 container mx-auto px-6 py-8 max-w-4xl">
        {/* Banner com fotos antigas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="rounded-lg overflow-hidden border border-gray-700">
            <img
              src={require("./assets/retro-computer.jpg")}
              alt="Computador antigo"
              className="w-full h-auto object-cover"
            />
            <p className="text-xs text-gray-500 text-center mt-2">
              Tecnologia que moldou o futuro.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden border border-gray-700">
            <img
              src={require("./assets/network-cabinet.jpg")}
              alt="Rack de servidores antigo"
              className="w-full h-auto object-cover"
            />
            <p className="text-xs text-gray-500 text-center mt-2">
              O coração das redes antigas.
            </p>
          </div>
        </div>

        {/* Descrição da Rádio.Telecon */}
        <article className="bg-[#161b22] p-6 rounded-lg border border-gray-700">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-300 mb-4">
            Bem-vindo à Rádio.Telecon
          </h1>
          <p className="mb-4">
            Este é um espaço criado por quem entende de redes e segurança da informação — e quer compartilhar conhecimento sem firulas, com foco no que realmente importa.
          </p>
          <p className="mb-4">
            Aqui você vai encontrar conteúdos práticos, histórias reais de infraestrutura, dicas de equipamentos e análises técnicas — tudo escrito por alguém que vive isso no dia a dia.
          </p>
          <p className="mb-4">
            Seja bem-vindo(a) — e fique à vontade para explorar os posts na barra lateral!
          </p>
          <div className="mt-6 pt-6 border-t border-gray-700">
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

export default App;