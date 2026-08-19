import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PRODUCTS } from '@/lib/data';

export default function ProductsPage() {
  const productCategories = [
    {
      name: 'Computers',
      products: [
        'Dell Desktop & AIO',
        'HP Desktop & AIO',
        'Dell Laptop',
        'HP Laptop',
        'Lenovo Laptops',
      ],
    },
    {
      name: 'Servers',
      products: ['Tower Server', 'Rack Server', 'AI Supercomputer'],
    },
    {
      name: 'Infrastructure',
      products: ['Storages', 'Firewall', 'UPS', 'Workstations'],
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero" style={{ paddingBottom: '60px' }}>
          <div className="wrap">
            <h1>Enterprise Products & Solutions</h1>
            <p
              style={{
                color: 'var(--muted)',
                fontSize: '1.1rem',
                marginTop: '20px',
                maxWidth: '700px',
              }}
            >
              Industry-leading hardware and technology solutions from trusted
              brands
            </p>
          </div>
        </section>

        {/* Products Overview */}
        <section
          style={{ padding: '96px 0', borderBottom: '1px solid var(--line)' }}
        >
          <div className="wrap">
            <div className="section-head">
              <div className="kicker">PRODUCTS CATALOG</div>
              <h2>Browse Our Solutions</h2>
            </div>
            <div className="tag-grid">
              {PRODUCTS.map((product) => (
                <a key={product} href="#">
                  {product}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section
          style={{
            padding: '96px 0',
            backgroundColor: 'var(--bg-raised)',
            borderBottom: '1px solid var(--line)',
          }}
        >
          <div className="wrap">
            <div className="section-head">
              <div className="kicker">PRODUCT CATEGORIES</div>
              <h2>Organized by Type</h2>
            </div>
            <div className="three-col-grid" style={{ marginTop: '60px' }}>
              {productCategories.map((category) => (
                <div
                  key={category.name}
                  className="reveal-on-scroll glass-card"
                >
                  <h4
                    style={{
                      marginBottom: '24px',
                      fontSize: '1.2rem',
                      color: 'var(--accent)',
                    }}
                  >
                    {category.name}
                  </h4>
                  <ul
                    style={{
                      listStyle: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                    }}
                  >
                    {category.products.map((product) => (
                      <li key={product}>
                        <a
                          href="#"
                          style={{
                            color: 'var(--muted)',
                            transition: 'color 0.2s ease',
                          }}
                        >
                          → {product}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Our Products */}
        <section
          style={{ padding: '96px 0', borderBottom: '1px solid var(--line)' }}
        >
          <div className="wrap">
            <div className="section-head reveal-on-scroll">
              <div className="kicker">WHY CHOOSE TECHBAR</div>
              <h2>Product Advantages</h2>
            </div>
            <div className="two-col-grid" style={{ marginTop: '60px' }}>
              <div className="reveal-on-scroll">
                <h4 style={{ marginBottom: '12px', fontSize: '1.1rem' }}>
                  Authorized Distributor
                </h4>
                <p style={{ color: 'var(--muted)' }}>
                  Authorized distributor for major brands including Dell, HP,
                  Lenovo, and other leading technology providers.
                </p>
              </div>
              <div className="reveal-on-scroll">
                <h4 style={{ marginBottom: '12px', fontSize: '1.1rem' }}>
                  Competitive Pricing
                </h4>
                <p style={{ color: 'var(--muted)' }}>
                  Get enterprise-grade products at competitive prices with
                  various financing options available.
                </p>
              </div>
              <div className="reveal-on-scroll">
                <h4 style={{ marginBottom: '12px', fontSize: '1.1rem' }}>
                  Fast Delivery
                </h4>
                <p style={{ color: 'var(--muted)' }}>
                  Quick delivery across UAE and the region with reliable
                  logistics and supply chain management.
                </p>
              </div>
              <div className="reveal-on-scroll">
                <h4 style={{ marginBottom: '12px', fontSize: '1.1rem' }}>
                  Complete Support
                </h4>
                <p style={{ color: 'var(--muted)' }}>
                  Full lifecycle support from procurement to installation,
                  configuration, and ongoing maintenance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '96px 0' }}>
          <div className="wrap">
            <div className="cta-box">
              <h3>Looking for specific products?</h3>
              <p>
                Contact our sales team for a customized quote and product
                recommendations.
              </p>
              <a
                href="/contact"
                className="btn btn-primary"
                style={{ display: 'inline-block', marginTop: '20px' }}
              >
                Get a Quote
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
