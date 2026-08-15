export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap contact-grid">
        <div className="reveal-on-scroll">
          <div className="kicker">Contact</div>
          <h2 style={{ marginBottom: 8 }}>Let&apos;s talk about your setup</h2>

          <div className="contact-line">
            <span className="lbl">Address</span>
            <span className="val">
              PO Box 5564, Boulevard 25 – Al Hassan
              <br />
              Al Basri St, Office No. 49
              <br />
              Ajman, UAE
            </span>
          </div>
          <div className="contact-line">
            <span className="lbl">Phone</span>
            <span className="val">
              <a href="tel:+971565728299">+971 56 572 8299</a>
            </span>
          </div>
          <div className="contact-line">
            <span className="lbl">Email</span>
            <span className="val">
              <a href="mailto:info@techbardxb.com">info@techbardxb.com</a>
            </span>
          </div>
          <div className="contact-line">
            <span className="lbl">Hours</span>
            <span className="val">
              09:00 – 18:00
              <small>Sunday – Thursday</small>
            </span>
          </div>
        </div>

        <div className="cta-box reveal-on-scroll">
          <h3>Get a free IT consultation</h3>
          <p>
            Tell us what you&apos;re running today and where it&apos;s falling short — we&apos;ll come back
            with a plan, not a sales pitch.
          </p>
          <a href="mailto:info@techbardxb.com" className="btn btn-primary" style={{ width: "100%", textAlign: "center" }}>
            Email the team
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=+971565728299&text=Hey+Techbar"
            className="btn btn-ghost"
            style={{ width: "100%", textAlign: "center", marginTop: 12 }}
          >
            WhatsApp us
          </a>
        </div>
      </div>
    </section>
  );
}
