// src/components/PasswordGeneratorEmbedded.jsx
import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

export default function PasswordGeneratorEmbedded() {
  // Estados para as opções da senha
  const [length, setLength] = useState(12);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("Mova o slider para gerar...");
  const [strength, setStrength] = useState({ level: "forte", color: "#238636", width: 100 });
  const [copied, setCopied] = useState(false);

  // Função para calcular a força da senha
  const calculateStrength = useCallback((len, lower, upper, numbers, symbols) => {
    const diversity = [lower, upper, numbers, symbols].filter(Boolean).length;

    if (len < 8 || diversity < 2) return { level: "fraca", color: "#f85149", width: 30 };
    if (len < 12 || diversity < 3) return { level: "média", color: "#d29922", width: 65 };
    return { level: "forte", color: "#238636", width: 100 };
  }, []);

  // Função para gerar a senha
  const generatePassword = useCallback(() => {
    let charset = "";
    if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) charset += "0123456789";
    if (includeSymbols) charset += "!@#$%^&*()_+-=[]{}|;:,.<>?~`";

    if (!charset) {
      setPassword("⚠️ Selecione ao menos uma opção");
      setStrength({ level: "fraca", color: "#f85149", width: 30 });
      return;
    }

    let result = "";
    for (let i = 0; i < length; i++) {
      const rand = crypto.getRandomValues(new Uint32Array(1))[0];
      result += charset[rand % charset.length];
    }

    setPassword(result);
    setStrength(calculateStrength(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols));
    setCopied(false); // Resetar o estado de cópia ao gerar nova senha
  }, [length, includeLowercase, includeUppercase, includeNumbers, includeSymbols, calculateStrength]);

  // Função para copiar a senha
  const copyToClipboard = useCallback(() => {
    if (password && !password.includes("⚠️")) {
      navigator.clipboard.writeText(password).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  }, [password]);

  // Efeito para gerar a senha inicial
  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  // Efeito para regenerar a senha quando as configurações mudam
  // Isso implementa a geração automática ao mover o slider ou alterar checkboxes
  useEffect(() => {
    generatePassword();
  }, [length, includeLowercase, includeUppercase, includeNumbers, includeSymbols, generatePassword]);

  return (
    // Este contêiner centraliza o conteúdo e aplica estilos do radio.telecon
    // ADICIONADO: bg-[#0d1117] para o fundo escuro da página inteira
    <div className="max-w-3xl mx-auto bg-[#0d1117]">
      {/* Este article aplica o estilo de fundo e borda do radio.telecon */}
      <article className="bg-[#161b22] p-6 rounded-lg border border-gray-700">
        {/* Link de Voltar */}
        <Link to="/" className="inline-flex items-center text-blue-400 hover:underline mb-4">
          ← Voltar à Página Inicial
        </Link>

        {/* Cabeçalho - Copiado do HTML puro e adaptado para JSX */}
        <header className="text-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-300 mb-2">🔐 Powerful password</h1>
          <p className="text-gray-400">Gere instantaneamente uma senha aleatória e segura com a nossa ferramenta online</p>
        </header>

        {/* Main Content - Adaptado do HTML puro */}
        <main>
          <div className="bg-[#161b22] p-6 rounded-lg border border-gray-700">
            <div className="controls space-y-6 mb-8">
              <div className="control-group">
                <label htmlFor="length" className="block text-sm text-gray-400 mb-1">
                  Tamanho: <span id="length-value" className="text-blue-300 font-mono">{length}</span> caracteres
                </label>
                <input
                  type="range"
                  id="length"
                  min="8"
                  max="64"
                  value={length}
                  onChange={(e) => setLength(parseInt(e.target.value, 10))} // Atualiza o estado 'length'
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              <div className="control-group">
                <label className="block text-sm text-gray-400 mb-2">Opções de caracteres:</label>
                <div className="checkbox-group grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      id="lowercase"
                      checked={includeLowercase}
                      onChange={(e) => setIncludeLowercase(e.target.checked)} // Atualiza o estado 'includeLowercase'
                      className="rounded bg-gray-700 border-gray-600 text-blue-500 focus:ring-blue-500"
                    />
                    <span className="font-mono">a-z</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      id="uppercase"
                      checked={includeUppercase}
                      onChange={(e) => setIncludeUppercase(e.target.checked)} // Atualiza o estado 'includeUppercase'
                      className="rounded bg-gray-700 border-gray-600 text-blue-500 focus:ring-blue-500"
                    />
                    <span className="font-mono">A-Z</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      id="numbers"
                      checked={includeNumbers}
                      onChange={(e) => setIncludeNumbers(e.target.checked)} // Atualiza o estado 'includeNumbers'
                      className="rounded bg-gray-700 border-gray-600 text-blue-500 focus:ring-blue-500"
                    />
                    <span className="font-mono">0-9</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      id="symbols"
                      checked={includeSymbols}
                      onChange={(e) => setIncludeSymbols(e.target.checked)} // Atualiza o estado 'includeSymbols'
                      className="rounded bg-gray-700 border-gray-600 text-blue-500 focus:ring-blue-500"
                    />
                    <span className="font-mono">!@#$%</span>
                  </label>
                </div>
              </div>

              <div className="strength">
                <label className="block text-sm text-gray-400 mb-1">
                  Força estimada: <span id="strength-value" className="text-blue-300">{strength.level}</span>
                </label>
                <div className="strength-bar h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    id="strength-fill"
                    className="h-full transition-all duration-300"
                    style={{ width: `${strength.width}%`, backgroundColor: strength.color }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="output mb-6">
              <label className="block text-sm text-gray-400 mb-1">Sua senha segura:</label>
              <div className="relative">
                 <input
                  type="text"
                  id="password-output"
                  value={password} // O valor do input é controlado pelo estado 'password'
                  readOnly
                  className="w-full p-3 bg-[#0d1117] border border-gray-700 rounded text-blue-300 font-mono"
                />
                <button
                  className={`absolute right-2 top-1/2 transform -translate-y-1/2 px-3 py-1 text-xs font-medium rounded ${
                    copied
                      ? "bg-green-600 text-white"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                  onClick={copyToClipboard} // Chama a função para copiar
                >
                  {copied ? "✓ Copiado!" : "Copiar"}
                </button>
              </div>
            </div>

            <div className="tip bg-[#0d1117] border-l-4 border-blue-500 p-4 text-sm text-gray-300 mt-8">
              💡Gere senhas seguras e aleatórias de forma instantânea com nossa ferramenta online, garantindo praticidade e segurança..<br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </main>

        {/* Footer - Adaptado do HTML puro */}
        {/* Opcional: pode remover ou alterar para algo mais integrado ao radio.telecon */}
        {/* <footer className="footer text-center mt-6 text-sm text-gray-500">
          <p>Desenvolvido por <a href="https://apresentacao-coral.vercel.app/  " target="_blank" rel="noopener noreferrer" className="text-blue-400">Cícero Jorge</a></p>
        </footer> */}
      </article>
    </div>
  );
}