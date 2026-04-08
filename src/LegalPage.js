import React from "react";

export default function NonLegalSupportPage() {
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
          borderBottom: "1px solid rgba(212, 175, 55, 0.15)",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              color: "#caa85a",
              letterSpacing: "2px",
              fontSize: "0.95rem",
              marginBottom: "14px",
              textTransform: "uppercase",
            }}
          >
            Structured Non Legal Preparation Support
          </p>

          <h1
            style={{
              fontSize: "3.2rem",
              margin: 0,
              color: "#f0d58a",
              lineHeight: "1.2",
            }}
          >
            Before You Go to a Lawyer
          </h1>

          <p
            style={{
              marginTop: "24px",
              fontSize: "1.18rem",
              lineHeight: "1.9",
              color: "#ddd3b0",
              maxWidth: "900px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            I help you organize your case into clear, structured, professional
            support documents before you meet a lawyer, so you can present your
            matter with greater clarity and confidence.
          </p>

          <div style={{ marginTop: "30px" }}>
            <a
              href="https://www.facebook.com/profile.php?id=61573339950801"
              target="_blank"
              rel="noopener noreferrer"
              style={primaryButton}
            >
              Enquire Through Facebook
            </a>

            <a
              href="https://wa.me/94716287419"
              target="_blank"
              rel="noopener noreferrer"
              style={secondaryButton}
            >
              Contact on WhatsApp
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
        {/* SERVICES */}
        <section style={cardStyle}>
          <h2 style={titleStyle}>Services Offered</h2>
          <div style={gridStyle}>
            <div style={miniCardStyle}>
              <h3 style={miniTitleStyle}>Chronology</h3>
              <p style={textStyle}>
                Clear timelines showing the sequence of key events, decisions,
                and actions.
              </p>
            </div>

            <div style={miniCardStyle}>
              <h3 style={miniTitleStyle}>Argument Summaries</h3>
              <p style={textStyle}>
                Structured summaries of your position, concerns, and supporting
                points.
              </p>
            </div>

            <div style={miniCardStyle}>
              <h3 style={miniTitleStyle}>Evidence Mapping</h3>
              <p style={textStyle}>
                Organized linking of letters, emails, notices, and supporting
                records.
              </p>
            </div>

            <div style={miniCardStyle}>
              <h3 style={miniTitleStyle}>Draft Support</h3>
              <p style={textStyle}>
                Assistance in preparing structured support drafts before lawyer
                review.
              </p>
            </div>

            <div style={miniCardStyle}>
              <h3 style={miniTitleStyle}>Consultation Preparation</h3>
              <p style={textStyle}>
                Questions, issues, and briefing notes to help you use lawyer
                consultation time effectively.
              </p>
            </div>

            <div style={miniCardStyle}>
              <h3 style={miniTitleStyle}>Alternative Path Notes</h3>
              <p style={textStyle}>
                Organized notes to discuss possible options and next steps with
                your lawyer.
              </p>
            </div>
          </div>
        </section>

        {/* WHY THIS HELPS */}
        <section style={cardStyle}>
          <h2 style={titleStyle}>Why This Service Helps</h2>
          <ul style={listStyle}>
            <li>Helps you present your case in a clearer, more organized way</li>
            <li>Reduces confusion before meeting a lawyer</li>
            <li>Saves time during consultation</li>
            <li>Supports better document organization and communication</li>
            <li>Improves confidence when discussing your matter</li>
          </ul>
        </section>

        {/* HOW IT WORKS */}
        <section style={cardStyle}>
          <h2 style={titleStyle}>How It Works</h2>
          <div style={processGrid}>
            <div style={stepCard}>
              <div style={stepNumber}>01</div>
              <h3 style={miniTitleStyle}>You Share the Matter</h3>
              <p style={textStyle}>
                You contact me through Facebook or WhatsApp and briefly explain
                your issue.
              </p>
            </div>

            <div style={stepCard}>
              <div style={stepNumber}>02</div>
              <h3 style={miniTitleStyle}>I Structure the Documents</h3>
              <p style={textStyle}>
                I prepare organized support documents based on the material you
                provide.
              </p>
            </div>

            <div style={stepCard}>
              <div style={stepNumber}>03</div>
              <h3 style={miniTitleStyle}>You Take It Forward</h3>
              <p style={textStyle}>
                You use the prepared material to communicate more effectively
                with your lawyer.
              </p>
            </div>
          </div>
        </section>

        {/* WHO THIS IS FOR */}
        <section style={cardStyle}>
          <h2 style={titleStyle}>Who This Is For</h2>
          <ul style={listStyle}>
            <li>People who feel overwhelmed by legal paperwork</li>
            <li>People who want to organize their case before seeing a lawyer</li>
            <li>People who need a clearer summary of their legal situation</li>
            <li>
              People who want structured support documents, not verbal confusion
            </li>
          </ul>
        </section>

        {/* PRICING */}
        <section style={cardStyle}>
          <h2 style={titleStyle}>Service Packages</h2>

          <p
            style={{
              ...textStyle,
              marginBottom: "28px",
              textAlign: "center",
            }}
          >
            Choose the level of structured support that best fits your
            situation.
          </p>

          <div style={pricingGrid}>
            <div style={pricingCard}>
              <p style={pricingLabel}>Basic</p>
              <h3 style={pricingTitle}>Case Structuring</h3>
              <p style={pricingPrice}>LKR 2,000+</p>

              <ul style={pricingList}>
                <li>Chronological event summary</li>
                <li>Basic issue structuring</li>
                <li>Simple document listing</li>
                <li>Ideal for first consultation</li>
              </ul>

              <a
                href="https://wa.me/94716287419"
                target="_blank"
                rel="noopener noreferrer"
                style={outlineButton}
              >
                Get Started
              </a>
            </div>

            <div style={featuredPricingCard}>
              <div style={badge}>Most Popular</div>

              <p style={pricingLabel}>Standard</p>
              <h3 style={pricingTitle}>Detailed Documentation</h3>
              <p style={pricingPrice}>LKR 5,000+</p>

              <ul style={pricingList}>
                <li>Detailed case chronology</li>
                <li>Argument summary sheet</li>
                <li>Evidence mapping table</li>
                <li>Consultation preparation notes</li>
              </ul>

              <a
                href="https://wa.me/94716287419"
                target="_blank"
                rel="noopener noreferrer"
                style={primaryButton}
              >
                Choose This Plan
              </a>
            </div>

            <div style={pricingCard}>
              <p style={pricingLabel}>Custom</p>
              <h3 style={pricingTitle}>Non Legal Full Case Preparation</h3>
              <p style={pricingPrice}>Custom Pricing</p>

              <ul style={pricingList}>
                <li>Complex case structuring</li>
                <li>Multi-document analysis</li>
                <li>Advanced refinement</li>
                <li>Best for sensitive matters</li>
              </ul>

              <a
                href="https://wa.me/94716287419"
                target="_blank"
                rel="noopener noreferrer"
                style={outlineButton}
              >
                Discuss Case
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            ...cardStyle,
            textAlign: "center",
            background:
              "linear-gradient(180deg, rgba(28,20,8,0.95), rgba(14,14,14,0.95))",
          }}
        >
          <h2 style={titleStyle}>Ready to Organize Your Case Properly?</h2>
          <p
            style={{
              ...textStyle,
              maxWidth: "850px",
              margin: "0 auto",
            }}
          >
            Contact me to discuss how I can help you prepare structured support
            documents before you meet your lawyer.
          </p>

          <div style={{ marginTop: "28px" }}>
            <a
              href="https://www.facebook.com/profile.php?id=61573339950801"
              target="_blank"
              rel="noopener noreferrer"
              style={primaryButton}
            >
              Start Through Facebook
            </a>

            <a
              href="https://wa.me/94716287419"
              target="_blank"
              rel="noopener noreferrer"
              style={secondaryButton}
            >
              Message on WhatsApp
            </a>
          </div>
        </section>

        {/* IMPORTANT NOTE */}
        <section style={cardStyle}>
          <h2 style={titleStyle}>Important Note</h2>
          <p style={textStyle}>
            This service is focused on structured document preparation and case
            organization. It does not replace legal advice from a qualified
            lawyer. This service provides document preparation support only. Not legal advice. 
            Please consult a qualified lawyer before taking any legal action.
            මෙය නීති උපදෙස් සේවාවක් නොවේ. මෙය ලේඛන සකස් කිරීමේ සහ අවබෝධ කිරීමේ සහාය සේවාවක් පමණි. නීති ක්‍රියාමාර්ග ගැනීමට 
            පෙර නීතිඥවරයෙකු හමුවන්න.
          </p>
        </section>
      </main>

      <footer
        style={{
          textAlign: "center",
          padding: "24px",
          color: "#8f8a78",
          borderTop: "1px solid rgba(212, 175, 55, 0.08)",
          fontSize: "0.92rem",
        }}
      >
        © Serendib Digital — Legal Preparation Support
      </footer>
    </div>
  );
}

const cardStyle = {
  background: "rgba(18,18,18,0.9)",
  padding: "32px",
  borderRadius: "14px",
  marginBottom: "26px",
  border: "1px solid rgba(212, 175, 55, 0.10)",
  boxShadow: "0 12px 30px rgba(0,0,0,0.45)",
};

const titleStyle = {
  color: "#e4c26a",
  marginBottom: "18px",
  fontSize: "1.6rem",
};

const textStyle = {
  lineHeight: "1.9",
  fontSize: "1.05rem",
  color: "#d7cfb2",
};

const listStyle = {
  lineHeight: "2",
  fontSize: "1.05rem",
  color: "#d7cfb2",
  paddingLeft: "20px",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "18px",
};

const processGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "18px",
};

const miniCardStyle = {
  background: "rgba(255,255,255,0.02)",
  border: "1px solid rgba(212, 175, 55, 0.08)",
  borderRadius: "10px",
  padding: "20px",
};

const stepCard = {
  background: "rgba(255,255,255,0.02)",
  border: "1px solid rgba(212, 175, 55, 0.08)",
  borderRadius: "10px",
  padding: "22px",
};

const miniTitleStyle = {
  color: "#f0d58a",
  marginTop: 0,
  marginBottom: "10px",
  fontSize: "1.15rem",
};

const stepNumber = {
  color: "#caa85a",
  fontSize: "1.8rem",
  fontWeight: "bold",
  marginBottom: "12px",
};

const pricingGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "24px",
  marginTop: "20px",
};

const pricingCard = {
  background: "rgba(255,255,255,0.02)",
  border: "1px solid rgba(212, 175, 55, 0.12)",
  borderRadius: "14px",
  padding: "26px",
  transition: "0.3s",
  boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
};

const featuredPricingCard = {
  background: "linear-gradient(180deg, rgba(45,32,12,0.95), rgba(18,18,18,0.95))",
  border: "1px solid rgba(212, 175, 55, 0.35)",
  borderRadius: "14px",
  padding: "26px",
  transform: "scale(1.04)",
  boxShadow: "0 15px 35px rgba(212, 175, 55, 0.15)",
  position: "relative",
};

const badge = {
  position: "absolute",
  top: "-12px",
  right: "15px",
  background: "#e4c26a",
  color: "#000",
  padding: "6px 12px",
  fontSize: "0.75rem",
  fontWeight: "bold",
  borderRadius: "6px",
};

const pricingLabel = {
  color: "#caa85a",
  fontSize: "0.85rem",
  textTransform: "uppercase",
  letterSpacing: "2px",
  marginBottom: "8px",
};

const pricingTitle = {
  color: "#f0d58a",
  margin: "0 0 10px",
  fontSize: "1.25rem",
};

const pricingPrice = {
  color: "#fff3c4",
  fontSize: "1.4rem",
  fontWeight: "bold",
  marginBottom: "16px",
};

const pricingList = {
  lineHeight: "1.9",
  fontSize: "0.98rem",
  color: "#d7cfb2",
  paddingLeft: "18px",
  marginBottom: "20px",
};

const primaryButton = {
  display: "inline-block",
  margin: "10px",
  padding: "13px 28px",
  background: "linear-gradient(135deg, #e4c26a, #b88b2e)",
  color: "#111",
  textDecoration: "none",
  borderRadius: "8px",
  fontWeight: "bold",
  boxShadow: "0 8px 22px rgba(212, 175, 55, 0.22)",
};

const secondaryButton = {
  display: "inline-block",
  margin: "10px",
  padding: "13px 28px",
  background: "transparent",
  color: "#e4c26a",
  textDecoration: "none",
  borderRadius: "8px",
  fontWeight: "bold",
  border: "1px solid rgba(212, 175, 55, 0.35)",
};

const outlineButton = {
  display: "block",
  textAlign: "center",
  padding: "12px",
  border: "1px solid rgba(212, 175, 55, 0.4)",
  color: "#e4c26a",
  borderRadius: "8px",
  textDecoration: "none",
};