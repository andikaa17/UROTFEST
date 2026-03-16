"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Ticket", path: "/ticket" },
  { label: "Location", path: "/location" },
  { label: "Contact", path: "/contact" },
];

export default function ContactPage() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main
      className="flex flex-col text-white min-h-screen"
      style={{ background: "#0A0A08" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@400;700;900&family=Space+Mono:wght@400;700&display=swap');
        .noise-overlay{position:fixed;inset:0;pointer-events:none;z-index:9999;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");opacity:.55}
        .cta-clip{clip-path:polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)}
        .page-bg-text{position:absolute;bottom:-10px;left:-10px;font-family:'Bebas Neue',sans-serif;font-size:clamp(80px,15vw,140px);color:rgba(255,69,0,.03);letter-spacing:10px;pointer-events:none;white-space:nowrap;line-height:1}
        .contact-card{display:flex;align-items:center;gap:20px;padding:24px 28px;border:1px solid rgba(255,255,255,.06);text-decoration:none;color:#F0EDDE;position:relative;transition:border-color .2s,background .2s;overflow:hidden}
        .contact-card::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;opacity:0;transition:opacity .2s}
        .contact-card:hover{border-color:rgba(255,255,255,.14);background:rgba(255,255,255,.02)}
        .contact-card:hover::before{opacity:1}
        .contact-card.ig::before{background:linear-gradient(to bottom,#c13584,#e1306c,#fd1d1d,#f56040)}
        .contact-card.wa::before{background:#25D366}
        .contact-arrow{margin-left:auto;font-size:20px;color:#777770;transition:transform .2s,color .2s}
        .contact-card:hover .contact-arrow{transform:translateX(4px);color:#F0EDDE}
      `}</style>

      <div className="noise-overlay" />

      {/* LOGO */}
      <header className="fixed top-5 left-5 z-50">
        <h1
          onClick={() => router.push("/")}
          style={{
            fontFamily: "'Bebas Neue',sans-serif",
            fontSize: "24px",
            letterSpacing: "4px",
            cursor: "pointer",
          }}
        >
          <span style={{ color: "#FF4500" }}>UROT</span> FEST
        </h1>
      </header>

      {/* NAVBAR */}
      <header className="fixed top-5 right-5 z-50">
        <div
          className="px-5 py-3 backdrop-blur-md rounded-2xl flex items-center gap-6"
          style={{
            background: "rgba(10,10,8,0.7)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => router.push(item.path)}
                style={{
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontSize: "14px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: item.path === "/contact" ? "#FF4500" : "#777770",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  if (item.path !== "/contact")
                    e.currentTarget.style.color = "#F0EDDE";
                }}
                onMouseLeave={(e) => {
                  if (item.path !== "/contact")
                    e.currentTarget.style.color = "#777770";
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div
            className="mt-3 px-6 py-4 rounded-xl flex flex-col gap-3 md:hidden"
            style={{
              background: "rgba(10,10,8,0.95)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  router.push(item.path);
                  setMenuOpen(false);
                }}
                className="text-left"
                style={{
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: item.path === "/contact" ? "#FF4500" : "#777770",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* PAGE HEADER */}
      <section className="relative pt-36 pb-12 px-6 md:px-12 overflow-hidden">
        <div className="page-bg-text">CONTACT</div>

        <h1
          style={{
            fontFamily: "'Bebas Neue',sans-serif",
            fontSize: "clamp(48px,10vw,96px)",
            letterSpacing: "4px",
            lineHeight: 1,
            color: "#F0EDDE",
            marginTop: "8px",
          }}
        >
          CONTACT
        </h1>
        <p
          style={{
            fontFamily: "'Space Mono',monospace",
            fontSize: "10px",
            letterSpacing: "4px",
            color: "#FF4500",
            textTransform: "uppercase",
            marginTop: "8px",
          }}
        >
          Hubungi kami jika ada pertanyaan
        </p>
        <div
          style={{
            width: "100%",
            height: "1px",
            background: "linear-gradient(to right,#FF4500,transparent)",
            marginTop: "32px",
          }}
        />
      </section>

      {/* CONTACT LINKS */}
      <section
        className="px-6 md:px-12 pb-24 flex flex-col gap-px"
        style={{ maxWidth: "600px" }}
      >
        <a
          href="https://www.instagram.com/underratedratontheblock"
          target="_blank"
          className="contact-card ig"
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
          </div>
          <div>
            <p
              style={{
                fontFamily: "'Space Mono',monospace",
                fontSize: "9px",
                letterSpacing: "3px",
                color: "#777770",
                textTransform: "uppercase",
                marginBottom: "4px",
              }}
            >
              Instagram
            </p>
            <p
              style={{
                fontFamily: "'Bebas Neue',sans-serif",
                fontSize: "22px",
                letterSpacing: "2px",
              }}
            >
              @underratedratontheblock
            </p>
          </div>
          <span className="contact-arrow">→</span>
        </a>

        <a
          href="https://wa.me/6289510433197"
          target="_blank"
          className="contact-card wa"
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
          <div>
            <p
              style={{
                fontFamily: "'Space Mono',monospace",
                fontSize: "9px",
                letterSpacing: "3px",
                color: "#777770",
                textTransform: "uppercase",
                marginBottom: "4px",
              }}
            >
              WhatsApp
            </p>
            <p
              style={{
                fontFamily: "'Bebas Neue',sans-serif",
                fontSize: "22px",
                letterSpacing: "2px",
              }}
            >
              +62 895-1043-3197
            </p>
          </div>
          <span className="contact-arrow">→</span>
        </a>
      </section>

      {/* FOOTER WITH COPYRIGHT */}
      <footer className="mt-auto px-6 md:px-12 py-8 border-t border-white/5">
        <p
          className="text-center text-sm"
          style={{
            fontFamily: "'Space Mono',monospace",
            color: "#777770",
            letterSpacing: "1px",
          }}
        >
          © 2026 UROT FEST — Under Rated Rat On The Block. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
