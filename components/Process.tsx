import { PROCESS } from "@/lib/data";

export default function Process() {
  return (
    <section className="process" id="why">
      <div className="wrap">
        <div className="section-head">
          <div className="kicker">Working Process</div>
          <h2>Why teams choose Techbar</h2>
        </div>
        <div className="process-row">
          {PROCESS.map((step) => (
            <div key={step.idx}>
              <div className="idx">{step.idx}</div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
