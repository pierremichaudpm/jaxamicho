"use client";

import React from "react";
import { useTranslation } from "@/lib/i18n";

interface TaglineProps {
  onOpenModal: () => void;
}

const Tagline: React.FC<TaglineProps> = ({ onOpenModal }) => {
  const { t } = useTranslation();

  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, var(--bg-dark) 0%, var(--deep-blue) 100%)",
        flexDirection: "column",
        textAlign: "center",
        minHeight: "auto",
        padding: "6rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "clamp(11px, 0.9vw, 13px)",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "#2dd4e0",
            marginBottom: "1.5rem",
          }}
        >
          // {t("hero.subtitle")}
        </div>
        <h2
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
            fontWeight: 900,
            lineHeight: 1.4,
            marginBottom: "2rem",
          }}
        >
          <span style={{ color: "var(--white)" }}>{t("tagline.prefix")} </span>
          <span className="gradient-text">{t("tagline.highlight")}</span>
        </h2>

        {/* CTA — opens modal */}
        <button
          onClick={onOpenModal}
          style={{
            padding: "0.7rem 2rem",
            background: "transparent",
            border: "2px solid #2dd4e0",
            color: "#2dd4e0",
            fontSize: "0.85rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "2px",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--bg-dark)";
            e.currentTarget.style.background = "#2dd4e0";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#2dd4e0";
            e.currentTarget.style.background = "transparent";
          }}
        >
          {t("tagline.cta")}
        </button>
      </div>
    </section>
  );
};

export default Tagline;
