import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

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

export default function App() {
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

  // Parallax speeds for images
  const imageSpeeds = [0.15, 0.2, 0.25, 0.18, 0.22, 0.17, 0.2, 0.12, 0.15];

  // Scroll-triggered animations (fade + slide-in + staggered children)
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
  }, []);

  // Parallax: background and images
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
      {/* Header */}
      <header className="header">
        <div className="brand">
          <img src={logo} alt="NEAT SOLUTION logo" className="logo" />
          <h1>Serendib Digital</h1>
        </div>
        <p>Calm, minimalist art blending emotional storytelling,
cultural abstraction, and nature-inspired line work.</p>
      </header>

      <main>
        {/* Sections */}
        <section
          className="section"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <h2>Company Overview</h2>
          <p>
            I create calm, meaningful visual art that blends minimalist design,
    emotional storytelling, and subtle references to nature such as
    rivers, trees, and flow-inspired line forms. 
<p>Serendib Digital is led by an independent artist and designer whose work focuses on calm, minimalist visual expression. Drawing inspiration from nature, cultural memory, and emotional stillness, the practice explores themes of flow, balance, and human presence through restrained line work and thoughtful composition. Each piece is created with intention, emphasizing clarity, simplicity, and quiet emotional depth rather than decorative complexity.</p>

          </p>
        </section>

        <section
          className="section alt"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2>Vision & Mission</h2>
          <p>
            <strong>Vision:</strong> To create calm, timeless visual art that resonates
    emotionally and brings balance, stillness, and meaning into everyday spaces.
          </p>
          <p>
            <strong>Mission:</strong> To craft minimalist artworks that blend emotional
    storytelling, cultural abstraction, and subtle nature-inspired line forms,
    allowing viewers to experience clarity, connection, and quiet reflection.
          </p>
        </section>

        {/* Product Portfolio */}
        <section
          className="section side-by-side"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <div className="text">
            <h2>Product Portfolio</h2>
            <ul>
              <li>Minimalist line art with emotional storytelling</li>
              <li>Calm and spiritual wall art compositions</li>
              <li>Nature-inspired abstract line work (trees, rivers, flow)</li>
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

        {/* Production Standards */}
        <section
          className="section alt side-by-side"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <div className="text">
            <h2>Creative Standards</h2>
            <ul>
              <li>Minimalist compositions guided by clarity and restraint</li>
              <li>Emotion-first visual storytelling over decorative complexity</li>
              <li>Symbolic line work inspired by nature, flow, and balance</li>
              <li>Carefully considered use of negative space</li>
              <li>Artwork created for calm, reflective, and contemplative spaces</li>
            </ul>
          </div>
          <div className="image-box">
            <img
              src={coir}
              alt="Production Standards"
              ref={(el) => setImageRef(el, 1)}
              className="hover-parallax shadow-lift"
            />
          </div>
        </section>

        {/* Sustainable Practices */}
        <section
          className="section side-by-side"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <div className="text">
            <h2>Creative Values</h2>
            <ul>
              <li>Mindful creation with respect for balance and simplicity</li>
              <li>Intentional use of minimal elements to reduce visual noise</li>
              <li>Art shaped by natural rhythms, flow, and continuity</li>
              <li>Ethical, independent creative practice rooted in care and presence</li>
            </ul>
          </div>
          <div className="image-box">
            <img
              src={organic}
              alt="Sustainable Practices"
              ref={(el) => setImageRef(el, 2)}
              className="hover-parallax shadow-lift"
            />
          </div>
        </section>

        {/* Competitive Advantages */}
        <section
          className="section alt side-by-side"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <div className="text">
            <h2>What Makes This Work Distinct</h2>
            <ul>
              <li>A calm, minimalist visual language focused on emotional depth</li>
              <li>Symbolic line work inspired by nature, flow, and continuity</li>
              <li>Art designed for quiet, reflective, and contemplative spaces</li>
              <li>Balance between cultural abstraction and universal simplicity</li>
              <li>Custom-created pieces rather than mass-produced designs</li>
            </ul>
          </div>
          <div className="image-box">
            <img
              src={nursery7}
              alt="Competitive Advantages"
              ref={(el) => setImageRef(el, 3)}
              className="hover-parallax shadow-lift"
            />
          </div>
        </section>

        {/* Target Markets */}
        <section
          className="section"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          <h2>Who This Work Is For</h2>
          <ul>
            <li>Individuals seeking calm, meaningful wall art for personal spaces</li>
            <li>Cafés, studios, and wellness spaces looking for quiet visual presence</li>
            <li>Art collectors drawn to minimalist and symbolic compositions</li>
            <li>Global clients interested in culturally inspired, contemporary line art</li>
          </ul>
        </section>

        {/* Photo Gallery with Lightbox */}
        <section
          className="section gallery"
          ref={(el) => (sectionsRef.current[7] = el)}
        >
          <h2>Our Nursery</h2>
          <div className="image-grid">
            {nurseryImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Nursery ${index + 1}`}
                onClick={() => setLightboxImage(src)}
                ref={(el) => setImageRef(el, index + 4)}
                className="hover-parallax shadow-lift"
              />
            ))}
          </div>
        </section>

        {/* Contact Information */}
<section
  className="section alt"
  ref={(el) => (sectionsRef.current[8] = el)}
>
  <h2>Contact Information</h2>

    <p>
  <strong>Founder :</strong> +94 71 628 7419 / +94 703 945 926
</p>

<p>
  <strong>Email:</strong>{" "}
  <a href="mailto:cpg810@gmail.com">cpg810@gmail.com</a>
</p>

  <p>
    <strong>Fiverr:</strong>{" "}
    <a href="https://www.fiverr.com/s/dDxelZ0/" target="_blank" rel="noopener noreferrer">
      Fiverr
    </a>
  </p>

  <p>
    <strong>Linkedin:</strong>{" "}
    <a href="http://www.linkedin.com/in/chandima-gunasena" target="_blank" rel="noopener noreferrer">
      linkedin
    </a>
  </p>
  
  <p>
  <strong>Company web:</strong>{" "}
  <a
    href="http://www.solutionswaterminds.om/in/chandima-gunasena"
    target="_blank"
    rel="noopener noreferrer"
  >
    Company Web
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


</section>

      </main>

      <footer className="footer">
        <p>© Serendib Digital — Calm, minimalist art inspired by balance and flow.</p>
      </footer>

      {/* Lightbox */}
      <div
        className={`lightbox-overlay ${lightboxImage ? "active" : ""}`}
        onClick={() => setLightboxImage(null)}
      >
        {lightboxImage && <img src={lightboxImage} alt="Enlarged Nursery" />}
      </div>
    </div>
  );
}