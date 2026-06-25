import { MarketingContent } from "../../types";

export const ROMANIAN: MarketingContent = {
  trust: {
    title: "Garanțiile Noastre Principale",
    badges: [
      { icon: "Zap", text: "Procesare rapidă", desc: "Tradus în mai puțin de 60 de secunde" },
      { icon: "Brain", text: "AI conștient de context", desc: "Înțelege argoul, structura scenei și expresiile" },
      { icon: "Timer", text: "Păstrează sincronizarea", desc: "Coduri de timp perfecte la nivel de milisecundă" },
      { icon: "Globe", text: "Formate multiple", desc: "Suportă fișiere .SRT, .VTT, .TXT și .SUB" },
      { icon: "Lock", text: "Procesare securizată", desc: "Criptat SSL. Fișiere șterse după 1 oră" }
    ]
  },
  problem: {
    badge: "Diferența de Traducere",
    title: "Nu mai corecta subtitrările manual.",
    subtitle: "Majoritatea traducătoarelor automate traduc linie cu linie orbește, stricând dialogul. Sub.Stitch înțelege scena, păstrând sensul, emoția și cursivitatea.",
    basicCard: {
      title: "Software de Traducere de Bază",
      desc: "Dicționar automat linie cu linie",
      sourceLabel: "Sursă SRT Engleză:",
      failureLabel: "❌ Eșec Literal",
      translatedLabel: "Tradus (ex. Română):",
      failureEx: "*Sens greșit: Traduce expresia idiomatică „cool piece of cake” literal, ca mâncare.",
      traits: [
        "Traduce linie cu linie fără să înțeleagă dialogul precedent",
        "Traduce metaforele mot-a-mot (ex. 'feeling blue' -> culori)",
        "Nu identifică genul personajelor, stricând dinamica",
        "Ignoră limitele de densitate temporală, rezultând blocuri greu de citit"
      ],
      footer: "Necesită ore de sincronizare manuală și revizuire a textului."
    },
    subaiCard: {
      title: "Traducător Sub.Stitch",
      desc: "Analizor de dialog bazat pe context",
      recBadge: "RECOMANDAT",
      successLabel: "✓ Context păstrat",
      successEx: "*Sens corect: Sub.Stitch înțelege argoul contextual și oferă un echivalent natural românesc.",
      traits: [
        "Reconstruiește continuitatea scenei pentru maparea corectă a pronumelor/genurilor",
        "Traduce natural frazele, umorul local și expresiile colocviale",
        "Asigură viteze confortabile de citire a subtitrărilor pe ecran",
        "Păstrează coduri de timp SRT identice la milisecundă"
      ],
      footer: "Gata de descărcat și vizionat instantaneu. Zero ajustări necesare."
    }
  },
  howItWorks: {
    badge: "Flux de Lucru",
    title: "Cum funcționează Sub.Stitch",
    subtitle: "Traduceți subtitrările fluent în patru pași simpli și optimizați. Procesați episoade întregi în mai puțin de un minut.",
    steps: [
      { step: "PASUL 01", title: "Încărcare", desc: "Trageți și lăsați fișierele .SRT, .VTT, .TXT sau .SUB în portalul nostru securizat." },
      { step: "PASUL 02", title: "Configurare", desc: "Alegeți limba țintă, filtrul de ton (Accurat, Casual, Creativ) și verificați creditele." },
      { step: "PASUL 03", title: "Traducere AI", desc: "Motorul nostru de context analizează blocurile de subtitrări împreună pentru dialog cursiv." },
      { step: "PASUL 04", title: "Descărcare", desc: "Obțineți instantaneu fișierele traduse cu timpii perfect păstrați." }
    ],
    bottomCta: "Mergeți direct la panoul de încărcare fișiere \u2192"
  },
  features: {
    badge: "Funcții Inteligente",
    title: "Proiectat pentru localizare premium",
    subtitle: "Traducătoarele standard tratează textul ca pe niște documente simple. Sub.Stitch tratează subtitrarea ca pe un ecosistem cinematografic viu.",
    items: [
      { id: "timing", title: "Protecție Timp", description: "Intervalele originale de milisecunde sunt blocate exact ca constante la încărcare.", badge: "Imbatabil" },
      { id: "preview", title: "Mod Previzualizare Directă", description: "Iterați previzualizând liniile traduse una lângă alta cu textul original.", badge: "Previzualizare inteligentă" },
      { id: "creator", title: "Flux pentru Creatori", description: "Creat special pentru cerințele realizatorilor de filme, creatorilor YouTube și caselor de producție.", badge: "Personalizat" }
    ],
    prevLine: "Contextul liniei anterioare:",
    currLine: "Decizia de traducere a liniei curente:",
    done: "FINALIZAT",
    translating: "SE TRADUCE...",
    locked: "[BLOCAT] Activator Blocare Milisecunde",
    drift: "± 0.00ms Abatere de siguranță",
    stdDraft: "Draft Traducere Standard:",
    stdWarning: "52 Caractere (Oboseală Ochi)",
    subaiComp: "Compresie Lungime Sub.Stitch:",
    subaiScore: "31 Caractere (Lectură Confortabilă)"
  },
  pricing: {
    badge: "Pachet Gratuit de Start Inclus",
    title: "Cumpără Credite. Sporește Rezultatele.",
    subtitle: "Creează un cont pentru a începe cu 100 de credite automate gratuite. Fiecare credit traduce aproximativ 10 linii de subtitrare.",
    creditNote: "Creează un cont pentru a începe cu 100 de credite automate gratuite.",
    tiers: [
      {
        id: "starter",
        name: "Starter",
        price: "$4.99",
        description: "Alimentează traducerile. Pachet gratuit de pornire inclus la înregistrare!",
        features: ["500 credite de traducere", "~5.000 de linii traduse", "Ajustare tonală precisă", "Suportă .SRT, .VTT, .TXT sau .SUB", "Previzualizare securizată instantanee", "100 credite bonus la înregistrare"],
        ctaText: "Cumpără Acum"
      },
      {
        id: "standard",
        name: "Standard",
        price: "$14.99",
        description: "Alimentează traducerile. Pachet gratuit de pornire inclus la înregistrare!",
        features: ["2.000 credite de traducere", "~20.000 de linii traduse", "Coadă de server prioritizată", "Ajustări de ton incluse", "Suportă .SRT, .VTT, .TXT sau .SUB", "100 credite bonus la înregistrare"],
        isHighlighted: true,
        ctaText: "Cumpără Acum",
        badge: "POPULAR"
      },
      {
        id: "professional",
        name: "Professional",
        price: "$29.99",
        description: "Alimentează traducerile. Pachet gratuit de pornire inclus la înregistrare!",
        features: ["5.000 credite de traducere", "~50.000 de linii traduse", "Eficiență maximă de procesare", "Suportă .SRT, .VTT, .TXT sau .SUB", "Acces la coada de server prioritară", "100 credite bonus la înregistrare"],
        ctaText: "Cumpără Acum"
      }
    ],
    footerText: "Aveți nevoie de mai multe credite, localizări de volum sau suport pentru formate personalizate? ",
    contactUs: "Contactați-ne."
  },
  faq: {
    badge: "Întrebări Frecvente",
    title: "Întrebări Frecvente",
    subtitle: "Tot ce trebuie să știți despre traducătorul nostru de subtitrări bazat pe context.",
    items: [
      { question: "Modifică Sub.Stitch sincronizarea subtitrărilor mele?", answer: "Absolut deloc. Sub.Stitch tratează codurile de timp ale subtitrărilor ca pe niște constante doar pentru citire. Indiferent dacă încărcați .SRT, .VTT, .TXT sau .SUB, parserul nostru extrage strict blocurile de text, le traduce și apoi le mapează înapoi la coordonatele de timp originale exacte." },
      { question: "Este la fel ca Google Translate sau DeepL?", answer: "Nu. Traducătoarele online standard procesează textul linie cu linie, ceea ce distruge cursivitatea deoarece subtitrările sunt adesea dialoguri fragmentate. Sub.Stitch analizează întregul fișier împreună pentru a înțelege cine vorbește, sarcasmul, contextul de gen și continuarea propoziției." },
      { question: "Am nevoie de un cont pentru a folosi Sub.Stitch?", answer: "Da, trebuie să creeți un cont. Vestea bună este că fiecare utilizator nou primește 100 de credite gratuite la înregistrare pentru a experimenta gratuit serviciile noastre!" },
      { question: "Ce tipuri de fișiere de subtitrare sunt acceptate?", answer: "Sub.Stitch acceptă complet formatele SubRip (.srt), WebVTT (.vtt), Text Simplu (.txt) și MicroDVD (.sub), păstrând dialogul aliniat și metadatele curate." },
      { question: "Sunt fișierele mele de subtitrare private?", answer: "Yes, securitatea este o prioritate cheie. Folosim criptare SSL sigură pentru toate transferurile. Fișierele sunt stocate temporar în RAM și șterse automat de pe serverele noastre la 1 oră după descărcare." }
    ],
    footerPrefix: "Aveți o întrebare tehnică diferită? Vizitați ",
    directApp: "Aplicația Noastră",
    footerSuffix: " pentru a revizui opțiunile personalizate sau trimiteți un mesaj direct mai jos!"
  },
  contact: {
    badge: "Contact",
    title: "Luați legătura cu noi",
    subtitle: "Întrebări? Feedback? Aveți nevoie de un volum mare de traduceri premium? Scrieți-ne.",
    inquiries: "Întrebări",
    replyTime: "Timpul mediu de răspuns este de sub 12 ore.",
    feedbackTitle: "Feedback Sub.Stitch",
    feedbackDesc: "Spuneți-ne despre funcțiile care lipsesc, idei de API-uri sau sugestii.",
    enterpriseTitle: "Planuri Enterprise",
    enterpriseDesc: "Solicitați servere dedicate cu înaltă performanță pentru platforme video.",
    emailSign: "Detaliile de contact sunt disponibile prin butonul de e-mail.",
    emailBlockLabel: "E-mail direct",
    emailBlockTitle: "Trimite detaliile din inboxul tău.",
    emailBlockDesc: "Include tipul de fișier, volumul aproximativ de subtitrări, limbile țintă și orice cerințe de workflow.",
    emailBlockAddressLabel: "Adresă de contact",
    emailBlockPrivacyNote: "Folosește butonul de mai jos pentru a deschide clientul tău de e-mail.",
    emailBlockCta: "Trimite e-mail către Sub.Stitch",
    successTitle: "Mesajul a fost Trimis!",
    successDesc: "Vă mulțumim. Solicitarea dvs. a fost trimisă direct la biroul nostru de asistență. Vă vom răspunde în curând!",
    successBtn: "Trimiteți alt mesaj",
    errName: "Vă rugăm să vă specificați numele.",
    errEmail: "Vă rugăm să introduceți o adresă de email validă.",
    errMessage: "Mesajul nu poate fi gol.",
    lblName: "Numele Tău",
    lblEmail: "Adresă de Email",
    lblSubject: "Ce doriți să ne transmiteți?",
    lblMessage: "Mesajul Tău",
    optQuestion: "Întrebări legat de timpi / sincronizări",
    optFeedback: "Feedback Utilizator / Sugestii",
    optVolume: "Solicitare volum mare personalizat",
    optOther: "Salutări Generale",
    placeholderMessage: "Oferă detalii...",
    btnSend: "Trimite Mesaj",
    btnSending: "Se trimite..."
  },
  footer: {
    desc: "Motor de traducere a subtitrărilor bazat pe inteligență artificială, conceput special pentru cineaști, creatori de conținut și echipa de localizare.",
    shortcuts: "Portal website",
    appHeader: "Aplicație Subtitrări",
    appDesc: "Sunteți gata să traduceți fișiere SRT acum? Lansați aplicația imediat.",
    appCta: "Deschide Aplicația",
    status: "SISTEM ONLINE ȘI FUNCȚIONAL",
    copyright: "Toate drepturile rezervate."
  }
};
