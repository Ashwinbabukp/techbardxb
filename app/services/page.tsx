import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SERVICES } from '@/lib/data';

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero" style={{ paddingBottom: '60px' }}>
          <div className="wrap">
            <h1>IT Services & Solutions</h1>
            <p
              style={{
                color: 'var(--muted)',
                fontSize: '1.1rem',
                marginTop: '20px',
                maxWidth: '700px',
              }}
            >
              Comprehensive support and solutions tailored to your business
              needs
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section
          style={{ padding: '96px 0', borderBottom: '1px solid var(--line)' }}
        >
          <div className="wrap">
            <div className="section-head">
              <div className="kicker">WHAT WE OFFER</div>
              <h2>Our Services</h2>
            </div>
            <div className="service-cards">
              {SERVICES.map((service) => (
                <div key={service.title} className="service-card">
                  <div className="icon">{service.icon}</div>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                  <a
                    href="#"
                    style={{
                      color: 'var(--accent)',
                      marginTop: '16px',
                      display: 'inline-block',
                      fontSize: '0.9rem',
                    }}
                  >
                    Learn more →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section
          style={{
            padding: '96px 0',
            backgroundColor: 'var(--bg-raised)',
            borderBottom: '1px solid var(--line)',
          }}
        >
          <div className="wrap">
            <div className="section-head">
              <div className="kicker">SERVICE CATEGORIES</div>
              <h2>Explore by Type</h2>
            </div>
            <div className="tag-grid">
              {[
                'Infrastructure',
                'Security',
                'Maintenance',
                'Deployment',
                'Support',
                'Consulting',
              ].map((category) => (
                <a key={category} href="#">
                  {category}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Why Our Services */}
        <section
          style={{ padding: '96px 0', borderBottom: '1px solid var(--line)' }}
        >
          <div className="wrap">
            <div className="section-head">
              <div className="kicker">WHY CHOOSE OUR SERVICES</div>
              <h2>Industry Leading Support</h2>
            </div>
            <div className="two-col-grid" style={{ marginTop: '60px' }}>
              <div className="reveal-on-scroll">
                <h4 style={{ marginBottom: '12px', fontSize: '1.1rem' }}>
                  24/7 Expert Support
                </h4>
                <p style={{ color: 'var(--muted)' }}>
                  Our team of certified specialists is available around the
                  clock to provide immediate assistance and minimize downtime
                  for your critical systems.
                </p>
              </div>
              <div className="reveal-on-scroll">
                <h4 style={{ marginBottom: '12px', fontSize: '1.1rem' }}>
                  Rapid Deployment
                </h4>
                <p style={{ color: 'var(--muted)' }}>
                  Quick implementation and service activation to get your
                  systems running efficiently as soon as possible.
                </p>
              </div>
              <div className="reveal-on-scroll">
                <h4 style={{ marginBottom: '12px', fontSize: '1.1rem' }}>
                  Certified Professionals
                </h4>
                <p style={{ color: 'var(--muted)' }}>
                  Highly trained and certified across all major vendors and
                  technologies to ensure the highest service quality.
                </p>
              </div>
              <div className="reveal-on-scroll">
                <h4 style={{ marginBottom: '12px', fontSize: '1.1rem' }}>
                  Cost Effective Solutions
                </h4>
                <p style={{ color: 'var(--muted)' }}>
                  Competitive pricing without compromising on quality, designed
                  to fit various budget requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '96px 0' }}>
          <div className="wrap">
            <div className="cta-box">
              <h3>Need a custom service solution?</h3>
              <p>
                Contact us today for a free consultation on your IT service
                needs.
              </p>
              <a
                href="/contact"
                className="btn btn-primary"
                style={{ display: 'inline-block', marginTop: '20px' }}
              >
                Request Consultation
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
