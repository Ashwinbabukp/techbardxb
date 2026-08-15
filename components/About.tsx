import { FEATURES } from "@/lib/data";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="wrap about-grid">
        <div className="reveal-on-scroll">
          <div className="kicker">About Us</div>
          <h2 style={{ marginBottom: 22 }}>Experience-led IT, not off-the-shelf fixes</h2>
          <p>
            Every business runs on a different mix of hardware, software and habits. We spend time
            understanding that mix before recommending anything — then supply, install and support the
            systems that fit it, backed by direct relationships with the world&apos;s leading hardware
            brands.
          </p>
          <p>
            We work across healthcare, education, retail, manufacturing, and government and public-sector
            clients, helping each get more out of the IT investments they&apos;ve already made and the ones
            they&apos;re planning next.
          </p>
          <a href="#contact" className="btn btn-ghost" style={{ marginTop: 8 }}>
            Talk to the team
          </a>
        </div>

        <ul className="feature-list">
          {FEATURES.map((f) => (
            <li key={f.idx} className="reveal-on-scroll">
              <span className="idx">{f.idx}</span>
              <div>
                <h4>{f.title}</h4>
                <p>{f.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
