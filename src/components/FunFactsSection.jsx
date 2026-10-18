import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { DoodleArrow, DoodleSparkle } from './Doodles';

export default function FunFactsSection() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [botcheck, setBotcheck] = useState(false);
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !message.trim()) return;

    setStatus({ submitting: true, success: false, error: false, message: '' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'f26ef89a-66d2-400b-9f43-71dea092efc2',
          email: email.trim(),
          message: message.trim(),
          subject: 'New portfolio message for Aditya Thakur',
          from_name: 'Aditya Thakur Portfolio',
          botcheck: botcheck ? 'spam' : ''
        })
      });

      const result = await response.json();

      if (response.status === 200 && result.success) {
        setStatus({
          submitting: false,
          success: true,
          error: false,
          message: 'Message sent successfully. I’ll get back to you soon.'
        });
        setEmail('');
        setMessage('');
      } else {
        setStatus({
          submitting: false,
          success: false,
          error: true,
          message: 'Something went wrong. Please try again.'
        });
      }
    } catch (err) {
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: 'Something went wrong. Please try again.'
      });
    }
  };

  return (
    <section id="contact-form" className="relative w-full bg-charcoal text-white py-20 sm:py-28 px-6 sm:px-12 border-b border-white/10 overflow-hidden">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-16 items-center">
        
        {/* Left Column: Phone Camera-Roll Scrapbook Frame with Hand-Drawn Arrow */}
        <div className="md:col-span-5 relative flex flex-col items-center justify-center">
          
          {/* Hand-drawn note "behind the screen" with arrow */}
          <div className="absolute -top-10 left-2 sm:-left-4 flex items-center gap-1 z-20">
            <span className="font-script text-doodle-blue text-2xl font-semibold -rotate-6">
              behind the screen
            </span>
            <DoodleArrow className="w-10 h-10 text-doodle-blue rotate-12" />
          </div>

          <DoodleSparkle className="absolute bottom-4 -left-4 w-6 h-6 text-doodle-blue" delay={0.3} />

          {/* Smartphone Camera Roll Frame */}
          <div className="relative w-64 sm:w-72 aspect-[9/17] rounded-[2.5rem] bg-charcoal-dark border-4 border-charcoal-border shadow-2xl overflow-hidden p-3 z-10">
            {/* Notch */}
            <div className="w-20 h-3 bg-white/20 rounded-full mx-auto mb-3" />

            {/* Photo Grid Collage (Scrapbook style) */}
            <div className="grid grid-cols-2 gap-2 h-[calc(100%-24px)] overflow-hidden rounded-2xl">
              
              {/* Photo 1: Workspace / Code */}
              <div className="relative rounded-xl overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80"
                  alt="Code Editor"
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-1 left-1.5 font-script text-white text-[11px] bg-black/60 px-1 rounded">
                  01:00 AM code
                </span>
              </div>

              {/* Photo 2: Guitar / Music */}
              <div className="relative rounded-xl overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=400&q=80"
                  alt="Guitar"
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-1 left-1.5 font-script text-white text-[11px] bg-black/60 px-1 rounded">
                  chords &amp; rhythm
                </span>
              </div>

              {/* Photo 3: Hackathon / Campus */}
              <div className="relative rounded-xl overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&q=80"
                  alt="Hackathon Team"
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-1 left-1.5 font-script text-white text-[11px] bg-black/60 px-1 rounded">
                  SIH Hackathon
                </span>
              </div>

              {/* Photo 4: Coffee Mug */}
              <div className="relative rounded-xl overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80"
                  alt="Coffee"
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-1 left-1.5 font-script text-white text-[11px] bg-black/60 px-1 rounded">
                  filter roast
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Right Column: Contact Me Form */}
        <div className="md:col-span-7 space-y-6 text-left">
          
          <div className="space-y-2">
            <h2 className="font-serif text-5xl sm:text-6xl text-white font-normal tracking-tight">
              Contact Me
            </h2>
            <div className="w-16 h-1 bg-doodle-blue rounded-full" />
            
            <h3 className="font-serif text-2xl sm:text-3xl text-white/90 font-normal pt-2">
              Let’s connect.
            </h3>
            <p className="font-sans text-white/70 text-sm sm:text-base leading-relaxed">
              Have a project idea, collaboration, internship opportunity, or just want to say hello? Send me a message.
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="p-6 sm:p-7 rounded-2xl bg-charcoal-card/90 border border-charcoal-border space-y-4 shadow-xl">
            
            {/* Your Email Input */}
            <div className="space-y-1.5">
              <label htmlFor="user-email" className="block text-xs font-mono uppercase tracking-wider text-white/70">
                Your Email
              </label>
              <input
                id="user-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                required
                className="w-full px-4 py-3 rounded-xl bg-charcoal-dark border border-charcoal-border text-white placeholder-white/30 text-sm font-sans focus:outline-none focus:border-doodle-blue transition-colors"
              />
            </div>

            {/* Message Multi-line Text Box */}
            <div className="space-y-1.5">
              <label htmlFor="user-message" className="block text-xs font-mono uppercase tracking-wider text-white/70">
                Message
              </label>
              <textarea
                id="user-message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message here..."
                required
                className="w-full px-4 py-3 rounded-xl bg-charcoal-dark border border-charcoal-border text-white placeholder-white/30 text-sm font-sans focus:outline-none focus:border-doodle-blue transition-colors resize-none"
              />
            </div>

            {/* Spam-protection hidden field */}
            <input
              type="checkbox"
              name="botcheck"
              checked={botcheck}
              onChange={(e) => setBotcheck(e.target.checked)}
              className="hidden"
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            {/* Submit Button & Status */}
            <div className="pt-2 space-y-3">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="px-7 py-3 rounded-full bg-white text-charcoal font-medium font-mono text-xs uppercase tracking-wider hover:bg-white/90 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status.submitting ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-charcoal/30 border-t-charcoal rounded-full animate-spin" />
                      <span>Sending…</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5 text-charcoal" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {status.success && (
                  <span className="font-script text-doodle-blue text-lg">
                    ~ thanks for reaching out!
                  </span>
                )}
              </div>

              {/* Status Message below button */}
              {status.success && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-sans">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Message sent successfully. I’ll get back to you soon.</span>
                </div>
              )}

              {status.error && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs sm:text-sm font-sans">
                  <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                  <span>Something went wrong. Please try again.</span>
                </div>
              )}
            </div>

          </form>

        </div>

      </div>
    </section>
  );
}
