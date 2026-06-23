import { PricingTier, FAQItem, FeatureItem, SubtitleLine } from "../types";

export const TRUST_BADGES = [
  { icon: "Zap", text: "Fast processing", desc: "Translated in under 60 seconds" },
  { icon: "Brain", text: "Context-aware AI", desc: "Understands slang, scene structure and idioms" },
  { icon: "Timer", text: "Keeps timing sync", desc: "Millisecond-perfect timecodes preserved" },
  { icon: "Globe", text: "Multiple formats", desc: "Supports .SRT, .VTT, .TXT & .SUB files" },
  { icon: "Lock", text: "Secure processing", desc: "SSL encrypted. Files auto-deleted after 1 hour" }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "STEP 01",
    title: "Upload",
    desc: "Drag & drop .SRT, .VTT, .TXT or .SUB subtitle files securely into our portal."
  },
  {
    step: "STEP 02",
    title: "Configure",
    desc: "Choose target language, tone filter (Accurate, Casual, Creative) and verify your credits cost."
  },
  {
    step: "STEP 03",
    title: "AI Translation",
    desc: "Our custom context engine analyzes subtitle blocks together for flawless fluid dialogue."
  },
  {
    step: "STEP 04",
    title: "Download",
    desc: "Get your fully translated, timestamp-preserved files instantly ready to publish."
  }
];

export const BENTO_FEATURES: FeatureItem[] = [
  {
    id: "context",
    title: "AI Context Engine",
    description: "Not just boring line-by-line translator dictionary. Sub.Stich reads preceding lines to grasp humor, relationships, and continuity.",
    badge: "Unique"
  },
  {
    id: "batch",
    title: "Format Freedom",
    description: "Seamlessly translate subtitle files across all industry formats: .SRT, .VTT, .TXT or .SUB, keeping structures pristine.",
    badge: "Universal"
  },
  {
    id: "timing",
    title: "Timing Protection",
    description: "Never worry about desynced timelines. Original millisecond timeframes are locked exactly as upload constants.",
    badge: "Bulletproof"
  },
  {
    id: "length",
    title: "Length Optimization",
    description: "Configures output sentences so they contain comfortable char-counts per second, making them beautifully readable.",
    badge: "UX-Aware"
  },
  {
    id: "preview",
    title: "Direct Preview Mode",
    description: "Iterate alongside our layout by previewing translated lines side-by-side with original text before committing download credits.",
    badge: "Smart preview"
  },
  {
    id: "creator",
    title: "Creator Workflow",
    description: "Engineered specifically to fulfill requirements for professional filmmakers, YouTube creators, educational courses, and content houses.",
    badge: "Tailored"
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    price: "$4.99",
    description: "Fuel subtitle translations. Each credit translates approximately 10 subtitle lines. Free starter package included on sign up!",
    features: [
      "500 translation credits",
      "~5,000 translated lines",
      "Highly-accurate tonal adjustment",
      "Supports .SRT, .VTT, .TXT or .SUB",
      "Instant secure file preview",
      "Free 100 starter credits on signup"
    ],
    ctaText: "Buy Now"
  },
  {
    id: "standard",
    name: "Standard",
    price: "$14.99",
    description: "Fuel subtitle translations. Each credit translates approximately 10 subtitle lines. Free starter package included on sign up!",
    features: [
      "2,000 translation credits",
      "~20,000 translated lines",
      "Priority server queue",
      "Tone adjustments included",
      "Supports .SRT, .VTT, .TXT or .SUB",
      "Free 100 starter credits on signup"
    ],
    isHighlighted: true,
    ctaText: "Buy Now",
    badge: "POPULAR"
  },
  {
    id: "professional",
    name: "Professional",
    price: "$29.99",
    description: "Fuel subtitle translations. Each credit translates approximately 10 subtitle lines. Free starter package included on sign up!",
    features: [
      "5,000 translation credits",
      "~50,000 translated lines",
      "Maximum processing efficiency",
      "Supports .SRT, .VTT, .TXT or .SUB",
      "Priority server queue access",
      "Free 100 starter credits on signup"
    ],
    ctaText: "Buy Now"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Does Sub.Stich change my subtitle timing?",
    answer: "Absolutely not. Sub.Stich treats subtitle timecodes as read-only constants. Whether you upload .SRT, .VTT, .TXT or .SUB, our core parser strictly extracts text blocks, translates them using context-aware algorithms, and then maps them back to their exact original timestamps."
  },
  {
    question: "Is this the same as Google Translate or DeepL?",
    answer: "No. Standard online translators process text line-by-line, which breaks down because subtitles are fragmented dialogue spread across cut-off points. Sub.Stich parses your entire file using our custom 'Context-Aware Reconstruction Engine'. This feeds adjacent blocks to the model together, helping it understand who is speaking, sarcasm, gender context, and sentence continuation."
  },
  {
    question: "Do I need an account to use Sub.Stich?",
    answer: "Yes, you need to create an account to use the application. The great news is that every new user receives 100 free credits upon sign up to let you fully experience context-aware subtitle translation—free starter package included on sign up!"
  },
  {
    question: "Which subtitle file types are supported?",
    answer: "Sub.Stich fully supports SubRip (.srt), WebVTT (.vtt), Plain Text (.txt), and MicroDVD (.sub) formats, keeping dialogue aligned and metadata clean for downstream renderers."
  },
  {
    question: "Are my subtitle files kept private?",
    answer: "Yes, security is a key pillar of our service. Sub.Stich uses secure SSL encryption for all file transfers. Direct uploads are securely processed in RAM, of which transient cached outputs are automatically deleted from our servers within 1 hour after download."
  }
];

export const SANDBOX_PRESETS: SubtitleLine[] = [
  {
    id: 1,
    timecode: "00:01:15,909 → 00:01:17,077",
    sourceText: "Sorry I'm late.",
    translations: {
      DE: {
        accurate: "Tut mir leid, dass ich zu spät bin.",
        creative: "Entschuldigt die Verspätung zusammen!",
        casual: "Sorry, bin spät dran."
      },
      RO: {
        accurate: "Îmi cer scuze că am întârziat.",
        creative: "Scuze de întârziere tuturor!",
        casual: "Scuze că am întârziat."
      },
      ES: {
        accurate: "Lamento llegar tarde.",
        creative: "¡Disculpen la demora a todos!",
        casual: "Perdón por la tardanza."
      },
      FR: {
        accurate: "Désolé d'être en retard.",
        creative: "Veuillez m'excuser pour le retard !",
        casual: "Désolé, je suis à la bourre."
      }
    }
  },
  {
    id: 2,
    timecode: "00:01:18,912 → 00:01:20,080",
    sourceText: "Where are the kids?",
    translations: {
      DE: {
        accurate: "Wo sind die Kinder?",
        creative: "Wo ist die Rasselbande geblieben?",
        casual: "Wo sind die Kids?"
      },
      RO: {
        accurate: "Unde sunt copiii?",
        creative: "Unde-i prichindimea?",
        casual: "Unde-s copiii?"
      },
      ES: {
        accurate: "¿Dónde están los niños?",
        creative: "¿Dónde se metieron los chicos?",
        casual: "¿Dónde andan los críos?"
      },
      FR: {
        accurate: "Où sont les enfants ?",
        creative: "Où est passée la marmaille ?",
        casual: "Ils sont où, les gamins ?"
      }
    }
  },
  {
    id: 3,
    timecode: "00:01:20,747 → 00:01:21,748",
    sourceText: "When I left,",
    translations: {
      DE: {
        accurate: "Als ich ging,",
        creative: "Als ich mich auf den Weg machte,",
        casual: "Als ich los bin,"
      },
      RO: {
        accurate: "Când am plecat,",
        creative: "Când m-am retras,",
        casual: "Când am tăiat-o,"
      },
      ES: {
        accurate: "Cuando me fui,",
        creative: "Al marcharme,",
        casual: "Cuando me largué,"
      },
      FR: {
        accurate: "Quand je suis parti,",
        creative: "À mon départ,",
        casual: "Quand je me suis taillé,"
      }
    }
  },
  {
    id: 4,
    timecode: "00:01:21,832 → 00:01:24,501",
    sourceText: "Hunter was making love with his iPad on the terrace",
    translations: {
      DE: {
        accurate: "Hunter hat auf der Terrasse mit seinem iPad Liebe gemacht",
        creative: "Hunter hatte ein leidenschaftliches Techtelmechtel mit seinem iPad auf dem Balkon",
        casual: "Hunter hat auf der Terrasse mit seinem iPad rumgemacht"
      },
      RO: {
        accurate: "Hunter făcea dragoste cu iPad-ul lui pe terasă",
        creative: "Hunter trăia o poveste de dragoste cu tableta pe balcon",
        casual: "Hunter se iubea cu iPad-ul pe terasă"
      },
      ES: {
        accurate: "Hunter estaba haciendo el amor con su iPad en la terraza",
        creative: "Hunter vivía un idilio cibernético con su iPad en el balcón",
        casual: "Hunter andaba dándose amor con su iPad en la terraza"
      },
      FR: {
        accurate: "Hunter faisait l'amour avec son iPad sur la terrasse",
        creative: "Hunter filait le parfait amour avec sa tablette sur le balcon",
        casual: "Hunter bécotait son iPad sur la terrasse"
      }
    }
  },
  {
    id: 5,
    timecode: "00:01:24,585 → 00:01:27,129",
    sourceText: "and Tori was ordering room service like her life depended on it.",
    translations: {
      DE: {
        accurate: "und Tori bestellte Zimmerservice, als hinge ihr Leben davon ab.",
        creative: "während Tori Zimmerservice orderte, als stünde die Apokalypse bevor.",
        casual: "und Tori hat Zimmerservice bestellt, als gäb's kein Morgen mehr."
      },
      RO: {
        accurate: "iar Tori comanda room service ca și cum viața ei ar fi depins de asta.",
        creative: "în timp ce Tori golea meniul de room service de parcă era ultima ei masă.",
        casual: "iar Tori băga comenzi la room service de parcă-i ardea buza."
      },
      ES: {
        accurate: "y Tori estaba pidiendo servicio a la habitación como si su vida dependiera de ello.",
        creative: "mientras Tori ordenaba buffet al cuarto como si se fuera a acabar el mundo.",
        casual: "y Tori pedía comida al cuarto a lo loco como si no hubiera un mañana."
      },
      FR: {
        accurate: "et Tori commandait un service de chambre comme si sa vie en dépendait.",
        creative: "alors que Tori dévalisait le room service comme si la fin du monde était pour ce soir.",
        casual: "et Tori commandait du room service comme une grosse dingue."
      }
    }
  },
  {
    id: 6,
    timecode: "00:01:27,212 → 00:01:28,755",
    sourceText: "I made dinner reservations.",
    translations: {
      DE: {
        accurate: "Ich habe einen Tisch im Restaurant reserviert.",
        creative: "Ich habe für uns alle fürs Abendessen reserviert.",
        casual: "Hab schon 'nen Tisch klargemacht."
      },
      RO: {
        accurate: "Am făcut rezervări pentru cină.",
        creative: "Am rezolvat eu masa de seară la restaurant.",
        casual: "Am rezervat masa de cină."
      },
      ES: {
        accurate: "Hice reservaciones para cenar.",
        creative: "He reservado una mesa de gala para cenar.",
        casual: "Ya aparté sitio para cenar."
      },
      FR: {
        accurate: "J'ai réservé pour le dîner.",
        creative: "J'ai sécurisé notre table au resto pour ce soir.",
        casual: "J'ai réservé la table pour le graillon."
      }
    }
  },
  {
    id: 7,
    timecode: "00:01:28,839 → 00:01:30,048",
    sourceText: "What are you gonna do?",
    translations: {
      DE: {
        accurate: "Was wirst du jetzt tun?",
        creative: "Wie sieht dein Schlachtplan aus?",
        casual: "Und was machst du jetzt?"
      },
      RO: {
        accurate: "Ce ai de gând să faci?",
        creative: "Care-i următoarea ta mutare?",
        casual: "Ce ai de gând să faci?"
      },
      ES: {
        accurate: "¿Qué vas a hacer?",
        creative: "¿Cuál es tu plan de acción?",
        casual: "¿Y qué vas a hacer tú?"
      },
      FR: {
        accurate: "Qu'est-ce que tu vas faire ?",
        creative: "Quelle est ta stratégie maintenant ?",
        casual: "Tu comptes faire quoi ?"
      }
    }
  },
  {
    id: 8,
    timecode: "00:01:30,841 → 00:01:32,092",
    sourceText: "Best laid plans.",
    translations: {
      DE: {
        accurate: "Beste Pläne scheitern eben.",
        creative: "So schnell zerschlagen sich unsere Träume.",
        casual: "Tja, dumm gelaufen."
      },
      RO: {
        accurate: "Planurile bune dau greș.",
        creative: "Socoteala de acasă nu se potrivește cu cea din târg.",
        casual: "Asta e, planurile se mai schimbă."
      },
      ES: {
        accurate: "Los planes mejor trazados.",
        creative: "A veces la vida descuadra todos los planes.",
        casual: "Plan perfecto, resultado fatal."
      },
      FR: {
        accurate: "Les plans les mieux conçus.",
        creative: "Le destin aime bien chambouler les plans.",
        casual: "Classique, tout tombe à l'eau."
      }
    }
  },
  {
    id: 9,
    timecode: "00:01:32,676 → 00:01:36,096",
    sourceText: "- Hi, I will have a Negroni, please. - Sure.",
    translations: {
      DE: {
        accurate: "- Hallo, einen Negroni bitte. - Gerne.",
        creative: "- Guten Abend, ich hätte gern einen Negroni. - Sehr wohl, kommt sofort.",
        casual: "- Hi, einen Negroni für mich bitte. - Geht klar."
      },
      RO: {
        accurate: "- Bună, un Negroni, vă rog. - Desigur.",
        creative: "- Bună seara, dați-mi un Negroni, vă rog. - Imediat se rezolvă.",
        casual: "- Salut, un Negroni la mine, mersi. - Sigur."
      },
      ES: {
        accurate: "- Hola, tomaré un Negroni, por favor. - Claro.",
        creative: "- Hola buenas, un Negroni cuando pueda, por favor. - Por supuesto.",
        casual: "- Qué tal, un Negroni por aquí. - Sale."
      },
      FR: {
        accurate: "- Bonjour, je vais prendre un Negroni, s'il vous plaît. - Bien sûr.",
        creative: "- Bonjour, faites-moi couler un Negroni, s'il vous plaît. - Absolument.",
        casual: "- Salut, un Negroni pour moi, s'te plaît. - Ça marche."
      }
    }
  },
  {
    id: 10,
    timecode: "00:01:37,014 → 00:01:39,474",
    sourceText: "- Oh, wow. - It's my vacation drink.",
    translations: {
      DE: {
        accurate: "- Oh, wow. - Das ist mein Urlaubs-Drink.",
        creative: "- Sieh mal an! - Das ist mein offizielles Feriengetränk.",
        casual: "- Oh, Oha. - Mein Standard-Urlaubsdrink."
      },
      RO: {
        accurate: "- O, wow. - E băutura mea de vacanță.",
        creative: "- Impresionant! - Ăsta e elixirul meu estival.",
        casual: "- Oh, wow. - E cocteilul meu de concediu."
      },
      ES: {
        accurate: "- Oh, wow. - Es mi bebida de vacaciones.",
        creative: "- ¡Vaya sorpresa! - Es mi brebaje reglamentario de veraneo.",
        casual: "- Ah, órale. - Mi trago relajado de playa."
      },
      FR: {
        accurate: "- Oh, wow. - C'est ma boisson de vacances.",
        creative: "- Eh bien ! - C'est mon breuvage officiel de farniente.",
        casual: "- Oh, classe. - C'est mon verre de vacances."
      }
    }
  },
  {
    id: 11,
    timecode: "00:01:39,558 → 00:01:42,477",
    sourceText: "I thought too much rosé was your vacation drink.",
    translations: {
      DE: {
        accurate: "Ich dachte, zu viel Rosé wäre dein Urlaubs-Drink.",
        creative: "Ich dachte eigentlich, literweise Rosé sei dein Urlaubs-Favorit.",
        casual: "Ich dachte, du ertränkst deinen Urlaub in Rosé."
      },
      RO: {
        accurate: "Credeam că excesul de rosé e băutura ta de vacanță.",
        creative: "Aveam impresia că rosé-ul la sticlă mare e rețeta ta de vară.",
        casual: "Parcă rosé-ul la greu era băutura ta de concediu."
      },
      ES: {
        accurate: "Pensé que el exceso de rosado era tu bebida de vacaciones.",
        creative: "Juraría que tu combustible de veraneo era el vino rosado a granel.",
        casual: "Creí que te la pasabas a puro rosado en vacaciones."
      },
      FR: {
        accurate: "Je croyais que l'excès de rosé était ta boisson de vacances.",
        creative: "Tiens, j'étais persuadé que ta potion magique de l'été c'était le rosé à volonté.",
        casual: "Je croyais que tu tournais au rosé pendant les vacances."
      }
    }
  },
  {
    id: 12,
    timecode: "00:01:42,561 → 00:01:45,939",
    sourceText: "Yeah, so I guess Negronis are my \"vacation is over\" drink.",
    translations: {
      DE: {
        accurate: "Ja, also sind Negronis wohl mein \"Urlaub ist vorbei\"-Drink.",
        creative: "Genau, und der Negroni besiegelt feierlich das Ende meiner Ferien.",
        casual: "Jo, der Negroni heilt wohl den Urlaubsblues."
      },
      RO: {
        accurate: "Da, așa că bănuiesc că Negroni e băutura mea de „s-a terminat vacanța”.",
        creative: "Exact, Negroni e remediul oficial pentru depresia post-concediu.",
        casual: "Da, deci Negroni e pentru când se gată distracția."
      },
      ES: {
        accurate: "Sí, así que supongo que los Negronis son mi bebida de \"se acabaron las vacaciones\".",
        creative: "Exacto, así que el Negroni es mi tónico de vuelta a la cruda realidad del trabajo.",
        casual: "Sí, el Negroni es para pasar el trago amargo del regreso."
      },
      FR: {
        accurate: "Ouais, donc j'imagine que les Negronis sont ma boisson de « vacances terminées ».",
        creative: "Exact, le Negroni sert donc à faire passer le blues de la rentrée.",
        casual: "Ouais, le Negroni c'est pour enterrer les vacances."
      }
    }
  }
];
