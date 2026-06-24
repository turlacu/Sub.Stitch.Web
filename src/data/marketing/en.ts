import { MarketingContent } from "../../types";

export const ENGLISH: MarketingContent = {
  trust: {
    title: "Our Core Guarantees",
    badges: [
      { icon: "Zap", text: "Fast processing", desc: "Translated in under 60 seconds" },
      { icon: "Brain", text: "Context-aware AI", desc: "Understands slang, scene structure and idioms" },
      { icon: "Timer", text: "Keeps timing sync", desc: "Millisecond-perfect timecodes preserved" },
      { icon: "Globe", text: "Multiple formats", desc: "Supports .SRT, .VTT, .TXT & .SUB files" },
      { icon: "Lock", text: "Secure processing", desc: "SSL encrypted. Files deleted after 1 hour" }
    ]
  },
  problem: {
    badge: "The Translation Gap",
    title: "Stop fixing broken subtitles manually.",
    subtitle: "Most automatic translators convert line-by-line blindly, ruining the dialog. Sub.Stitch understands the scene, keeping meaning, emotion, and flow.",
    basicCard: {
      title: "Basic Translation Software",
      desc: "Line-by-line machine dictionary",
      sourceLabel: "English SRT Source:",
      failureLabel: "❌ Literal Failure",
      translatedLabel: "Translated (e.g. Romanian):",
      failureEx: "*Wrong meaning: Translates idiomatic \"cool piece of cake\" literally to food.",
      traits: [
        "Translates line-by-line without understanding preceding dialogue",
        "Translates metaphors literally (e.g., 'feeling blue' -> colors)",
        "Fails to identify gender context, ruining character dynamics",
        "Ignores timing-density constraints, resulting in unreadable text blocks"
      ],
      footer: "Requires hours of manual timing & wording revision."
    },
    subaiCard: {
      title: "Sub.Stitch Translator",
      desc: "Context-aware dialogue parser",
      recBadge: "RECOMMENDED",
      successLabel: "✓ Context preserved",
      successEx: "*Correct meaning: Sub.Stitch understands the contextual slang and outputs a perfect natural equivalent.",
      traits: [
        "Reconstructs scene continuity so pronouns/genders map correctly",
        "Translates natural phrases, local humor and idioms organically",
        "Ensures comfortable subtitle reading speeds on viewer eyes",
        "Keeps 100% accurate identical millisecond SRT timecodes"
      ],
      footer: "Ready to download and watch instantly. Zero tweaks required."
    }
  },
  howItWorks: {
    badge: "Pipeline Workflow",
    title: "How Sub.Stitch works",
    subtitle: "Translate subtitles smoothly in four simple, highly optimized steps. Process complete season files in under a minute.",
    steps: [
      { step: "STEP 01", title: "Upload", desc: "Drag & drop .SRT, .VTT, .TXT or .SUB subtitle files securely into our portal." },
      { step: "STEP 02", title: "Configure", desc: "Choose target language, tone filter (Accurate, Casual, Creative) and verify credits." },
      { step: "STEP 03", title: "AI Translation", desc: "Our custom context engine analyzes subtitle blocks together for fluid dialogue." },
      { step: "STEP 04", title: "Download", desc: "Get your fully translated, timestamp-preserved files instantly ready to publish." }
    ],
    bottomCta: "Go direct to file ingestion panel \u2192"
  },
  features: {
    badge: "Intelligent Features",
    title: "Engineered for premium localization",
    subtitle: "Standard translators treat text like plain sheets of documents. Sub.Stitch treats your subtitle like a living cinematic ecosystem.",
    items: [
      { id: "context", title: "AI Context Engine", description: "Reads preceding lines to grasp humor, relationships, and continuity.", badge: "Unique" },
      { id: "batch", title: "Format Freedom", description: "Supports subtitle files across all formats: .SRT, .VTT, .TXT or .SUB.", badge: "Universal" },
      { id: "timing", title: "Timing Protection", description: "Original millisecond timeframes are locked exactly as upload constants.", badge: "Bulletproof" },
      { id: "length", title: "Length Optimization", description: "Configures output sentences so they contain comfortable char-counts.", badge: "UX-Aware" },
      { id: "preview", title: "Direct Preview Mode", description: "Iterate alongside our layout by previewing translated lines side-by-side.", badge: "Smart preview" },
      { id: "creator", title: "Creator Workflow", description: "Engineered specifically to fulfill requirements for filmmakers, YouTube creators, and content houses.", badge: "Tailored" }
    ],
    prevLine: "Previous line context:",
    currLine: "Current translation decision:",
    done: "DONE",
    translating: "TRANSLATING...",
    locked: "[LOCKED] Millisecond Lock Activator",
    drift: "± 0.00ms Drift safety",
    stdDraft: "Standard Translation Draft:",
    stdWarning: "52 Chars (Eye Strain)",
    subaiComp: "Sub.Stitch Length Compression:",
    subaiScore: "31 Chars (Comfortable Read)"
  },
  pricing: {
    badge: "Account Starter Package Included",
    title: "Purchase Credits. Boost Your Output.",
    subtitle: "Create an account to start translating with 100 free automatic credits. Each credit translates approximately 10 subtitle lines.",
    creditNote: "Create an account to start translating with 100 free automatic credits.",
    tiers: [
      {
        id: "starter",
        name: "Starter",
        price: "$4.99",
        description: "Fuel subtitle translations. Free starter package included on sign up!",
        features: ["500 translation credits", "~5,000 translated lines", "Highly-accurate tonal adjustment", "Supports .SRT, .VTT, .TXT or .SUB", "Instant secure file preview", "Free 100 starter credits on signup"],
        ctaText: "Buy Now"
      },
      {
        id: "standard",
        name: "Standard",
        price: "$14.99",
        description: "Fuel subtitle translations. Free starter package included on sign up!",
        features: ["2,000 translation credits", "~20,000 translated lines", "Priority server queue", "Tone adjustments included", "Supports .SRT, .VTT, .TXT or .SUB", "Free 100 starter credits on signup"],
        isHighlighted: true,
        ctaText: "Buy Now",
        badge: "POPULAR"
      },
      {
        id: "professional",
        name: "Professional",
        price: "$29.99",
        description: "Fuel subtitle translations. Free starter package included on sign up!",
        features: ["5,000 translation credits", "~50,000 translated lines", "Maximum processing efficiency", "Supports .SRT, .VTT, .TXT or .SUB", "Priority server queue access", "Free 100 starter credits on signup"],
        ctaText: "Buy Now"
      }
    ],
    footerText: "Need more credits, volume subtitle localizations, or custom file support? ",
    contactUs: "Contact us."
  },
  faq: {
    badge: "F.A.Q.",
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to understand about our custom context-aware SRT translator.",
    items: [
      { question: "Does Sub.Stitch change my subtitle timing?", answer: "Absolutely not. Sub.Stitch treats subtitle timecodes as read-only constants. Whether you upload .SRT, .VTT, .TXT or .SUB, our core parser strictly extracts text blocks, translates them using context-aware algorithms, and then maps them back to their exact original timestamps." },
      { question: "Is this the same as Google Translate or DeepL?", answer: "No. Standard online translators process text line-by-line, which breaks down because subtitles are fragmented dialogue spread across cut-off points. Sub.Stitch parses your entire file using our custom 'Context-Aware Reconstruction Engine'. This feeds adjacent blocks to the model together, helping it understand who is speaking, sarcasm, gender context, and sentence continuation." },
      { question: "Do I need an account to use Sub.Stitch?", answer: "Yes, you need to create an account to use the application. The great news is that every new user receives 100 free credits upon sign up to let you fully experience context-aware subtitle translation—free starter package included on sign up!" },
      { question: "Which subtitle file types are supported?", answer: "Sub.Stitch fully supports SubRip (.srt), WebVTT (.vtt), Plain Text (.txt), and MicroDVD (.sub) formats, keeping dialogue aligned and metadata clean for downstream renderers." },
      { question: "Are my subtitle files kept private?", answer: "Yes, security is a key pillar of our service. Sub.Stitch uses secure SSL encryption for all file transfers. Direct uploads are securely processed in RAM, of which transient cached outputs are automatically deleted from our servers within 1 hour after download." }
    ],
    footerPrefix: "Have a different technical question? Check out our ",
    directApp: "Direct App",
    footerSuffix: " to review custom options or submit a request directly in the box below!"
  },
  contact: {
    badge: "Get In Touch",
    title: "Connect with us",
    subtitle: "Questions? Feedback? Need premium bulk subtitle translation volume? Let us know.",
    inquiries: "Inquiries",
    replyTime: "Average reply time is under 12 hours.",
    feedbackTitle: "Sub.Stitch Feedback",
    feedbackDesc: "Tell us about missing features, API ideas, or file improvements.",
    enterpriseTitle: "Enterprise Plans",
    enterpriseDesc: "Request high-performing dedicated slots for video platforms.",
    emailSign: "Contact: turlacu@live.com",
    emailBlockLabel: "Direct Email",
    emailBlockTitle: "Send the details from your inbox.",
    emailBlockDesc: "Include the file type, approximate subtitle volume, target languages, and any workflow constraints.",
    emailBlockAddressLabel: "Contact address",
    emailBlockCta: "Email Sub.Stitch",
    successTitle: "Message Dispatch Sent!",
    successDesc: "Thank you. Your inquiry has been forwarded directly to our support desk. We will reach back shortly!",
    successBtn: "Submit Another Note",
    errName: "Please specify your name.",
    errEmail: "Please provide a valid email address.",
    errMessage: "Message content cannot be blank.",
    lblName: "Your Name",
    lblEmail: "Email Address",
    lblSubject: "What are you looking for?",
    lblMessage: "Your Message",
    optQuestion: "Questions regarding timestamps",
    optFeedback: "User Feedback / Suggestions",
    optVolume: "Custom high-volume request",
    optOther: "General Greetings",
    placeholderMessage: "Provide details...",
    btnSend: "Send Message",
    btnSending: "Dispatching..."
  },
  footer: {
    desc: "Context-aware, AI-powered subtitle translation engine designed specifically for modern filmmakers, creators, and localizers who refuse line-by-line dictionary results.",
    shortcuts: "Website Portal",
    appHeader: "Subtitle Application",
    appDesc: "Ready to translate your SRT files now? Launch the portal immediately.",
    appCta: "Open Application",
    status: "SYSTEM RUNNING ONLINE",
    copyright: "All rights reserved."
  }
};
