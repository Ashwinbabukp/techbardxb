'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
    });
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero" style={{ paddingBottom: '60px' }}>
          <div className="wrap">
            <h1>Get in Touch</h1>
            <p
              style={{
                color: 'var(--muted)',
                fontSize: '1.1rem',
                marginTop: '20px',
                maxWidth: '700px',
              }}
            >
              Have questions? Our team is here to help and answer any questions
              you might have.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section
          style={{ padding: '96px 0', borderBottom: '1px solid var(--line)' }}
        >
          <div className="wrap">
            <div className="two-col-grid">
              {/* Contact Form */}
              <div>
                <div className="section-head" style={{ marginBottom: '40px' }}>
                  <div className="kicker">CONTACT US</div>
                  <h2>Send us a Message</h2>
                </div>
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '20px' }}>
                    <input
                      className="field"
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <input
                      className="field"
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <input
                      className="field"
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <input
                      className="field"
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <input
                      className="field"
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div style={{ marginBottom: '30px' }}>
                    <textarea
                      className="field"
                      name="message"
                      placeholder="Your Message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <div className="section-head" style={{ marginBottom: '40px' }}>
                  <div className="kicker">REACH US</div>
                  <h2>Contact Information</h2>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '32px',
                  }}
                >
                  <div
                    className="contact-line"
                    style={{ borderBottom: 'none', paddingBottom: 0 }}
                  >
                    <div className="lbl">PHONE</div>
                    <div>
                      <a
                        href="tel:+971565728299"
                        style={{
                          color: 'var(--ink)',
                          textDecoration: 'none',
                          display: 'inline-block',
                        }}
                      >
                        +971 56 572 8299
                      </a>
                    </div>
                  </div>
                  <div
                    className="contact-line"
                    style={{ borderBottom: 'none', paddingBottom: 0 }}
                  >
                    <div className="lbl">EMAIL</div>
                    <div>
                      <a
                        href="mailto:info@techbardxb.com"
                        style={{
                          color: 'var(--ink)',
                          textDecoration: 'none',
                          display: 'inline-block',
                        }}
                      >
                        info@techbardxb.com
                      </a>
                    </div>
                  </div>
                  <div
                    className="contact-line"
                    style={{ borderBottom: 'none', paddingBottom: 0 }}
                  >
                    <div className="lbl">ADDRESS</div>
                    <div>
                      <p style={{ color: 'var(--ink)', marginBottom: '4px' }}>
                        Dubai, UAE
                      </p>
                    </div>
                  </div>
                  <div
                    className="contact-line"
                    style={{ borderBottom: 'none', paddingBottom: 0 }}
                  >
                    <div className="lbl">HOURS</div>
                    <div>
                      <p style={{ color: 'var(--ink)', marginBottom: '4px' }}>
                        Monday - Friday
                      </p>
                      <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
                        9:00 AM - 6:00 PM GST
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social & Links */}
                <div
                  style={{
                    marginTop: '40px',
                    paddingTop: '32px',
                    borderTop: '1px solid var(--line)',
                  }}
                >
                  <h4 style={{ marginBottom: '16px', fontSize: '1rem' }}>
                    Connect With Us
                  </h4>
                  <div style={{ display: 'flex', gap: '16px' }}>
                    <a
                      href="https://api.whatsapp.com/send/?phone=+971565728299&text=%2AHey+Techbar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost"
                      style={{ textDecoration: 'none' }}
                    >
                      WhatsApp
                    </a>
                    <a
                      href="tel:+971565728299"
                      className="btn btn-ghost"
                      style={{ textDecoration: 'none' }}
                    >
                      Call
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Locations */}
        <section
          style={{
            padding: '96px 0',
            backgroundColor: 'var(--bg-raised)',
            borderBottom: '1px solid var(--line)',
          }}
        >
          <div className="wrap">
            <div className="section-head">
              <div className="kicker">OUR LOCATIONS</div>
              <h2>Where You Can Find Us</h2>
            </div>
            <div style={{ marginTop: '60px' }}>
              <p
                style={{
                  color: 'var(--muted)',
                  textAlign: 'center',
                  fontSize: '1.1rem',
                }}
              >
                Headquarters in Dubai, UAE with support across the Middle East
                and North Africa region.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
