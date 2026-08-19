import Link from "next/link";
import AiNetworkSphere from "./AiNetworkSphere";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="wrap hero-grid">
        <div className="hero-inner reveal-on-scroll">
          <div className="eyebrow">
            <span className="pulse-dot"></span>
            IT Infrastructure &amp; Managed Services · Dubai, UAE
          </div>
          <h1>
            IT support that shows up <em>before</em> something breaks.
          </h1>
          <p>
            Techbar Technology supplies, deploys and maintains the hardware, networks and security systems
            that keep businesses across the UAE running — from a single workstation to a full data center.
          </p>
          <div className="btn-row">
            <Link href="/contact" className="btn btn-primary">
              Get a free consultation
            </Link>
            <Link href="/services" className="btn btn-ghost">
              See services
            </Link>
          </div>
        </div>

        <div className="hero-visual reveal-on-scroll">
          <div className="visual-panel">
            <AiNetworkSphere />
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="hero-stats">
          <div className="reveal-on-scroll">
            <div className="num">24/7</div>
            <div className="lbl">Customer support</div>
          </div>
          <div className="reveal-on-scroll">
            <div className="num">12+</div>
            <div className="lbl">Product categories</div>
          </div>
          <div className="reveal-on-scroll">
            <div className="num">7</div>
            <div className="lbl">Core service lines</div>
          </div>
        </div>
      </div>
    </section>
  );
}
