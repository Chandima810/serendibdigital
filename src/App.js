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
            Home
          </Link>
          <Link
            to="/legal"
            style={{ color: "white", textDecoration: "none" }}
          >
            Non Legal Support
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/legal" element={<LegalPage />} />
        </Routes>
      </div>
    </Router>
  );
}