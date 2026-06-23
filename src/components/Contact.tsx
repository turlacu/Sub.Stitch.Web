import { useState, FormEvent } from "react";
import { Mail, MessageSquare, Send, CheckCircle, HelpCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("question");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { marketingContent: content } = useLanguage();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError(content.contact.errName);
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setError(content.contact.errEmail);
      return;
    }
    if (!message.trim()) {
      setError(content.contact.errMessage);
      return;
    }

    setIsSubmitting(true);
    // Simulate API request to developer inbox
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    }, 850);
  };

  return (
    <section id="contact" className="py-24 bg-[#090D1A] relative border-b border-[#334155]/20">
      
      {/* Background glow overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-gradient-to-tr from-[#6366F1]/10 to-[#F472B6]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-block mb-2 text-xs font-bold tracking-widest text-[#F472B6] uppercase font-mono px-3 py-1 bg-[#F472B6]/10 rounded-full border border-[#F472B6]/20">
            {content.contact.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F1F5F9] font-sans tracking-tight">
            {content.contact.title}
          </h2>
          <p className="text-base text-[#94A3B8] font-sans font-light">
            {content.contact.subtitle}
          </p>
        </div>

        {/* Contact panel card */}
        <div className="bg-[#1E293B]/20 border border-[#334155] rounded-3xl overflow-hidden shadow-2xl shadow-black/45 grid grid-cols-1 md:grid-cols-12 max-w-3xl mx-auto relative">
          
          {/* Card Left: quick info items */}
          <div className="md:col-span-5 bg-[#020617]/50 p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#334155]/60">
            <div className="space-y-8">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-[#F1F5F9]">{content.contact.inquiries}</h3>
                <p className="text-xs text-[#94A3B8]">{content.contact.replyTime}</p>
              </div>

              <div className="space-y-5">
                <div className="flex gap-3">
                  <div className="p-2 rounded-xl bg-[#1E293B]/60 text-[#F472B6] border border-[#334155]/60 h-fit">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#F1F5F9] uppercase font-mono tracking-wider">{content.contact.feedbackTitle}</h4>
                    <p className="text-xs text-[#94A3B8] mt-0.5 leading-relaxed">{content.contact.feedbackDesc}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="p-2 rounded-xl bg-[#1E293B]/60 text-[#22D3EE] border border-[#334155]/60 h-fit">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#F1F5F9] uppercase font-mono tracking-wider">{content.contact.enterpriseTitle}</h4>
                    <p className="text-xs text-[#94A3B8] mt-0.5 leading-relaxed">{content.contact.enterpriseDesc}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Email signature */}
            <div className="pt-8 border-t border-[#334155]/40 text-[11px] font-mono text-[#94A3B8] flex items-center gap-1.5 mt-8 md:mt-0">
              <HelpCircle className="w-3.5 h-3.5 text-pink-400" />
              <span>{content.contact.emailSign}</span>
            </div>
          </div>

          {/* Card Right: Contact Form */}
          <div className="md:col-span-7 p-8 bg-[#040815]/40">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-8 animate-float">
                <div className="p-4 rounded-full bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-[#F1F5F9]">{content.contact.successTitle}</h3>
                  <p className="text-xs text-[#94A3B8] max-w-[280px] leading-relaxed mx-auto">
                    {content.contact.successDesc}
                  </p>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#1E293B] hover:bg-[#334155] border border-[#334155]/60 text-white transition-colors"
                >
                  {content.contact.successBtn}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {error && (
                  <div className="p-3 bg-[#EF4444]/10 border border-[#EF4444]/30 rounded-xl text-xs text-[#EF4444] font-semibold">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono text-[#94A3B8] uppercase">{content.contact.lblName}</label>
                    <input
                      id="contact-name-input"
                      type="text"
                      className="w-full bg-[#020617] border border-[#334155] rounded-xl px-3 py-2.5 text-xs text-[#F1F5F9] focus:outline-none focus:border-[#F472B6] transition-colors"
                      placeholder="Adrian"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono text-[#94A3B8] uppercase">{content.contact.lblEmail}</label>
                    <input
                      id="contact-email-input"
                      type="email"
                      className="w-full bg-[#020617] border border-[#334155] rounded-xl px-3 py-2.5 text-xs text-[#F1F5F9] focus:outline-none focus:border-[#F472B6] transition-colors"
                      placeholder="adrian@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                {/* Subject selector drop */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono text-[#94A3B8] uppercase">{content.contact.lblSubject}</label>
                  <select
                    id="contact-subject-select"
                    className="w-full bg-[#020617] border border-[#334155] rounded-xl px-3 py-2.5 text-xs text-[#F1F5F9] focus:outline-none focus:border-[#F472B6] transition-colors appearance-none cursor-pointer"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  >
                    <option value="question">{content.contact.optQuestion}</option>
                    <option value="feedback">{content.contact.optFeedback}</option>
                    <option value="volume">{content.contact.optVolume}</option>
                    <option value="other">{content.contact.optOther}</option>
                  </select>
                </div>

                {/* Message text container */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono text-[#94A3B8] uppercase">{content.contact.lblMessage}</label>
                  <textarea
                    id="contact-message-input"
                    rows={4}
                    className="w-full bg-[#020617] border border-[#334155] rounded-xl p-3 text-xs text-[#F1F5F9] focus:outline-none focus:border-[#F472B6] transition-colors resize-none"
                    placeholder={content.contact.placeholderMessage}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                {/* Submit button */}
                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-bold rounded-xl text-slate-900 bg-gradient-to-r from-[#F472B6] to-[#6366F1] shadow-[0_0_15px_rgba(244,114,182,0.25)] hover:shadow-[0_0_20px_rgba(244,114,182,0.45)] hover:scale-[1.01] transition-all duration-300 group disabled:opacity-75 disabled:hover:scale-100"
                >
                  <span>{isSubmitting ? content.contact.btnSending : content.contact.btnSend}</span>
                  <Send className={`w-3.5 h-3.5 text-slate-900 transition-transform ${isSubmitting ? "" : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"}`} />
                </button>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
