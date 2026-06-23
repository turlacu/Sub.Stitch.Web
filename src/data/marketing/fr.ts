import { MarketingContent } from "../../types";

export const FRENCH: MarketingContent = {
  trust: {
    title: "Nos Garanties Principales",
    badges: [
      { icon: "Zap", text: "Traitement ultra-rapide", desc: "Traduit en moins de 60 secondes" },
      { icon: "Brain", text: "IA sensible au contexte", desc: "Comprend l'argot, l'humour local et la scène" },
      { icon: "Timer", text: "Aucun décalage", desc: "Conservation des codes temporels à la milliseconde" },
      { icon: "Globe", text: "Multi-formats", desc: "Supporte les fichiers .SRT, .VTT, .TXT & .SUB" },
      { icon: "Lock", text: "Traitement sécurisé", desc: "Cryptage SSL. Fichiers supprimés après 1 heure" }
    ]
  },
  problem: {
    badge: "L'écart de Traduction",
    title: "Arrêtez de corriger vos sous-titres à la main.",
    subtitle: "Les traducteurs automatiques classiques effectuent un mot-à-mot aveugle, gâchant le dialogue. Sub.Stich saisit l'ensemble de la scène ou de l'intrigue.",
    basicCard: {
      title: "Traducteur Automatique Standard",
      desc: "Traduction mécanique ligne par ligne",
      sourceLabel: "Source SRT en Anglais:",
      failureLabel: "❌ Traduction Littérale",
      translatedLabel: "Traduit (ex. Français):",
      failureEx: "*Faux sens : Traduit l'idiome \"cool piece of cake\" (quelque chose de simple/génial) de manière alimentaire.",
      traits: [
        "Traduit ligne par ligne sans corrélation avec les répliques précédentes",
        "Traduit les expressions imagées de manière littérale (ex. 'feeling blue' -> couleurs)",
        "Ignore les genres des personnages, ce qui nuit à l'intrigue",
        "Ne tient pas compte de la vitesse de lecture, créant des pavés illisibles"
      ],
      footer: "Représente des heures de correction manuelle en bout de chaîne."
    },
    subaiCard: {
      title: "Outil de Traduction Sub.Stich",
      desc: "Analyseur de dialogue contextuel",
      recBadge: "RECOMMANDÉ",
      successLabel: "✓ Contexte préservé",
      successEx: "*Sens idéal : Sub.Stich assimile l'expression familière et propose l'équivalent parfait en français.",
      traits: [
        "Reconstitue la cohérence de scène pour bien attribuer les genres et pronoms",
        "Traduce naturellement les expressions familières et l'humour local",
        "Assure un confort de lecture optimal pour l'oeil du spectateur",
        "Garantit des codes de temps SRT identiques à la milliseconde près"
      ],
      footer: "Prêt à être téléchargé et visionné immédiatement. Zéro retouche."
    }
  },
  howItWorks: {
    badge: "Processus Simple",
    title: "Comment fonctionne Sub.Stich",
    subtitle: "Traduisez vos sous-titres en quatre étapes simples et rapides. Un épisode complet traité en moins d'une minute.",
    steps: [
      { step: "ÉTAPE 01", title: "Déposer", desc: "Glissez vos fichiers de sous-titres .SRT, .VTT, .TXT ou .SUB de manière sécurisée." },
      { step: "ÉTAPE 02", title: "Paramétrer", desc: "Choisissez votre langue, l'ajustement du ton (Fidèle, Familier, Créatif) et lancez." },
      { step: "ÉTAPE 03", title: "Traduction IA", desc: "Notre moteur contextuel analyse vos blocs ensemble pour un dialogue fluide." },
      { step: "ÉTAPE 04", title: "Récupérer", desc: "Téléchargez immédiatement vos fichiers traduits avec le calage d'origine." }
    ],
    bottomCta: "Aller directement au panneau de téléchargement \u2192"
  },
  features: {
    badge: "Fonctionnalités Clés",
    title: "Une localisation de qualité professionnelle",
    subtitle: "Les traducteurs basiques traitent les sous-titres comme de simples textes bruts. Sub.Stich les gère comme une intrigue vivante.",
    items: [
      { id: "context", title: "Moteur Contextuel IA", description: "Analyse les lignes précédentes pour saisir l'humour, la complicité et l'intrigue.", badge: "Unique" },
      { id: "batch", title: "Multi-Formats", description: "Prise en charge de tous les formats professionnels : .SRT, .VTT, .TXT ou .SUB.", badge: "Universel" },
      { id: "timing", title: "Verrou Temporel", description: "Les repères temporels d'origine restent protégés à la milliseconde près.", badge: "Verrouillé" },
      { id: "length", title: "Optimisation de Lecture", description: "Régule la longueur des phrases pour s'adapter naturellement à l'oeil humain.", badge: "UX-Aware" },
      { id: "preview", title: "Aperçu en Direct", description: "Examinez les lignes traduites à côté des originales avant de valider.", badge: "Aperçu Malin" },
      { id: "creator", title: "Workflow Créateur", description: "Parfaitement adapté aux vidéastes, aux chaînes YouTube et aux studios de doublage.", badge: "Haut de Gamme" }
    ],
    prevLine: "Contexte de réplique précédente :",
    currLine: "Décision finale de traduction :",
    done: "TERMINÉ",
    translating: "TRADUCTION EN COURS...",
    locked: "[ACTIF] Verrou temporel de sécurité",
    drift: "± 0.00ms de dérive assurée",
    stdDraft: "Aperçu de Traduction Classique :",
    stdWarning: "52 caractères (Fatigue visuelle)",
    subaiComp: "Optimisation de Longueur Sub.Stich :",
    subaiScore: "31 caractères (Lecture fluide)"
  },
  pricing: {
    badge: "Offre d'Acceuil Incluse",
    title: "Abonnements et Crédits. Boostez votre production.",
    subtitle: "Créez un compte et bénéficiez de 100 crédits offerts à l'inscription. Un crédit traduit environ 10 lignes de sous-titres.",
    tiers: [
      {
        id: "starter",
        name: "Starter",
        price: "$4.99",
        description: "Idéal pour débuter. Offre de bienvenue active à l'inscription !",
        features: ["500 crédits de traduction", "~5 000 lignes traduites", "Ajustement du ton ultra-précis", "Supporte .SRT, .VTT, .TXT ou .SUB", "Aperçu sécurisé des fichiers", "100 crédits d'accueil gratuits"],
        ctaText: "Acheter"
      },
      {
        id: "standard",
        name: "Standard",
        price: "$14.99",
        description: "La formule préférée. Offre de bienvenue active à l'inscription !",
        features: ["2 000 crédits de traduction", "~20 000 lignes traduites", "File d'attente serveur prioritaire", "Ajustement du ton inclus", "Supporte .SRT, .VTT, .TXT ou .SUB", "100 crédits d'accueil gratuits"],
        isHighlighted: true,
        ctaText: "Acheter",
        badge: "POPULAIRE"
      },
      {
        id: "professional",
        name: "Professional",
        price: "$29.99",
        description: "Pour les professionnels. Offre de bienvenue active à l'inscription !",
        features: ["5 000 crédits de traduction", "~50 000 lignes traduites", "Traitement serveur prioritaire maximum", "Supporte .SRT, .VTT, .TXT ou .SUB", "File d'attente VIP", "100 crédits d'accueil gratuits"],
        ctaText: "Acheter"
      }
    ],
    footerText: "Besoin de volumes sur-mesure, de fonctions automatisées ou d'un format spécifique ? ",
    contactUs: "Contactez-nous."
  },
  faq: {
    badge: "FAQ",
    title: "Questions Fréquentes",
    subtitle: "Tout ce qu'il faut savoir sur notre traducteur intelligent de fichiers SRT/VTT.",
    items: [
      { question: "Est-ce que Sub.Stich modifie mes repères temporels ?", answer: "Non, absolument pas. Sub.Stich traite les timecodes en lecture seule. Notre parser extrait le texte, le traduit, et le réinsère au millième de seconde près à son emplacement d'origine." },
      { question: "Est-ce comparable à Google Traduction ou DeepL ?", answer: "No. Ces outils traduisent ligne par ligne de manière isolée. Notre moteur 'Context-Aware' traite l'ensemble des répliques adjacentes à la fois pour comprendre l'identité des locuteurs, l'humour, le genre et l'intrigue." },
      { question: "L'inscription est-elle obligatoire ?", answer: "Oui, un compte est nécessaire pour gérer votre solde de manière sécurisée. Nous offrons 100 crédits d'évaluation dès la validation du compte." },
      { question: "Quels formats de sous-titres sont tolérés ?", answer: "Sub.Stich prend entièrement en charge le SubRip (.srt), WebVTT (.vtt), Texte Brut (.txt) et MicroDVD (.sub), tout en préservant le format d'origine." },
      { question: "Mes données restent-elles confidentielles ?", answer: "Tout à fait. Toutes les transmissions de fichiers sont cryptées via protocole SSL. Les calculs sont faits en RAM et les copies transitoires sont purgées des serveurs 1 heure après téléchargement." }
    ],
    footerPrefix: "Une autre question d'ordre technique ? Testez directement la ",
    directApp: "Plateforme Directe",
    footerSuffix: " ou posez votre question via notre bureau d'échange juste en dessous !"
  },
  contact: {
    badge: "Contact",
    title: "Contactez notre équipe",
    subtitle: "Des questions ? Des retours ? Un besoin volumineux de niveau industriel ? Écrivez-nous.",
    inquiries: "Assistance client",
    replyTime: "Délai moyen de retour de moins de 12 heures.",
    feedbackTitle: "Suggestions Sub.Stich",
    feedbackDesc: "Partagez vos idées de fonctionnalités manquantes, requêtes ou intégrations API.",
    enterpriseTitle: "Plans Entreprise",
    enterpriseDesc: "Obtenez des serveurs dédiés de grande puissance pour vos plateformes ou catalogues.",
    emailSign: "Contact : turlacu@live.com",
    successTitle: "Message envoyé avec succès !",
    successDesc: "Nous vous remercions. Votre ticket a été transmis à notre service technique. Nous revenons vers vous rapidement.",
    successBtn: "Écrire une autre note",
    errName: "Veuillez spécifier votre nom.",
    errEmail: "Veuillez fournir un e-mail valide.",
    errMessage: "Le contenu du message ne peut pas être vide.",
    lblName: "Votre Nom",
    lblEmail: "Adresse E-mail",
    lblSubject: "Quel est l'objet de votre démarche ?",
    lblMessage: "Votre Message",
    optQuestion: "Problème sur un calage / calage temporel",
    optFeedback: "Suggestions / Améliorations de l'outil",
    optVolume: "Demande personnalisée de gros volumes",
    optOther: "Prise de contact générale",
    placeholderMessage: "Détaillez votre demande...",
    btnSend: "Envoyer le Message",
    btnSending: "Envoi en cours..."
  },
  footer: {
    desc: "Moteur de traduction de sous-titres intelligent optimisé par IA, conçu spécifiquement pour les vidéastes et les agences de doublage/localisation.",
    shortcuts: "Raccourcis Portails",
    appHeader: "Application Sous-Titres",
    appDesc: "Prêt à traduire vos sous-titres ? Lancez la console de traitement.",
    appCta: "Ouvrir l'Application",
    status: "SYSTÈME ACCESSIBLE EN LIGNE",
    copyright: "Tous droits réservés."
  }
};
