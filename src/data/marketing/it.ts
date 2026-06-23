import { MarketingContent } from "../../types";

export const ITALIAN: MarketingContent = {
  trust: {
    title: "Le nostre Garanzie Principali",
    badges: [
      { icon: "Zap", text: "Elaborazione veloce", desc: "Tradotto in meno di 60 secondi" },
      { icon: "Brain", text: "AI basata sul contesto", desc: "Comprende slang, battute, idiomi e sceneggiatura" },
      { icon: "Timer", text: "Perfetta sincronia", desc: "Codici temporali protetti al millesimo di secondo" },
      { icon: "Globe", text: "Molteplici formati", desc: "Supporta i formati .SRT, .VTT, .TXT e .SUB" },
      { icon: "Lock", text: "Gestione protetta", desc: "Crittografia SSL. File eliminati dopo 1 ora" }
    ]
  },
  problem: {
    badge: "Il Divario di Traduzione",
    title: "Smetti di correggere i sottotitoli manualmente.",
    subtitle: "I traduttori standard effettuano una conversione parola per parola sterile, rovinando i dialoghi. Sub.Stich comprende l'intera scena.",
    basicCard: {
      title: "Software Traduttore Standard",
      desc: "Dizionario automatico lineare riga per riga",
      sourceLabel: "Origine SRT Inglese:",
      failureLabel: "❌ Traduzione Letterale",
      translatedLabel: "Tradotto (es: Italiano):",
      failureEx: "*Falso senso: Traduce il modo di dire „cool piece of cake” letteralmente come se fosse una fetta di torta.",
      traits: [
        "Traduce riga per riga senza connessione con le battute precedenti",
        "Traduce gli idiomi in modo letterale (es: 'feeling blue' -> colori)",
        "Nessun riconoscimento del sesso dei locutori, rovinando i rapporti",
        "Non calcola il limite dei caratteri a schermo, creando frasi illeggibili"
      ],
      footer: "Richiede diverse ore di faticosa correzione manuale post-traduzione."
    },
    subaiCard: {
      title: "Traduttore Professionale Sub.Stich",
      desc: "Parser di dialoghi basato su contesto",
      recBadge: "RACCOMANDATO",
      successLabel: "✓ Contesto preservato",
      successEx: "*Senso corretto: Sub.Stich rileva la battuta colloquiale e genera una perfetta frase equivalente.",
      traits: [
        "Ricostruisce la fluidità della scena per assegnare bene i pronomi",
        "Produce riscontri naturali per slang, humor locale e battute",
        "Asseconda la velocità ottimale di lettura dell'occhio sul player",
        "Mantiene codici di tempo SRT perfettamente identici all'originale"
      ],
      footer: "Pronto per il download. Nessun intervento manuale necessario."
    }
  },
  howItWorks: {
    badge: "Come Funziona",
    title: "Il flusso Sub.Stich",
    subtitle: "Traduci i tuoi sottotitoli in 4 semplici passaggi ottimizzati. Un'intera clip pronta in meno di un minuto.",
    steps: [
      { step: "PASSO 01", title: "Carica", desc: "Trascina i tuoi file .SRT, .VTT, .TXT o .SUB nel nostro portale sicuro." },
      { step: "PASSO 02", title: "Configura", desc: "Seleziona la lingua di arrivo, il tono (Fidato, Colloquiale, Creativo) e avvia." },
      { step: "PASSO 03", title: "Traduzione IA", desc: "Il nostro motore contestuale elabora le righe coordinate in modo fluido." },
      { step: "PASSO 04", title: "Scarica", desc: "Ricevi subito i file pronti con sincronia e calature perfette." }
    ],
    bottomCta: "Vai direttamente al pannello di caricamento \u2192"
  },
  features: {
    badge: "Funzionalità Chiave",
    title: "Progettato per una localizzazione d'élite",
    subtitle: "I traduttori standard vedono i sottotitoli come testi piatti. Sub.Stich li elabora come una trama cinematografica in movimento.",
    items: [
      { id: "context", title: "Engine Contestuale", description: "Esamina la battuta precedente per catturare sarcasmo, confidenza e contesto.", badge: "Unico" },
      { id: "batch", title: "Libertà Formati", description: "Traduce sottotitoli in tutti i formati standard : .SRT, .VTT, .TXT o .SUB.", badge: "Universale" },
      { id: "timing", title: "Protezione Tempo", description: "I millisecondi originari di calettatura rimangono stabili, senza drift.", badge: "Protetto" },
      { id: "length", title: "Regolazione Lunghezza", description: "Struttura le risposte per garantire un numero comodo di sillabe a schermo.", badge: "UX-Aware" },
      { id: "preview", title: "Anteprima in Tempo Reale", description: "Leggi la riga tradotta accanto a quella originale prima di validare.", badge: "Smart preview" },
      { id: "creator", title: "Workflow Creatori", description: "Progettato su misura per agenzie e canali YouTube professionisti.", badge: "Premium" }
    ],
    prevLine: "Contesto della riga precedente:",
    currLine: "Scelta finale di traduzione dell'engine:",
    done: "COMPLETATO",
    translating: "TRADUZIONE IN CORSO...",
    locked: "[LOCKED] Blocco Sincronia Millisec attivo",
    drift: "± 0.00ms di drift garantito",
    stdDraft: "Bozza Traduttore Online Comune:",
    stdWarning: "52 caratteri (Sforzo visivo)",
    subaiComp: "Compressione Lunghezza Sub.Stich:",
    subaiScore: "31 caratteri (Lettura fluida)"
  },
  pricing: {
    badge: "Pacchetto Iniziale Gratuito Incluso",
    title: "Acquista Crediti. Eleva i tuoi Sottotitoli.",
    subtitle: "Apri un account per tradurre con i primi 100 crediti in regalo. Ciascun credito traduce all'incirca 10 righe.",
    tiers: [
      {
        id: "starter",
        name: "Starter",
        price: "$4.99",
        description: "Perfetto per iniziare. Crediti omaggio inclusi all'iscrizione!",
        features: ["500 crediti traduzione", "~5.000 righe tradotte", "Sottile regolazione tonale", "Supporto .SRT, .VTT, .TXT o .SUB", "Anteprima file sicura", "100 crediti iniziali omaggio"],
        ctaText: "Acquista"
      },
      {
        id: "standard",
        name: "Standard",
        price: "$14.99",
        description: "Opzione più amata. Crediti omaggio inclusi all'iscrizione!",
        features: ["2.000 crediti traduzione", "~20.000 righe tradotte", "Priorità di calcolo server", "Sottile regolazione tonale inclusa", "Supporto .SRT, .VTT, .TXT o .SUB", "100 crediti iniziali omaggio"],
        isHighlighted: true,
        ctaText: "Acquista",
        badge: "POPOLARE"
      },
      {
        id: "professional",
        name: "Professional",
        price: "$29.99",
        description: "Utilizzo aziendale. Crediti omaggio inclusi all'iscrizione!",
        features: ["5.000 crediti traduzione", "~50.000 righe tradotte", "Velocità massima ed immediata", "Supporto .SRT, .VTT, .TXT o .SUB", "Server di calcolo dedicato VIP", "100 crediti iniziali omaggio"],
        ctaText: "Acquista"
      }
    ],
    footerText: "Hai bisogno di grossi quantitativi di traduzione o di formati specifici su misura? ",
    contactUs: "Contattaci."
  },
  faq: {
    badge: "FAQ",
    title: "Domande Frequenti",
    subtitle: "Tutto ciò che occorre sapere sulla nostra tecnologia per sottotitoli professionali.",
    items: [
      { question: "Sub.Stich modifica i tempi dei miei sottotitoli?", answer: "No, in nessun caso. Trattiamo i timecodes originali come elementi di sola lettura. Estraiamo il testo puro, effettuiamo la traduzione intelligente, e lo reinseriamo ai medesimi millisecondi originali." },
      { question: "È come Google Traduttore o DeepL?", answer: "No. I traduttori comuni lavorano su righe scollegate. Il motore di Sub.Stich le elabora insieme per comprendere i personaggi, il sarcasmo, i generi e l'intrigo." },
      { question: "Occorre creare per forza un account?", answer: "Sì, la creazione di un account protegge il tuo saldo di crediti. Ogni utente riceve i primi 100 crediti omaggio in prova." },
      { question: "Quali estensioni di file accetta il sistema?", answer: "Supportiamo pienamente file SubRip (.srt), WebVTT (.vtt), Testo Semplice (.txt) e MicroDVD (.sub), salvando i metadati." },
      { question: "La mia privacy è al sicuro su Sub.Stich?", answer: "Sì, la riservatezza è protetta da protocollo di sicurezza SSL. L'elaborazione avviene in RAM temporanea e gli elementi cached evaporano un'ora dopo il download." }
    ],
    footerPrefix: "Hai altri interrogativi tecnici? Visita l' ",
    directApp: "Applicazione Diretta",
    footerSuffix: " o inoltra un messaggio compilando la scheda contatti qui sotto!"
  },
  contact: {
    badge: "Contatti",
    title: "Parla con noi",
    subtitle: "Domande? Feedback? Richieste speciali e quantitativi aziendali? Scrivici.",
    inquiries: "Assistenza clienti",
    replyTime: "La risposta del nostro team avviene mediamente entro 12 ore.",
    feedbackTitle: "Idee e Suggerimenti",
    feedbackDesc: "Condividi con noi criticità, idee, suggerimenti e requisiti sulle funzionalità.",
    enterpriseTitle: "Uso Enterprise",
    enterpriseDesc: "Ottieni server dedicati VIP ad elevate prestazioni per i tuoi flussi multimediali.",
    emailSign: "Contatto: turlacu@live.com",
    successTitle: "Messaggio inoltrato con successo!",
    successDesc: "Ti ringraziamo per l'interesse. Abbiamo ricevuto la tua scheda. Ti risponderemo prontamente!",
    successBtn: "Invia un altro messaggio",
    errName: "Per cortesia inserisci il tuo nome.",
    errEmail: "Per cortesia inserisci un indirizzo e-mail valido.",
    errMessage: "La scheda messaggio non può essere vuota.",
    lblName: "Nome",
    lblEmail: "Indirizzo e-mail",
    lblSubject: "Di cosa hai bisogno?",
    lblMessage: "Messaggio",
    placeholderMessage: "Fornisci dettagli...",
    optQuestion: "Errori di timecodes o allineamento",
    optFeedback: "Feedback e suggerimenti per l'engine",
    optVolume: "Piani commerciali ad alto volume",
    optOther: "Saluti e contatti generici",
    btnSend: "Invia Messaggio",
    btnSending: "Inoltro in corso..."
  },
  footer: {
    desc: "Motore intelligente di traduzione e localizzazione sottotitoli basato su IA, sviluppato da creatori per creatori e agenzie multimediali.",
    shortcuts: "Collegamenti Utili",
    appHeader: "Console Sottotitoli",
    appDesc: "Pronto a tradurre i tuoi file SRT? Carica subito i file.",
    appCta: "Apri Applicazione",
    status: "SISTEMA OPERATIVO IN LINEA",
    copyright: "Tutti i diritti riservati."
  }
};
