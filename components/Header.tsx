"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logoSmall from "@/assets/logo.png";
import logoTech from "@/assets/logotech.png";
import { PRODUCTS, SERVICES } from "@/lib/data";
import ScrollProgress from "./ScrollProgress";

type DropdownKey = "products" | "services" | null;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<DropdownKey>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeAll = () => {
    setMobileOpen(false);
    setMobileDropdown(null);
  };

  const toggleMobileDropdown = (key: DropdownKey) => {
    setMobileDropdown((current) => (current === key ? null : key));
  };

  return (
    <>
      <ScrollProgress />
      <header className={scrolled ? "scrolled-header" : ""}>
        {mobileOpen && (
          <div
            className="mobile-backdrop"
            onClick={closeAll}
            aria-hidden="true"
          />
        )}
        <div className="wrap topbar">
          <Link href="/" className="brand" onClick={closeAll}>
            <Image
              src={logoSmall}
              alt="Techbar Icon"
              width={46}
              height={46}
              className="brand-icon"
              priority
            />
            <Image
              src={logoTech}
              alt="Techbar Logo"
              width={220}
              height={60}
              className="brand-logo-tech"
              priority
            />
          </Link>

          <nav className={mobileOpen ? "nav-open" : ""} id="site-nav">
            <ul className={`nav-list ${mobileOpen ? "open" : ""}`}>
              <li>
                <Link href="/about" onClick={closeAll}>
                  About
                </Link>
              </li>

              <li className="has-dropdown">
                <button
                  type="button"
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
                    <a key={p} href="/#products" onClick={closeAll}>
                      {p}
                    </a>
                  ))}
                </div>
              </li>

              <li className="has-dropdown">
                <button
                  type="button"
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
                    <a key={s.title} href="/#services" onClick={closeAll}>
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
            type="button"
            className="menu-btn"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="site-nav"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>
    </>
  );
}
   