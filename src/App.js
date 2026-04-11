import React, { useState, useEffect, useRef } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles.css";
import LegalPage from "./LegalPage";


// Import logo and images
import logo from "./assets/logo.png";
import nursery1 from "./assets/nursery1.jpg";
import nursery2 from "./assets/nursery2.jpg";
import nursery3 from "./assets/nursery3.jpg";
import nursery4 from "./assets/nursery4.jpg";
import nursery5 from "./assets/nursery5.jpg";
import nursery6 from "./assets/nursery6.jpg";
import nursery7 from "./assets/nursery7.jpg";

import coir from "./assets/coir.jpg";
import expo from "./assets/expo.jpg";
import organic from "./assets/organic.jpg";
import background from "./assets/background.png";

function HomePage() {
  const [lightboxImage, setLightboxImage] = useState(null);
  const sectionsRef = useRef([]);
  const imageRefs = useRef([]);
  const appRef = useRef(null);

  const nurseryImages = [
    nursery1,
    nursery2,
    nursery3,
    nursery4,
    nursery5,
    nursery6,
    nursery7,
  ];

  const imageSpeeds = [0.15, 0.2, 0.25, 0.18, 0.22, 0.17, 0.2, 0.12, 0.15];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-fade-in");

            const children = Array.from(entry.target.children);
            children.forEach((child, index) => {
              child.style.transitionDelay = `${index * 0.15}s`;
              child.classList.add("fade-slide-in");
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (appRef.current) {
        const offset = window.scrollY * 0.3;
        appRef.current.style.backgroundPosition = `center ${-offset}px`;
      }

      imageRefs.current.forEach((img, index) => {
        if (img) {
          const rect = img.getBoundingClientRect();
          const speed = imageSpeeds[index] || 0.2;
          const translateY = rect.top * speed;
          img.style.transform = `translateY(${translateY}px)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const setImageRef = (el, index) => {
    imageRefs.current[index] = el;
  };

  return (
    <div
      className="app"
      ref={appRef}
      style={{ backgroundImage: `url(${background})` }}
    >
      <header className="header">
        <div className="brand">
          <img src={logo} alt="Serendib Digital logo" className="logo" />
          <h1>Serendib Digital</h1>
        </div>
        <p>Serendib Digital – Kotte Kingdom Digital Art</p>
        <p>
          Minimalist digital artworks inspired by the heritage, landscapes, and
          royal history of the ancient Kotte Kingdom.
        </p>
      </header>

      <main>
        <section
          className="section"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <h2>Company Overview</h2>
          <p>
            Serendib Digital creates minimalist digital artworks inspired by the
            history, landscapes, and cultural memory of the Kotte Kingdom, the
            medieval capital of Sri Lanka.
          </p>
          <p>
            Through calm line work, symbolic compositions, and heritage
            storytelling, each artwork transforms historical locations, royal
            legends, and natural landscapes into contemporary digital wall art.
          </p>
          <p>The collection explores themes such as:</p>
          <ul>
            <li>The fortress city of Kotte</li>
            <li>Wetlands and water defenses of Diyawanna Oya</li>
            <li>Royal processions and elephants</li>
            <li>Temples and cultural life of the kingdom</li>
            <li>Poetic landscapes described in Sandesha literature</li>
          </ul>
          <p>
            These artworks bring Sri Lanka’s medieval heritage into modern
            homes, galleries, and digital collections.
          </p>
          <p>
            Serendib Digital is led by an independent artist and designer whose
            work focuses on calm, minimalist visual expression. Drawing
            inspiration from nature, cultural memory, and emotional stillness,
            the practice explores themes of flow, balance, and human presence
            through restrained line work and thoughtful composition.
          </p>
        </section>

        <section
          className="section alt"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2>Vision &amp; Mission</h2>
          <p>
            <strong>Vision:</strong> To become the leading digital art studio
            interpreting the heritage of the Kotte Kingdom through contemporary
            minimalist visual language.
          </p>
          <p>
            <strong>Mission:</strong> To transform Sri Lanka’s historical
            landscapes, royal stories, and cultural symbols into calm,
            meaningful digital artworks that connect modern audiences with the
            legacy of the Kotte Kingdom.
          </p>
        </section>

        <section
          className="section side-by-side"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <div className="text">
            <h2>Product Portfolio</h2>
            <ul>
              <li>Minimalist line art with emotional storytelling</li>
              <li>Calm and spiritual wall art compositions</li>
              <li>Nature-inspired abstract line work</li>
              <li>Cultural and symbolic minimalist illustrations</li>
              <li>Custom artworks for personal, café, and contemplative spaces</li>
            </ul>
          </div>
          <div className="image-box">
            <img
              src={expo}
              alt="Product Portfolio"
              ref={(el) => setImageRef(el, 0)}
              className="hover-parallax shadow-lift"
            />
          </div>
        </section>

        <section
          className="section alt side-by-side"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <div className="text">
            <h2>Creative Standards</h2>
            <ul>
              <li>Minimalist compositions guided by clarity and restraint</li>
              <li>Emotion-first visual storytelling</li>
              <li>Symbolic line work inspired by nature, flow, and balance</li>
              <li>Carefully considered use of negative space</li>
              <li>Artwork created for calm, reflective spaces</li>
            </ul>
          </div>
          <div className="image-box">
            <img
              src={coir}
              alt="Creative Standards"
              ref={(el) => setImageRef(el, 1)}
              className="hover-parallax shadow-lift"
            />
          </div>
        </section>

        <section
          className="section side-by-side"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <div className="text">
            <h2>Creative Values</h2>
            <ul>
              <li>Mindful creation with respect for balance and simplicity</li>
              <li>Intentional use of minimal elements</li>
              <li>Art shaped by natural rhythms, flow, and continuity</li>
              <li>Ethical, independent creative practice</li>
            </ul>
          </div>
          <div className="image-box">
            <img
              src={organic}
              alt="Creative Values"
              ref={(el) => setImageRef(el, 2)}
              className="hover-parallax shadow-lift"
            />
          </div>
        </section>

        <section
          className="section alt side-by-side"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <div className="text">
            <h2>What Makes This Work Distinct</h2>
            <ul>
              <li>A calm, minimalist visual language focused on emotional depth</li>
              <li>Symbolic line work inspired by nature, flow, and continuity</li>
              <li>Art designed for reflective and contemplative spaces</li>
              <li>Balance between cultural abstraction and simplicity</li>
              <li>Custom-created pieces rather than mass-produced designs</li>
            </ul>
          </div>
          <div className="image-box">
            <img
              src={nursery7}
              alt="What Makes This Work Distinct"
              ref={(el) => setImageRef(el, 3)}
              className="hover-parallax shadow-lift"
            />
          </div>
        </section>

        <section
          className="section"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          <h2>Who This Work Is For</h2>
          <ul>
            <li>Individuals seeking calm, meaningful wall art</li>
            <li>Cafés, studios, and wellness spaces</li>
            <li>Art collectors drawn to symbolic compositions</li>
            <li>Global clients interested in contemporary line art</li>
          </ul>
        </section>

        <section
          className="section gallery"
          ref={(el) => (sectionsRef.current[7] = el)}
        >
          <h2>Image Gallery</h2>
          <div className="image-grid">
            {nurseryImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Gallery ${index + 1}`}
                onClick={() => setLightboxImage(src)}
                ref={(el) => setImageRef(el, index + 4)}
                className="hover-parallax shadow-lift"
              />
            ))}
          </div>
        </section>

        <section
          className="section alt"
          ref={(el) => (sectionsRef.current[8] = el)}
        >
          <h2>Contact Information</h2>

          <p>
            <strong>Founder:</strong> +94 71 628 7419 / +94 703 945 926
          </p>

          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:cpg810@gmail.com">cpg810@gmail.com</a>
          </p>

          <p>
            <strong>Fiverr:</strong>{" "}
            <a
              href="https://www.fiverr.com/s/dDxelZ0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fiverr
            </a>
          </p>

          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="http://www.linkedin.com/in/chandima-gunasena"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>

          <p>
            <strong>Company web:</strong>{" "}
            <a
              href="https://solutionswaterminds.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              solutionswaterminds.com
            </a>
          </p>

          <p>
            <strong>YouTube:</strong>{" "}
            <a
              href="https://www.youtube.com/@SolutionsWaterMinds"
              target="_blank"
              rel="noopener noreferrer"
            >
              Solutions WaterMinds | ජල සම්පතයි කවි සිතිවිලියි
            </a>
          </p>

          <p>
            <strong>WhatsApp:</strong>{" "}
            <a
              href="https://wa.me/qr/5AAQDEV2QPJQL1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
          </p>

          <p>
            <strong>Non Legal Support Page:</strong>{" "}
            <Link to="/legal">Before You Go to a Lawyer</Link>
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>© Serendib Digital — Kotte Kingdom Digital Art</p>
      </footer>

      <div
        className={`lightbox-overlay ${lightboxImage ? "active" : ""}`}
        onClick={() => setLightboxImage(null)}
      >
        {lightboxImage && <img src={lightboxImage} alt="Enlarged artwork" />}
      </div>
    </div>
  );
}

function IndustrialPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #050505, #0d0d0d)",
        color: "#efe6c8",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header
        style={{
          padding: "90px 20px 70px",
          textAlign: "center",
          background:
            "linear-gradient(180deg, rgba(15,15,15,1), rgba(5,5,5,1))",
          borderBottom: "1px solid rgba(120, 170, 140, 0.18)",
        }}
      >
        <div style={{ maxWidth: "1050px", margin: "0 auto" }}>
          <p
            style={{
              color: "#9dc6a4",
              letterSpacing: "2px",
              fontSize: "0.95rem",
              marginBottom: "14px",
              textTransform: "uppercase",
            }}
          >
            Industrial Support & Environmental Management
          </p>

          <h1
            style={{
              fontSize: "3.1rem",
              margin: 0,
              color: "#d7e8c8",
              lineHeight: "1.2",
            }}
          >
            Transform Your Industrial Operations with Sustainable & Efficient
            Solutions
          </h1>

          <p
            style={{
              marginTop: "24px",
              fontSize: "1.18rem",
              lineHeight: "1.9",
              color: "#cfd8c7",
              maxWidth: "920px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Supporting small and medium industries to optimize production
            processes, reduce environmental impact, and achieve ISO 14001
            standards through a risk-based approach.
          </p>

          <div style={{ marginTop: "30px" }}>
            <a
              href="mailto:cpg810@gmail.com?subject=Request%20for%20Industrial%20Consultation"
              style={industrialPrimaryButton}
            >
              Request Consultation
            </a>
          </div>
        </div>
      </header>

      <main
        style={{
          maxWidth: "1150px",
          margin: "0 auto",
          padding: "50px 20px",
        }}
      >
        <section style={industrialCardStyle}>
          <h2 style={industrialTitleStyle}>What I Offer</h2>
          <p style={industrialTextStyle}>
            I provide practical, engineering-based support to industries aiming
            to improve operational efficiency while meeting environmental
            standards.
          </p>
          <p style={industrialTextStyle}>My approach integrates:</p>
          <ul style={industrialListStyle}>
            <li>Environmental Management Systems (ISO 14001:2015)</li>
            <li>Risk-based planning and decision making</li>
            <li>Process and layout optimization</li>
            <li>Cleaner production principles</li>
          </ul>
          <p style={industrialTextStyle}>
            The goal is not only compliance, but cost reduction, efficiency
            improvement, and sustainable growth.
          </p>
        </section>

        <section style={industrialCardStyle}>
          <h2 style={industrialTitleStyle}>Services Provided</h2>
          <div style={industrialGridStyle}>
            <div style={industrialMiniCardStyle}>
              <h3 style={industrialMiniTitleStyle}>
                Environmental Management System (EMS) Development
              </h3>
              <ul style={industrialMiniListStyle}>
                <li>ISO 14001 aligned system design</li>
                <li>Policy, procedures, and documentation</li>
              </ul>
            </div>

            <div style={industrialMiniCardStyle}>
              <h3 style={industrialMiniTitleStyle}>
                Environmental Aspect & Impact Analysis
              </h3>
              <ul style={industrialMiniListStyle}>
                <li>Life cycle perspective (upstream → downstream)</li>
                <li>Aspect registry development</li>
              </ul>
            </div>

            <div style={industrialMiniCardStyle}>
              <h3 style={industrialMiniTitleStyle}>Risk & Opportunity Assessment</h3>
              <ul style={industrialMiniListStyle}>
                <li>Risk = Effect × Uncertainty approach</li>
                <li>Identification of operational risks and improvements</li>
              </ul>
            </div>

            <div style={industrialMiniCardStyle}>
              <h3 style={industrialMiniTitleStyle}>Process & Layout Optimization</h3>
              <ul style={industrialMiniListStyle}>
                <li>Identify inefficiencies</li>
                <li>Improve material flow</li>
                <li>Reduce energy and waste</li>
              </ul>
            </div>

            <div style={industrialMiniCardStyle}>
              <h3 style={industrialMiniTitleStyle}>Cleaner Production Strategies</h3>
              <ul style={industrialMiniListStyle}>
                <li>Resource efficiency</li>
                <li>Waste minimization</li>
                <li>Energy optimization</li>
              </ul>
            </div>
          </div>
        </section>

        <section style={industrialCardStyle}>
          <h2 style={industrialTitleStyle}>My Approach</h2>
          <p
            style={{
              ...industrialTextStyle,
              fontWeight: "bold",
              color: "#b7d8b5",
            }}
          >
            Understand → Analyze → Identify Risks → Design Solutions → Implement
            → Improve
          </p>

          <p style={industrialTextStyle}>
            Each project follows a structured methodology:
          </p>

          <div style={industrialProcessGrid}>
            <div style={industrialStepCard}>
              <div style={industrialStepNumber}>01</div>
              <h3 style={industrialMiniTitleStyle}>Understanding Operations</h3>
              <p style={industrialTextStyle}>Products, processes, and services</p>
            </div>

            <div style={industrialStepCard}>
              <div style={industrialStepNumber}>02</div>
              <h3 style={industrialMiniTitleStyle}>Life Cycle Assessment</h3>
              <p style={industrialTextStyle}>
                Upstream, internal, and downstream review
              </p>
            </div>

            <div style={industrialStepCard}>
              <div style={industrialStepNumber}>03</div>
              <h3 style={industrialMiniTitleStyle}>Aspect Identification</h3>
              <p style={industrialTextStyle}>
                Environmental interactions and impacts
              </p>
            </div>

            <div style={industrialStepCard}>
              <div style={industrialStepNumber}>04</div>
              <h3 style={industrialMiniTitleStyle}>Risk-Based Analysis</h3>
              <p style={industrialTextStyle}>Effects, uncertainties, and priorities</p>
            </div>

            <div style={industrialStepCard}>
              <div style={industrialStepNumber}>05</div>
              <h3 style={industrialMiniTitleStyle}>Solution Design</h3>
              <p style={industrialTextStyle}>
                Technical and practical improvements
              </p>
            </div>

            <div style={industrialStepCard}>
              <div style={industrialStepNumber}>06</div>
              <h3 style={industrialMiniTitleStyle}>EMS Development</h3>
              <p style={industrialTextStyle}>
                Structured system implementation
              </p>
            </div>

            <div style={industrialStepCard}>
              <div style={industrialStepNumber}>07</div>
              <h3 style={industrialMiniTitleStyle}>Continuous Improvement</h3>
              <p style={industrialTextStyle}>
                Monitoring, review, and optimization
              </p>
            </div>
          </div>
        </section>

        <section style={industrialCardStyle}>
          <h2 style={industrialTitleStyle}>What You Gain</h2>
          <ul style={industrialListStyle}>
            <li>Reduced operational costs</li>
            <li>Improved process efficiency</li>
            <li>ISO 14001 readiness</li>
            <li>Better environmental performance</li>
            <li>Stronger compliance with regulations</li>
            <li>Strategic direction for growth</li>
          </ul>
        </section>

        <section style={industrialCardStyle}>
          <h2 style={industrialTitleStyle}>Target Clients</h2>
          <ul style={industrialListStyle}>
            <li>Small & Medium Scale Industries</li>
            <li>Manufacturing Facilities</li>
            <li>Startups in production sectors</li>
            <li>Existing factories needing optimization</li>
            <li>Organizations seeking ISO 14001 certification</li>
          </ul>
        </section>

        <section style={industrialCardStyle}>
          <h2 style={industrialTitleStyle}>Real Industrial Insights</h2>
          <p style={industrialTextStyle}>
            Solutions are developed based on real industrial observations such
            as:
          </p>
          <ul style={industrialListStyle}>
            <li>Material handling inefficiencies</li>
            <li>Energy losses</li>
            <li>Layout design issues</li>
            <li>Waste generation points</li>
          </ul>
          <p style={industrialTextStyle}>
            This approach ensures that recommendations are practical,
            site-relevant, and directly linked to measurable operational
            improvement.
          </p>
        </section>

        <section
          style={{
            ...industrialCardStyle,
            textAlign: "center",
            background:
              "linear-gradient(180deg, rgba(18,32,20,0.96), rgba(12,12,12,0.96))",
          }}
        >
          <h2 style={industrialTitleStyle}>
            Ready to Improve Your Industrial Performance?
          </h2>
          <p
            style={{
              ...industrialTextStyle,
              maxWidth: "860px",
              margin: "0 auto",
            }}
          >
            Let’s work together to transform your operations into an efficient
            and sustainable system.
          </p>

          <div style={{ marginTop: "28px" }}>
            <a href="mailto:cpg810@gmail.com" style={industrialPrimaryButton}>
              Contact Me
            </a>

            <a
              href="mailto:cpg810@gmail.com?subject=Request%20for%20Industrial%20Proposal"
              style={industrialSecondaryButton}
            >
              Request Proposal
            </a>
          </div>
        </section>
      </main>

      <footer
        style={{
          textAlign: "center",
          padding: "24px",
          color: "#8f9a8b",
          borderTop: "1px solid rgba(120, 170, 140, 0.10)",
          fontSize: "0.92rem",
        }}
      >
        © Serendib Digital — Industrial Support & Environmental Management
      </footer>
    </div>
  );
}

const industrialCardStyle = {
  background: "rgba(18,18,18,0.9)",
  padding: "32px",
  borderRadius: "14px",
  marginBottom: "26px",
  border: "1px solid rgba(120, 170, 140, 0.12)",
  boxShadow: "0 12px 30px rgba(0,0,0,0.45)",
};

const industrialTitleStyle = {
  color: "#b7d8b5",
  marginBottom: "18px",
  fontSize: "1.6rem",
};

const industrialTextStyle = {
  lineHeight: "1.9",
  fontSize: "1.05rem",
  color: "#d2dacd",
};

const industrialListStyle = {
  lineHeight: "2",
  fontSize: "1.05rem",
  color: "#d2dacd",
  paddingLeft: "20px",
};

const industrialMiniListStyle = {
  lineHeight: "1.9",
  fontSize: "0.98rem",
  color: "#d2dacd",
  paddingLeft: "18px",
  margin: 0,
};

const industrialGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "18px",
};

const industrialProcessGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "18px",
};

const industrialMiniCardStyle = {
  background: "rgba(255,255,255,0.02)",
  border: "1px solid rgba(120, 170, 140, 0.10)",
  borderRadius: "10px",
  padding: "20px",
};

const industrialStepCard = {
  background: "rgba(255,255,255,0.02)",
  border: "1px solid rgba(120, 170, 140, 0.10)",
  borderRadius: "10px",
  padding: "22px",
};

const industrialMiniTitleStyle = {
  color: "#d7e8c8",
  marginTop: 0,
  marginBottom: "10px",
  fontSize: "1.15rem",
};

const industrialStepNumber = {
  color: "#9dc6a4",
  fontSize: "1.8rem",
  fontWeight: "bold",
  marginBottom: "12px",
};

const industrialPrimaryButton = {
  display: "inline-block",
  margin: "10px",
  padding: "13px 28px",
  background: "linear-gradient(135deg, #a9d1af, #6f9b76)",
  color: "#08110a",
  textDecoration: "none",
  borderRadius: "8px",
  fontWeight: "bold",
  boxShadow: "0 8px 22px rgba(120, 170, 140, 0.20)",
};

const industrialSecondaryButton = {
  display: "inline-block",
  margin: "10px",
  padding: "13px 28px",
  background: "transparent",
  color: "#b7d8b5",
  textDecoration: "none",
  borderRadius: "8px",
  fontWeight: "bold",
  border: "1px solid rgba(120, 170, 140, 0.35)",
};
export default function App() {
  return (
    <Router>
      <div>
        <nav style={{ padding: "16px 24px", background: "#111" }}>
          <Link
            to="/"
            style={{
              marginRight: "20px",
              color: "white",
              textDecoration: "none",
            }}
          >
            Kotte Kingdom
          </Link>

          <Link
            to="/legal"
            style={{
              marginRight: "20px",
              color: "white",
              textDecoration: "none",
            }}
          >
            Non Legal Support
          </Link>

          <Link
            to="/industrial"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            Industrial Page
          </Link>
        </nav>

     <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/legal" element={<LegalPage />} />
  <Route path="/industrial" element={<IndustrialPage />} />
</Routes>
      </div>
    </Router>
  );
}