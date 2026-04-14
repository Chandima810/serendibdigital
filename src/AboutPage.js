import React from "react";

export default function AboutPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #050505, #0d0d0d)",
        color: "#efe6c8",
        fontFamily: "Arial, sans-serif",
        padding: "40px 20px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        
        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h1 style={{ color: "#e6c36a", fontSize: "2.6rem" }}>
            Serendib Digital
          </h1>
          <p style={{ color: "#bbb", marginTop: "10px" }}>
            Consultant Profile & Professional Experience
          </p>
        </div>

        {/* PROFILE SECTION */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "30px",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          {/* IMAGE */}
          <div style={{ textAlign: "center" }}>
  <img
    src={`${process.env.PUBLIC_URL}/profile.jpg`}
    alt="Chandima Gunasena"
    style={{
      width: "260px",
      height: "320px",
      objectFit: "contain",
      background: "#000",
      borderRadius: "12px",
      padding: "6px",
      boxShadow: "0 12px 30px rgba(0,0,0,0.7)",
    }}
  />
</div>

          {/* DETAILS */}
          <div>
            <h2 style={{ color: "#e6c36a", marginBottom: "10px" }}>
              Chandima Gunasena
            </h2>
            <p>Founder – Solutions WaterMinds</p>

            <p>Email: cpg810@gmail.com</p>
            <p>Phone: +94 777 181 928 / +94 716 287 419</p>

            <p>
              Website:{" "}
              <a
                href="https://solutionswaterminds.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                solutionswaterminds.com
              </a>
            </p>

            <p>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/chandima-gunasena"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                View Profile
              </a>
            </p>

            <p>
              ORCID:{" "}
              <a
                href="https://orcid.org/0009-0002-7521-9683"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                0009-0002-7521-9683
              </a>
            </p>
             <p>
              Right Path:{" "}
              <a
                href="https://chandima810.github.io/dhamma/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                View Path
              </a>
            </p>
          </div>
        </div>

        {/* QUALIFICATIONS */}
        <Section title="Academic Qualifications">
          <ul>
            <li>BSc in Agriculture – University of Peradeniya (1992)</li>
            <li>Certificate in Teaching in Higher Education - University of Colombo (2000)</li>
            <li>MPhil in Integrated Water Resources Management - University of Peradeniya (2004)</li>
            <li>Training of Trainers in IWRM - University of Peradeniya (2005)</li>
            <li>MSc in Green Technology – University of Ruhuna (2014)</li>
            <li>Renewable Energy Training Programme – Genso Power Technologies (Pvt) Ltd. (2018)</li>
            <li>Project Management - UNIDO Headquarters  (2019)</li>
            <li>Climate Adaptation Tools - Regional Resource Center for Asia and the Pacific Asian Institute of Technology (2023)</li>
            <li>Consultant Development in Environmental Management Systems ISO 140001 - National Cleaner Production Center (2026)</li>
          </ul>
            
            
            
        </Section>

        {/* EXPERTISE */}
        <Section title="Relevant Expertise">
          <ul>
            <li>National-level MRV/ETF Consultant (UNFCCC – AFOLU sector)</li>
            <li>Inventor with multiple patented innovations</li>
            <li>25+ years in innovation & industrial applications - Bronze Medal (2022) </li>
            <li>10+ years university academic experience</li>
            <li>International exposure: UNIDO, IUCN</li>
            <li>NVQ Assessor</li>
            <li>Integration of traditional knowledge & modern science</li>
          </ul>
        </Section>

        {/* STRENGTHS */}
        <Section title="Key Strengths">
          <ul>
            <li>Creativity models & brain-based innovation frameworks</li>
            <li>Neuroscience application (DMN, ECN, sensory pathways)</li>
            <li>Digital creativity tools & mobile applications</li>
            <li>Cross-sector integration: climate, innovation, education</li>
          </ul>
        </Section>

        {/* EXPERIENCE */}
        <Section title="Past Experience Highlights">
          <ul>
            <li>AFOLU MRV Consultant – Ministry of Environment</li>
            <li>Creativity workshop  – Lanka Association of Bulding Services Engineers (LABSE)</li>
            <li>Creativity Workshop  – Samudradevi Balika Vidyalaya Nugegoda</li>
            <li>Creativity Workshop  – Industry Interaction Cell for Computing and Technology (IICFCT) University of Kelaniya</li>
            <li>Creativity Workshop  – Gampaha Wickramarachchi University of Indigenous Medicine (GWUIM)
</li>
          </ul>
        </Section>

        {/* FOOTER */}
        <div
          style={{
            marginTop: "50px",
            paddingTop: "20px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            color: "#aaa",
            fontSize: "0.9rem",
          }}
        >
          <p>
            Solution WaterMinds, No 35/75, Dahamigama Mawatha, Palupelpita,
            Radawana
          </p>
        </div>
      </div>
    </div>
  );
}

/* SECTION COMPONENT */
function Section({ title, children }) {
  return (
    <div
      style={{
        marginBottom: "30px",
        padding: "20px",
        background: "rgba(255,255,255,0.03)",
        borderRadius: "10px",
        border: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <h3 style={{ color: "#e6c36a", marginBottom: "10px" }}>{title}</h3>
      <div style={{ lineHeight: "1.8", color: "#ddd" }}>{children}</div>
    </div>
  );
}

/* LINK STYLE */
const linkStyle = {
  color: "#c7d3ff",
  textDecoration: "none",
};