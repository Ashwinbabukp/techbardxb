import Link from 'next/link';
import Image from 'next/image';
import logoTech from '@/assets/logotech.png';

export default function Footer() {
  return (
    <footer>
      <div className="wrap" style={{ paddingTop: '60px', paddingBottom: '0' }}>
        <div className="footer-main-grid">
          {/* About Section */}
          <div>
            <Link
              href="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '20px',
                textDecoration: 'none',
              }}
            >
              <Image
                src={logoTech}
                alt="Techbar Logo"
                width={220}
                height={60}
                style={{ height: 'auto', width: 'auto', maxHeight: '54px' }}
              />
              
            </Link>
            <p
              style={{
                color: 'var(--muted)',
                marginBottom: '24px',
                maxWidth: '400px',
              }}
            >
              Techbar Technology is a leading IT solutions provider serving
              businesses across the Middle East with enterprise-grade products,
              services, and support.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href="https://api.whatsapp.com/send/?phone=+971565728299&text=%2AHey+Techbar"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                style={{ padding: '8px 16px', fontSize: '0.85rem' }}
              >
                WhatsApp
              </a>
              <a
                href="tel:+971565728299"
                className="btn btn-ghost"
                style={{ padding: '8px 16px', fontSize: '0.85rem' }}
              >
                Call Us
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                marginBottom: '20px',
                fontSize: '1rem',
                color: 'var(--accent)',
              }}
            >
              Quick Links
            </h4>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <li>
                <Link
                  href="/"
                  style={{
                    color: 'var(--muted)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  style={{
                    color: 'var(--muted)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  style={{
                    color: 'var(--muted)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  style={{
                    color: 'var(--muted)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  style={{
                    color: 'var(--muted)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  style={{
                    color: 'var(--muted)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div
          style={{
            borderTop: '1px solid var(--line)',
            paddingTop: '40px',
            marginBottom: '40px',
          }}
        >
          <div className="footer-info-grid">
            <div>
              <h4
                style={{
                  marginBottom: '8px',
                  fontSize: '0.9rem',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                Phone
              </h4>
              <p style={{ color: 'var(--ink)' }}>
                <a
                  href="tel:+971565728299"
                  style={{ color: 'var(--ink)', textDecoration: 'none' }}
                >
                  +971 56 572 8299
                </a>
              </p>
            </div>
            <div>
              <h4
                style={{
                  marginBottom: '8px',
                  fontSize: '0.9rem',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                Email
              </h4>
              <p style={{ color: 'var(--ink)' }}>
                <a
                  href="mailto:info@techbardxb.com"
                  style={{ color: 'var(--ink)', textDecoration: 'none' }}
                >
                  info@techbardxb.com
                </a>
              </p>
            </div>
            <div>
              <h4
                style={{
                  marginBottom: '8px',
                  fontSize: '0.9rem',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                Location
              </h4>
              <p style={{ color: 'var(--ink)' }}>Dubai, UAE</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="footer-row"
          style={{
            borderTop: '1px solid var(--line)',
            paddingTop: '20px',
            paddingBottom: '20px',
          }}
        >
          <div className="mono">
            © 2026 Techbar Technology. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a
              href="#"
              style={{
                color: 'var(--muted)',
                fontSize: '0.85rem',
                textDecoration: 'none',
              }}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              style={{
                color: 'var(--muted)',
                fontSize: '0.85rem',
                textDecoration: 'none',
              }}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
