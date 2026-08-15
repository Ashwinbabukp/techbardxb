import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { INDUSTRIES } from '@/lib/data';

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero" style={{ paddingBottom: '60px' }}>
          <div className="wrap">
            <h1>Industry Solutions</h1>
            <p
              style={{
                color: 'var(--muted)',
                fontSize: '1.1rem',
                marginTop: '20px',
                maxWidth: '700px',
              }}
            >
              Tailored IT solutions for diverse industry verticals and business
              sectors
            </p>
          </div>
        </section>

        {/* Industries Grid */}
        <section
          style={{ padding: '96px 0', borderBottom: '1px solid var(--line)' }}
        >
          <div className="wrap">
            <div className="section-head">
              <div className="kicker">SECTORS WE SERVE</div>
              <h2>Industry Expertise</h2>
            </div>
            <div className="two-col-grid" style={{ marginTop: '60px' }}>
              {INDUSTRIES.map((industry, idx) => (
                <div
                  key={industry}
                  className="industry-card reveal-on-scroll"
                >
                  <div
                    style={{
                      fontSize: '2rem',
                      color: 'var(--accent)',
                      marginBottom: '12px',
                      fontWeight: 'bold',
                    }}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <h4 style={{ marginBottom: '12px', fontSize: '1.1rem' }}>
                    {industry}
                  </h4>
                  <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
                    Specialized solutions and expertise tailored for{' '}
                    {industry.toLowerCase()} needs.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Partner With Us */}
        <section
          style={{
            padding: '96px 0',
            backgroundColor: 'var(--bg-raised)',
            borderBottom: '1px solid var(--line)',
          }}
        >
          <div className="wrap">
            <div className="section-head reveal-on-scroll">
              <div className="kicker">INDUSTRY EXPERTISE</div>
              <h2>Why Industries Trust Techbar</h2>
            </div>
            <div className="three-col-grid" style={{ marginTop: '60px' }}>
              <div className="reveal-on-scroll">
                <h4
                  style={{
                    marginBottom: '12px',
                    fontSize: '1.1rem',
                    color: 'var(--accent)',
                  }}
                >
                  Deep Experience
                </h4>
                <p style={{ color: 'var(--muted)' }}>
                  Years of experience working with organizations across diverse
                  sectors and business models.
                </p>
              </div>
              <div className="reveal-on-scroll">
                <h4
                  style={{
                    marginBottom: '12px',
                    fontSize: '1.1rem',
                    color: 'var(--accent)',
                  }}
                >
                  Compliance Ready
                </h4>
                <p style={{ color: 'var(--muted)' }}>
                  Solutions that meet industry-specific compliance and security
                  requirements and standards.
                </p>
              </div>
              <div className="reveal-on-scroll">
                <h4
                  style={{
                    marginBottom: '12px',
                    fontSize: '1.1rem',
                    color: 'var(--accent)',
                  }}
                >
                  Custom Solutions
                </h4>
                <p style={{ color: 'var(--muted)' }}>
                  Purpose-built solutions designed for the unique challenges of
                  your industry vertical.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section
          style={{ padding: '96px 0', borderBottom: '1px solid var(--line)' }}
        >
          <div className="wrap">
            <div className="section-head">
              <div className="kicker">CLIENT SUCCESS</div>
              <h2>Trusted by Leading Organizations</h2>
              <p style={{ marginTop: '12px' }}>
                Organizations across industries rely on Techbar for their
                critical IT infrastructure and support needs.
              </p>
            </div>
            <div
              style={{
                marginTop: '60px',
                textAlign: 'center',
                padding: '60px 0',
                color: 'var(--muted)',
              }}
            >
              <p style={{ fontSize: '1.1rem' }}>
                Serving customers from leading companies in government, finance,
                healthcare, education, manufacturing, and more.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '96px 0' }}>
          <div className="wrap">
            <div className="cta-box">
              <h3>Ready to transform your industry operations?</h3>
              <p>
                Get industry-specific solutions tailored to your organization's
                unique requirements.
              </p>
              <a
                href="/contact"
                className="btn btn-primary"
                style={{ display: 'inline-block', marginTop: '20px' }}
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
