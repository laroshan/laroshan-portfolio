import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Check, 
  Copy, 
  ArrowRight
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Engineering Inquiry')}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Contact Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="heading-top-line" />
              <div className="subtitle-tag">
                <span className="accent-slash">/</span> Get in touch
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Interested in working together? <br />
                <span className="text-accent-cyan flex items-center gap-2 mt-1">
                  Let’s talk <ArrowRight className="w-7 h-7" />
                </span>
              </h2>
              <p className="text-base text-neutral-400 mt-4 leading-relaxed">
                Whether you’re looking to discuss distributed systems architecture, microservices scaling, or full-stack engineering opportunities, I’m always open to connecting.
              </p>
            </div>

            {/* Direct Contact Links */}
            <div className="space-y-4">
              
              {/* Email */}
              <div className="dev-card p-5 flex items-center justify-between dev-card-hover">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0f141f] border border-[#232d42] flex items-center justify-center text-accent-cyan">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Email me:</div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm sm:text-base font-bold text-white hover:text-accent-cyan transition-colors select-all"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-lg bg-[#0f141f] hover:bg-[#1a2233] text-neutral-300 hover:text-white border border-[#232d42] transition-colors"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-neutral-400" />}
                </button>
              </div>

              {/* Phone */}
              <div className="dev-card p-5 flex items-center gap-4 dev-card-hover">
                <div className="w-10 h-10 rounded-xl bg-[#0f141f] border border-[#232d42] flex items-center justify-center text-accent-blue">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Call or WhatsApp:</div>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="text-sm sm:text-base font-bold text-white hover:text-accent-cyan transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="dev-card p-5 flex items-center gap-4 dev-card-hover">
                <div className="w-10 h-10 rounded-xl bg-[#0f141f] border border-[#232d42] flex items-center justify-center text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Location:</div>
                  <div className="text-sm sm:text-base font-bold text-white">
                    Colombo, Sri Lanka (Available Globally)
                  </div>
                </div>
              </div>

            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-xl dev-card flex items-center justify-center text-neutral-300 hover:text-accent-blue hover:border-accent-blue transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-xl dev-card flex items-center justify-center text-neutral-300 hover:text-white hover:border-white transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Column: Clean Developer X Contact Form */}
          <div className="lg:col-span-7">
            <div className="dev-card p-8 sm:p-10 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-sm text-neutral-400 mb-8">
                Fill out the form below to reach out directly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Carter"
                      className="w-full px-4 py-3 rounded-xl bg-[#0f141f] border border-[#232d42] text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-accent-blue transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#0f141f] border border-[#232d42] text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-accent-blue transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                    Subject / Topic *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Senior Software Engineer Role / Project Inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-[#0f141f] border border-[#232d42] text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-accent-blue transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project or role details..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0f141f] border border-[#232d42] text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-accent-blue transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-full bg-accent-blue hover:bg-blue-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-accent-blue/25 hover:shadow-accent-blue/40 transition-all duration-200 cursor-pointer group"
                >
                  <span>Contact me</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                {isSubmitted && (
                  <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-xs text-emerald-300 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Email client opened successfully. Thank you for reaching out!</span>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
