import { SERVICES } from "@/lib/data";

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className="section-head reveal-on-scroll">
          <div className="kicker">Services</div>
          <h2>Support that covers the whole lifecycle</h2>
          <p>From first setup to ongoing maintenance, security and recovery.</p>
        </div>
        <div className="service-cards">
          {SERVICES.map((s) => (
            <div className="service-card reveal-on-scroll" key={s.title}>
              <div className="icon">{s.icon}</div>
              <h4>{s.title}</h4>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
