"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logoTech from "@/assets/logotech.png";
import { PRODUCTS, SERVICES } from "@/lib/data";

type DropdownKey = "products" | "services" | null;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<DropdownKey>(null);

  const closeAll = () => {
    setMobileOpen(false);
    setMobileDropdown(null);
  };

  const toggleMobileDropdown = (key: DropdownKey) => {
    setMobileDropdown((current) => (current === key ? null : key));
  };

  return (
    <header>
      <div className="wrap topbar">
        <Link href="/" className="brand" onClick={closeAll}>
          <Image
            src={logoTech}
            alt="Techbar Logo"
            width={140}
            height={140}
            style={{ height: "auto" }}
          />
        </Link>

        <nav>
          <ul className={`nav-list ${mobileOpen ? "open" : ""}`}>
            <li>
              <Link href="/about" onClick={closeAll}>
                About
              </Link>
            </li>

            <li className="has-dropdown">
              <button
                className="drop-trigger"
                aria-expanded={mobileDropdown === "products"}
                onClick={() => toggleMobileDropdown("products")}
              >
                Products <span className="caret">▾</span>
              </button>
              <div className={`dropdown ${mobileDropdown === "products" ? "show" : ""}`}>
                <Link href="/products" onClick={closeAll}>
                  All Products
                </Link>
                {PRODUCTS.map((p) => (
                  <a key={p} href="#" onClick={closeAll}>
                    {p}
                  </a>
                ))}
              </div>
            </li>

            <li className="has-dropdown">
              <button
                className="drop-trigger"
                aria-expanded={mobileDropdown === "services"}
                onClick={() => toggleMobileDropdown("services")}
              >
                Services <span className="caret">▾</span>
              </button>
              <div className={`dropdown ${mobileDropdown === "services" ? "show" : ""}`}>
                <Link href="/services" onClick={closeAll}>
                  All Services
                </Link>
                {SERVICES.map((s) => (
                  <a key={s.title} href="#" onClick={closeAll}>
                    {s.title}
                  </a>
                ))}
              </div>
            </li>

            <li>
              <Link href="/industries" onClick={closeAll}>
                Industries
              </Link>
            </li>

            <li>
              <Link href="/contact" className="nav-cta" onClick={closeAll}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <button
          className="menu-btn"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((open) => !open)}
        >
          ☰
        </button>
      </div>
    </header>
  );
}   