import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FEATURES } from '@/lib/data';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero" style={{ paddingBottom: '60px' }}>
          <div className="wrap">
            <h1>About Techbar Technology</h1>
            <p
              style={{
                color: 'var(--muted)',
                fontSize: '1.1rem',
                marginTop: '20px',
                maxWidth: '700px',
              }}
            >
              Delivering cutting-edge IT solutions and services to businesses
              across the Middle East and beyond
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section
          style={{ padding: '96px 0', borderBottom: '1px solid var(--line)' }}
        >
          <div className="wrap">
            <div className="section-head">
              <div className="kicker">WHO WE ARE</div>
              <h2>Overview</h2>
            </div>
            <p
              style={{
                color: 'var(--muted)',
                lineHeight: 1.8,
                fontSize: '1rem',
                maxWidth: '900px',
              }}
            >
              Techbar is a full-service solution provider. Our head office is
              located in United Arab Emirates and we support remote sites across
              multiple continents. We place our focus on leveraging our
              infrastructure and footprint to support a broad spectrum of
              organisations with rapid deployment and emerging technologies.
            </p>
            <p
              style={{
                color: 'var(--muted)',
                lineHeight: 1.8,
                fontSize: '1rem',
                marginTop: '20px',
                maxWidth: '900px',
              }}
            >
              Over the years, Techbar has evolved into an advanced solutions
              provider, focused on servicing customers and creating value
              through long term relationships that we build. We strive to
              deliver more efficient, effective and relevant quality services
              and solutions tailored to the increasingly complex demands of
              organisations.
            </p>
            <p
              style={{
                color: 'var(--muted)',
                lineHeight: 1.8,
                fontSize: '1rem',
                marginTop: '20px',
                maxWidth: '900px',
              }}
            >
              Techbar also strives towards technology that provides a real
              advantage to a business. Our strategic alliances and highest
              levels of partnership accreditation with leading brands like HPE,
              Dell, Lenovo, Microsoft, and Fortinet help us in delivering the
              best technologies and solutions to our customers.
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section
          style={{
            padding: '96px 0',
            backgroundColor: 'var(--bg-raised)',
            borderBottom: '1px solid var(--line)',
          }}
        >
          <div className="wrap">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '80px',
                alignItems: 'start',
              }}
            >
              <div>
                <div className="kicker" style={{ marginBottom: '20px' }}>
                  OUR VISION
                </div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>
                  Leading Edge Provider
                </h3>
                <p style={{ color: 'var(--muted)', lineHeight: 1.8 }}>
                  To become the leading edge technology provider in the Middle
                  East and North Africa by creating high quality mobility
                  products and services and partnering with the most renowned
                  suppliers of mobility solutions to fulfill our clients'
                  expectations and achieve measurable competitive advantage.
                </p>
              </div>
              <div>
                <div className="kicker" style={{ marginBottom: '20px' }}>
                  OUR MISSION
                </div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>
                  Indispensable Partner
                </h3>
                <p style={{ color: 'var(--muted)', lineHeight: 1.8 }}>
                  To become an indispensable partner to our clients by offering
                  and managing the best assortment of vendors and service
                  providers in the field of Information Technology combined with
                  localization, best practices and service excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          style={{ padding: '96px 0', borderBottom: '1px solid var(--line)' }}
        >
          <div className="wrap">
            <div className="section-head">
              <div className="kicker">WHAT WE DO</div>
              <h2>Our Core Capabilities</h2>
            </div>
            <div className="feature-list">
              {FEATURES.map((feature) => (
                <li key={feature.idx}>
                  <span className="idx">{feature.idx}</span>
                  <div>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </li>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section style={{ padding: '96px 0' }}>
          <div className="wrap">
            <div className="cta-box">
              <h3>Ready to transform your IT infrastructure?</h3>
              <p>
                Let our experts help you find the right solution for your
                business needs.
              </p>
              <a
                href="/contact"
                className="btn btn-primary"
                style={{ display: 'inline-block', marginTop: '20px' }}
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
