import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

import KotteKingdomPage from "./KotteKingdomPage";
import LegalPage from "./LegalPage";
import IndustrialPage from "./IndustrialPage";
import CreativityPage from "./CreativityPage";
import AboutPage from "./AboutPage";

/* ---------- Responsive helper ---------- */
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);

  return isMobile;
}

/* ---------- Nav Styles ---------- */
const navLinkStyle = {
  color: "#ddd",
  textDecoration: "none",
  fontSize: "0.95rem",
  whiteSpace: "nowrap",
  flexShrink: 0,
};

const mobileNavLinkStyle = {
  color: "white",
  textDecoration: "none",
  padding: "10px 12px",
  background: "rgba(255,255,255,0.03)",
  borderRadius: "8px",
};

/* ---------- MAIN APP ---------- */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <Router>
      <div>

        {/* ---------- NAVBAR ---------- */}
        <nav
          style={{
            width: "100%",
            padding: "16px 40px",
            boxSizing: "border-box",
            background: "#0a0a0a",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            position: "sticky",
            top: 0,
            zIndex: 1000,
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px",
            }}
          >
            {/* BRAND */}
            <Link
              to="/"
              style={{
                color: "#e6c36a",
                fontWeight: "bold",
                fontSize: "1.15rem",
                textDecoration: "none",
                letterSpacing: "1px",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              Solutions WaterMinds
            </Link>

            {/* DESKTOP NAV */}
            {isMobile ? (
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                style={{
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#fff",
                  padding: "8px 12px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
              >
                ☰
              </button>
            ) : (
              <div style={{ display: "flex", gap: "28px" }}>
                <Link to="/kotte" style={navLinkStyle}>Kotte Kingdom</Link>
                <Link to="/legal" style={navLinkStyle}>Non Legal Support</Link>
                <Link to="/industrial" style={navLinkStyle}>Industrial Support</Link>
                <Link to="/creativity" style={navLinkStyle}>Creativity Program</Link>
                <Link to="/about" style={navLinkStyle}>About</Link>
              </div>
            )}
          </div>

          {/* MOBILE MENU */}
          {isMobile && menuOpen && (
            <div
              style={{
                marginTop: "12px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <Link to="/kotte" onClick={() => setMenuOpen(false)} style={mobileNavLinkStyle}>Kotte Kingdom</Link>
              <Link to="/legal" onClick={() => setMenuOpen(false)} style={mobileNavLinkStyle}>Non Legal Support</Link>
              <Link to="/industrial" onClick={() => setMenuOpen(false)} style={mobileNavLinkStyle}>Industrial Support</Link>
              <Link to="/creativity" onClick={() => setMenuOpen(false)} style={mobileNavLinkStyle}>Creativity Program</Link>
              <Link to="/about" onClick={() => setMenuOpen(false)} style={mobileNavLinkStyle}>About</Link>
            </div>
          )}
        </nav>

        {/* ---------- ROUTES ---------- */}
        <Routes>
          <Route path="/" element={<SolutionsWaterMindsPage />} />
          <Route path="/kotte" element={<KotteKingdomPage />} />
          <Route path="/legal" element={<LegalPage />} />
          <Route path="/industrial" element={<IndustrialPage />} />
          <Route path="/creativity" element={<CreativityPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>

      </div>
    </Router>
  );
}

/* ---------- MAIN COMPANY PAGE ---------- */
function SolutionsWaterMindsPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #050505, #0d0d0d)",
        color: "#efe6c8",
        padding: "60px 20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "#e6c36a" }}>
        Solutions WaterMinds
      </h1>

      <p style={{ maxWidth: "700px", margin: "20px auto", color: "#ccc" }}>
        A multidisciplinary platform delivering expertise in digital creativity,
        industrial optimization, structured documentation support, and innovation development.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        <ServiceCard
          title="Kotte Kingdom"
          description="Digital art inspired by Sri Lanka’s heritage"
          link="/kotte"
        />

        <ServiceCard
          title="Non Legal Support"
          description="Structured document preparation support"
          link="/legal"
        />

        <ServiceCard
          title="Industrial Support"
          description="Engineering and ISO 14001 solutions"
          link="/industrial"
        />

        <ServiceCard
          title="Creativity Program"
          description="Innovation and creativity training programs"
          link="/creativity"
        />
      </div>
    </div>
  );
}

/* ---------- SERVICE CARD ---------- */
function ServiceCard({ title, description, link }) {
  return (
    <div
      style={{
        padding: "20px",
        background: "rgba(255,255,255,0.03)",
        borderRadius: "10px",
      }}
    >
      <h3 style={{ color: "#e6c36a" }}>{title}</h3>
      <p style={{ color: "#ccc" }}>{description}</p>

      <a
        href={`#${link}`}
        style={{ color: "#c7d3ff", textDecoration: "none" }}
      >
        Explore →
      </a>
    </div>
  );
}