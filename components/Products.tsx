import { PRODUCTS } from "@/lib/data";

export default function Products() {
  return (
    <section id="products">
      <div className="wrap">
        <div className="section-head reveal-on-scroll">
          <div className="kicker">Products</div>
          <h2>Hardware, sourced and stocked</h2>
          <p>Desktops, laptops, servers and infrastructure gear from the brands IT teams already trust.</p>
        </div>
        <div className="tag-grid">
          {PRODUCTS.map((p) => (
            <a href="#contact" key={p} className="reveal-on-scroll">
              {p}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
