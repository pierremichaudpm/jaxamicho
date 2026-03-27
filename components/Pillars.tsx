"use client";

import React from "react";
import { useTranslation } from "@/lib/i18n";

const Pillars: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      className="services-section"
      style={{
        background:
          "linear-gradient(135deg, var(--bg-dark) 0%, var(--deep-blue) 100%)",
        flexDirection: "column",
      }}
    >
      <div style={{ maxWidth: "1000px", width: "100%", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "clamp(2.5rem, 5vw, 5rem)",
            fontWeight: 900,
            textAlign: "center",
            lineHeight: 0.9,
            marginBottom: "4rem",
          }}
        >
          {t("pillars.title")}{" "}
          <span className="gradient-text">{t("pillars.titleHighlight")}</span>
        </h2>

        {/* Top row: 2 cards */}
        <div
          className="pillars-top"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            marginBottom: "2rem",
          }}
        >
          {/* Idéation */}
          <div
            className="service-card"
            data-color="teal"
            style={{ position: "relative", overflow: "hidden" }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #2dd4e0, transparent)" }} />
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8rem", fontWeight: 700, color: "#2dd4e0", letterSpacing: "0.15em", marginBottom: "1rem", opacity: 0.7 }}>01</div>
            <h3 style={{ color: "#2dd4e0" }}>{t("pillars.1.title")}</h3>
            <p>{t("pillars.1.desc")}</p>
          </div>

          {/* Administration */}
          <div
            className="service-card"
            data-color="coral"
            style={{ position: "relative", overflow: "hidden" }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #e07a9e, transparent)" }} />
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8rem", fontWeight: 700, color: "#e07a9e", letterSpacing: "0.15em", marginBottom: "1rem", opacity: 0.7 }}>02</div>
            <h3 style={{ color: "#e07a9e" }}>{t("pillars.2.title")}</h3>
            <p>{t("pillars.2.desc")}</p>
          </div>
        </div>

        {/* Bottom row: 1 full-width card — Expertise numérique + Studio Micho */}
        <div
          className="service-card"
          data-color="gold"
          style={{
            position: "relative",
            overflow: "hidden",
            display: "flex",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #e8b84f, transparent)" }} />

          {/* Left: content */}
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8rem", fontWeight: 700, color: "#e8b84f", letterSpacing: "0.15em", marginBottom: "1rem", opacity: 0.7 }}>03</div>
            <h3 style={{ color: "#e8b84f" }}>{t("pillars.3.title")}</h3>
            <p>{t("pillars.3.desc")}</p>
          </div>

          {/* Right: Studio Micho featured */}
          <a
            href="https://studiomicho.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.8rem",
              textDecoration: "none",
              transition: "all 0.3s ease",
              padding: "1.5rem 2rem",
              borderRadius: "0.75rem",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              e.currentTarget.style.background = "rgba(255,255,255,0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              e.currentTarget.style.background = "rgba(255,255,255,0.03)";
            }}
          >
            <img
              src="/jaxa-icon.png"
              alt="JAXA Production"
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
              }}
            />
            <span
              style={{
                color: "var(--white)",
                fontSize: "1.1rem",
                fontWeight: 900,
                letterSpacing: "0.15em",
              }}
            >
              Studio Micho
            </span>
            <span style={{ color: "var(--gray)", fontSize: "0.8rem" }}>studiomicho.com</span>
          </a>
        </div>
      </div>

      {/* Responsive */}
      <style jsx>{`
        @media (max-width: 768px) {
          .pillars-top {
            grid-template-columns: 1fr !important;
          }
          .service-card {
            flex-direction: column !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Pillars;
