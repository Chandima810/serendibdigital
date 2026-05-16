import React from "react";

export default function CreativityPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #050505, #0d0d0d)",
        color: "#efe6c8",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* HERO */}
      <header
        style={{
          padding: "90px 20px 70px",
          textAlign: "center",
          background:
            "linear-gradient(180deg, rgba(15,15,15,1), rgba(5,5,5,1))",
          borderBottom: "1px solid rgba(155, 170, 230, 0.18)",
        }}
      >
        <div style={{ maxWidth: "1050px", margin: "0 auto" }}>
          <p
            style={{
              color: "#b7c6ff",
              letterSpacing: "2px",
              fontSize: "0.95rem",
              marginBottom: "14px",
              textTransform: "uppercase",
            }}
          >
            Creativity & Innovation Awareness Program
          </p>

          <h1
            style={{
              fontSize: "3.1rem",
              margin: 0,
              color: "#dde4ff",
              lineHeight: "1.2",
            }}
          >
            Empowering Minds to Think, Invent, and Innovate
          </h1>

          <p
            style={{
              marginTop: "24px",
              fontSize: "1.18rem",
              lineHeight: "1.9",
              color: "#d5daf0",
              maxWidth: "920px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            A structured, brain-based training initiative designed to unlock
            creative potential in students, researchers, institutions, and
            industries.
          </p>

          <div style={{ marginTop: "30px" }}>
            <a
              href="mailto:cpg810@gmail.com?subject=Request%20for%20Creativity%20Program"
              style={creativityPrimaryButton}
            >
              Request a Program
            </a>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main
        style={{
          maxWidth: "1150px",
          margin: "0 auto",
          padding: "50px 20px",
        }}
      >
        {/* OVERVIEW */}
        <section style={creativityCardStyle}>
          <h2 style={creativityTitleStyle}>Overview</h2>
          <p style={creativityTextStyle}>
            In today’s rapidly evolving world, creativity is no longer
            optional—it is essential. Whether in education, research, or
            industry, the ability to identify real problems, generate innovative
            ideas, and transform them into practical solutions defines success.
          </p>
          <p style={creativityTextStyle}>
            The Creativity & Innovation Awareness Program, developed by
            Solutions WaterMinds, is a structured, brain-based training
            initiative designed to unlock the creative potential of individuals
            and organizations.
          </p>
          <p style={creativityTextStyle}>This program integrates:</p>
          <ul style={creativityListStyle}>
            <li>Neuroscience-based creativity models</li>
            <li>Structured idea development pathways</li>
            <li>Real-world innovation techniques</li>
            <li>Practical patent development knowledge</li>
          </ul>
        </section>

        {/* WHO CAN REQUEST */}
        <section style={creativityCardStyle}>
          <h2 style={creativityTitleStyle}>Who Can Request This Program?</h2>
          <div style={creativityGridStyle}>
            <div style={creativityMiniCardStyle}>
              <h3 style={creativityMiniTitleStyle}>Students</h3>
              <ul style={creativityMiniListStyle}>
                <li>School students (Grade 5 and above)</li>
                <li>University and faculty of technology students</li>
                <li>Research students and innovation groups</li>
              </ul>
            </div>

            <div style={creativityMiniCardStyle}>
              <h3 style={creativityMiniTitleStyle}>Educational Institutions</h3>
              <ul style={creativityMiniListStyle}>
                <li>Schools</li>
                <li>Universities</li>
                <li>Training institutes</li>
              </ul>
            </div>

            <div style={creativityMiniCardStyle}>
              <h3 style={creativityMiniTitleStyle}>Industry & Organizations</h3>
              <ul style={creativityMiniListStyle}>
                <li>SMEs and large industries</li>
                <li>Research and development teams</li>
                <li>Government and institutional staff</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CUSTOMIZATION */}
        <section style={creativityCardStyle}>
          <h2 style={creativityTitleStyle}>Program Customization</h2>
          <p style={creativityTextStyle}>
            Every session is custom-designed based on your needs.
          </p>
          <ul style={creativityListStyle}>
            <li>Student awareness sessions</li>
            <li>Academic workshops</li>
            <li>Industry-focused innovation training</li>
            <li>Research and patent development sessions</li>
          </ul>

          <p
            style={{
              ...creativityTextStyle,
              fontWeight: "bold",
              color: "#c7d3ff",
              marginTop: "16px",
            }}
          >
            Duration options:
          </p>
          <ul style={creativityListStyle}>
            <li>2-hour awareness session</li>
            <li>4-hour intensive workshop</li>
            <li>Full-day or multi-day programs</li>
          </ul>
        </section>

        {/* CORE COMPONENTS */}
        <section style={creativityCardStyle}>
          <h2 style={creativityTitleStyle}>Core Components of the Program</h2>
          <div style={creativityGridStyle}>
            <div style={creativityMiniCardStyle}>
              <h3 style={creativityMiniTitleStyle}>1. Brain-Based Creativity Model</h3>
              <p style={creativityTextStyle}>
                Understand how the brain generates ideas using a structured
                6-unit model:
              </p>
              <ul style={creativityMiniListStyle}>
                <li>Sensory Unit – Observation</li>
                <li>Memory Unit – Knowledge recall</li>
                <li>Idea Unit – Creative thinking</li>
                <li>Design Unit – Visualization</li>
                <li>Control Unit – Evaluation</li>
                <li>Energy Unit – Implementation</li>
              </ul>
              <p style={creativityTextStyle}>
                Learn how to activate the right brain pathways for innovation.
              </p>
            </div>

            <div style={creativityMiniCardStyle}>
              <h3 style={creativityMiniTitleStyle}>2. Creativity Pathway for Innovation</h3>
              <p style={creativityTextStyle}>
                A step-by-step structured approach:
              </p>
              <p
                style={{
                  ...creativityTextStyle,
                  fontWeight: "bold",
                  color: "#c7d3ff",
                }}
              >
                Observe → Analyze → Recall → Reframe → Generate → Evaluate → Apply
              </p>
              <ul style={creativityMiniListStyle}>
                <li>Identify the real problem (burden)</li>
                <li>Avoid common thinking errors</li>
                <li>Develop practical and innovative solutions</li>
              </ul>
            </div>

            <div style={creativityMiniCardStyle}>
              <h3 style={creativityMiniTitleStyle}>3. Idea Generation & Innovation Techniques</h3>
              <ul style={creativityMiniListStyle}>
                <li>“What if…?” thinking</li>
                <li>“How might we…?” approach</li>
                <li>System redesign and optimization</li>
                <li>Real-world problem-solving exercises</li>
              </ul>
            </div>

            <div style={creativityMiniCardStyle}>
              <h3 style={creativityMiniTitleStyle}>4. Research Paper Writing (Basic Guidance)</h3>
              <ul style={creativityMiniListStyle}>
                <li>How to structure a research idea</li>
                <li>Problem identification and literature linking</li>
                <li>Basic format of research writing</li>
                <li>Converting ideas into academic outputs</li>
              </ul>
            </div>

            <div style={creativityMiniCardStyle}>
              <h3 style={creativityMiniTitleStyle}>5. Introduction to Patenting Process</h3>
              <p style={creativityTextStyle}>
                Understand how to transform ideas into protected innovations:
              </p>
              <ul style={creativityMiniListStyle}>
                <li>What is a patent?</li>
                <li>Patentability criteria</li>
                <li>Title, background, description, and claims</li>
                <li>Simple worked examples</li>
              </ul>
            </div>
          </div>
        </section>

        {/* LEARNING OUTCOMES */}
        <section style={creativityCardStyle}>
          <h2 style={creativityTitleStyle}>Key Learning Outcomes</h2>
          <ul style={creativityListStyle}>
            <li>Understand how creativity works scientifically</li>
            <li>Identify the true underlying problem (burden)</li>
            <li>Apply a structured innovation pathway</li>
            <li>Generate practical solutions</li>
            <li>Understand the basics of research and patents</li>
            <li>Develop an innovation mindset</li>
          </ul>
        </section>

        {/* WHY THIS MATTERS */}
        <section style={creativityCardStyle}>
          <h2 style={creativityTitleStyle}>Why This Program Matters</h2>
          <p style={creativityTextStyle}>
            This program goes beyond traditional training by combining:
          </p>
          <ul style={creativityListStyle}>
            <li>Brain science</li>
            <li>Engineering thinking</li>
            <li>Innovation processes</li>
            <li>Intellectual property awareness</li>
          </ul>
          <p style={creativityTextStyle}>
            It transforms creativity from a vague concept into a practical,
            teachable skill.
          </p>
        </section>

        {/* REQUEST */}
        <section style={creativityCardStyle}>
          <h2 style={creativityTitleStyle}>Request a Program</h2>
          <p style={creativityTextStyle}>
            We welcome requests from schools, universities, research groups,
            companies, and institutions.
          </p>
          <p style={creativityTextStyle}>
            Each program is customized to your requirements and audience.
          </p>
        </section>

        {/* HOW TO REQUEST */}
        <section style={creativityCardStyle}>
          <h2 style={creativityTitleStyle}>How to Request</h2>
          <p style={creativityTextStyle}>Please contact us with:</p>
          <ul style={creativityListStyle}>
            <li>Organization / Institution name</li>
            <li>Target audience</li>
            <li>Preferred duration</li>
            <li>Area of focus (students / research / industry)</li>
          </ul>
        </section>

        {/* CTA */}
        <section
          style={{
            ...creativityCardStyle,
            textAlign: "center",
            background:
              "linear-gradient(180deg, rgba(25,28,48,0.96), rgba(12,12,12,0.96))",
          }}
        >
          <h2 style={creativityTitleStyle}>Ready to Bring Innovation Thinking to Your Organization?</h2>
          <p
            style={{
              ...creativityTextStyle,
              maxWidth: "860px",
              margin: "0 auto",
            }}
          >
            Let’s design a creativity and innovation awareness session that fits
            your institution, team, or target group.
          </p>

          <div style={{ marginTop: "28px" }}>
            <a
              href="mailto:cpg810@gmail.com?subject=Request%20for%20Creativity%20Program"
              style={creativityPrimaryButton}
            >
              Request a Program
            </a>

            <a href="mailto:cpg810@gmail.com" style={creativitySecondaryButton}>
              Contact by Email
            </a>
          </div>
        </section>

                {/* RESEARCH PAPER */}
        <section style={creativityCardStyle}>
          <h2 style={creativityTitleStyle}>
            Structured Cognitive Systems Activation Framework (SCSAF)
          </h2>

          <p style={creativityTextStyle}>
            Explore the latest research and framework development related to
            creativity activation, systems thinking, adaptive cognition,
            sustainability-oriented innovation, and experiential learning.
          </p>

          <div
  style={{
    textAlign: "center",
    marginTop: "30px",
  }}
>
  <img
    src="/cover.png"
    alt="cover"
    style={{
      display: "block",
      width: "100%",
      maxWidth: "900px",
      height: "auto",
      margin: "0 auto",
      borderRadius: "16px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.45)",
      border: "1px solid rgba(155, 170, 230, 0.18)",
      objectFit: "contain",
    }}
  />
</div>

          <div
            style={{
              textAlign: "center",
              marginTop: "30px",
            }}
          >
            <a
              href="/scsaf.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "14px 30px",
                background:
                  "linear-gradient(135deg, #c7d3ff, #8f9fd6)",
                color: "#0b1024",
                textDecoration: "none",
                borderRadius: "10px",
                fontWeight: "bold",
                fontSize: "1rem",
                boxShadow: "0 8px 24px rgba(155,170,230,0.25)",
              }}
            >
              View Full Research Paper
            </a>
          </div>
        </section>

        {/* CONTACT */}
        <section style={creativityCardStyle}>
          <h2 style={creativityTitleStyle}>Contact</h2>
          <p style={creativityTextStyle}>
            <strong>Solutions WaterMinds</strong>
          </p>
          <p style={creativityTextStyle}>
            📧 Email: <a href="mailto:cpg810@gmail.com" style={creativityLinkStyle}>cpg810@gmail.com</a>
          </p>
          <p style={creativityTextStyle}>
            📞 Phone: +94 777 181928 / +94 716 287419
          </p>
        </section>
      </main>

      <footer
        style={{
          textAlign: "center",
          padding: "24px",
          color: "#949bb8",
          borderTop: "1px solid rgba(155, 170, 230, 0.10)",
          fontSize: "0.92rem",
        }}
      >
        © Serendib Digital — Creativity & Innovation Awareness Program
      </footer>
    </div>
  );
}

const creativityCardStyle = {
  background: "rgba(18,18,18,0.9)",
  padding: "32px",
  borderRadius: "14px",
  marginBottom: "26px",
  border: "1px solid rgba(155, 170, 230, 0.12)",
  boxShadow: "0 12px 30px rgba(0,0,0,0.45)",
};

const creativityTitleStyle = {
  color: "#c7d3ff",
  marginBottom: "18px",
  fontSize: "1.6rem",
};

const creativityTextStyle = {
  lineHeight: "1.9",
  fontSize: "1.05rem",
  color: "#d7dbef",
};

const creativityListStyle = {
  lineHeight: "2",
  fontSize: "1.05rem",
  color: "#d7dbef",
  paddingLeft: "20px",
};

const creativityMiniListStyle = {
  lineHeight: "1.9",
  fontSize: "0.98rem",
  color: "#d7dbef",
  paddingLeft: "18px",
  margin: 0,
};

const creativityGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "18px",
};

const creativityMiniCardStyle = {
  background: "rgba(255,255,255,0.02)",
  border: "1px solid rgba(155, 170, 230, 0.10)",
  borderRadius: "10px",
  padding: "20px",
};

const creativityMiniTitleStyle = {
  color: "#dde4ff",
  marginTop: 0,
  marginBottom: "10px",
  fontSize: "1.15rem",
};

const creativityPrimaryButton = {
  display: "inline-block",
  margin: "10px",
  padding: "13px 28px",
  background: "linear-gradient(135deg, #c7d3ff, #8f9fd6)",
  color: "#0b1024",
  textDecoration: "none",
  borderRadius: "8px",
  fontWeight: "bold",
  boxShadow: "0 8px 22px rgba(155, 170, 230, 0.20)",
};

const creativitySecondaryButton = {
  display: "inline-block",
  margin: "10px",
  padding: "13px 28px",
  background: "transparent",
  color: "#c7d3ff",
  textDecoration: "none",
  borderRadius: "8px",
  fontWeight: "bold",
  border: "1px solid rgba(155, 170, 230, 0.35)",
};

const creativityLinkStyle = {
  color: "#c7d3ff",
  textDecoration: "none",
};