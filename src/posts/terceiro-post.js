// src/posts/terceiro-post.js
export const terceiroPost = {
  id: 3,
  title: "IPv6: A Internet Precisou Crescer de Novo — e Foi Além do Imaginável",
  date: "10 de novembro de 2025",
  content: `
<p>Você já parou pra pensar em como a internet “acha” seu celular, seu computador ou até sua geladeira inteligente? Tudo isso acontece graças a um endereço único — como um CEP digital — chamado <strong>IP</strong> (<em>Internet Protocol</em>).</p>

<p>No começo, lá nos anos 1980, a internet era basicamente um projeto militar e acadêmico dos EUA. Poucas universidades, poucos computadores. O padrão usado era o <strong>IPv4</strong> — uma sequência de 4 números separados por pontos, tipo <code>192.168.0.1</code>. Parece familiar, né? Esse sistema dava cerca de <strong>4,3 bilhões</strong> de combinações possíveis. Na época, era <em>mais do que suficiente</em>.</p>

<div class="bg-[#0d1117] border-l-4 border-blue-500 p-4 my-6 text-sm text-gray-300">
  💡 Curiosidade: o primeiro endereço IP registrado foi para a Universidade de Wisconsin, em 1982. Hoje, ele está aposentado — mas vive na memória dos geeks.
</div>

<p>Mas aí veio a explosão: computadores pessoais, celulares, smart TVs, câmeras, relógios, carros… Hoje, são <strong>mais de 20 bilhões</strong> de dispositivos conectados. E aí, o problema ficou claro: <strong>os IPs do IPv4 acabaram</strong>. Literalmente. Como tentar colocar 10 carros em 4 vagas de garagem.</p>

<h2>O “truque” que salvou a internet por décadas: o NAT</h2>

<p>➡️ Aí entrou o <strong>NAT</strong> (<em>Network Address Translation</em>): um “truque” que permite que vários dispositivos (seu celular, notebook, PS5…) compartilhem <strong>um único IP público</strong> usando IPs internos (como o <code>192.168.x.x</code>).</p>

<p>É como se sua casa tivesse um único número na rua (o IP público), mas lá dentro cada morador tem um apelido (IP privado). Funciona bem — e salvou a internet por décadas —, mas é como morar em um prédio onde todas as correspondências vêm endereçadas só para o porteiro. Ele tem que repassar tudo… e, às vezes, algo se perde no caminho.</p>

<p>O NAT resolveu o problema de curto prazo… mas trouxe custos: maior latência, dificuldade em hospedar serviços locais, e até brechas de segurança — afinal, camadas extras de tradução são pontos onde erros (e ataques) podem se esconder.</p>

<h2>E a solução de longo prazo? O IPv6.</h2>

<p>Lançado oficialmente em 1998 (e só adotado de verdade a partir dos anos 2010), o IPv6 é como se a internet tivesse construído um novo bairro — com <em>muito</em> mais espaço.</p>

<p>Em vez de 4 números, ele usa 8 blocos hexadecimais enormes:<br>
  <code class="bg-gray-800 px-2 py-1 rounded">2001:0db8:85a3:0000:0000:8a2e:0370:7334</code><br>
  (…sim, é feio de ler, mas os dispositivos não se importam 😅)</p>

<p>A quantidade de endereços? <strong>340 undecilhões</strong> — isso é um 34 seguido de <em>37 zeros</em>. Pra você ter ideia: é mais do que grãos de areia na Terra… <em>multiplicado por um milhão</em>.</p>

<p>Com IPv6, cada lâmpada, cada sensor de trânsito, cada drone pode ter seu próprio IP <em>direto</em>, sem depender do NAT. Tudo fica mais simples, mais rápido e mais seguro — afinal, não precisa mais de “porteiros” intermediando tudo.</p>

<h2>E os cabos no fundo do oceano?</h2>

<p>Pra fechar com um toque épico: quase <strong>99%</strong> do tráfego internacional passa por <strong>cabos de fibra óptica no fundo do oceano</strong> — verdadeiras rodovias de luz, ligando continentes. São mais de <strong>1,3 milhão de km</strong> de cabos submarinos (três vezes a distância da Terra à Lua!).</p>

<p>E esses cabos, hoje, carregam IPv6 junto com o IPv4 — porque a internet não parou de crescer. Ela só aprendeu a respirar melhor.</p>

<div class="bg-[#0d1117] border-l-4 border-green-500 p-4 my-6 text-sm text-gray-300">
  🌍 Dado real: o Brasil já tem mais de <strong>50%</strong> do tráfego de acesso ao Google usando IPv6 — uma das maiores taxas da América Latina. Ou seja: o futuro <em>já está aqui</em>. Só está mais discreto.
</div>

<p>Até a próxima transmissão!<br>
📡 <em>Rádio Telecon: onde a tecnologia se conecta com a gente.</em></p>
  `.trim(),
};