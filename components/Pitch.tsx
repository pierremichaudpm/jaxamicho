"use client";

import React from "react";
import { useTranslation } from "@/lib/i18n";

const Pitch: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section
      className="pitch-section"
      style={{
        background: "var(--bg-dark)",
        flexDirection: "column",
        textAlign: "center",
        position: "relative",
      }}
    >
      {/* Floating shapes */}
      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "#e07a9e",
          opacity: 0.09,
          left: "-10%",
          top: "50%",
          animation: "float 10s ease-in-out infinite",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "#2dd4e0",
          opacity: 0.09,
          right: "-5%",
          top: "20%",
          animation: "float 12s ease-in-out infinite reverse",
          zIndex: 1,
        }}
      />

      <div
        className="pitch-container"
        style={{
          maxWidth: "1200px",
          position: "relative",
          zIndex: 10,
        }}
      >
        <h1
          className="pitch-statement"
          style={{
            fontSize: "clamp(1.5rem, 3vw, 3rem)",
            fontWeight: 900,
            lineHeight: 1.4,
            marginBottom: "3rem",
          }}
        >
          <span style={{ color: "var(--white)" }}>{t("pitch.prefix")} </span>
          <span className="gradient-text">{t("pitch.highlight")}</span>
        </h1>

        <p
          style={{
            fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)",
            color: "var(--gray)",
            marginBottom: "3rem",
            lineHeight: 1.6,
          }}
        >
          {t("pitch.subcta")}
        </p>

        {/* CTA button */}
        <a
          href="mailto:virginiejaffredo@jaxa.ca"
          className="pitch-cta"
          style={{
            display: "inline-block",
            background: "#2dd4e0",
            color: "var(--bg-dark)",
            padding: "1.5rem 4rem",
            fontSize: "clamp(1rem, 1.5vw, 1.3rem)",
            fontWeight: 900,
            textDecoration: "none",
            textTransform: "uppercase",
            letterSpacing: "3px",
            transition: "all 0.3s ease",
            position: "relative",
            overflow: "hidden",
            marginBottom: "4rem",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow =
              "0 20px 60px rgba(231, 76, 60, 0.5)";
            e.currentTarget.style.background = "#e07a9e";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.background = "#2dd4e0";
          }}
        >
          {t("pitch.cta")}
        </a>

        {/* Dual contact cards — Virginie first */}
        <div
          className="pitch-contacts"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "3rem",
            flexWrap: "wrap",
            marginBottom: "4rem",
          }}
        >
          {/* Virginie — First */}
          <div
            style={{
              textAlign: "center",
              padding: "2rem",
              background: "rgba(20, 20, 20, 0.8)",
              border: "2px solid rgba(255,255,255,0.1)",
              borderRadius: "1rem",
              flex: "1 1 0",
              maxWidth: "360px",
              minWidth: "260px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#2dd4e0";
              e.currentTarget.style.boxShadow = "0 10px 40px rgba(26, 126, 156, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <h4 style={{ fontSize: "1.3rem", fontWeight: 900, marginBottom: "0.3rem" }}>
              {t("team.virginie.name")}
            </h4>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "#2dd4e0",
                marginBottom: "1rem",
              }}
            >
              {t("pitch.virginie.role")}
            </div>
            <a
              href="mailto:virginiejaffredo@jaxa.ca"
              style={{ color: "var(--gray)", textDecoration: "none", fontSize: "0.95rem", display: "block", marginBottom: "0.3rem", transition: "color 0.3s" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#2dd4e0"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "var(--gray)"; }}
            >
              virginiejaffredo@jaxa.ca
            </a>
            <a
              href="tel:+15145789989"
              style={{ color: "var(--gray)", textDecoration: "none", fontSize: "0.95rem", transition: "color 0.3s" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#2dd4e0"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "var(--gray)"; }}
            >
              514 578-9989
            </a>
          </div>

          {/* Pierre — Second */}
          <div
            style={{
              textAlign: "center",
              padding: "2rem",
              background: "rgba(20, 20, 20, 0.8)",
              border: "2px solid rgba(255,255,255,0.1)",
              borderRadius: "1rem",
              flex: "1 1 0",
              maxWidth: "360px",
              minWidth: "260px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#e07a9e";
              e.currentTarget.style.boxShadow = "0 10px 40px rgba(231, 76, 60, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <h4 style={{ fontSize: "1.3rem", fontWeight: 900, marginBottom: "0.3rem" }}>
              {t("team.pierre.name")}
            </h4>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "#e07a9e",
                marginBottom: "1rem",
              }}
            >
              {t("pitch.pierre.role")}
            </div>
            <a
              href="mailto:pierre@studiomicho.com"
              style={{ color: "var(--gray)", textDecoration: "none", fontSize: "0.95rem", display: "block", marginBottom: "0.3rem", transition: "color 0.3s" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#e07a9e"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "var(--gray)"; }}
            >
              pierre@studiomicho.com
            </a>
            <a
              href="tel:+15149159370"
              style={{ color: "var(--gray)", textDecoration: "none", fontSize: "0.95rem", transition: "color 0.3s" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#e07a9e"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "var(--gray)"; }}
            >
              514 915-9370
            </a>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "11px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--gray)",
            opacity: 0.25,
          }}
        >
          {t("pitch.footer")}
        </div>
      </div>
    </section>
  );
};

export default Pitch;
