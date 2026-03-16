"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ParticleTextEffect } from "./components/ui/particle-text-effect";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Ticket", path: "/ticket" },
  { label: "Location", path: "/location" },
  { label: "Contact", path: "/contact" },
];

export default function HomePage() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main
      className="flex flex-col text-white overflow-x-hidden"
      style={{ background: "#0A0A08" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@400;700;900&family=Space+Mono:wght@400;700&display=swap');
        .noise-overlay{position:fixed;inset:0;pointer-events:none;z-index:9999;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");opacity:.55}
        .scanlines{position:absolute;inset:0;pointer-events:none;background:repeating-linear-gradient(to bottom,transparent 0px,transparent 3px,rgba(0,0,0,.07) 3px,rgba(0,0,0,.07) 4px)}
        .hero-slash{position:absolute;top:-30%;right:-5%;width:55%;height:160%;background:linear-gradient(135deg,transparent 45%,rgba(255,69,0,.03) 45%,rgba(192,0,26,.05));transform:skewX(-6deg);pointer-events:none}
        .glitch{position:relative;display:inline-block}
        .glitch::before{content:attr(data-text);position:absolute;top:0;left:0;width:100%;color:#C0001A;clip-path:polygon(0 15%,100% 15%,100% 35%,0 35%);transform:translate(-2px,0);animation:g1 5s infinite}
        .glitch::after{content:attr(data-text);position:absolute;top:0;left:0;width:100%;color:#D4A017;clip-path:polygon(0 55%,100% 55%,100% 75%,0 75%);transform:translate(2px,0);animation:g2 5s infinite}
        @keyframes g1{0%,88%,100%{opacity:0}90%{opacity:.9;transform:translate(-4px,0)}92%{opacity:.7;transform:translate(3px,0)}94%{opacity:.9;transform:translate(-2px,0)}96%{opacity:0}}
        @keyframes g2{0%,89%,100%{opacity:0}91%{opacity:.8;transform:translate(4px,0)}93%{opacity:.6;transform:translate(-3px,0)}95%{opacity:.8;transform:translate(2px,0)}97%{opacity:0}}
        .ticker-wrap{background:#FF4500;overflow:hidden;padding:7px 0;white-space:nowrap}
        .ticker-inner{display:inline-block;animation:tick 22s linear infinite;font-family:'Bebas Neue',sans-serif;font-size:14px;letter-spacing:4px;color:#000}
        @keyframes tick{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .cta-clip{clip-path:polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)}
        .artist-wrap{position:relative;overflow:hidden;aspect-ratio:1;background:#0A0A08;cursor:pointer}
        .artist-wrap img{width:100%;height:100%;object-fit:cover;filter:grayscale(80%) contrast(1.15);transition:filter .4s,transform .4s}
        .artist-wrap:hover img{filter:grayscale(0%) contrast(1.05);transform:scale(1.06)}
        .artist-ov{position:absolute;bottom:0;left:0;right:0;padding:40px 20px 20px;background:linear-gradient(to top,rgba(0,0,0,.92),transparent);transform:translateY(3px);transition:transform .3s}
        .artist-wrap:hover .artist-ov{transform:translateY(0)}
        .top-line::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(to right,transparent,#FF4500,transparent)}
        .footer-divider{width:100%;height:1px;background:rgba(255,255,255,0.06);margin:20px 0}
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
                  color: item.path === "/" ? "#FF4500" : "#777770",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  if (item.path !== "/")
                    e.currentTarget.style.color = "#F0EDDE";
                }}
                onMouseLeave={(e) => {
                  if (item.path !== "/")
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
                  color: item.path === "/" ? "#FF4500" : "#777770",
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

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="scanlines" />
        <div className="hero-slash" />

        {/* PARTICLE BG */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            opacity: 0.18,
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          <ParticleTextEffect
            words={[
              "UROT FEST",
              "VOL. 4",
              "26.02.2026",
              "BATANG KOTA",
              "UNDERGROUND",
            ]}
          />
        </div>

        {/* KONTEN HERO */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <p
            style={{
              fontFamily: "'Space Mono',monospace",
              fontSize: "10px",
              letterSpacing: "5px",
              color: "#FF4500",
              textTransform: "uppercase",
              marginBottom: "24px",
              opacity: 0.85,
            }}
          >
            — Underground Music Event —
          </p>

          <h1
            className="glitch"
            data-text="UROT FEST"
            style={{
              fontFamily: "'Bebas Neue',sans-serif",
              fontSize: "clamp(72px,16vw,160px)",
              lineHeight: 0.85,
              letterSpacing: "4px",
              color: "#F0EDDE",
            }}
          >
            UROT FEST
          </h1>

          <p
            style={{
              marginTop: "20px",
              fontFamily: "'Barlow Condensed',sans-serif",
              fontSize: "18px",
              fontWeight: 400,
              letterSpacing: "4px",
              color: "#777770",
              textTransform: "uppercase",
            }}
          >
            Under Rated Rat On The Block
          </p>

          <p
            style={{
              marginTop: "10px",
              fontFamily: "'Space Mono',monospace",
              fontSize: "11px",
              color: "#D4A017",
              letterSpacing: "3px",
            }}
          >
            [ 26 . 02 . 2026 &nbsp;•&nbsp; GEDUNG KORPRI &nbsp;•&nbsp; BATANG
            KOTA ]
          </p>

          <div
            style={{
              width: "48px",
              height: "2px",
              background: "linear-gradient(to right,#FF4500,#C0001A)",
              margin: "28px auto",
            }}
          />

          <button
            onClick={() => router.push("/ticket")}
            className="cta-clip"
            style={{
              padding: "14px 52px",
              background: "#FF4500",
              color: "#000",
              fontFamily: "'Bebas Neue',sans-serif",
              fontSize: "22px",
              letterSpacing: "5px",
              border: "none",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#C0001A")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#FF4500")}
          >
            BUY TICKET
          </button>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker-wrap">
        <div className="ticker-inner">
          &nbsp;&nbsp;TWOPOINTONE &nbsp;✦&nbsp; BLEACHTODEATH &nbsp;✦&nbsp;
          UNHEARD &nbsp;✦&nbsp; 26 FEB 2026 &nbsp;✦&nbsp; BATANG KOTA
          &nbsp;✦&nbsp; UNDERGROUND VIBES &nbsp;✦&nbsp; PRESALE OPEN
          &nbsp;✦&nbsp; TWOPOINTONE &nbsp;✦&nbsp; BLEACHTODEATH &nbsp;✦&nbsp;
          UNHEARD &nbsp;✦&nbsp; 26 FEB 2026 &nbsp;✦&nbsp; BATANG KOTA
          &nbsp;✦&nbsp; UNDERGROUND VIBES &nbsp;✦&nbsp; PRESALE OPEN
          &nbsp;✦&nbsp;
        </div>
      </div>

      {/* LINEUP */}
      <section
        className="top-line relative py-24 px-6 md:px-12"
        style={{ background: "#111109" }}
      >
        <div className="flex items-baseline gap-4 mb-12">
          <h2
            style={{
              fontFamily: "'Bebas Neue',sans-serif",
              fontSize: "clamp(36px,6vw,64px)",
              letterSpacing: "3px",
              color: "#F0EDDE",
            }}
          >
            LINE UP VOL. 4
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "12px",
            background: "transparent",
            border: "none",
          }}
        >
          {[
            { name: "TWOPOINTONE", img: "line1.png", tag: "Yogyakarta, DIY" },
            {
              name: "BLEACHTODEATH",
              img: "/line2.png",
              tag: "Bandung, Jawa Barat",
            },
            { name: "UNHEARD", img: "/line3.png", tag: "Batang, Jawa Tengah" },
            {
              name: "KOSMIKHC",
              img: "/line4.jpg",
              tag: "Kuala Lumpur, Malaysia",
            },
            { name: "HONEY", img: "/line5.jpg", tag: "Indonesia" },
            { name: "RUINBLIGHT", img: "/line6.jpg", tag: "Indonesia" },
          ].map((item, i) => (
            <div key={i} className="artist-wrap">
              <img src={item.img} alt={item.name} />
              <div className="artist-ov">
                <p
                  style={{
                    fontFamily: "'Space Mono',monospace",
                    fontSize: "9px",
                    letterSpacing: "3px",
                    color: "#FF4500",
                    textTransform: "uppercase",
                    marginBottom: "4px",
                  }}
                >
                  {item.tag}
                </p>
                <p
                  style={{
                    fontFamily: "'Bebas Neue',sans-serif",
                    fontSize: "26px",
                    letterSpacing: "2px",
                  }}
                >
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#060604",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          padding: "48px 48px 36px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "32px",
            marginBottom: "32px",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'Space Mono',monospace",
                fontSize: "9px",
                letterSpacing: "3px",
                color: "#FF4500",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              Ketentuan Penggunaan
            </p>
            <p
              style={{
                fontFamily: "'Barlow Condensed',sans-serif",
                fontSize: "14px",
                color: "rgba(255,255,255,0.3)",
                lineHeight: 1.7,
              }}
            >
              Tiket yang sudah dibeli tidak dapat dikembalikan atau ditukar
              dalam kondisi apapun. Panitia berhak menolak masuk kepada
              pengunjung yang melanggar aturan acara.
            </p>
          </div>
          <div>
            <p
              style={{
                fontFamily: "'Space Mono',monospace",
                fontSize: "9px",
                letterSpacing: "3px",
                color: "#FF4500",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              Kebijakan Acara
            </p>
            <p
              style={{
                fontFamily: "'Barlow Condensed',sans-serif",
                fontSize: "14px",
                color: "rgba(255,255,255,0.3)",
                lineHeight: 1.7,
              }}
            >
              Dilarang membawa senjata tajam, narkoba, atau bahan berbahaya
              lainnya ke dalam area acara. Panitia tidak bertanggung jawab atas
              kehilangan barang pribadi selama acara berlangsung.
            </p>
          </div>
          <div>
            <p
              style={{
                fontFamily: "'Space Mono',monospace",
                fontSize: "9px",
                letterSpacing: "3px",
                color: "#FF4500",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              Hak Cipta
            </p>
            <p
              style={{
                fontFamily: "'Barlow Condensed',sans-serif",
                fontSize: "14px",
                color: "rgba(255,255,255,0.3)",
                lineHeight: 1.7,
              }}
            >
              Seluruh konten, nama, logo, dan materi visual dalam website ini
              merupakan milik UROT FEST dan dilindungi hak cipta. Dilarang
              memperbanyak tanpa izin tertulis.
            </p>
          </div>
        </div>

        <div className="footer-divider" />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p
            style={{
              fontFamily: "'Space Mono',monospace",
              fontSize: "9px",
              letterSpacing: "2px",
              color: "rgba(255,255,255,0.15)",
              textTransform: "uppercase",
            }}
          >
            © {new Date().getFullYear()} UROT FEST — Under Rated Rat On The
            Block. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "'Space Mono',monospace",
              fontSize: "9px",
              letterSpacing: "2px",
              color: "rgba(255,255,255,0.1)",
              textTransform: "uppercase",
            }}
          >
            Batang, Jawa Tengah, Indonesia
          </p>
        </div>
      </footer>
    </main>
  );
}
