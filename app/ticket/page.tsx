"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Ticket", path: "/ticket" },
  { label: "Location", path: "/location" },
  { label: "Contact", path: "/contact" },
];

export default function TicketPage() {
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
        .tkt-card{display:flex;align-items:center;justify-content:space-between;padding:28px 32px;border:1px solid rgba(255,69,0,0.25);background:rgba(255,69,0,0.02);position:relative;transition:border-color .2s,background .2s;flex-wrap:wrap;gap:20px}
        .tkt-card::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:linear-gradient(to bottom,#FF4500,#C0001A)}
        .tkt-card:hover{border-color:rgba(255,69,0,.5);background:rgba(255,69,0,.05)}
        .tkt-disabled{opacity:.3;pointer-events:none;border-color:rgba(255,255,255,.06) !important}
        .tkt-disabled::before{background:rgba(255,255,255,.1) !important}
        .page-bg-text{position:absolute;bottom:-10px;left:-10px;font-family:'Bebas Neue',sans-serif;font-size:clamp(80px,15vw,140px);color:rgba(255,69,0,.03);letter-spacing:10px;pointer-events:none;white-space:nowrap;line-height:1}
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
                  color: item.path === "/ticket" ? "#FF4500" : "#777770",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  if (item.path !== "/ticket")
                    e.currentTarget.style.color = "#F0EDDE";
                }}
                onMouseLeave={(e) => {
                  if (item.path !== "/ticket")
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
                  color: item.path === "/ticket" ? "#FF4500" : "#777770",
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
        <div className="page-bg-text">TICKET</div>

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
          GET YOUR
          <br />
          TICKET
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
          Pilih presale kamu
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

      {/* TICKETS */}
      <section className="px-6 md:px-12 pb-16 flex flex-col gap-px">
        {/* PRESALE 1 */}
        <div className="tkt-card">
          <div>
            <p
              style={{
                fontFamily: "'Bebas Neue',sans-serif",
                fontSize: "36px",
                letterSpacing: "2px",
                color: "#FF4500",
              }}
            >
              PRESALE 1
            </p>
            <p
              style={{
                fontFamily: "'Barlow Condensed',sans-serif",
                fontSize: "14px",
                color: "#777770",
                letterSpacing: "1px",
                marginTop: "2px",
              }}
            >
              Akses awal &nbsp;•&nbsp; Sangat terbatas
            </p>
          </div>
          <div className="flex items-center gap-8 flex-wrap">
            <p
              style={{
                fontFamily: "'Bebas Neue',sans-serif",
                fontSize: "32px",
                color: "#D4A017",
                letterSpacing: "2px",
              }}
            >
              Rp 80.000
            </p>
            <button
              className="cta-clip"
              style={{
                padding: "10px 28px",
                background: "none",
                border: "1px solid #FF4500",
                color: "#FF4500",
                fontFamily: "'Bebas Neue',sans-serif",
                fontSize: "18px",
                letterSpacing: "3px",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#FF4500";
                e.currentTarget.style.color = "#000";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "none";
                e.currentTarget.style.color = "#FF4500";
              }}
            >
              BUY
            </button>
          </div>
        </div>

        {/* PRESALE 2 DISABLED */}
        <div className="tkt-card tkt-disabled">
          <div>
            <p
              style={{
                fontFamily: "'Bebas Neue',sans-serif",
                fontSize: "36px",
                letterSpacing: "2px",
                color: "#777770",
                textDecoration: "line-through",
              }}
            >
              PRESALE 2
            </p>
            <p
              style={{
                fontFamily: "'Barlow Condensed',sans-serif",
                fontSize: "14px",
                color: "#555",
                letterSpacing: "1px",
                marginTop: "2px",
              }}
            >
              Belum dibuka
            </p>
          </div>
          <div className="flex items-center gap-8 flex-wrap">
            <p
              style={{
                fontFamily: "'Bebas Neue',sans-serif",
                fontSize: "32px",
                color: "#555",
                letterSpacing: "2px",
              }}
            >
              Rp 120.000
            </p>
            <div
              style={{
                padding: "8px 20px",
                background: "rgba(255,255,255,0.05)",
                color: "#555",
                fontFamily: "'Space Mono',monospace",
                fontSize: "11px",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              Coming Soon
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER - COPYRIGHT */}
      <footer className="mt-auto px-6 md:px-12 py-8 border-t border-white/5">
        <div className="flex justify-center">
          <div
            style={{
              fontFamily: "'Space Mono',monospace",
              fontSize: "11px",
              letterSpacing: "1px",
              color: "#777770",
              textAlign: "center",
              lineHeight: 1.6,
            }}
          >
            <span className="block md:inline">
              2026 UROT FEST — Under Rated Rat On The Block. All rights
              reserved.
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
