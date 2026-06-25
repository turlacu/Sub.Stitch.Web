import { MarketingContent } from "../types";
import { ENGLISH } from "./marketing/en";
import { ROMANIAN } from "./marketing/ro";
import { GERMAN } from "./marketing/de";
import { SPANISH } from "./marketing/es";
import { FRENCH } from "./marketing/fr";
import { PORTUGUESE } from "./marketing/pt";
import { ITALIAN } from "./marketing/it";

export type { MarketingContent };

function deepTranslate(obj: any, dict: Record<string, string>): any {
  if (typeof obj === "string") {
    return dict[obj] || obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(item => deepTranslate(item, dict));
  }
  if (obj && typeof obj === "object") {
    const result: any = {};
    for (const key of Object.keys(obj)) {
      result[key] = deepTranslate(obj[key], dict);
    }
    return result;
  }
  return obj;
}

const PATCH_KEYS = {
  upload: "Upload",
  download: "Download",
  basicTraitLine: "Translates line-by-line without understanding preceding dialogue",
  basicTraitMetaphor: "Translates metaphors literally (e.g., 'feeling blue' -> colors)",
  basicTraitGender: "Fails to identify gender context, ruining character dynamics",
  basicTraitTiming: "Ignores timing-density constraints, resulting in unreadable text blocks",
  supportedFiles: "Supports .SRT, .VTT, .TXT or .SUB",
  faqFooterPrefix: "Have a different technical question? Check out our ",
  faqDirectApp: "Direct App",
  faqFooterSuffix: " to review custom options or submit a request directly in the box below!",
  feedbackTitle: "Feedback Sub.Stitch",
  footerDesc: "Context-aware, AI-powered subtitle translation engine designed specifically for modern filmmakers, creators, and localizers who refuse line-by-line dictionary results.",
  footerShortcuts: "Website Portal",
  footerAppHeader: "Subtitle Application",
  footerAppDesc: "Ready to translate your SRT files now? Launch the portal immediately.",
  footerAppCta: "Open Application",
  footerStatus: "SYSTEM RUNNING ONLINE",
  footerCopyright: "All rights reserved."
} as const;

const GENERATED_COPY_PATCHES: Record<string, Record<string, string>> = {
  ar: {
    [PATCH_KEYS.upload]: "رفع",
    [PATCH_KEYS.download]: "تنزيل",
    [PATCH_KEYS.basicTraitLine]: "يترجم سطراً بسطر دون فهم الحوار السابق",
    [PATCH_KEYS.basicTraitMetaphor]: "يترجم الاستعارات حرفياً مثل تحويل التعبيرات إلى ألوان",
    [PATCH_KEYS.basicTraitGender]: "يفشل في تحديد سياق الجنس، مما يفسد ديناميكية الشخصيات",
    [PATCH_KEYS.basicTraitTiming]: "يتجاهل قيود كثافة التوقيت، فتظهر كتل نصية صعبة القراءة",
    [PATCH_KEYS.supportedFiles]: "يدعم ملفات .SRT و.VTT و.TXT و.SUB",
    [PATCH_KEYS.faqFooterPrefix]: "هل لديك سؤال تقني آخر؟ افتح ",
    [PATCH_KEYS.faqDirectApp]: "التطبيق المباشر",
    [PATCH_KEYS.faqFooterSuffix]: " لمراجعة الخيارات المخصصة أو إرسال طلب من قسم التواصل أدناه!",
    [PATCH_KEYS.feedbackTitle]: "ملاحظات Sub.Stitch",
    [PATCH_KEYS.footerDesc]: "محرك ترجمة ترجمات مدعوم بالذكاء الاصطناعي وواع بالسياق، صمم خصيصاً لصناع الأفلام والمبدعين وفرق التوطين الذين لا يقبلون نتائج القواميس سطراً بسطر.",
    [PATCH_KEYS.footerShortcuts]: "بوابة الموقع",
    [PATCH_KEYS.footerAppHeader]: "تطبيق الترجمة",
    [PATCH_KEYS.footerAppDesc]: "هل أنت جاهز لترجمة ملفات SRT الآن؟ افتح البوابة مباشرة.",
    [PATCH_KEYS.footerAppCta]: "فتح التطبيق",
    [PATCH_KEYS.footerStatus]: "النظام يعمل الآن",
    [PATCH_KEYS.footerCopyright]: "جميع الحقوق محفوظة."
  },
  bg: {
    [PATCH_KEYS.upload]: "Качване",
    [PATCH_KEYS.download]: "Изтегляне",
    [PATCH_KEYS.basicTraitLine]: "Превежда ред по ред, без да разбира предишния диалог",
    [PATCH_KEYS.basicTraitMetaphor]: "Превежда метафорите буквално, вместо като естествени изрази",
    [PATCH_KEYS.basicTraitGender]: "Не разпознава контекста на рода и нарушава динамиката между героите",
    [PATCH_KEYS.basicTraitTiming]: "Игнорира ограниченията за плътност на тайминга и създава трудни за четене блокове",
    [PATCH_KEYS.supportedFiles]: "Поддържа .SRT, .VTT, .TXT или .SUB",
    [PATCH_KEYS.faqFooterPrefix]: "Имате друг технически въпрос? Отворете ",
    [PATCH_KEYS.faqDirectApp]: "директното приложение",
    [PATCH_KEYS.faqFooterSuffix]: " за персонални опции или изпратете заявка от секцията за контакт по-долу!",
    [PATCH_KEYS.feedbackTitle]: "Обратна връзка за Sub.Stitch",
    [PATCH_KEYS.footerDesc]: "AI двигател за превод на субтитри с разбиране на контекста, създаден за съвременни режисьори, автори и локализатори, които не приемат построчни речникови резултати.",
    [PATCH_KEYS.footerShortcuts]: "Уеб портал",
    [PATCH_KEYS.footerAppHeader]: "Приложение за субтитри",
    [PATCH_KEYS.footerAppDesc]: "Готови ли сте да преведете SRT файловете си? Отворете портала веднага.",
    [PATCH_KEYS.footerAppCta]: "Отвори приложението",
    [PATCH_KEYS.footerStatus]: "СИСТЕМАТА РАБОТИ ОНЛАЙН",
    [PATCH_KEYS.footerCopyright]: "Всички права запазени."
  },
  "zh-cn": {
    [PATCH_KEYS.upload]: "上传",
    [PATCH_KEYS.download]: "下载",
    [PATCH_KEYS.basicTraitLine]: "逐行翻译，无法理解前文对白",
    [PATCH_KEYS.basicTraitMetaphor]: "把隐喻按字面翻译，破坏自然表达",
    [PATCH_KEYS.basicTraitGender]: "无法识别性别语境，破坏角色关系",
    [PATCH_KEYS.basicTraitTiming]: "忽略时间密度限制，产生难以阅读的文本块",
    [PATCH_KEYS.supportedFiles]: "支持 .SRT、.VTT、.TXT 或 .SUB",
    [PATCH_KEYS.faqFooterPrefix]: "还有其他技术问题？请打开",
    [PATCH_KEYS.faqDirectApp]: "直接应用",
    [PATCH_KEYS.faqFooterSuffix]: "查看自定义选项，或在下方联系区域提交请求！",
    [PATCH_KEYS.feedbackTitle]: "Sub.Stitch 反馈",
    [PATCH_KEYS.footerDesc]: "面向现代影视创作者、内容创作者和本地化团队的上下文感知 AI 字幕翻译引擎，避免逐行词典式结果。",
    [PATCH_KEYS.footerShortcuts]: "网站门户",
    [PATCH_KEYS.footerAppHeader]: "字幕应用",
    [PATCH_KEYS.footerAppDesc]: "准备好翻译 SRT 文件了吗？立即打开门户。",
    [PATCH_KEYS.footerAppCta]: "打开应用",
    [PATCH_KEYS.footerStatus]: "系统在线运行",
    [PATCH_KEYS.footerCopyright]: "保留所有权利。"
  },
  "zh-tw": {
    [PATCH_KEYS.upload]: "上傳",
    [PATCH_KEYS.download]: "下載",
    [PATCH_KEYS.basicTraitLine]: "逐行翻譯，無法理解前文對白",
    [PATCH_KEYS.basicTraitMetaphor]: "把隱喻按字面翻譯，破壞自然表達",
    [PATCH_KEYS.basicTraitGender]: "無法辨識性別語境，破壞角色關係",
    [PATCH_KEYS.basicTraitTiming]: "忽略時間密度限制，產生難以閱讀的文字區塊",
    [PATCH_KEYS.supportedFiles]: "支援 .SRT、.VTT、.TXT 或 .SUB",
    [PATCH_KEYS.faqFooterPrefix]: "還有其他技術問題？請開啟",
    [PATCH_KEYS.faqDirectApp]: "直接應用程式",
    [PATCH_KEYS.faqFooterSuffix]: "查看自訂選項，或在下方聯絡區提交請求！",
    [PATCH_KEYS.feedbackTitle]: "Sub.Stitch 意見回饋",
    [PATCH_KEYS.footerDesc]: "專為現代影像創作者、內容創作者與在地化團隊打造的情境感知 AI 字幕翻譯引擎，避免逐行詞典式結果。",
    [PATCH_KEYS.footerShortcuts]: "網站入口",
    [PATCH_KEYS.footerAppHeader]: "字幕應用程式",
    [PATCH_KEYS.footerAppDesc]: "準備好翻譯 SRT 檔案了嗎？立即開啟入口。",
    [PATCH_KEYS.footerAppCta]: "開啟應用程式",
    [PATCH_KEYS.footerStatus]: "系統線上運行中",
    [PATCH_KEYS.footerCopyright]: "保留所有權利。"
  },
  hr: {
    [PATCH_KEYS.upload]: "Prijenos",
    [PATCH_KEYS.download]: "Preuzimanje",
    [PATCH_KEYS.basicTraitLine]: "Prevodi redak po redak bez razumijevanja prethodnog dijaloga",
    [PATCH_KEYS.basicTraitMetaphor]: "Metafore prevodi doslovno umjesto prirodno",
    [PATCH_KEYS.basicTraitGender]: "Ne prepoznaje rodni kontekst i narušava dinamiku likova",
    [PATCH_KEYS.basicTraitTiming]: "Zanemaruje ograničenja gustoće teksta i stvara teško čitljive blokove",
    [PATCH_KEYS.supportedFiles]: "Podržava .SRT, .VTT, .TXT ili .SUB",
    [PATCH_KEYS.faqFooterPrefix]: "Imate drugo tehničko pitanje? Otvorite ",
    [PATCH_KEYS.faqDirectApp]: "izravnu aplikaciju",
    [PATCH_KEYS.faqFooterSuffix]: " za prilagođene opcije ili pošaljite zahtjev u odjeljku za kontakt ispod!",
    [PATCH_KEYS.feedbackTitle]: "Povratne informacije za Sub.Stitch",
    [PATCH_KEYS.footerDesc]: "AI sustav za prijevod titlova s razumijevanjem konteksta, izrađen za moderne filmaše, autore i lokalizacijske timove koji odbijaju rezultate rječnika redak po redak.",
    [PATCH_KEYS.footerShortcuts]: "Web portal",
    [PATCH_KEYS.footerAppHeader]: "Aplikacija za titlove",
    [PATCH_KEYS.footerAppDesc]: "Spremni ste prevesti SRT datoteke? Odmah otvorite portal.",
    [PATCH_KEYS.footerAppCta]: "Otvori aplikaciju",
    [PATCH_KEYS.footerStatus]: "SUSTAV RADI ONLINE",
    [PATCH_KEYS.footerCopyright]: "Sva prava pridržana."
  },
  da: {
    [PATCH_KEYS.upload]: "Indlæs",
    [PATCH_KEYS.download]: "Hent",
    [PATCH_KEYS.basicTraitLine]: "Oversætter linje for linje uden at forstå den foregående dialog",
    [PATCH_KEYS.basicTraitMetaphor]: "Oversætter metaforer bogstaveligt i stedet for naturligt",
    [PATCH_KEYS.basicTraitGender]: "Mangler kønskontekst og ødelægger dynamikken mellem karakterer",
    [PATCH_KEYS.basicTraitTiming]: "Ignorerer tids- og teksttæthed, hvilket giver ulæselige tekstblokke",
    [PATCH_KEYS.supportedFiles]: "Understøtter .SRT, .VTT, .TXT eller .SUB",
    [PATCH_KEYS.faqFooterPrefix]: "Har du et andet teknisk spørgsmål? Åbn ",
    [PATCH_KEYS.faqDirectApp]: "den direkte app",
    [PATCH_KEYS.faqFooterSuffix]: " for at se tilpassede muligheder eller sende en forespørgsel i kontaktfeltet nedenfor!",
    [PATCH_KEYS.feedbackTitle]: "Feedback til Sub.Stitch",
    [PATCH_KEYS.footerDesc]: "Kontekstbevidst AI-motor til undertekstoversættelse, udviklet til moderne filmskabere, creators og lokaliseringsteams, der ikke vil acceptere linje-for-linje ordbogsresultater.",
    [PATCH_KEYS.footerShortcuts]: "Webportal",
    [PATCH_KEYS.footerAppHeader]: "Undertekstapp",
    [PATCH_KEYS.footerAppDesc]: "Klar til at oversætte dine SRT-filer nu? Åbn portalen med det samme.",
    [PATCH_KEYS.footerAppCta]: "Åbn appen",
    [PATCH_KEYS.footerStatus]: "SYSTEMET KØRER ONLINE",
    [PATCH_KEYS.footerCopyright]: "Alle rettigheder forbeholdes."
  },
  nl: {
    [PATCH_KEYS.upload]: "Uploaden",
    [PATCH_KEYS.download]: "Downloaden",
    [PATCH_KEYS.basicTraitLine]: "Vertaalt regel voor regel zonder de vorige dialoog te begrijpen",
    [PATCH_KEYS.basicTraitMetaphor]: "Vertaalt metaforen letterlijk in plaats van natuurlijk",
    [PATCH_KEYS.basicTraitGender]: "Herkent gendercontext niet en verstoort de dynamiek tussen personages",
    [PATCH_KEYS.basicTraitTiming]: "Negeert timing- en tekstdichtheid, waardoor onleesbare tekstblokken ontstaan",
    [PATCH_KEYS.supportedFiles]: "Ondersteunt .SRT, .VTT, .TXT of .SUB",
    [PATCH_KEYS.faqFooterPrefix]: "Heb je een andere technische vraag? Open onze ",
    [PATCH_KEYS.faqDirectApp]: "directe app",
    [PATCH_KEYS.faqFooterSuffix]: " om aangepaste opties te bekijken of stuur hieronder een aanvraag via contact!",
    [PATCH_KEYS.feedbackTitle]: "Feedback voor Sub.Stitch",
    [PATCH_KEYS.footerDesc]: "Contextbewuste AI-engine voor ondertitelvertaling, gemaakt voor moderne filmmakers, makers en lokalisatieteams die geen regel-voor-regel woordenboekresultaten accepteren.",
    [PATCH_KEYS.footerShortcuts]: "Websiteportaal",
    [PATCH_KEYS.footerAppHeader]: "Ondertitelapp",
    [PATCH_KEYS.footerAppDesc]: "Klaar om je SRT-bestanden te vertalen? Open direct het portaal.",
    [PATCH_KEYS.footerAppCta]: "App openen",
    [PATCH_KEYS.footerStatus]: "SYSTEEM ONLINE ACTIEF",
    [PATCH_KEYS.footerCopyright]: "Alle rechten voorbehouden."
  },
  fi: {
    [PATCH_KEYS.upload]: "Lataa",
    [PATCH_KEYS.download]: "Lataa valmis tiedosto",
    [PATCH_KEYS.basicTraitLine]: "Kääntää rivi riviltä ymmärtämättä aiempaa dialogia",
    [PATCH_KEYS.basicTraitMetaphor]: "Kääntää kielikuvat kirjaimellisesti eikä luonnollisesti",
    [PATCH_KEYS.basicTraitGender]: "Ei tunnista sukupuolikontekstia ja rikkoo hahmojen dynamiikkaa",
    [PATCH_KEYS.basicTraitTiming]: "Ohittaa ajoituksen tekstitiheyden ja tekee vaikeasti luettavia tekstilohkoja",
    [PATCH_KEYS.supportedFiles]: "Tukee .SRT-, .VTT-, .TXT- ja .SUB-tiedostoja",
    [PATCH_KEYS.faqFooterPrefix]: "Onko sinulla muu tekninen kysymys? Avaa ",
    [PATCH_KEYS.faqDirectApp]: "suora sovellus",
    [PATCH_KEYS.faqFooterSuffix]: " tarkistaaksesi mukautetut vaihtoehdot tai lähetä pyyntö alla olevasta yhteysosiosta!",
    [PATCH_KEYS.feedbackTitle]: "Palaute Sub.Stitchistä",
    [PATCH_KEYS.footerDesc]: "Kontekstia ymmärtävä AI-pohjainen tekstitysten käännösmoottori nykyaikaisille elokuvantekijöille, sisällöntuottajille ja lokalisointitiimeille.",
    [PATCH_KEYS.footerShortcuts]: "Verkkoportaali",
    [PATCH_KEYS.footerAppHeader]: "Tekstityssovellus",
    [PATCH_KEYS.footerAppDesc]: "Valmis kääntämään SRT-tiedostosi? Avaa portaali heti.",
    [PATCH_KEYS.footerAppCta]: "Avaa sovellus",
    [PATCH_KEYS.footerStatus]: "JÄRJESTELMÄ TOIMII VERKOSSA",
    [PATCH_KEYS.footerCopyright]: "Kaikki oikeudet pidätetään."
  },
  el: {
    [PATCH_KEYS.upload]: "Μεταφόρτωση",
    [PATCH_KEYS.download]: "Λήψη",
    [PATCH_KEYS.basicTraitLine]: "Μεταφράζει γραμμή προς γραμμή χωρίς να κατανοεί τον προηγούμενο διάλογο",
    [PATCH_KEYS.basicTraitMetaphor]: "Μεταφράζει τις μεταφορές κυριολεκτικά αντί για φυσικά",
    [PATCH_KEYS.basicTraitGender]: "Δεν αναγνωρίζει το πλαίσιο φύλου και χαλά τη δυναμική των χαρακτήρων",
    [PATCH_KEYS.basicTraitTiming]: "Αγνοεί τους περιορισμούς πυκνότητας χρόνου και δημιουργεί δυσανάγνωστα μπλοκ",
    [PATCH_KEYS.supportedFiles]: "Υποστηρίζει .SRT, .VTT, .TXT ή .SUB",
    [PATCH_KEYS.faqFooterPrefix]: "Έχετε άλλη τεχνική ερώτηση; Ανοίξτε την ",
    [PATCH_KEYS.faqDirectApp]: "άμεση εφαρμογή",
    [PATCH_KEYS.faqFooterSuffix]: " για να δείτε προσαρμοσμένες επιλογές ή να στείλετε αίτημα στην ενότητα επικοινωνίας παρακάτω!",
    [PATCH_KEYS.feedbackTitle]: "Σχόλια για το Sub.Stitch",
    [PATCH_KEYS.footerDesc]: "Μηχανή μετάφρασης υποτίτλων με AI και κατανόηση συμφραζομένων, σχεδιασμένη για σύγχρονους δημιουργούς, κινηματογραφιστές και ομάδες τοπικοποίησης.",
    [PATCH_KEYS.footerShortcuts]: "Πύλη ιστότοπου",
    [PATCH_KEYS.footerAppHeader]: "Εφαρμογή υποτίτλων",
    [PATCH_KEYS.footerAppDesc]: "Έτοιμοι να μεταφράσετε τα αρχεία SRT; Ανοίξτε αμέσως την πύλη.",
    [PATCH_KEYS.footerAppCta]: "Άνοιγμα εφαρμογής",
    [PATCH_KEYS.footerStatus]: "ΤΟ ΣΥΣΤΗΜΑ ΛΕΙΤΟΥΡΓΕΙ ONLINE",
    [PATCH_KEYS.footerCopyright]: "Με επιφύλαξη παντός δικαιώματος."
  },
  hi: {
    [PATCH_KEYS.upload]: "अपलोड",
    [PATCH_KEYS.download]: "डाउनलोड",
    [PATCH_KEYS.basicTraitLine]: "पिछले संवाद को समझे बिना पंक्ति-दर-पंक्ति अनुवाद करता है",
    [PATCH_KEYS.basicTraitMetaphor]: "रूपकों को स्वाभाविक अर्थ की जगह शाब्दिक रूप से अनुवाद करता है",
    [PATCH_KEYS.basicTraitGender]: "लिंग संदर्भ नहीं पहचानता और पात्रों की गतिशीलता बिगाड़ता है",
    [PATCH_KEYS.basicTraitTiming]: "समय-घनत्व सीमाओं को अनदेखा कर कठिन पाठ ब्लॉक बनाता है",
    [PATCH_KEYS.supportedFiles]: ".SRT, .VTT, .TXT या .SUB का समर्थन करता है",
    [PATCH_KEYS.faqFooterPrefix]: "कोई और तकनीकी प्रश्न है? हमारी ",
    [PATCH_KEYS.faqDirectApp]: "सीधी ऐप",
    [PATCH_KEYS.faqFooterSuffix]: " खोलें या नीचे संपर्क अनुभाग से अनुरोध भेजें!",
    [PATCH_KEYS.feedbackTitle]: "Sub.Stitch प्रतिक्रिया",
    [PATCH_KEYS.footerDesc]: "संदर्भ-सचेत AI subtitle translation engine, आधुनिक फिल्म निर्माताओं, creators और localization teams के लिए बनाया गया है जिन्हें पंक्ति-दर-पंक्ति dictionary परिणाम स्वीकार नहीं हैं।",
    [PATCH_KEYS.footerShortcuts]: "वेबसाइट पोर्टल",
    [PATCH_KEYS.footerAppHeader]: "सबटाइटल ऐप",
    [PATCH_KEYS.footerAppDesc]: "SRT फ़ाइलों का अनुवाद करने के लिए तैयार हैं? पोर्टल तुरंत खोलें।",
    [PATCH_KEYS.footerAppCta]: "ऐप खोलें",
    [PATCH_KEYS.footerStatus]: "सिस्टम ऑनलाइन चल रहा है",
    [PATCH_KEYS.footerCopyright]: "सर्वाधिकार सुरक्षित।"
  },
  ja: {
    [PATCH_KEYS.upload]: "アップロード",
    [PATCH_KEYS.download]: "ダウンロード",
    [PATCH_KEYS.basicTraitLine]: "前の会話を理解せずに行単位で翻訳します",
    [PATCH_KEYS.basicTraitMetaphor]: "比喩を自然な意味ではなく直訳してしまいます",
    [PATCH_KEYS.basicTraitGender]: "性別や話者の文脈を見落とし、人物関係を崩します",
    [PATCH_KEYS.basicTraitTiming]: "表示時間と文字量の制約を無視し、読みにくい字幕になります",
    [PATCH_KEYS.supportedFiles]: ".SRT、.VTT、.TXT、.SUB に対応",
    [PATCH_KEYS.faqFooterPrefix]: "別の技術的な質問がありますか？",
    [PATCH_KEYS.faqDirectApp]: "直接アプリ",
    [PATCH_KEYS.faqFooterSuffix]: "を開いてカスタムオプションを確認するか、下の問い合わせ欄から送信してください。",
    [PATCH_KEYS.feedbackTitle]: "Sub.Stitchへのフィードバック",
    [PATCH_KEYS.footerDesc]: "現代の映像制作者、クリエイター、ローカライズ担当者向けに設計された、文脈理解型AI字幕翻訳エンジンです。",
    [PATCH_KEYS.footerShortcuts]: "Webポータル",
    [PATCH_KEYS.footerAppHeader]: "字幕アプリ",
    [PATCH_KEYS.footerAppDesc]: "SRTファイルを今すぐ翻訳しますか？ポータルを開いてください。",
    [PATCH_KEYS.footerAppCta]: "アプリを開く",
    [PATCH_KEYS.footerStatus]: "システムはオンライン稼働中",
    [PATCH_KEYS.footerCopyright]: "全著作権所有。"
  },
  ko: {
    [PATCH_KEYS.upload]: "업로드",
    [PATCH_KEYS.download]: "다운로드",
    [PATCH_KEYS.basicTraitLine]: "이전 대사를 이해하지 못한 채 줄 단위로 번역합니다",
    [PATCH_KEYS.basicTraitMetaphor]: "은유를 자연스럽게 해석하지 않고 문자 그대로 번역합니다",
    [PATCH_KEYS.basicTraitGender]: "성별 맥락을 놓쳐 인물 관계와 흐름을 망칩니다",
    [PATCH_KEYS.basicTraitTiming]: "타이밍 밀도 제한을 무시해 읽기 어려운 자막 블록을 만듭니다",
    [PATCH_KEYS.supportedFiles]: ".SRT, .VTT, .TXT 또는 .SUB 지원",
    [PATCH_KEYS.faqFooterPrefix]: "다른 기술 질문이 있나요? ",
    [PATCH_KEYS.faqDirectApp]: "바로 앱",
    [PATCH_KEYS.faqFooterSuffix]: "을 열어 맞춤 옵션을 확인하거나 아래 연락처 영역에서 요청을 보내세요!",
    [PATCH_KEYS.feedbackTitle]: "Sub.Stitch 피드백",
    [PATCH_KEYS.footerDesc]: "현대 영상 제작자, 크리에이터, 현지화 팀을 위해 설계된 문맥 인식 AI 자막 번역 엔진입니다.",
    [PATCH_KEYS.footerShortcuts]: "웹사이트 포털",
    [PATCH_KEYS.footerAppHeader]: "자막 애플리케이션",
    [PATCH_KEYS.footerAppDesc]: "지금 SRT 파일을 번역할 준비가 되셨나요? 포털을 바로 여세요.",
    [PATCH_KEYS.footerAppCta]: "앱 열기",
    [PATCH_KEYS.footerStatus]: "시스템 온라인 실행 중",
    [PATCH_KEYS.footerCopyright]: "모든 권리 보유."
  },
  no: {
    [PATCH_KEYS.upload]: "Last opp",
    [PATCH_KEYS.download]: "Last ned",
    [PATCH_KEYS.basicTraitLine]: "Oversetter linje for linje uten å forstå tidligere dialog",
    [PATCH_KEYS.basicTraitMetaphor]: "Oversetter metaforer bokstavelig i stedet for naturlig",
    [PATCH_KEYS.basicTraitGender]: "Fanger ikke kjønnskontekst og ødelegger karakterdynamikken",
    [PATCH_KEYS.basicTraitTiming]: "Ignorerer tids- og teksttetthet og lager blokker som er vanskelige å lese",
    [PATCH_KEYS.supportedFiles]: "Støtter .SRT, .VTT, .TXT eller .SUB",
    [PATCH_KEYS.faqFooterPrefix]: "Har du et annet teknisk spørsmål? Åpne ",
    [PATCH_KEYS.faqDirectApp]: "direkteappen",
    [PATCH_KEYS.faqFooterSuffix]: " for å se tilpassede alternativer eller sende en forespørsel i kontaktfeltet nedenfor!",
    [PATCH_KEYS.feedbackTitle]: "Tilbakemelding til Sub.Stitch",
    [PATCH_KEYS.footerDesc]: "Kontekstbevisst AI-motor for undertekstoversettelse, laget for moderne filmskapere, kreatører og lokaliseringsteam som ikke godtar linje-for-linje ordbokresultater.",
    [PATCH_KEYS.footerShortcuts]: "Nettportal",
    [PATCH_KEYS.footerAppHeader]: "Undertekstapp",
    [PATCH_KEYS.footerAppDesc]: "Klar til å oversette SRT-filene dine nå? Åpne portalen med en gang.",
    [PATCH_KEYS.footerAppCta]: "Åpne appen",
    [PATCH_KEYS.footerStatus]: "SYSTEMET KJØRER ONLINE",
    [PATCH_KEYS.footerCopyright]: "Alle rettigheter forbeholdt."
  },
  ru: {
    [PATCH_KEYS.upload]: "Загрузка",
    [PATCH_KEYS.download]: "Скачивание",
    [PATCH_KEYS.basicTraitLine]: "Переводит построчно, не понимая предыдущий диалог",
    [PATCH_KEYS.basicTraitMetaphor]: "Переводит метафоры буквально, а не естественно",
    [PATCH_KEYS.basicTraitGender]: "Не распознает гендерный контекст и ломает динамику персонажей",
    [PATCH_KEYS.basicTraitTiming]: "Игнорирует ограничения тайминга и плотности текста, создавая трудные для чтения блоки",
    [PATCH_KEYS.supportedFiles]: "Поддерживает .SRT, .VTT, .TXT или .SUB",
    [PATCH_KEYS.faqFooterPrefix]: "Есть другой технический вопрос? Откройте ",
    [PATCH_KEYS.faqDirectApp]: "приложение напрямую",
    [PATCH_KEYS.faqFooterSuffix]: " для просмотра индивидуальных вариантов или отправьте запрос в разделе контактов ниже!",
    [PATCH_KEYS.feedbackTitle]: "Обратная связь Sub.Stitch",
    [PATCH_KEYS.footerDesc]: "Контекстный AI-движок перевода субтитров для современных режиссеров, авторов и команд локализации, которым недостаточен построчный словарный перевод.",
    [PATCH_KEYS.footerShortcuts]: "Веб-портал",
    [PATCH_KEYS.footerAppHeader]: "Приложение для субтитров",
    [PATCH_KEYS.footerAppDesc]: "Готовы перевести SRT-файлы? Откройте портал прямо сейчас.",
    [PATCH_KEYS.footerAppCta]: "Открыть приложение",
    [PATCH_KEYS.footerStatus]: "СИСТЕМА РАБОТАЕТ ОНЛАЙН",
    [PATCH_KEYS.footerCopyright]: "Все права защищены."
  },
  sv: {
    [PATCH_KEYS.upload]: "Ladda upp",
    [PATCH_KEYS.download]: "Ladda ned",
    [PATCH_KEYS.basicTraitLine]: "Översätter rad för rad utan att förstå föregående dialog",
    [PATCH_KEYS.basicTraitMetaphor]: "Översätter metaforer bokstavligt i stället för naturligt",
    [PATCH_KEYS.basicTraitGender]: "Missar könskontext och förstör karaktärsdynamik",
    [PATCH_KEYS.basicTraitTiming]: "Ignorerar tids- och texttäthet och skapar svårlästa textblock",
    [PATCH_KEYS.supportedFiles]: "Stöder .SRT, .VTT, .TXT eller .SUB",
    [PATCH_KEYS.faqFooterPrefix]: "Har du en annan teknisk fråga? Öppna ",
    [PATCH_KEYS.faqDirectApp]: "direktappen",
    [PATCH_KEYS.faqFooterSuffix]: " för att se anpassade alternativ eller skicka en förfrågan i kontaktfältet nedan!",
    [PATCH_KEYS.feedbackTitle]: "Feedback till Sub.Stitch",
    [PATCH_KEYS.footerDesc]: "Kontextmedveten AI-motor för undertextöversättning, skapad för moderna filmskapare, kreatörer och lokaliseringsteam som inte accepterar rad-för-rad-ordboksresultat.",
    [PATCH_KEYS.footerShortcuts]: "Webbportal",
    [PATCH_KEYS.footerAppHeader]: "Undertextapp",
    [PATCH_KEYS.footerAppDesc]: "Redo att översätta dina SRT-filer nu? Öppna portalen direkt.",
    [PATCH_KEYS.footerAppCta]: "Öppna appen",
    [PATCH_KEYS.footerStatus]: "SYSTEMET KÖRS ONLINE",
    [PATCH_KEYS.footerCopyright]: "Alla rättigheter förbehållna."
  },
  ta: {
    [PATCH_KEYS.upload]: "பதிவேற்றம்",
    [PATCH_KEYS.download]: "பதிவிறக்கம்",
    [PATCH_KEYS.basicTraitLine]: "முந்தைய உரையாடலைப் புரியாமல் வரி வரியாக மொழிபெயர்க்கும்",
    [PATCH_KEYS.basicTraitMetaphor]: "உருவகங்களை இயல்பாக அல்லாமல் சொற்சொறாக மொழிபெயர்க்கும்",
    [PATCH_KEYS.basicTraitGender]: "பாலினச் சூழலை கண்டறியாமல் கதாபாத்திர உறவுகளை பாதிக்கும்",
    [PATCH_KEYS.basicTraitTiming]: "நேர அடர்த்தி வரம்புகளை புறக்கணித்து படிக்க கடினமான உரைத் தொகுதிகளை உருவாக்கும்",
    [PATCH_KEYS.supportedFiles]: ".SRT, .VTT, .TXT அல்லது .SUB ஆதரவு",
    [PATCH_KEYS.faqFooterPrefix]: "வேறு தொழில்நுட்ப கேள்வி உள்ளதா? ",
    [PATCH_KEYS.faqDirectApp]: "நேரடி செயலியை",
    [PATCH_KEYS.faqFooterSuffix]: " திறந்து விருப்பங்களைப் பாருங்கள் அல்லது கீழே உள்ள தொடர்புப் பகுதியில் கோரிக்கை அனுப்புங்கள்!",
    [PATCH_KEYS.feedbackTitle]: "Sub.Stitch கருத்துகள்",
    [PATCH_KEYS.footerDesc]: "நவீன திரைப்பட தயாரிப்பாளர்கள், படைப்பாளர்கள் மற்றும் உள்ளூர்மயமாக்கல் குழுக்களுக்காக உருவாக்கப்பட்ட சூழல் உணரும் AI வசன மொழிபெயர்ப்பு இயந்திரம்.",
    [PATCH_KEYS.footerShortcuts]: "வலைத்தள போர்டல்",
    [PATCH_KEYS.footerAppHeader]: "வசன செயலி",
    [PATCH_KEYS.footerAppDesc]: "உங்கள் SRT கோப்புகளை மொழிபெயர்க்க தயாரா? போர்டலை உடனே திறக்கவும்.",
    [PATCH_KEYS.footerAppCta]: "செயலியைத் திற",
    [PATCH_KEYS.footerStatus]: "அமைப்பு ஆன்லைனில் இயங்குகிறது",
    [PATCH_KEYS.footerCopyright]: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."
  },
  te: {
    [PATCH_KEYS.upload]: "అప్‌లోడ్",
    [PATCH_KEYS.download]: "డౌన్‌లోడ్",
    [PATCH_KEYS.basicTraitLine]: "మునుపటి సంభాషణను అర్థం చేసుకోకుండా పంక్తి పంక్తిగా అనువదిస్తుంది",
    [PATCH_KEYS.basicTraitMetaphor]: "రూపకాలను సహజంగా కాకుండా అక్షరార్థంగా అనువదిస్తుంది",
    [PATCH_KEYS.basicTraitGender]: "లింగ సందర్భాన్ని గుర్తించక పాత్రల సంబంధాన్ని దెబ్బతీస్తుంది",
    [PATCH_KEYS.basicTraitTiming]: "సమయ సాంద్రత పరిమితులను పట్టించుకోకుండా చదవడానికి కష్టమైన బ్లాక్‌లను సృష్టిస్తుంది",
    [PATCH_KEYS.supportedFiles]: ".SRT, .VTT, .TXT లేదా .SUB మద్దతు",
    [PATCH_KEYS.faqFooterPrefix]: "మరొక సాంకేతిక ప్రశ్న ఉందా? ",
    [PATCH_KEYS.faqDirectApp]: "నేరుగా యాప్‌ను",
    [PATCH_KEYS.faqFooterSuffix]: " తెరిచి అనుకూల ఎంపికలను చూడండి లేదా క్రింది సంప్రదింపు విభాగంలో అభ్యర్థన పంపండి!",
    [PATCH_KEYS.feedbackTitle]: "Sub.Stitch అభిప్రాయం",
    [PATCH_KEYS.footerDesc]: "ఆధునిక సినిమా నిర్మాతలు, సృష్టికర్తలు మరియు స్థానికీకరణ బృందాల కోసం రూపొందించిన సందర్భాన్ని అర్థం చేసుకునే AI సబ్‌టైటిల్ అనువాద ఇంజిన్.",
    [PATCH_KEYS.footerShortcuts]: "వెబ్‌సైట్ పోర్టల్",
    [PATCH_KEYS.footerAppHeader]: "సబ్‌టైటిల్ యాప్",
    [PATCH_KEYS.footerAppDesc]: "మీ SRT ఫైళ్లను ఇప్పుడు అనువదించడానికి సిద్ధమా? వెంటనే పోర్టల్ తెరవండి.",
    [PATCH_KEYS.footerAppCta]: "యాప్ తెరవండి",
    [PATCH_KEYS.footerStatus]: "సిస్టమ్ ఆన్‌లైన్‌లో నడుస్తోంది",
    [PATCH_KEYS.footerCopyright]: "అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి."
  },
  tr: {
    [PATCH_KEYS.upload]: "Yükle",
    [PATCH_KEYS.download]: "İndir",
    [PATCH_KEYS.basicTraitLine]: "Önceki diyaloğu anlamadan satır satır çevirir",
    [PATCH_KEYS.basicTraitMetaphor]: "Metaforları doğal anlamıyla değil, kelimesi kelimesine çevirir",
    [PATCH_KEYS.basicTraitGender]: "Cinsiyet bağlamını kaçırır ve karakter dinamiklerini bozar",
    [PATCH_KEYS.basicTraitTiming]: "Zamanlama yoğunluğu sınırlarını yok sayarak okunması zor metin blokları oluşturur",
    [PATCH_KEYS.supportedFiles]: ".SRT, .VTT, .TXT veya .SUB destekler",
    [PATCH_KEYS.faqFooterPrefix]: "Başka bir teknik sorunuz mu var? ",
    [PATCH_KEYS.faqDirectApp]: "doğrudan uygulamayı",
    [PATCH_KEYS.faqFooterSuffix]: " açarak özel seçenekleri inceleyin veya aşağıdaki iletişim alanından istek gönderin!",
    [PATCH_KEYS.feedbackTitle]: "Sub.Stitch geri bildirimi",
    [PATCH_KEYS.footerDesc]: "Satır satır sözlük sonuçlarını kabul etmeyen modern film yapımcıları, içerik üreticileri ve yerelleştirme ekipleri için tasarlanmış bağlam duyarlı AI altyazı çeviri motoru.",
    [PATCH_KEYS.footerShortcuts]: "Web sitesi portalı",
    [PATCH_KEYS.footerAppHeader]: "Altyazı uygulaması",
    [PATCH_KEYS.footerAppDesc]: "SRT dosyalarınızı çevirmeye hazır mısınız? Portalı hemen açın.",
    [PATCH_KEYS.footerAppCta]: "Uygulamayı aç",
    [PATCH_KEYS.footerStatus]: "SİSTEM ÇEVRİMİÇİ ÇALIŞIYOR",
    [PATCH_KEYS.footerCopyright]: "Tüm hakları saklıdır."
  }
};

function normalizeGeneratedContactCopy(content: MarketingContent, dict: Record<string, string>): MarketingContent {
  if (dict[ENGLISH.contact.emailBlockLabel]) {
    return content;
  }

  return {
    ...content,
    contact: {
      ...content.contact,
      emailBlockLabel: content.contact.emailSign,
      emailBlockTitle: content.contact.title,
      emailBlockDesc: content.contact.subtitle,
      emailBlockAddressLabel: content.contact.inquiries,
      emailBlockPrivacyNote: content.contact.emailBlockDesc,
      emailBlockCta: content.contact.btnSend
    }
  };
}

const BASE_MARKETING_TRANSLATIONS: Record<string, MarketingContent> = {
  en: ENGLISH,
  ro: ROMANIAN,
  de: GERMAN,
  es: SPANISH,
  "es-la": SPANISH,
  "es-es": SPANISH,
  fr: FRENCH,
  pt: PORTUGUESE,
  "pt-br": PORTUGUESE,
  "pt-pt": PORTUGUESE,
  it: ITALIAN
};

const cachedMarketingTranslations: Record<string, MarketingContent> = {
  ...BASE_MARKETING_TRANSLATIONS
};

const offlineDictionaryLoaders: Record<string, () => Promise<Record<string, Record<string, string>>>> = {
  "zh-cn": async () => (await import("./marketing/offlineTranslations")).OFFLINE_MARKETING_DICTS,
  "zh-tw": async () => (await import("./marketing/offlineTranslations")).OFFLINE_MARKETING_DICTS,
  ja: async () => (await import("./marketing/offlineTranslations")).OFFLINE_MARKETING_DICTS,
  ko: async () => (await import("./marketing/offlineTranslations")).OFFLINE_MARKETING_DICTS,
  ru: async () => (await import("./marketing/offlineTranslations2")).OFFLINE_MARKETING_DICTS_PART2,
  tr: async () => (await import("./marketing/offlineTranslations2")).OFFLINE_MARKETING_DICTS_PART2,
  nl: async () => (await import("./marketing/offlineTranslations2")).OFFLINE_MARKETING_DICTS_PART2,
  ar: async () => (await import("./marketing/offlineTranslations2")).OFFLINE_MARKETING_DICTS_PART2,
  sv: async () => (await import("./marketing/offlineTranslations2")).OFFLINE_MARKETING_DICTS_PART2,
  no: async () => (await import("./marketing/offlineTranslations3")).OFFLINE_MARKETING_DICTS_PART3,
  da: async () => (await import("./marketing/offlineTranslations3")).OFFLINE_MARKETING_DICTS_PART3,
  fi: async () => (await import("./marketing/offlineTranslations3")).OFFLINE_MARKETING_DICTS_PART3,
  el: async () => (await import("./marketing/offlineTranslations3")).OFFLINE_MARKETING_DICTS_PART3,
  bg: async () => (await import("./marketing/offlineTranslations3")).OFFLINE_MARKETING_DICTS_PART3,
  hr: async () => (await import("./marketing/offlineTranslations3")).OFFLINE_MARKETING_DICTS_PART3,
  hi: async () => (await import("./marketing/offlineTranslations3")).OFFLINE_MARKETING_DICTS_PART3,
  ta: async () => (await import("./marketing/offlineTranslations3")).OFFLINE_MARKETING_DICTS_PART3,
  te: async () => (await import("./marketing/offlineTranslations3")).OFFLINE_MARKETING_DICTS_PART3
};

export const getMarketingTranslation = (langCode: string): MarketingContent => {
  const normalized = langCode.toLowerCase();
  if (cachedMarketingTranslations[normalized]) {
    return cachedMarketingTranslations[normalized];
  }
  // Try partial mapping (e.g. es-ar -> es)
  const prefix = normalized.substring(0, 2);
  if (cachedMarketingTranslations[prefix]) {
    return cachedMarketingTranslations[prefix];
  }
  // Ultimate elegant fallback to English
  return ENGLISH;
};

export const loadMarketingTranslation = async (langCode: string): Promise<MarketingContent> => {
  const normalized = langCode.toLowerCase();
  const basePrefix = normalized.substring(0, 2);

  if (cachedMarketingTranslations[normalized]) {
    return cachedMarketingTranslations[normalized];
  }
  if (cachedMarketingTranslations[basePrefix]) {
    return cachedMarketingTranslations[basePrefix];
  }

  const loadDictionary = offlineDictionaryLoaders[normalized] || offlineDictionaryLoaders[basePrefix];
  if (!loadDictionary) {
    return ENGLISH;
  }

  const dictionaries = await loadDictionary();
  const rawDictionary = dictionaries[normalized] || dictionaries[basePrefix];
  if (!rawDictionary) {
    return ENGLISH;
  }

  const dictionary = {
    ...rawDictionary,
    ...(GENERATED_COPY_PATCHES[normalized] || GENERATED_COPY_PATCHES[basePrefix])
  };
  const translated = normalizeGeneratedContactCopy(deepTranslate(ENGLISH, dictionary), dictionary);
  cachedMarketingTranslations[normalized] = translated;
  return translated;
};
