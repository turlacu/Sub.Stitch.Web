import { MarketingContent } from "../../types";

export const SPANISH: MarketingContent = {
  trust: {
    title: "Nuestras Garantías Principales",
    badges: [
      { icon: "Zap", text: "Procesamiento ágil", desc: "Traducido en menos de 60 segundos" },
      { icon: "Brain", text: "IA con contexto", desc: "Entiende modismos, jerga y la continuidad de escena" },
      { icon: "Timer", text: "Mantiene la sincronía", desc: "Tiempos perfectos con precisión de milisegundos" },
      { icon: "Globe", text: "Multi-formato", desc: "Soporte para archivos .SRT, .VTT, .TXT y .SUB" },
      { icon: "Lock", text: "Proceso seguro", desc: "Cifrado SSL. Archivos eliminados tras 1 hora" }
    ]
  },
  problem: {
    badge: "El Vacío de Traducción",
    title: "Deja de corregir subtítulos rotos de forma manual.",
    subtitle: "La mayoría de traductores automáticos traducen línea por línea a ciegas, arruinando los diálogos. Sub.Stitch comprende la escena, preservando el significado, la emoción y la fluidez.",
    basicCard: {
      title: "Software de Traducción Básico",
      desc: "Traductor de diccionario línea a línea",
      sourceLabel: "Origen SRT Inglés:",
      failureLabel: "❌ Fallo Literal",
      translatedLabel: "Traducido (ej. Español):",
      failureEx: "*Significado incorrecto: Traduce el modismo „cool piece of cake” (fácil/maravilloso) de forma literal como pastel de comida.",
      traits: [
        "Traduce línea por línea sin asimilar los diálogos precedentes",
        "Traduce metáforas literalmente (ej. 'feeling blue' -> colores)",
        "Incapaz de identificar el género, arruinando las dinámicas",
        "Ignora la densidad del tiempo, resultando en bloques de texto ilegibles"
      ],
      footer: "Requiere horas de revisión manual de tiempos y expresiones."
    },
    subaiCard: {
      title: "Traductor Sub.Stitch",
      desc: "Lector de diálogo sensible al contexto",
      recBadge: "RECOMENDADO",
      successLabel: "✓ Contexto conservado",
      successEx: "*Significado correcto: Sub.Stitch comprende la jerga de la escena y genera la equivalencia natural en español.",
      traits: [
        "Reconstruye la escena para mapear correctamente pronombres y géneros",
        "Traduce de forma orgánica frases naturales, humor local y modismos",
        "Garantiza velocidad y confort de lectura para la vista",
        "Mantiene los códigos de tiempo SRT de milisegundos de forma idéntica"
      ],
      footer: "Listo para descargar y ver al instante. Cero retoques necesarios."
    }
  },
  howItWorks: {
    badge: "Flujo de Trabajo",
    title: "Cómo funciona Sub.Stitch",
    subtitle: "Traduzca subtítulos sin problemas en cuatro sencillos y rápidos pasos. Procese capítulos enteros en menos de un minuto.",
    steps: [
      { step: "PASO 01", title: "Subir", desc: "Arrastre archivos de subtítulos .SRT, .VTT, .TXT o .SUB a nuestro portal seguro." },
      { step: "PASO 02", title: "Configurar", desc: "Seleccione el idioma destino, filtro de tono (Preciso, Casual o Creativo) y confirme créditos." },
      { step: "PASO 03", title: "Traducción IA", desc: "El motor de contexto analiza los subtítulos en conjunto para obtener diálogos fluidos." },
      { step: "PASO 04", title: "Descargar", desc: "Descargue instantáneamente sus archivos con el tiempo original perfectamente intacto." }
    ],
    bottomCta: "Ir directo al panel de carga de archivos \u2192"
  },
  features: {
    badge: "Funciones Inteligentes",
    title: "Diseñado para localización premium",
    subtitle: "Los traductores estándar tratan el texto como aburridos folios de documentos. Sub.Stitch trata tus subtítulos como un ecosistema vivo de cine.",
    items: [
      { id: "timing", title: "Protección de Tiempos", description: "Los tiempos originales de milisegundos se quedan completamente cerrados.", badge: "Blindado" },
      { id: "preview", title: "Modo de Vista Previa", description: "Vea y revise las líneas traducidas lado a lado con el texto de origen.", badge: "Vista previa inteligente" },
      { id: "creator", title: "Flujo para Creadores", description: "Creado específicamente para cineastas profesionales, creadores de YouTube y productoras.", badge: "A medida" }
    ],
    prevLine: "Contexto de línea anterior:",
    currLine: "Decisión de traducción de línea actual:",
    done: "HECHO",
    translating: "TRADUCIENDO...",
    locked: "[BLOQUEADO] Bloqueo de Milisegundos Activo",
    drift: "± 0.00ms de desvío de seguridad",
    stdDraft: "Borrador de Traducción Estándar:",
    stdWarning: "52 caracteres (Fatiga visual)",
    subaiComp: "Compresión de Longitud Sub.Stitch:",
    subaiScore: "31 caracteres (Lectura Confortable)"
  },
  pricing: {
    badge: "Paquete Gratuito de Start Incluido",
    title: "Adquiere Créditos. Empuja Tu Rendimiento.",
    subtitle: "Registra una cuenta para empezar a traducir con 100 créditos gratis. Cada crédito procesa un promedio de 10 líneas.",
    creditNote: "Registra una cuenta para empezar a traducir con 100 créditos gratis.",
    tiers: [
      {
        id: "starter",
        name: "Starter",
        price: "$4.99",
        description: "Ideal para empezar. ¡Créditos de regalo incluidos al iniciar!",
        features: ["500 créditos de traducción", "~5.000 líneas traducidas", "Ajuste de tono de alta precisión", "Soporta .SRT, .VTT, .TXT o .SUB", "Vista previa de archivos segura", "100 créditos iniciales gratis al registrarte"],
        ctaText: "Comprar Ahora"
      },
      {
        id: "standard",
        name: "Standard",
        price: "$14.99",
        description: "El más popular. ¡Créditos de regalo incluidos al iniciar!",
        features: ["2.000 créditos de traducción", "~20.000 líneas traducidas", "Cola de servidor prioritaria", "Ajustes de tono incluidos", "Soporta .SRT, .VTT, .TXT o .SUB", "100 créditos iniciales gratis al registrarte"],
        isHighlighted: true,
        ctaText: "Comprar Ahora",
        badge: "POPULAR"
      },
      {
        id: "professional",
        name: "Professional",
        price: "$29.99",
        description: "Para profesionales. ¡Créditos de regalo incluidos al iniciar!",
        features: ["5.000 créditos de traducción", "~50.000 líneas traducidas", "Eficacia de procesamiento ultra-rápida", "Soporta .SRT, .VTT, .TXT o .SUB", "Acceso VIP de servidor prioritario", "100 créditos iniciales gratis al registrarte"],
        ctaText: "Comprar Ahora"
      }
    ],
    footerText: "¿Necesitas más créditos, traducciones de alto volumen o soporte con formatos personalizados? ",
    contactUs: "Consúltanos."
  },
  faq: {
    badge: "F.A.Q.",
    title: "Preguntas Frecuentes",
    subtitle: "Todo lo que necesitas saber sobre nuestro traductor de subtítulos SRT sensible al contexto.",
    items: [
      { question: "¿Modifica Sub.Stitch los tiempos de mis subtítulos?", answer: "En absoluto. Sub.Stitch trata los códigos de tiempo como constantes de solo lectura. Extraemos el bloque de texto puro, lo traducimos aplicando algoritmos de IA y lo insertamos de nuevo en los mismos milisegundos originales." },
      { question: "¿Es parecido a Google Translate o DeepL?", answer: "No. Los traductores online tradicionales van línea por línea, rompiendo los diálogos. Sub.Stitch une los bloques adyacentes para que el modelo entienda quién está hablando, el sarcasmo, el género y la continuación narrativa de la escena." },
      { question: "¿Necesito una cuenta para usar Sub.Stitch?", answer: "Sí, es obligatorio crear una cuenta. Al registrarte te regalamos 100 créditos de bienvenida para que experimentes la traducción inteligente sin ningún costo." },
      { question: "¿Qué formatos de archivo se admiten?", answer: "Sub.Stitch soporta perfectamente los formatos SubRip (.srt), WebVTT (.vtt), Texto Plano (.txt) y MicroDVD (.sub), cuidando los metadatos." },
      { question: "¿Están seguros mis archivos en Sub.Stitch?", answer: "Sí, la seguridad es un pilar fundamental. Utilizamos cifrado SSL para las transferencias de archivos. Los datos se procesan de forma temporal en RAM y se eliminan del servidor en 1 hora tras tu descarga." }
    ],
    footerPrefix: "¿Tienes otra consulta técnica? Echa un vistazo a la ",
    directApp: "Aplicación Directa",
    footerSuffix: " o envíanos un ticket detallado en el formulario de abajo."
  },
  contact: {
    badge: "Contacto",
    title: "Ponte en contacto",
    subtitle: "¿Preguntas? ¿Sugerencias? ¿Necesitas volumen de subtitulado empresarial? Escríbenos.",
    inquiries: "Soporte y Consultas",
    replyTime: "El tiempo medio de respuesta es inferior a 12 horas.",
    feedbackTitle: "Sugerencias Sub.Stitch",
    feedbackDesc: "Cuéntanos sobre funciones que te faltan, API o mejoras en el portal.",
    enterpriseTitle: "Servicio Enterprise",
    enterpriseDesc: "Solicita rendimiento y servidores dedicados de alto uso para plataformas de vídeo.",
    emailSign: "Los datos de contacto están disponibles mediante el botón de correo.",
    emailBlockLabel: "Correo directo",
    emailBlockTitle: "Envíanos los detalles desde tu bandeja de entrada.",
    emailBlockDesc: "Incluye el tipo de archivo, volumen aproximado de subtítulos, idiomas objetivo y cualquier requisito del flujo de trabajo.",
    emailBlockAddressLabel: "Dirección de contacto",
    emailBlockPrivacyNote: "Usa el botón de abajo para abrir tu cliente de correo.",
    emailBlockCta: "Enviar correo a Sub.Stitch",
    successTitle: "¡Mensaje Enviado con Éxito!",
    successDesc: "Muchas gracias. Tu correo ha sido entregado a nuestra mesa de operaciones. ¡Te responderemos muy pronto!",
    successBtn: "Enviar otro mensaje",
    errName: "Por favor, especifica tu nombre.",
    errEmail: "Por favor, especifica un correo electrónico válido.",
    errMessage: "El mensaje no puede dejarse vacío.",
    lblName: "Tu Nombre",
    lblEmail: "Correo Electrónico",
    lblSubject: "¿Qué estás buscando?",
    lblMessage: "Tu Mensaje",
    optQuestion: "Preguntas de tiempos / sincronizaciones",
    optFeedback: "Feedback e ideas de características",
    optVolume: "Petición de alto volumen personalizado",
    optOther: "Saludo General",
    placeholderMessage: "Danos los detalles...",
    btnSend: "Enviar Mensaje",
    btnSending: "Enviando..."
  },
  footer: {
    desc: "Motor de traducción de subtítulos impulsado por IA y sensible al contexto, diseñado especialmente para realizadores de contenido modernos, creadores y localizadores profesionales.",
    shortcuts: "Portal Web",
    appHeader: "Aplicación de Subtitulado",
    appDesc: "¿Listo para traducir archivos SRT ahora mismo? Abre nuestro portal.",
    appCta: "Abrir Aplicación",
    status: "SISTEMA OPERATIVO Y ONLINE",
    copyright: "Todos los derechos reservados."
  }
};
