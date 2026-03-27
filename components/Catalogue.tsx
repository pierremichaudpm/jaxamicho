"use client";

import React from "react";
import { useTranslation } from "@/lib/i18n";

const projects = [
  { nameKey: "hero.project1.name", catKey: "hero.project1.category", descKey: "catalogue.project1.desc", genreKey: "catalogue.project1.genre", formatKey: "catalogue.project1.format", color: "#2dd4e0", image: "/images/dernier-rappel.png", video: "" },
  { nameKey: "hero.project2.name", catKey: "hero.project2.category", descKey: "catalogue.project2.desc", genreKey: "catalogue.project2.genre", formatKey: "catalogue.project2.format", color: "#e07a9e", image: "/images/amis-axelle.png", video: "" },
  { nameKey: "hero.project3.name", catKey: "hero.project3.category", descKey: "catalogue.project3.desc", genreKey: "catalogue.project3.genre", formatKey: "catalogue.project3.format", color: "#e8b84f", image: "/images/les-anciens.png", video: "" },
  { nameKey: "hero.project4.name", catKey: "hero.project4.category", descKey: "catalogue.project4.desc", genreKey: "catalogue.project4.genre", formatKey: "catalogue.project4.format", color: "#2dd4e0", image: "/images/dysmorphia.png", video: "" },
  { nameKey: "hero.project5.name", catKey: "hero.project5.category", descKey: "catalogue.project5.desc", genreKey: "catalogue.project5.genre", formatKey: "catalogue.project5.format", color: "#e07a9e", image: "/images/cibles-rouges.png", video: "" },
  { nameKey: "hero.project6.name", catKey: "hero.project6.category", descKey: "catalogue.project6.desc", genreKey: "catalogue.project6.genre", formatKey: "catalogue.project6.format", color: "#e8b84f", image: "/images/projet-wf.png", video: "" },
];

const Catalogue: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      style={{
        background: "var(--bg-dark)",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1000px", width: "100%", position: "relative", zIndex: 10 }}>
        <h2
          style={{
            fontSize: "clamp(2.5rem, 5vw, 5rem)",
            fontWeight: 900,
            textAlign: "center",
            lineHeight: 0.9,
            marginBottom: "4rem",
          }}
        >
          {t("catalogue.title")}{" "}
          <span className="gradient-text">{t("catalogue.titleHighlight")}</span>
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "3rem",
          }}
        >
          {projects.map((project, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={i}
                className="catalogue-card"
                style={{
                  display: "flex",
                  flexDirection: isEven ? "row" : "row-reverse",
                  gap: "2rem",
                  background: "rgba(20, 20, 20, 0.5)",
                  borderRadius: "1rem",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.06)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${project.color}30`;
                  const img = e.currentTarget.querySelector(".cat-poster") as HTMLElement;
                  if (img) img.style.filter = "grayscale(0)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                  const img = e.currentTarget.querySelector(".cat-poster") as HTMLElement;
                  if (img) img.style.filter = "grayscale(1)";
                }}
              >
                {/* Poster */}
                <div
                  style={{
                    width: "280px",
                    minHeight: "350px",
                    flexShrink: 0,
                    position: "relative",
                    overflow: "hidden",
                    background: "#000",
                  }}
                >
                  <img
                    src={project.image}
                    alt={t(project.nameKey)}
                    className="cat-poster"
                    style={{
                      position: "absolute",
                      top: "-2px",
                      left: "-2px",
                      width: "calc(100% + 4px)",
                      height: "calc(100% + 4px)",
                      objectFit: "cover",
                      objectPosition: "center top",
                      filter: "grayscale(1)",
                      transition: "filter 0.4s ease",
                    }}
                  />
                </div>

                {/* Details */}
                <div
                  style={{
                    flex: 1,
                    padding: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  {/* Status badge */}
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "10px",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      color: project.color,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {t(project.catKey)}
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                      fontWeight: 900,
                      marginBottom: "1rem",
                      color: "var(--white)",
                    }}
                  >
                    {t(project.nameKey)}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--gray)",
                      lineHeight: 1.6,
                      marginBottom: "1.5rem",
                    }}
                  >
                    {t(project.descKey)}
                  </p>

                  {/* Genre & Format tags */}
                  <div style={{ display: "flex", gap: "0.8rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "10px",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        padding: "0.4rem 0.8rem",
                        border: "1px solid rgba(255,255,255,0.15)",
                        borderRadius: "2rem",
                        color: "var(--gray)",
                      }}
                    >
                      {t(project.genreKey)}
                    </span>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "10px",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        padding: "0.4rem 0.8rem",
                        border: "1px solid rgba(255,255,255,0.15)",
                        borderRadius: "2rem",
                        color: "var(--gray)",
                      }}
                    >
                      {t(project.formatKey)}
                    </span>
                  </div>

                  {/* Demo button */}
                  {project.video && (
                    <a
                      href={project.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "0.6rem 1.5rem",
                        background: "transparent",
                        border: `1px solid ${project.color}`,
                        color: project.color,
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        textDecoration: "none",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        borderRadius: "0.3rem",
                        transition: "all 0.3s ease",
                        width: "fit-content",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = project.color;
                        e.currentTarget.style.color = "var(--bg-dark)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = project.color;
                      }}
                    >
                      ▶ {t("catalogue.demo")}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Responsive */}
      <style jsx>{`
        @media (max-width: 768px) {
          .catalogue-card {
            flex-direction: column !important;
          }
          .catalogue-card > div:first-child {
            width: 100% !important;
            min-height: 250px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Catalogue;
