import React, { useState, useEffect, useRef } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.reveal');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Using FormSubmit service (free, no API keys needed)
      // Alternative: You can also use EmailJS by setting up environment variables
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.fullName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('company', formData.company || 'Not provided');
      formDataToSend.append('message', formData.message);
      formDataToSend.append('_to', 'admin@thecoconsultants.com');
      formDataToSend.append('_subject', `Contact Form Submission from ${formData.fullName}`);
      formDataToSend.append('_template', 'table');
      formDataToSend.append('_captcha', 'false');

      const response = await fetch('https://formsubmit.co/ajax/admin@thecoconsultants.com', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Clear status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="relative py-32 bg-primary border-t border-white/10 min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal">
            <span className="inline-block px-4 py-2 bg-accent/20 border border-accent/30 rounded-full text-accent text-sm font-semibold mb-4">
              Contact
            </span>
            <h3 className="text-5xl md:text-6xl font-black text-white mb-6">
              Send Us a Message
            </h3>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-6">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
            <div className="flex items-center justify-center gap-3 text-white">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a 
                href="mailto:admin@thecoconsultants.com" 
                className="text-accent hover:text-white transition-colors duration-300 font-semibold text-lg"
              >
                admin@thecoconsultants.com
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="reveal glass-dark rounded-3xl p-10 md:p-16 border border-white/10 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="fullName" className="block text-white font-semibold mb-3 text-sm uppercase tracking-wider">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-5 py-4 glass border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-3 text-sm uppercase tracking-wider">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 glass border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-white font-semibold mb-3 text-sm uppercase tracking-wider">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-4 glass border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-white font-semibold mb-3 text-sm uppercase tracking-wider">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-5 py-4 glass border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300"
                  placeholder="Enter your company name"
                />
              </div>
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-white font-semibold mb-3 text-sm uppercase tracking-wider">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-5 py-4 glass border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 resize-none"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <div className="flex flex-col gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-premium w-full md:w-auto px-12 py-4 bg-accent text-primary font-black rounded-xl hover:scale-105 transition-all duration-300 shadow-2xl shadow-accent/50 hover:shadow-accent/70 text-lg uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span className="flex items-center justify-center gap-3">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </span>
              </button>
              
              {submitStatus === 'success' && (
                <div className="flex items-center gap-3 px-4 py-3 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm font-semibold">Message sent successfully! We'll get back to you soon.</span>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="flex items-center gap-3 px-4 py-3 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-sm font-semibold">Failed to send message. Please try again or email us directly.</span>
                </div>
              )}
            </div>
          </form>

          <div className="mt-16 text-center reveal">
            <p className="text-gray-400 text-sm mb-6">
              CoTech &copy; 2025 | An extension of The CoConsultants Group
            </p>
            <div className="flex justify-center gap-8 text-sm">
              <a href="#" className="text-gray-400 hover:text-accent transition-all duration-300 hover:scale-110 inline-block">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-all duration-300 hover:scale-110 inline-block">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
