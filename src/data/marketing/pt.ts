import { MarketingContent } from "../../types";

export const PORTUGUESE: MarketingContent = {
  trust: {
    title: "Nossas Principais Garantias",
    badges: [
      { icon: "Zap", text: "Processamento rápido", desc: "Traduzido em menos de 60 segundos" },
      { icon: "Brain", text: "IA ciente do contexto", desc: "Compreende gírias, estrutura de cena e piadas" },
      { icon: "Timer", text: "Sincronização estrita", desc: "Tempos originais preservados ao milissegundo" },
      { icon: "Globe", text: "Vários formatos", desc: "Suporta arquivos .SRT, .VTT, .TXT e .SUB" },
      { icon: "Lock", text: "Procesamento seguro", desc: "Criptografia SSL. Arquivos excluídos em 1 hora" }
    ]
  },
  problem: {
    badge: "O Vazio da Tradução",
    title: "Chega de corrigir legendas manualmente.",
    subtitle: "A maioria dos tradutores converte linha a linha de forma cega, estragando o diálogo. O Sub.Stitch entende a cena inteira.",
    basicCard: {
      title: "Software de Tradução Básico",
      desc: "Dicionário automático linha a linha",
      sourceLabel: "Origem SRT Inglês:",
      failureLabel: "❌ Tradução Literal",
      translatedLabel: "Traduzido (ex: Português):",
      failureEx: "*Significado incorrecto: Traduz a piada „cool piece of cake” literalmente como comida.",
      traits: [
        "Traduz linha por linha sem entender o diálogo precedente",
        "Traduz metáforas e gírias ao pé da letra (ex: 'feeling blue' -> cores)",
        "Falha ao reconhecer o gênero na cena, quebrando as relações",
        "Ignora a densidade do texto, resultando em blocos ilegíveis na tela"
      ],
      footer: "Exige diversas horas de revisão e sincronização manual."
    },
    subaiCard: {
      title: "Tradutor Sub.Stitch",
      desc: "Analisador com conhecimento de diálogo",
      recBadge: "RECOMENDADO",
      successLabel: "✓ Contexto conservado",
      successEx: "*Significado correto: O Sub.Stitch entende a gíria e gera o equivalente natural.",
      traits: [
        "Reconstrói a cena para mapear pronomes e gêneros perfeitamente",
        "Traduz organicamente conversas informais, adaptando piadas e expressões",
        "Garante o tempo confortável de leitura para a visão humana",
        "Mantém os mesmos códigos de sincronia milimétricos da SRT original"
      ],
      footer: "Pronto para baixar e assistir. Nenhuma alteração necessária."
    }
  },
  howItWorks: {
    badge: "Fluxo de Trabalho",
    title: "Como funciona o Sub.Stitch",
    subtitle: "Traduza suas legendas fluentemente em quatro etapas fáceis e rápidas. Um episódio inteiro pronto em menos de 1 minuto.",
    steps: [
      { step: "PASSO 01", title: "Enviar", desc: "Arraste os arquivos .SRT, .VTT, .TXT ou .SUB para nossa plataforma segura." },
      { step: "PASSO 02", title: "Configurar", desc: "Selecione o idioma, o ajuste de tom (Fiel, Informal, Criativo) e confira os créditos." },
      { step: "PASSO 03", title: "Tradução IA", desc: "Nosso motor analisa os blocos de legenda juntos para obter diálogos fluidos." },
      { step: "PASSO 04", title: "Baixar", desc: "Obtenha rapidamente os arquivos traduzidos com os tempos originais mantidos." }
    ],
    bottomCta: "Ir direto para o painel de upload \u2192"
  },
  features: {
    badge: "Recursos Inteligentes",
    title: "Projetado para localização profissional",
    subtitle: "Os tradutores normais tratam o texto de forma isolada e fria. O Sub.Stitch trata sua legenda como uma obra cinematográfica viva.",
    items: [
      { id: "context", title: "Motor de Contexto IA", description: "Lê as linhas anteriores para manter o humor e a coerência natural dos diálogos.", badge: "Único" },
      { id: "batch", title: "Livre de Formatos", description: "Suporte para todos os formatos padronizados: .SRT, .VTT, .TXT ou .SUB.", badge: "Universal" },
      { id: "timing", title: "Bloqueio de Sincronia", description: "Os milissegundos originais de marcação de tempo nunca mudam.", badge: "Estrito" },
      { id: "length", title: "Controle de Linhas", description: "Controla as saídas de texto de forma a caber visualmente na leitura de tela.", badge: "UX-Aware" },
      { id: "preview", title: "Visualização Rápida", description: "Compare as linhas sugeridas ao lado do texto original antes de validar.", badge: "Smart preview" },
      { id: "creator", title: "Foco em Criadores", description: "Ideal para produtores independentes, canais de YouTube e agências.", badge: "Formatado" }
    ],
    prevLine: "Contexto do frame anterior:",
    currLine: "Decisão do motor de tradução atual:",
    done: "CONCLUÍDO",
    translating: "TRADUZINDO...",
    locked: "[LOCKED] Bloqueio de Milissegundos Ativo",
    drift: "± 0.00ms de desvío de segurança",
    stdDraft: "Rascunho de Tradutor Padrão:",
    stdWarning: "52 caracteres (Cansaço Visual)",
    subaiComp: "Otimização e Controle Sub.Stitch:",
    subaiScore: "31 caracteres (Leitura Confortable)"
  },
  pricing: {
    badge: "Pacote Inicial de Boas-Vindas Grátis",
    title: "Adquira Créditos. Acelere Seus Resultados.",
    subtitle: "Crie uma conta para começar a traduzir com 100 créditos gratuitos. Cada crédito traduz cerca de 10 linhas.",
    creditNote: "Crie uma conta para começar a traduzir com 100 créditos gratuitos.",
    tiers: [
      {
        id: "starter",
        name: "Starter",
        price: "$4.99",
        description: "Perfeito para iniciar. Créditos bônus inclusos ao registrar!",
        features: ["500 créditos de tradução", "~5.000 linhas traduzidas", "Ajustes precisos de tonalidade", "Suporta .SRT, .VTT, .TXT ou .SUB", "Visualização rápida e segura de arquivos", "100 créditos iniciais de cortesia"],
        ctaText: "Comprar"
      },
      {
        id: "standard",
        name: "Standard",
        price: "$14.99",
        description: "A opção mais buscada. Créditos bônus inclusos ao registrar!",
        features: ["2.000 créditos de tradução", "~20.000 linhas traduzidas", "Fila prioritária no processamento", "Ajustes precisos de tonalidade", "Suporta .SRT, .VTT, .TXT ou .SUB", "100 créditos iniciais de cortesia"],
        isHighlighted: true,
        ctaText: "Comprar",
        badge: "POPULAR"
      },
      {
        id: "professional",
        name: "Professional",
        price: "$29.99",
        description: "Foco profissional. Créditos bônus inclusos ao registrar!",
        features: ["5.000 créditos de tradução", "~50.000 linhas traduzidas", "Velocidade máxima no processador", "Suporta .SRT, .VTT, .TXT ou .SUB", "Fila prioritária VIP de servidor", "100 créditos iniciais de cortesia"],
        ctaText: "Comprar"
      }
    ],
    footerText: "Precisa de pacotes volumosos, traduções de lotes completos ou suporte com novos formatos? ",
    contactUs: "Consulte-nos."
  },
  faq: {
    badge: "FAQ",
    title: "Perguntas Frequentes",
    subtitle: "Tudo o que você precisa saber sobre nosso sistema inteligente de legendas.",
    items: [
      { question: "O Sub.Stitch pode desajustar a sincronia da minha legenda?", answer: "Não, nunca. Tratamos os códigos de tempo originais como constantes exclusivas para leitura e geração. O parser retém o texto puro, efetua a tradução contextualmente e anexa-o nos exatos milissegundos originais." },
      { question: "É similar aos tradutores comuns Google ou DeepL?", answer: "Não. Tradutores genéricos traduzem linha por linha sem nexo. O motor inteligente do Sub.Stitch junta as sentenças na mente da IA para compreender relacionamentos, sarcasmo e gênero dramático da cena." },
      { question: "Preciso de conta criada para traduzir?", answer: "Sim, é preciso criar login. O ótimo é que cada novo usuário já inicia com 100 créditos grátis de Boas-Vindas para testar o sistema." },
      { question: "Quais formatos são aceitos no portal?", answer: "Oferecemos suporte completo a arquivos SubRip (.srt), WebVTT (.vtt), Texto Plano (.txt) e MicroDVD (.sub), cuidando dos frames de forma limpa." },
      { question: "Os meus arquivos de vídeo e texto ficam protegidos?", answer: "Sim, segurança é nosso lema primordial. Usamos conexões totalmente protegidas via criptografia SSL. Os dados são carregados em RAM e apagados em 1 hora após sua descarga." }
    ],
    footerPrefix: "Ficou com alguma dúvida técnica de outro tipo? Abra a nossa ",
    directApp: "Aplicação Dieta",
    footerSuffix: " ou escreva-nos um bilhete através da caixa de contato abaixo!"
  },
  contact: {
    badge: "Contato",
    title: "Fale Conosco",
    subtitle: "Dúvidas? Ideias de melhorias? Necessita de tradução em altíssimo lote? Escreva-nos.",
    inquiries: "Suporte e Dúvidas",
    replyTime: "O tempo de retorno médio é inferior a 12 horas.",
    feedbackTitle: "Ideias e Melhorias",
    feedbackDesc: "Deixe ideias de melhorias de painel, sugestões ou integrações API.",
    enterpriseTitle: "Planos Corporativos",
    enterpriseDesc: "Solicite velocidade de topo e poder de processamento VIP para grandes volumes.",
    emailSign: "Contato: turlacu@live.com",
    emailBlockLabel: "E-mail direto",
    emailBlockTitle: "Envie os detalhes pelo seu e-mail.",
    emailBlockDesc: "Inclua o tipo de arquivo, volume aproximado de legendas, idiomas de destino e qualquer requisito de fluxo de trabalho.",
    emailBlockAddressLabel: "Endereço de contato",
    emailBlockCta: "Enviar e-mail para Sub.Stitch",
    successTitle: "Mensagem Enviada!",
    successDesc: "Muito obrigado. Suas dúvidas foram entregues ao nosso time operacional. Entraremos em contato assim que possível!",
    successBtn: "Enviar Nova Mensagem",
    errName: "Por favor, indique seu nome.",
    errEmail: "Por favor, indique um endereço de e-mail válido.",
    errMessage: "Sua mensagem não pode ser encaminhada vazia.",
    lblName: "Seu Nome",
    lblEmail: "E-mail de Contato",
    lblSubject: "O que você precisa?",
    lblMessage: "Sua Mensagem",
    optQuestion: "Dúvidas de milissegundos / sincronia",
    optFeedback: "Sugestões / Feedback de uso",
    optVolume: "Peticionamento de altíssimo volume",
    optOther: "Assuntos Gerais",
    placeholderMessage: "Escreva os detalhes...",
    btnSend: "Enviar Mensagem",
    btnSending: "Enviando..."
  },
  footer: {
    desc: "Motor inteligente de tradução de legendas por IA, feito de criadores para criadores, cineastas e equipes de localização profissional.",
    shortcuts: "Links de Acesso",
    appHeader: "Terminal de Legendas",
    appDesc: "Tudo pronto para traduzir arquivos SRT de imediato? Abra a aplicação.",
    appCta: "Abrir Aplicação",
    status: "SISTEMA ONLINE E OPERANTE",
    copyright: "Todos os direitos reservados."
  }
};
