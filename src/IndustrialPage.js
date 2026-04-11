import React from "react";

export default function IndustrialPage() {
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
          borderBottom: "1px solid rgba(120, 170, 140, 0.18)",
        }}
      >
        <div
          style={{
            maxWidth: "1050px",
            margin: "0 auto",
          }}
        >
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
              style={primaryButton}
            >
              Request Consultation
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
        {/* WHAT I OFFER */}
        <section style={cardStyle}>
          <h2 style={titleStyle}>What I Offer</h2>
          <p style={textStyle}>
            I provide practical, engineering-based support to industries aiming
            to improve operational efficiency while meeting environmental
            standards.
          </p>
          <p style={textStyle}>My approach integrates:</p>
          <ul style={listStyle}>
            <li>Environmental Management Systems (ISO 14001:2015)</li>
            <li>Risk-based planning and decision making</li>
            <li>Process and layout optimization</li>
            <li>Cleaner production principles</li>
          </ul>
          <p style={textStyle}>
            The goal is not only compliance, but cost reduction, efficiency
            improvement, and sustainable growth.
          </p>
        </section>

        {/* SERVICES */}
        <section style={cardStyle}>
          <h2 style={titleStyle}>Services Provided</h2>
          <div style={gridStyle}>
            <div style={miniCardStyle}>
              <h3 style={miniTitleStyle}>
                Environmental Management System (EMS) Development
              </h3>
              <ul style={miniListStyle}>
                <li>ISO 14001 aligned system design</li>
                <li>Policy, procedures, and documentation</li>
              </ul>
            </div>

            <div style={miniCardStyle}>
              <h3 style={miniTitleStyle}>
                Environmental Aspect & Impact Analysis
              </h3>
              <ul style={miniListStyle}>
                <li>Life cycle perspective (upstream → downstream)</li>
                <li>Aspect registry development</li>
              </ul>
            </div>

            <div style={miniCardStyle}>
              <h3 style={miniTitleStyle}>Risk & Opportunity Assessment</h3>
              <ul style={miniListStyle}>
                <li>Risk = Effect × Uncertainty approach</li>
                <li>Identification of operational risks and improvements</li>
              </ul>
            </div>

            <div style={miniCardStyle}>
              <h3 style={miniTitleStyle}>Process & Layout Optimization</h3>
              <ul style={miniListStyle}>
                <li>Identify inefficiencies</li>
                <li>Improve material flow</li>
                <li>Reduce energy and waste</li>
              </ul>
            </div>

            <div style={miniCardStyle}>
              <h3 style={miniTitleStyle}>Cleaner Production Strategies</h3>
              <ul style={miniListStyle}>
                <li>Resource efficiency</li>
                <li>Waste minimization</li>
                <li>Energy optimization</li>
              </ul>
            </div>
          </div>
        </section>

        {/* METHODOLOGY */}
        <section style={cardStyle}>
          <h2 style={titleStyle}>My Approach</h2>
          <p style={{ ...textStyle, fontWeight: "bold", color: "#b7d8b5" }}>
            Understand → Analyze → Identify Risks → Design Solutions → Implement
            → Improve
          </p>

          <p style={textStyle}>
            Each project follows a structured methodology:
          </p>

          <div style={processGrid}>
            <div style={stepCard}>
              <div style={stepNumber}>01</div>
              <h3 style={miniTitleStyle}>Understanding Operations</h3>
              <p style={textStyle}>Products, processes, and services</p>
            </div>

            <div style={stepCard}>
              <div style={stepNumber}>02</div>
              <h3 style={miniTitleStyle}>Life Cycle Assessment</h3>
              <p style={textStyle}>Upstream, internal, and downstream review</p>
            </div>

            <div style={stepCard}>
              <div style={stepNumber}>03</div>
              <h3 style={miniTitleStyle}>Aspect Identification</h3>
              <p style={textStyle}>Environmental interactions and impacts</p>
            </div>

            <div style={stepCard}>
              <div style={stepNumber}>04</div>
              <h3 style={miniTitleStyle}>Risk-Based Analysis</h3>
              <p style={textStyle}>Effects, uncertainties, and priorities</p>
            </div>

            <div style={stepCard}>
              <div style={stepNumber}>05</div>
              <h3 style={miniTitleStyle}>Solution Design</h3>
              <p style={textStyle}>Technical and practical improvements</p>
            </div>

            <div style={stepCard}>
              <div style={stepNumber}>06</div>
              <h3 style={miniTitleStyle}>EMS Development</h3>
              <p style={textStyle}>Structured system implementation</p>
            </div>

            <div style={stepCard}>
              <div style={stepNumber}>07</div>
              <h3 style={miniTitleStyle}>Continuous Improvement</h3>
              <p style={textStyle}>Monitoring, review, and optimization</p>
            </div>
          </div>
        </section>

        {/* OUTCOMES */}
        <section style={cardStyle}>
          <h2 style={titleStyle}>What You Gain</h2>
          <ul style={checkListStyle}>
            <li>Reduced operational costs</li>
            <li>Improved process efficiency</li>
            <li>ISO 14001 readiness</li>
            <li>Better environmental performance</li>
            <li>Stronger compliance with regulations</li>
            <li>Strategic direction for growth</li>
          </ul>
        </section>

        {/* TARGET CLIENTS */}
        <section style={cardStyle}>
          <h2 style={titleStyle}>Target Clients</h2>
          <ul style={listStyle}>
            <li>Small & Medium Scale Industries</li>
            <li>Manufacturing Facilities</li>
            <li>Startups in production sectors</li>
            <li>Existing factories needing optimization</li>
            <li>Organizations seeking ISO 14001 certification</li>
          </ul>
        </section>

        {/* REAL INSIGHTS */}
        <section style={cardStyle}>
          <h2 style={titleStyle}>Real Industrial Insights</h2>
          <p style={textStyle}>
            Solutions are developed based on real industrial observations such
            as:
          </p>
          <ul style={listStyle}>
            <li>Material handling inefficiencies</li>
            <li>Energy losses</li>
            <li>Layout design issues</li>
            <li>Waste generation points</li>
          </ul>
          <p style={textStyle}>
            This approach ensures that recommendations are practical,
            site-relevant, and directly linked to measurable operational
            improvement.
          </p>
        </section>

        {/* CTA */}
        <section
          style={{
            ...cardStyle,
            textAlign: "center",
            background:
              "linear-gradient(180deg, rgba(18,32,20,0.96), rgba(12,12,12,0.96))",
          }}
        >
          <h2 style={titleStyle}>Ready to Improve Your Industrial Performance?</h2>
          <p
            style={{
              ...textStyle,
              maxWidth: "860px",
              margin: "0 auto",
            }}
          >
            Let’s work together to transform your operations into an efficient
            and sustainable system.
          </p>

          <div style={{ marginTop: "28px" }}>
            <a href="mailto:cpg810@gmail.com" style={primaryButton}>
              Contact Me
            </a>

            <a
              href="mailto:cpg810@gmail.com?subject=Request%20for%20Industrial%20Proposal"
              style={secondaryButton}
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

const cardStyle = {
  background: "rgba(18,18,18,0.9)",
  padding: "32px",
  borderRadius: "14px",
  marginBottom: "26px",
  border: "1px solid rgba(120, 170, 140, 0.12)",
  boxShadow: "0 12px 30px rgba(0,0,0,0.45)",
};

const titleStyle = {
  color: "#b7d8b5",
  marginBottom: "18px",
  fontSize: "1.6rem",
};

const textStyle = {
  lineHeight: "1.9",
  fontSize: "1.05rem",
  color: "#d2dacd",
};

const listStyle = {
  lineHeight: "2",
  fontSize: "1.05rem",
  color: "#d2dacd",
  paddingLeft: "20px",
};

const miniListStyle = {
  lineHeight: "1.9",
  fontSize: "0.98rem",
  color: "#d2dacd",
  paddingLeft: "18px",
  margin: 0,
};

const checkListStyle = {
  lineHeight: "2",
  fontSize: "1.05rem",
  color: "#d2dacd",
  paddingLeft: "20px",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "18px",
};

const processGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "18px",
};

const miniCardStyle = {
  background: "rgba(255,255,255,0.02)",
  border: "1px solid rgba(120, 170, 140, 0.10)",
  borderRadius: "10px",
  padding: "20px",
};

const stepCard = {
  background: "rgba(255,255,255,0.02)",
  border: "1px solid rgba(120, 170, 140, 0.10)",
  borderRadius: "10px",
  padding: "22px",
};

const miniTitleStyle = {
  color: "#d7e8c8",
  marginTop: 0,
  marginBottom: "10px",
  fontSize: "1.15rem",
};

const stepNumber = {
  color: "#9dc6a4",
  fontSize: "1.8rem",
  fontWeight: "bold",
  marginBottom: "12px",
};

const primaryButton = {
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

const secondaryButton = {
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