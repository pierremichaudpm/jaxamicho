"use client";

import React from "react";
import { useTranslation } from "@/lib/i18n";

const partners = [
  { name: "Camera Obscura Films", logo: "/images/partner-cameraoscura.png", maxH: 80, maxW: 240 },
  { name: "DPT", logo: "/images/partner-dpt.png" },
  { name: "Neek Studio", logo: "/images/partner-neek.png", maxH: 80, maxW: 240 },
  { name: "Normal Studio", logo: "/images/partner-normal.png", noFilter: true },
  { name: "Hubblo", logo: "/images/partner-hubblo.png", noFilter: true },
  { name: "Pixel Audio", logo: "/images/partner-pixelaudio.webp" },
  { name: "Eon Sounds", logo: "/images/partner-eonsounds.png" },
  { name: "Couleur", logo: "/images/partner-couleur.png" },
  { name: "Noukii", logo: "/images/partner-noukii.png" },
  { name: "Isotone", logo: "/images/partner-isotone.png" },
];

const Partners: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      style={{
        background: "var(--bg-dark)",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {/* Floating shapes */}
      <div
        style={{
          position: "absolute",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "#e07a9e",
          opacity: 0.06,
          right: "10%",
          top: "20%",
          animation: "float 8s ease-in-out infinite",
          zIndex: 1,
        }}
      />

      <div style={{ maxWidth: "1200px", width: "100%", position: "relative", zIndex: 10 }}>
        <h2
          style={{
            fontSize: "clamp(2.5rem, 5vw, 5rem)",
            fontWeight: 900,
            textAlign: "center",
            lineHeight: 0.9,
            marginBottom: "5rem",
          }}
        >
          {t("partners.title")}{" "}
          <span className="gradient-text">{t("partners.titleHighlight")}</span>
        </h2>

        <div className="partners-grid">
          {partners.map((partner, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "1.2rem",
                cursor: "default",
              }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                title={partner.name}
                style={{
                  maxHeight: `${partner.maxH || 40}px`,
                  maxWidth: `${partner.maxW || 120}px`,
                  objectFit: "contain",
                  filter: partner.noFilter ? "none" : "brightness(0) invert(1)",
                  transition: "filter 0.3s ease",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
