"use client";

import React from "react";
import { useTranslation } from "@/lib/i18n";

const TeamDuo: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      className="team-section"
      style={{
        background:
          "linear-gradient(135deg, var(--bg-dark) 0%, var(--deep-blue) 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {/* Floating shapes */}
      <div
        className="shape-circle"
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "#e8b84f",
          opacity: 0.15,
          top: "5%",
          left: "60%",
          animation: "float 11s ease-in-out infinite",
          zIndex: 1,
        }}
      />
      <div
        className="shape-circle"
        style={{
          position: "absolute",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background: "#2dd4e0",
          opacity: 0.15,
          bottom: "15%",
          right: "70%",
          animation: "float 9s ease-in-out infinite reverse",
          zIndex: 1,
        }}
      />
      <div
        className="shape-circle"
        style={{
          position: "absolute",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "#e07a9e",
          opacity: 0.1,
          top: "40%",
          left: "-5%",
          animation: "float 14s ease-in-out infinite",
          zIndex: 1,
        }}
      />

      <div
        style={{
          maxWidth: "1000px",
          width: "100%",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Subtitle */}
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "clamp(11px, 0.9vw, 13px)",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "#2dd4e0",
            marginBottom: "1.5rem",
            textAlign: "center",
          }}
        >
          // {t("team.subtitle")}
        </div>

        {/* Title */}
        <h2
          style={{
            fontSize: "clamp(2.5rem, 5vw, 5rem)",
            fontWeight: 900,
            textAlign: "center",
            lineHeight: 0.9,
            marginBottom: "5rem",
          }}
        >
          {t("team.title")}
          <br />
          <span className="gradient-text">{t("team.titleHighlight")}</span>
        </h2>

        {/* Team grid — Virginie first */}
        <div
          className="team-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            marginBottom: "5rem",
          }}
        >
          {/* Virginie — First */}
          <div className="team-member">
            <img
              src="/images/virginie-jaffredo.jpg"
              alt={t("team.virginie.name")}
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid #2dd4e0",
                marginBottom: "1.5rem",
              }}
            />
            <h3
              style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                fontWeight: 900,
                marginBottom: "0.5rem",
              }}
            >
              {t("team.virginie.name")}
            </h3>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "#2dd4e0",
                marginBottom: "1.5rem",
              }}
            >
              {t("team.virginie.role")}
            </div>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {[
                t("team.virginie.point1"),
                t("team.virginie.point2"),
                t("team.virginie.point3"),
                t("team.virginie.point4"),
              ].map((point, i) => (
                <li
                  key={i}
                  style={{
                    padding: "8px 0",
                    fontSize: "clamp(14px, 1.1vw, 16px)",
                    color: "var(--gray)",
                    borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.1)" : "none",
                  }}
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Pierre — Second */}
          <div className="team-member">
            <img
              src="/images/pierre-michaud.png"
              alt={t("team.pierre.name")}
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid #e07a9e",
                marginBottom: "1.5rem",
              }}
            />
            <h3
              style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                fontWeight: 900,
                marginBottom: "0.5rem",
              }}
            >
              {t("team.pierre.name")}
            </h3>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "#e07a9e",
                marginBottom: "1.5rem",
              }}
            >
              {t("team.pierre.role")}
            </div>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {[
                t("team.pierre.point1"),
                t("team.pierre.point2"),
                t("team.pierre.point3"),
                t("team.pierre.point4"),
              ].map((point, i) => (
                <li
                  key={i}
                  style={{
                    padding: "8px 0",
                    fontSize: "clamp(14px, 1.1vw, 16px)",
                    color: "var(--gray)",
                    borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.1)" : "none",
                  }}
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      {/* Responsive */}
      <style jsx>{`
        @media (max-width: 768px) {
          .team-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TeamDuo;
