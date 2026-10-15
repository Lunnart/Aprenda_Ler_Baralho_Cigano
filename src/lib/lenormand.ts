export interface LenormandCard {
  number: number;
  name: string;
  symbol: string;
  keywords: string[];
  meaning: string;
  love: string;
  work: string;
  health: string;
}

export const lenormandCards: LenormandCard[] = [
  {
    number: 1,
    name: "O Cavaleiro",
    symbol: "🐎",
    keywords: ["notícias", "movimento", "visita", "novidades"],
    meaning:
      "O Cavaleiro traz notícias, mensagens e movimento. Algo ou alguém está a caminho. Representa rapidez, novidades e a chegada de informações importantes.",
    love: "Um novo pretendente pode surgir, ou notícias de alguém que está longe.",
    work: "Novas oportunidades, propostas ou mudanças rápidas no ambiente profissional.",
    health: "Relacionado às pernas e ao sistema circulatório. Indica necessidade de movimento.",
  },
  {
    number: 2,
    name: "O Trevo",
    symbol: "🍀",
    keywords: ["sorte", "oportunidade", "pequenas alegrias"],
    meaning:
      "O Trevo é a carta da sorte e das pequenas alegrias. Indica oportunidades rápidas que devem ser aproveitadas, pois passam depressa.",
    love: "Momentos felizes e leves no relacionamento. Sorte no amor.",
    work: "Uma oportunidade inesperada aparece — agarre-a rápido.",
    health: "Recuperação rápida e boa energia vital.",
  },
  {
    number: 3,
    name: "O Navio",
    symbol: "⛵",
    keywords: ["viagem", "distância", "comércio", "saudade"],
    meaning:
      "O Navio fala de viagens, distâncias e de tudo que vem de longe. Também representa comércio, negócios internacionais e a saudade.",
    love: "Amor à distância ou saudade de alguém que partiu.",
    work: "Negócios com o exterior, importação ou viagens a trabalho.",
    health: "Relacionado ao fígado e ao sistema digestivo.",
  },
  {
    number: 4,
    name: "A Casa",
    symbol: "🏠",
    keywords: ["lar", "família", "estabilidade", "segurança"],
    meaning:
      "A Casa representa o lar, a família e a estabilidade. Fala de segurança, propriedades e da vida doméstica.",
    love: "Relacionamento estável, vida a dois, construção de um lar.",
    work: "Trabalho em casa, empresa familiar ou estabilidade profissional.",
    health: "Indica o corpo físico de forma geral e a necessidade de descanso.",
  },
  {
    number: 5,
    name: "A Árvore",
    symbol: "🌳",
    keywords: ["saúde", "crescimento", "raízes", "tempo"],
    meaning:
      "A Árvore é a carta da saúde, do crescimento lento e das raízes. Tudo que envolve tempo, ancestralidade e vitalidade.",
    love: "Relacionamento duradouro, com raízes profundas. Conexão kármica.",
    work: "Crescimento lento mas sólido. Carreira de longo prazo.",
    health: "A carta da saúde por excelência. Atenção à vitalidade e ao bem-estar geral.",
  },
  {
    number: 6,
    name: "As Nuvens",
    symbol: "☁️",
    keywords: ["confusão", "dúvida", "instabilidade"],
    meaning:
      "As Nuvens trazem confusão, dúvidas e falta de clareza. Algo está encoberto e é difícil enxergar a situação com nitidez.",
    love: "Incertezas e mal-entendidos no relacionamento.",
    work: "Período de instabilidade e falta de direção clara.",
    health: "Atenção ao sistema respiratório e a sintomas confusos.",
  },
  {
    number: 7,
    name: "A Cobra",
    symbol: "🐍",
    keywords: ["traição", "astúcia", "mulher", "desvios"],
    meaning:
      "A Cobra alerta para traições, inveja e pessoas falsas. Também pode representar uma mulher importante ou a necessidade de astúcia.",
    love: "Cuidado com ciúmes, traição ou uma rival.",
    work: "Falsidade no ambiente de trabalho. Observe quem está ao seu redor.",
    health: "Relacionada a problemas que se arrastam e a doenças de difícil diagnóstico.",
  },
  {
    number: 8,
    name: "O Caixão",
    symbol: "⚰️",
    keywords: ["fim", "transformação", "perda", "encerramento"],
    meaning:
      "O Caixão marca o fim de um ciclo. Algo termina para que o novo possa nascer. É transformação profunda, perda ou encerramento.",
    love: "Fim de um relacionamento ou de uma fase dentro dele.",
    work: "Encerramento de projeto, demissão ou mudança radical de rumo.",
    health: "Período de baixa energia. Cuide-se e respeite seus limites.",
  },
  {
    number: 9,
    name: "O Buquê",
    symbol: "💐",
    keywords: ["alegria", "presente", "beleza", "gratidão"],
    meaning:
      "O Buquê é a carta da alegria, dos presentes e dos gestos gentis. Indica reconhecimento, beleza e momentos felizes.",
    love: "Romance, gentilezas e momentos doces a dois.",
    work: "Reconhecimento pelo seu trabalho, elogios ou recompensas.",
    health: "Boa aparência, vitalidade e bem-estar.",
  },
  {
    number: 10,
    name: "A Foice",
    symbol: "🌾",
    keywords: ["corte", "decisão", "colheita", "perigo"],
    meaning:
      "A Foice representa cortes rápidos e decisões definitivas. É a colheita do que foi plantado — e também um alerta de perigo súbito.",
    love: "Decisão drástica: corte de laços ou definição rápida.",
    work: "Cortes, demissões ou decisões rápidas que mudam tudo.",
    health: "Atenção a cirurgias, cortes e acidentes.",
  },
  {
    number: 11,
    name: "O Chicote",
    symbol: "🪢",
    keywords: ["conflito", "repetição", "discussão", "disciplina"],
    meaning:
      "O Chicote fala de conflitos, discussões e repetições. Situações que se repetem até serem resolvidas. Também indica disciplina e esforço.",
    love: "Discussões recorrentes no relacionamento.",
    work: "Trabalho repetitivo, esforço contínuo ou conflitos com colegas.",
    health: "Dores musculares e tensões acumuladas.",
  },
  {
    number: 12,
    name: "Os Pássaros",
    symbol: "🐦",
    keywords: ["conversas", "ansiedade", "comunicação", "casal"],
    meaning:
      "Os Pássaros representam conversas, comunicação e também ansiedade. Tudo que é falado, telefonemas, fofocas e encontros.",
    love: "Muita conversa no relacionamento — ou um casal próximo de você.",
    work: "Reuniões, negociações e comunicação intensa.",
    health: "Atenção ao sistema nervoso e à ansiedade.",
  },
  {
    number: 13,
    name: "A Criança",
    symbol: "🧒",
    keywords: ["início", "inocência", "filhos", "novidade"],
    meaning:
      "A Criança representa começos, inocência e coisas pequenas que estão crescendo. Pode indicar filhos ou um novo projeto.",
    love: "Um amor novo, ingênuo e cheio de descobertas.",
    work: "Projeto em fase inicial. Aprendizado e crescimento.",
    health: "Indica crianças ou a necessidade de cuidar da criança interior.",
  },
  {
    number: 14,
    name: "A Raposa",
    symbol: "🦊",
    keywords: ["esperteza", "engano", "trabalho", "cuidado"],
    meaning:
      "A Raposa alerta para enganos e pessoas espertas demais. Também é a carta do trabalho e da sobrevivência inteligente.",
    love: "Desconfie de intenções escondidas. Nem tudo é o que parece.",
    work: "A carta do trabalho cotidiano. Cuidado com armadilhas e falsos colegas.",
    health: "Sintomas que enganam. Busque segunda opinião.",
  },
  {
    number: 15,
    name: "O Urso",
    symbol: "🐻",
    keywords: ["força", "proteção", "dinheiro", "autoridade"],
    meaning:
      "O Urso representa força, proteção e poder. Também está ligado a finanças, patrimônio e figuras de autoridade.",
    love: "Um parceiro protetor — ou possessivo demais.",
    work: "Posição de poder, chefia ou boas finanças.",
    health: "Força física e boa constituição. Atenção à alimentação.",
  },
  {
    number: 16,
    name: "A Estrela",
    symbol: "⭐",
    keywords: ["esperança", "destino", "espiritualidade", "clareza"],
    meaning:
      "A Estrela é a carta da esperança, da espiritualidade e do destino. Ilumina o caminho e traz clareza e inspiração.",
    love: "Um amor iluminado, quase destinado.",
    work: "Sucesso e reconhecimento. Siga sua intuição.",
    health: "Cura espiritual e renovação das energias.",
  },
  {
    number: 17,
    name: "A Cegonha",
    symbol: "🦢",
    keywords: ["mudança", "renovação", "ciclo novo"],
    meaning:
      "A Cegonha anuncia mudanças e renovação. Mudança de casa, de fase, de vida. Tudo se move para melhor.",
    love: "O relacionamento passa por uma renovação positiva.",
    work: "Mudança de emprego, de função ou melhorias no trabalho.",
    health: "Melhora e recuperação. Novos hábitos saudáveis.",
  },
  {
    number: 18,
    name: "O Cachorro",
    symbol: "🐕",
    keywords: ["amizade", "lealdade", "confiança", "apoio"],
    meaning:
      "O Cachorro é a carta da amizade e da lealdade. Representa amigos fiéis, apoio e pessoas em quem você pode confiar.",
    love: "Amizade que pode virar amor, ou um parceiro leal e fiel.",
    work: "Colegas confiáveis e parcerias sólidas.",
    health: "Apoio de pessoas próximas ajuda na recuperação.",
  },
  {
    number: 19,
    name: "A Torre",
    symbol: "🗼",
    keywords: ["isolamento", "instituições", "ego", "proteção"],
    meaning:
      "A Torre fala de isolamento, instituições e estruturas formais. Empresas, hospitais, governo — ou a solidão e o ego.",
    love: "Distância emocional ou necessidade de espaço.",
    work: "Grandes empresas, órgãos públicos ou trabalho solitário.",
    health: "Pode indicar hospitais e a necessidade de exames.",
  },
  {
    number: 20,
    name: "O Jardim",
    symbol: "🌷",
    keywords: ["social", "público", "encontros", "comunidade"],
    meaning:
      "O Jardim representa a vida social, eventos e o público. Encontros, festas, redes sociais e tudo que é coletivo.",
    love: "Conhecer alguém em eventos sociais ou através de amigos.",
    work: "Networking, eventos e trabalho com o público.",
    health: "Atividades ao ar livre fazem bem.",
  },
  {
    number: 21,
    name: "A Montanha",
    symbol: "⛰️",
    keywords: ["obstáculo", "demora", "bloqueio", "desafio"],
    meaning:
      "A Montanha é o obstáculo no caminho. Indica demoras, bloqueios e desafios que exigem paciência e persistência.",
    love: "Relacionamento travado ou sentimentos bloqueados.",
    work: "Projeto parado, burocracia e atrasos.",
    health: "Bloqueios físicos ou emocionais que precisam de atenção.",
  },
  {
    number: 22,
    name: "Os Caminhos",
    symbol: "🛤️",
    keywords: ["escolha", "decisão", "alternativas"],
    meaning:
      "Os Caminhos representam escolhas e decisões. Há mais de uma opção diante de você, e é preciso decidir qual seguir.",
    love: "Decisão entre dois caminhos no amor.",
    work: "Escolha entre propostas ou direções de carreira.",
    health: "Avalie alternativas de tratamento.",
  },
  {
    number: 23,
    name: "Os Ratos",
    symbol: "🐭",
    keywords: ["perda", "desgaste", "preocupação", "roubo"],
    meaning:
      "Os Ratos roem aos poucos: perdas, desgastes e preocupações que corroem. Alerta para roubos, vícios e estresse.",
    love: "Desgaste no relacionamento, ciúme que corrói.",
    work: "Perdas financeiras, desperdício ou furto.",
    health: "Estresse e preocupações afetando a saúde.",
  },
  {
    number: 24,
    name: "O Coração",
    symbol: "❤️",
    keywords: ["amor", "paixão", "emoções", "afeto"],
    meaning:
      "O Coração é a carta do amor em todas as formas. Paixão, afeto, emoções verdadeiras e tudo que vem do coração.",
    love: "Amor verdadeiro, paixão e felicidade afetiva.",
    work: "Trabalhe com o que ama. Projetos feitos com paixão prosperam.",
    health: "Atenção ao coração e às emoções.",
  },
  {
    number: 25,
    name: "O Anel",
    symbol: "💍",
    keywords: ["compromisso", "união", "contrato", "ciclo"],
    meaning:
      "O Anel representa compromissos, uniões e contratos. Casamento, sociedades e tudo que une e compromete.",
    love: "Compromisso sério, noivado ou casamento.",
    work: "Contratos, sociedades e parcerias formais.",
    health: "Tratamentos contínuos e acompanhamento regular.",
  },
  {
    number: 26,
    name: "Os Livros",
    symbol: "📚",
    keywords: ["segredo", "estudo", "conhecimento", "oculto"],
    meaning:
      "Os Livros guardam segredos e conhecimento. Estudos, pesquisas e tudo que ainda está oculto ou por revelar.",
    love: "Um sentimento secreto ou algo ainda não revelado.",
    work: "Estudos, cursos e conhecimento técnico.",
    health: "Diagnósticos que exigem investigação.",
  },
  {
    number: 27,
    name: "A Carta",
    symbol: "✉️",
    keywords: ["mensagem", "documento", "comunicação escrita"],
    meaning:
      "A Carta é a mensagem escrita: e-mails, documentos, contratos e notícias que chegam por escrito.",
    love: "Mensagens, declarações escritas ou conversas importantes.",
    work: "Documentos, contratos e comunicação oficial.",
    health: "Resultados de exames e laudos.",
  },
  {
    number: 28,
    name: "O Homem",
    symbol: "👨",
    keywords: ["homem", "consulente", "parceiro"],
    meaning:
      "O Homem representa o consulente (quando homem) ou um homem importante na questão: parceiro, pai, irmão, chefe.",
    love: "O parceiro ou um homem significativo na sua vida.",
    work: "Chefe, sócio ou colega masculino influente.",
    health: "A energia masculina e a força de ação.",
  },
  {
    number: 29,
    name: "A Mulher",
    symbol: "👩",
    keywords: ["mulher", "consulente", "parceira"],
    meaning:
      "A Mulher representa a consulente (quando mulher) ou uma mulher importante na questão: parceira, mãe, irmã, amiga.",
    love: "A parceira ou uma mulher significativa na sua vida.",
    work: "Chefe, sócia ou colega feminina influente.",
    health: "A energia feminina e a intuição.",
  },
  {
    number: 30,
    name: "Os Lírios",
    symbol: "🌸",
    keywords: ["paz", "maturidade", "harmonia", "sabedoria"],
    meaning:
      "Os Lírios trazem paz, harmonia e maturidade. Representam a sabedoria da experiência e a tranquilidade.",
    love: "Relacionamento maduro, harmonioso e sereno.",
    work: "Ambiente de trabalho pacífico e respeitoso.",
    health: "Equilíbrio e serenidade. Boa saúde na maturidade.",
  },
  {
    number: 31,
    name: "O Sol",
    symbol: "☀️",
    keywords: ["sucesso", "vitalidade", "alegria", "clareza"],
    meaning:
      "O Sol é uma das melhores cartas do baralho: sucesso, vitalidade, alegria e conquistas. Tudo se ilumina.",
    love: "Felicidade plena no amor. Relacionamento radiante.",
    work: "Sucesso, reconhecimento e realizações.",
    health: "Vitalidade, energia e ótima saúde.",
  },
  {
    number: 32,
    name: "A Lua",
    symbol: "🌙",
    keywords: ["intuição", "emoções", "reconhecimento", "feminino"],
    meaning:
      "A Lua fala de intuição, emoções e do mundo interior. Também é carta de reconhecimento, honra e fama.",
    love: "Romantismo, sensibilidade e conexão emocional profunda.",
    work: "Reconhecimento público e sucesso pela intuição.",
    health: "Ciclos hormonais, sono e saúde emocional.",
  },
  {
    number: 33,
    name: "A Chave",
    symbol: "🗝️",
    keywords: ["solução", "abertura", "certeza", "resposta"],
    meaning:
      "A Chave abre portas: é a solução, a resposta e a certeza. O que estava trancado agora se abre.",
    love: "A solução para os problemas do relacionamento está ao alcance.",
    work: "Portas se abrem. A resposta que você esperava chega.",
    health: "Diagnóstico certo e tratamento eficaz.",
  },
  {
    number: 34,
    name: "Os Peixes",
    symbol: "🐟",
    keywords: ["dinheiro", "abundância", "negócios", "fluxo"],
    meaning:
      "Os Peixes são a carta do dinheiro e da abundância. Finanças, negócios, prosperidade e o fluxo da vida material.",
    love: "Relacionamento próspero. Cuidado para não misturar amor e dinheiro.",
    work: "Lucros, vendas e prosperidade nos negócios.",
    health: "Hidratação, rins e o fluxo das emoções.",
  },
  {
    number: 35,
    name: "A Âncora",
    symbol: "⚓",
    keywords: ["estabilidade", "trabalho", "segurança", "permanência"],
    meaning:
      "A Âncora firma tudo: estabilidade, segurança e permanência. É também a carta clássica do trabalho.",
    love: "Relacionamento firme e seguro.",
    work: "Estabilidade profissional e trabalho garantido.",
    health: "Quadro estável. Mantenha a rotina de cuidados.",
  },
  {
    number: 36,
    name: "A Cruz",
    symbol: "✝️",
    keywords: ["destino", "fardo", "fé", "provação"],
    meaning:
      "A Cruz fala de fardos, destino e fé. Desafios que parecem pesados, mas que fazem parte do seu caminho e ensinam.",
    love: "Um amor que exige sacrifício, ou um sentimento de destino.",
    work: "Responsabilidades pesadas que trazem crescimento.",
    health: "Período delicado que pede fé e cuidado constante.",
  },
];

export interface Spread {
  name: string;
  cards: number;
  description: string;
  positions: string[];
  level: "Iniciante" | "Intermediário" | "Avançado";
}

export const spreads: Spread[] = [
  {
    name: "Carta do Dia",
    cards: 1,
    description:
      "A tiragem mais simples: embaralhe, pense no seu dia e vire uma única carta. Ela mostra a energia dominante das próximas horas.",
    positions: ["Energia do dia"],
    level: "Iniciante",
  },
  {
    name: "Tiragem de 3 Cartas",
    cards: 3,
    description:
      "A mais popular para iniciantes. Três cartas em linha respondem sobre passado, presente e futuro — ou situação, ação e resultado.",
    positions: ["Passado / Situação", "Presente / Ação", "Futuro / Resultado"],
    level: "Iniciante",
  },
  {
    name: "Tiragem de 5 Cartas",
    cards: 5,
    description:
      "Uma linha de cinco cartas lida como uma frase: a carta central é o tema, e as cartas ao redor contam a história em volta dele.",
    positions: ["Contexto", "Influência", "Tema central", "Influência", "Desfecho"],
    level: "Intermediário",
  },
  {
    name: "Mesa de 9 Cartas (3x3)",
    cards: 9,
    description:
      "Nove cartas em três linhas de três. Você lê linhas, colunas e diagonais, vendo passado/presente/futuro e o que está acima (pensamentos) e abaixo (base) da questão.",
    positions: ["Linha do tempo + camadas da questão"],
    level: "Intermediário",
  },
  {
    name: "Grande Tableau (36 cartas)",
    cards: 36,
    description:
      "A tiragem completa com todas as 36 cartas, em 4 linhas de 9. É a leitura mais profunda do baralho cigano: cada carta ocupa uma 'casa' e a posição da sua carta (Homem ou Mulher) é o centro da leitura.",
    positions: ["4 linhas × 9 casas"],
    level: "Avançado",
  },
];

export const learningTips: { title: string; text: string }[] = [
  {
    title: "Leia as cartas em conjunto",
    text: "No baralho cigano, diferente do tarô, as cartas quase nunca são lidas sozinhas. Elas formam frases: Cavaleiro + Coração = chegada de um amor.",
  },
  {
    title: "A proximidade importa",
    text: "Cartas perto da sua carta (Homem/Mulher) falam do que está próximo de você. Cartas longe mostram o que está distante ou demorando.",
  },
  {
    title: "Confie na primeira impressão",
    text: "O baralho cigano é direto e prático. A primeira leitura que vem à mente costuma ser a certa — evite racionalizar demais.",
  },
  {
    title: "Pratique todos os dias",
    text: "Tire a Carta do Dia pela manhã e anote. À noite, compare com o que aconteceu. Em poucas semanas você terá intimidade com as 36 cartas.",
  },
];
