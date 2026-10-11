import React, { useState } from 'react';
import {
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { siteConfig } from '../data/siteConfig';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService = '' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    contactInfo: '',
    service: preselectedService || 'Event Decoration',
    eventDate: '',
    projectLocation: '',
    description: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [whatsAppPreview, setWhatsAppPreview] = useState('');

  // Update preselected service if passed from another section
  React.useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const serviceOptions = [
    'Event Decoration',
    'Coconut Leaf Decoration',
    'Graphic Design',
    'Painting Works',
    'Ceiling Fitting',
    'Pipeline Works',
    'Electrical Wiring',
    'Waterproofing',
    'CCTV Fitting',
    'Other Enquiry',
  ];

  const constructWhatsAppMessage = () => {
    return encodeURIComponent(
      `*New Project Enquiry for S. Arnojith*\n` +
      `------------------------------------\n` +
      `*Name:* ${formData.fullName}\n` +
      `*Contact:* ${formData.contactInfo}\n` +
      `*Service Required:* ${formData.service}\n` +
      (formData.eventDate ? `*Event / Target Date:* ${formData.eventDate}\n` : '') +
      (formData.projectLocation ? `*Location:* ${formData.projectLocation}\n` : '') +
      `*Details:* ${formData.description}\n` +
      `------------------------------------\n` +
      `_Sent from S. Arnojith Portfolio Website_`
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.contactInfo.trim() || !formData.description.trim()) {
      setErrorMessage('Please fill in your name, contact information, and project description.');
      return;
    }

    setErrorMessage('');
    const encoded = constructWhatsAppMessage();
    setWhatsAppPreview(decodeURIComponent(encoded));
    setSubmitted(true);

    // Open WhatsApp URL directly with prefilled message
    const waUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encoded}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-forest-950 text-ivory-100 relative overflow-hidden botanical-pattern">
      {/* Glow Effects */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Bring Your Ideas to Life."
          subtitle="Your Vision. Our Creation."
          description="Have a creative idea, an upcoming celebration, or a practical finishing project in mind? Fill out the details below to start a conversation directly via WhatsApp or phone."
          theme="dark"
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Details & Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-2xl bg-forest-900/80 border border-gold-500/30 space-y-6">
              <div>
                <span className="text-xs font-display uppercase tracking-widest text-gold-400 font-semibold block mb-1">
                  Direct Inquiries
                </span>
                <h3 className="font-serif text-2xl font-bold text-ivory-100">
                  {siteConfig.artistName}
                </h3>
                <p className="text-xs text-leaf-400 font-medium">
                  {siteConfig.companyRelationship}
                </p>
              </div>

              {/* Contact Channels */}
              <div className="space-y-4 pt-2">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-forest-950/60 border border-forest-800 hover:border-gold-500/50 hover:bg-forest-950 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-leaf-600/20 text-leaf-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-display uppercase tracking-wider text-ivory-200/60 block">
                      WhatsApp Quick Chat
                    </span>
                    <span className="text-sm font-semibold text-ivory-100 group-hover:text-gold-400 transition-colors">
                      {siteConfig.contact.displayPhone}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${siteConfig.contact.displayPhone}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-forest-950/60 border border-forest-800 hover:border-gold-500/50 hover:bg-forest-950 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold-500/20 text-gold-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-display uppercase tracking-wider text-ivory-200/60 block">
                      Direct Telephone
                    </span>
                    <span className="text-sm font-semibold text-ivory-100 group-hover:text-gold-400 transition-colors">
                      {siteConfig.contact.displayPhone}
                    </span>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-forest-950/60 border border-forest-800 hover:border-gold-500/50 hover:bg-forest-950 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-forest-800 text-ivory-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-display uppercase tracking-wider text-ivory-200/60 block">
                      Email Address
                    </span>
                    <span className="text-sm font-semibold text-ivory-100 group-hover:text-gold-400 transition-colors">
                      {siteConfig.contact.email}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-forest-950/60 border border-forest-800">
                  <div className="w-10 h-10 rounded-lg bg-forest-800 text-ivory-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <span className="text-[11px] font-display uppercase tracking-wider text-ivory-200/60 block">
                      Service Region
                    </span>
                    <span className="text-sm font-semibold text-ivory-100">
                      {siteConfig.contact.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Note on Response Timing */}
              <div className="pt-4 border-t border-forest-800 text-xs text-ivory-200/70 font-light">
                <p>
                  * WhatsApp inquiries generate an immediate prefilled consultation summary for prompt discussion.
                </p>
              </div>

            </div>

          </div>

          {/* Right Column: Project Enquiry Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-ivory-100 text-charcoal-800 border border-gold-500/40 shadow-2xl">
              
              <div className="mb-6">
                <span className="text-xs font-display uppercase tracking-widest text-gold-600 font-semibold block mb-1">
                  Start Your Project
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950">
                  Project Consultation Form
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-600 mt-1">
                  Provide your project requirements to review and send directly via WhatsApp.
                </p>
              </div>

              {errorMessage && (
                <div className="mb-6 p-3.5 rounded-lg bg-red-50 border border-red-200 flex items-center gap-2 text-red-700 text-xs">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Full Name & Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-display uppercase tracking-wider text-forest-950 font-semibold mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Arun Kumar"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-beige-300 text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-forest-800 focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-display uppercase tracking-wider text-forest-950 font-semibold mb-1.5">
                      Contact Number or Email *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 077 123 4567"
                      value={formData.contactInfo}
                      onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-beige-300 text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-forest-800 focus:border-transparent transition"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-display uppercase tracking-wider text-forest-950 font-semibold mb-1.5">
                    Service Required *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-beige-300 text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-forest-800 focus:border-transparent transition"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Event Date & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-display uppercase tracking-wider text-forest-950 font-semibold mb-1.5">
                      Target / Event Date (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. November 25, 2026"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-beige-300 text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-forest-800 focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-display uppercase tracking-wider text-forest-950 font-semibold mb-1.5">
                      Location / Venue (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Jaffna, Colombo, etc."
                      value={formData.projectLocation}
                      onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-beige-300 text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-forest-800 focus:border-transparent transition"
                    />
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-xs font-display uppercase tracking-wider text-forest-950 font-semibold mb-1.5">
                    Project Description &amp; Requirements *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your event theme, dimensions, or specific requirements..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-beige-300 text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-forest-800 focus:border-transparent transition"
                  ></textarea>
                </div>

                {/* Action Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-forest-900 hover:bg-forest-950 text-gold-400 font-display font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-botanical transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Project Enquiry via WhatsApp</span>
                  </button>
                  <p className="text-[11px] text-charcoal-500 text-center mt-2.5">
                    Clicking opens WhatsApp with your pre-formatted enquiry ready to send.
                  </p>
                </div>

              </form>

              {/* Submission Confirmation Preview Banner */}
              {submitted && whatsAppPreview && (
                <div className="mt-6 p-4 rounded-xl bg-forest-950 text-ivory-100 border border-gold-500/40 text-xs space-y-2 animate-fadeIn">
                  <div className="flex items-center gap-2 text-gold-400 font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    <span>WhatsApp Enquiry Generated:</span>
                  </div>
                  <pre className="p-3 rounded bg-forest-900/80 text-[11px] whitespace-pre-wrap font-mono text-ivory-200/90 max-h-40 overflow-y-auto">
                    {whatsAppPreview}
                  </pre>
                  <p className="text-[10px] text-ivory-200/60">
                    If WhatsApp didn't open automatically,{' '}
                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${constructWhatsAppMessage()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold-400 underline"
                    >
                      click here to open manually
                    </a>.
                  </p>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
