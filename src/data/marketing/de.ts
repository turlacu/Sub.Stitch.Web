import { MarketingContent } from "../../types";

export const GERMAN: MarketingContent = {
  trust: {
    title: "Unsere Hauptgarantien",
    badges: [
      { icon: "Zap", text: "Schnelle Verarbeitung", desc: "Übersetzt in unter 60 Sekunden" },
      { icon: "Brain", text: "Kontextbewusste KI", desc: "Versteht Slang, Szenenstrukturen und Redewendungen" },
      { icon: "Timer", text: "Perfektes Timing", desc: "Sichert Millisekunden-genaue Timecodes" },
      { icon: "Globe", text: "Mehrere Formate", desc: "Unterstützt .SRT-, .VTT-, .TXT- und .SUB-Dateien" },
      { icon: "Lock", text: "Sichere Abwicklung", desc: "SSL-verschlüsselt. Dateien werden nach 1 Std. gelöscht" }
    ]
  },
  problem: {
    badge: "Die Übersetzungslücke",
    title: "Schluss mit dem manuellen Korrigieren von Untertiteln.",
    subtitle: "Die meisten Übersetzer arbeiten blind Zeile für Zeile und zerstören den Dialog. Sub.Stitch versteht die Szene und bewahrt Sinn, Emotion und Fluss.",
    basicCard: {
      title: "Standard-Übersetzungssoftware",
      desc: "Wort-für-Wort-Übersetzung ohne Zusammenhang",
      sourceLabel: "Englische SRT-Quelle:",
      failureLabel: "❌ Ausfall der Bedeutung",
      translatedLabel: "Übersetzt (z.B. Deutsch):",
      failureEx: "*Falsche Bedeutung: Übersetzt die Redewendung „cool piece of cake” (etwas Einfaches/Tolles) wörtlich als Kuchen.",
      traits: [
        "Übersetzt Zeile für Zeile ohne Berücksichtigung des vorhergehenden Dialogs",
        "Übersetzt Metaphern wortwörtlich (z.B. 'feeling blue' -> Farben)",
        "Erkennt den geschlechterspezifischen Kontext nicht und ruiniert die Dynamik",
        "Ignoriert die Zeichendichte, was zu unlesbaren Textblöcken führt"
      ],
      footer: "Erfordert stundenlange manuelle Timing- und Textanpassungen."
    },
    subaiCard: {
      title: "Sub.Stitch Übersetzer",
      desc: "Kontextsensitiver Dialog-Parser",
      recBadge: "EMPFOHLEN",
      successLabel: "✓ Kontext bewahrt",
      successEx: "*Richtige Bedeutung: Sub.Stitch versteht den Slang und liefert eine perfekt natürliche Übersetzung.",
      traits: [
        "Rekonstruiert den Szenenzusammenhang für eine korrekte Zuordnung",
        "Übersetzt Redewendungen, lokalen Humor und Umgangssprache organisch",
        "Sichert eine augenfreundliche Lesegeschwindigkeit der Untertitel",
        "Behält 100% identische Millisekunden-Timecodes der SRT-Datei bei"
      ],
      footer: "Sofort bereit zum Download und Anschauen. Keine Nachbearbeitung nötig."
    }
  },
  howItWorks: {
    badge: "Arbeitsablauf",
    title: "So funktioniert Sub.Stitch",
    subtitle: "Übersetzen Sie Untertitel reibungslos in vier einfachen, hochoptimierten Schritten. Komplette Episoden in unter einer Minute.",
    steps: [
      { step: "SCHRITT 01", title: "Hochladen", desc: "Dateien (.SRT, .VTT, .TXT oder .SUB) in unser sicheres Portal ziehen." },
      { step: "SCHRITT 02", title: "Konfigurieren", desc: "Zielsprache und Ton (Präzise, Locker, Kreativ) wählen und Credits prüfen." },
      { step: "SCHRITT 03", title: "KI-Übersetzung", desc: "Unsere Kontext-Engine analysiert Untertitelblöcke gemeinsam für flüssige Dialoge." },
      { step: "SCHRITT 04", title: "Herunterladen", desc: "Erhalten Sie Ihre übersetzten Dateien sofort mit perfekt beibehaltenen Timings." }
    ],
    bottomCta: "Direkt zum Hochlade-Bereich wechseln \u2192"
  },
  features: {
    badge: "Intelligente Funktionen",
    title: "Entwickelt für Premium-Lokalisierung",
    subtitle: "Standard-Übersetzer behandeln Text wie einfache Dokumentenblätter. Sub.Stitch betrachtet Untertitel als lebendiges Kino-Ökosystem.",
    items: [
      { id: "timing", title: "Timing-Schutz", description: "Die ursprünglichen Millisekunden-Timecodes werden fest verankert.", badge: "Kugelsicher" },
      { id: "preview", title: "Direkte Vorschau", description: "Vergleichen Sie übersetzte Zeilen vor dem Download direkt neben dem Original.", badge: "Smarte Vorschau" },
      { id: "creator", title: "Creator-Workflow", description: "Speziell auf die Bedürfnisse von YouTubern, Filmemachern und Studios zugeschnitten.", badge: "Maßgeschneidert" }
    ],
    prevLine: "Vorheriger Zeilenkontext:",
    currLine: "Aktuelle Übersetzungsentscheidung:",
    done: "FERTIG",
    translating: "ÜBERSETZUNG LÄUFT...",
    locked: "[GESPERRT] Millisekunden-Sicherung aktiv",
    drift: "± 0.00ms Drift-Schutz garantiert",
    stdDraft: "Standard-Übersetzungsentwurf:",
    stdWarning: "52 Zeichen (Augenbelastung!)",
    subaiComp: "Sub.Stitch Längenkomprimierung:",
    subaiScore: "31 Zeichen (Angenehm lesbar)"
  },
  pricing: {
    badge: "Kostenloses Startpaket inklusive",
    title: "Credits erwerben. Übersetzung beschleunigen.",
    subtitle: "Erstellen Sie ein Konto und starten Sie mit 100 kostenlosen Credits. Ein Credit übersetzt ca. 10 Untertitelzeilen.",
    creditNote: "Erstellen Sie ein Konto und starten Sie mit 100 kostenlosen Credits.",
    tiers: [
      {
        id: "starter",
        name: "Starter",
        price: "$4.99",
        description: "Perfekter Einstieg. Startpaket bei Registrierung enthalten!",
        features: ["500 Übersetzungs-Credits", "~5.000 übersetzte Zeilen", "Präzise Tonalitätsanpassung", "Unterstützt .SRT, .VTT, .TXT oder .SUB", "Direkte sichere Dateivorschau", "100 Gratis-Credits bei Registrierung"],
        ctaText: "Jetzt kaufen"
      },
      {
        id: "standard",
        name: "Standard",
        price: "$14.99",
        description: "Perfekt für Creator. Startpaket bei Registrierung enthalten!",
        features: ["2.000 Übersetzungs-Credits", "~20.000 übersetzte Zeilen", "Prioritäts-Server-Warteschlange", "Tonalitätsanpassung inklusive", "Unterstützt .SRT, .VTT, .TXT oder .SUB", "100 Gratis-Credits bei Registrierung"],
        isHighlighted: true,
        ctaText: "Jetzt kaufen",
        badge: "BELIEBT"
      },
      {
        id: "professional",
        name: "Professional",
        price: "$29.99",
        description: "Für Profis & Studios. Startpaket bei Registrierung enthalten!",
        features: ["5.000 Übersetzungs-Credits", "~50.000 übersetzte Zeilen", "Maximale Verarbeitungsgeschwindigkeit", "Unterstützt .SRT, .VTT, .TXT oder .SUB", "Priorisierter Serverzugriff", "100 Gratis-Credits bei Registrierung"],
        ctaText: "Jetzt kaufen"
      }
    ],
    footerText: "Benötigen Sie mehr Credits, hohes Übersetzungsvolumen oder benutzerdefinierte Dateiformate? ",
    contactUs: "Kontaktieren Sie uns."
  },
  faq: {
    badge: "FAQ",
    title: "Häufig gestellte Fragen",
    subtitle: "Alles, was Sie über unseren präzisen, kontextbewussten SRT-Übersetzer wissen müssen.",
    items: [
      { question: "Verändert Sub.Stitch das Timing meiner Untertitel?", answer: "Nein, absolut nicht. Sub.Stitch behandelt Timecodes als schreibgeschützte Konstanten. Unabhängig davon, ob Sie .SRT, .VTT, .TXT oder .SUB hochladen, extrahiert unser System nur den Text, übersetzt ihn kontextsensitiv und fügt ihn wieder exakt in die Original-Timestamps ein." },
      { question: "Ist das dasselbe wie Google Translate oder DeepL?", answer: "Nein. Standard-Übersetzer arbeiten zeilenweise, was bei abgehackten Untertitel-Sätzen fehlschlägt. Sub.Stitch verarbeitet die gesamte Datei zusammen und erfasst so Beziehungen, Humor, Geschlecht und den roten Faden der Szene." },
      { question: "Benötige ich ein Konto, um Sub.Stitch zu nutzen?", answer: "Ja, für die Nutzung ist ein Benutzerkonto erforderlich. Sie erhalten bei der Registrierung direkt 100 kostenlose Willkommens-Credits zum Ausprobieren." },
      { question: "Welche Dateiformate werden unterstützt?", answer: "Sub.Stitch unterstützt SubRip (.srt), WebVTT (.vtt), Reintext (.txt) und MicroDVD (.sub) unter Beibehaltung aller Formatstrukturen." },
      { question: "Sind meine Untertitel-Dateien sicher?", answer: "Ja, Sicherheit ist uns wichtig. Sämtliche Übertragungen sind SSL-verschlüsselt. Die Daten werden temporär im Arbeitsspeicher verarbeitet und spätestens 1 Stunde nach dem Download vollständig gelöscht." }
    ],
    footerPrefix: "Haben Sie eine andere technische Frage? Nutzen Sie die ",
    directApp: "Direkt-App",
    footerSuffix: " oder schreiben Sie uns unten über das Kontaktformular!"
  },
  contact: {
    badge: "Kontakt",
    title: "Schreiben Sie uns",
    subtitle: "Fragen? Feedback? Benötigen Sie ein hohes Übersetzungsvolumen? Lassen Sie es uns wissen.",
    inquiries: "Anfragen",
    replyTime: "Die durchschnittliche Antwortzeit liegt unter 12 Stunden.",
    feedbackTitle: "Sub.Stitch Rückmeldung",
    feedbackDesc: "Teilen Sie uns Funktionswünsche, API-Ideen oder Dateiverbesserungen mit.",
    enterpriseTitle: "Enterprise-Schnittstellen",
    enterpriseDesc: "Sichern Sie sich dedizierte Serverleistung für Video-Plattformen.",
    emailSign: "Kontaktdetails sind über die E-Mail-Schaltfläche verfügbar.",
    emailBlockLabel: "Direkte E-Mail",
    emailBlockTitle: "Senden Sie die Details direkt aus Ihrem Postfach.",
    emailBlockDesc: "Nennen Sie Dateityp, ungefähres Untertitelvolumen, Zielsprachen und besondere Workflow-Anforderungen.",
    emailBlockAddressLabel: "Kontaktadresse",
    emailBlockPrivacyNote: "Nutzen Sie die Schaltfläche unten, um Ihr E-Mail-Programm zu öffnen.",
    emailBlockCta: "Sub.Stitch per E-Mail kontaktieren",
    successTitle: "Meldung erfolgreich gesendet!",
    successDesc: "Vielen Dank. Ihre Nachricht wurde an unseren Support weitergeleitet. Wir melden uns in Kürze bei Ihnen!",
    successBtn: "Eine weitere Nachricht senden",
    errName: "Bitte geben Sie Ihren Namen an.",
    errEmail: "Bitte geben Sie eine gültige E-Mail-Adresse an.",
    errMessage: "Die Nachricht darf nicht leer sein.",
    lblName: "Ihr Name",
    lblEmail: "E-Mail-Adresse",
    lblSubject: "Worum geht es in Ihrer Nachricht?",
    lblMessage: "Ihre Nachricht",
    optQuestion: "Fragen zu Zeitstempeln / Synchronisation",
    optFeedback: "Feedback / Funktionsvorschläge",
    optVolume: "Großes Übersetzungsvolumen",
    optOther: "Allgemeine Kontaktaufnahme",
    placeholderMessage: "Geben Sie Details an...",
    btnSend: "Nachricht senden",
    btnSending: "Wird gesendet..."
  },
  footer: {
    desc: "Kontextbewusste, KI-gestützte Untertitel-Übersetzungs-Engine, entwickelt für moderne Filmemacher, Videokünstler und Studios.",
    shortcuts: "Website-Portal",
    appHeader: "Untertitel-Anwendung",
    appDesc: "Bereit zur Übersetzung? Starten Sie die Anwendung jetzt direkt.",
    appCta: "Anwendung starten",
    status: "SYSTEM LÄUFT ONLINE UND STABIL",
    copyright: "Alle Rechte vorbehalten."
  }
};
