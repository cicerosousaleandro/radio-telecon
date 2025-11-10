// src/App.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const posts = [
    {
      id: 3,
      title: "IPv6: A Internet Precisou Crescer de Novo — e Foi Além do Imaginável",
      date: "10 de novembro de 2025",
      excerpt: "Como o esgotamento do IPv4 levou ao NAT — e por que o IPv6 está devolvendo simplicidade à rede mundial."
    },
    {
      id: 2,
      title: "MikroTik RB750Gr3: Um roteador robusto que cabe no bolso — e no seu rack",
      date: "28 de outubro de 2025",
      excerpt: "Firewall, failover, controle por MAC e mais: o que esse roteador de R$ 600 pode fazer pela sua rede."
    },
    {
      id: 1,
      title: "Quando a Nuvem Cai: A História de Como a AWS Parou o Mundo — Duas Vezes",
      date: "22 de outubro de 2025",
      excerpt: "Do apagão de 2017 ao colapso de 2025: lições de infraestrutura que todo profissional deve conhecer."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-200 flex flex-col md:flex-row">
      {/* Overlay escuro (só em mobile, quando sidebar aberta) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
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
          {posts.map(post => (
            <Link
              key={post.id}
              to={`/post/${post.id}`}
              onClick={() => setSidebarOpen(false)}
              className="block p-2 rounded hover:bg-[#0d1117] border border-gray-700 text-sm"
            >
              <h4 className="font-medium text-blue-400 truncate">{post.title}</h4>
              <p className="text-xs text-gray-500 mt-1 md:hidden">{post.date}</p>
            </Link>
          ))}
        </div>
      </aside>

      {/* Main content */}
      <main className={`flex-1 container mx-auto px-4 py-8 md:px-6 max-w-4xl ${sidebarOpen ? 'md:ml-64' : 'md:ml-0'}`}>
        {/* Cabeçalho com botão hamburguer (só em mobile) */}
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