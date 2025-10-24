// src/posts/primeiro-post.js

export const primeiroPost = {
  id: 1,
  title: "Quando a Nuvem Cai: A História de Como a AWS Parou o Mundo — Duas Vezes",
  date: "22 de outubro de 2025",
  content: `
    <p>Você já parou pra pensar que, por trás de cada mensagem no Slack, cada filme no Netflix, cada pedido no iFood, existe um <strong>exército invisível de servidores, cabos e protocolos</strong> trabalhando em silêncio?</p>

    <p>Pois é. E às vezes, esse exército tropeça.</p>

    <p>Na verdade, <strong>ele já tropeçou duas vezes de forma tão grande que o mundo inteiro sentiu</strong>. E as duas vezes… foi por causa da <strong>Amazon Web Services (AWS)</strong> — a gigante que, sem muita gente perceber, virou o alicerce da internet moderna.</p>

    <h2>Tudo começou com livros… e virou nuvem</h2>

    <p>Nos anos 1990, a Amazon vendia livros pela internet. Só isso. Mas Jeff Bezos sonhava alto: queria ser a “loja de tudo”. Para isso, precisava de uma máquina poderosa por trás — servidores, bancos de dados, redes que aguentassem milhões de pessoas comprando ao mesmo tempo.</p>

    <p>Só que, dentro da empresa, os times estavam perdendo tempo reinventando a roda: um criava um jeito de guardar arquivos, outro inventava um sistema de login, outro montava um jeito de escalar servidores…</p>

    <p>Até que alguém teve uma ideia brilhante:<br>
    <em>“E se a gente transformasse toda essa infraestrutura em um serviço que qualquer um pudesse alugar?”</em></p>

    <p>Em 2006, nasceu a <strong>AWS</strong> — com três ferramentas simples:<br>
    - <strong>S3</strong> (para guardar arquivos),<br>
    - <strong>EC2</strong> (para rodar servidores),<br>
    - <strong>SQS</strong> (para mensagens entre sistemas).</p>

    <p>Ninguém imaginava que aquilo se tornaria o <strong>chão onde a internet moderna foi construída</strong>.</p>

    <p>Hoje, a AWS hospeda o <strong>Netflix, o Airbnb, o Slack, o Nubank, a NASA, e até hospitais</strong>. Tudo isso roda em data centers espalhados pelo mundo — mas com um detalhe: <strong>muita coisa ainda depende de um só lugar</strong>: Ashburn, Virgínia. A região <strong>US-EAST-1</strong>.</p>

    <p>E é aí que a história fica tensa.</p>

    <h2>2017: O dia em que um comando errado derrubou a internet</h2>

    <p>Era manhã de 28 de fevereiro de 2017. Um engenheiro da AWS estava fazendo uma manutenção de rotina. Só que, por um erro de digitação, ele removeu <strong>muito mais servidores do que deveria</strong> — incluindo os que controlavam o próprio sistema de armazenamento (S3).</p>

    <p>Resultado?<br>
    O S3 parou. E como <strong>milhares de apps dependem do S3</strong> para carregar imagens, arquivos e configurações… tudo começou a cair.<br>
    Netflix travou. Slack parou. Startups inteiras ficaram no escuro.</p>

    <p>Levou <strong>quatro horas</strong> para consertar. Parece pouco, mas na internet, quatro horas é uma eternidade.</p>

    <p>O mais curioso?<br>
    A AWS <strong>reconheceu o erro publicamente</strong> — algo raro na indústria. E prometeu melhorar.<br>
    Mas… será que melhorou mesmo?</p>

    <h2>2025: O apagão que mostrou que ainda não aprendemos</h2>

    <p>Na sexta-feira, <strong>18 de abril de 2025</strong>, aconteceu de novo.<br>
    Desta vez, não foi um erro humano. Foi uma <strong>falha na rede interna</strong> que conecta os data centers de Ashburn. Algo quebrou na “espinha dorsal” da AWS — e o efeito dominó foi imediato.</p>

    <p>S3, Lambda, API Gateway, DynamoDB… tudo começou a falhar.<br>
    Slack não enviava mensagens.<br>
    DoorDash cancelava pedidos.<br>
    Hospitais nos EUA tiveram problemas em sistemas críticos.</p>

    <p>E o pior?<br>
    <strong>Os próprios sistemas de monitoramento da AWS também caíram.</strong><br>
    Ou seja: eles só descobriram a gravidade do problema… quando o mundo inteiro começou a reclamar.</p>

    <p>Mais de <strong>três horas</strong> depois, aos poucos, a nuvem voltou a respirar.</p>

    <h2>Por que isso importa — de verdade?</h2>

    <p>Porque mostra algo que muitos preferem ignorar:<br>
    <em>“A internet não é mágica. Ela é frágil.”</em></p>

    <p>Ela depende de:<br>
    - <strong>Decisões de engenheiros</strong><br>
    - <strong>Escolhas de arquitetura</strong><br>
    - <strong>E, acima de tudo, humildade</strong></p>

    <p>Muitas empresas ainda colocam <strong>tudo em uma só região da AWS</strong>, como se Ashburn fosse imortal.<br>
    Muitos devs ainda acham que “a nuvem nunca cai”.</p>

    <p>Mas cai.<br>
    E quando cai, <strong>não é só um site que some — é confiança que se perde, negócios que param, vidas que são afetadas</strong>.</p>

    <h2>O que podemos aprender com isso?</h2>

    <p>Que <strong>tecnologia não é só sobre inovar — é sobre resistir</strong>.<br>
    Que <strong>redundância não é gasto, é responsabilidade</strong>.<br>
    E que, mesmo nas maiores empresas do mundo, <strong>um único ponto de falha pode desmontar tudo</strong>.</p>

    <p>Para quem trabalha com redes e segurança — como a gente aqui na Rádio.Telecon —, esses apagões não são só notícias.<br>
    São <strong>lições escritas em tempo real</strong>.</p>

    <p>E é por isso que começamos este blog:<br>
    <strong>para lembrar que por trás de cada bit, há uma história humana.</strong></p>

    <p class="text-right mt-8 italic text-gray-400">
      📻 <strong>Esta é a primeira transmissão da Rádio.Telecon</strong> 
    </p>
  `
};