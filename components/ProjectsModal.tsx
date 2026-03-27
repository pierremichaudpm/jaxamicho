"use client";

import React, { useEffect, useState } from "react";
import { useTranslation } from "@/lib/i18n";

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  scrollToProject?: number;
}

const projects = [
  { nameKey: "hero.project1.name", catKey: "hero.project1.category", descKey: "catalogue.project1.desc", genreKey: "catalogue.project1.genre", formatKey: "catalogue.project1.format", creditsKey: "catalogue.project1.credits", techKey: "catalogue.project1.tech", festivalsKey: "catalogue.project1.festivals", color: "#2dd4e0", image: "/images/dernier-rappel.png", video: "https://player.vimeo.com/video/914437970" },
  { nameKey: "hero.project2.name", catKey: "hero.project2.category", descKey: "catalogue.project2.desc", genreKey: "catalogue.project2.genre", formatKey: "catalogue.project2.format", creditsKey: "catalogue.project2.credits", color: "#e07a9e", image: "/images/amis-axelle.png", video: "https://player.vimeo.com/video/847099985" },
  { nameKey: "hero.project3.name", catKey: "hero.project3.category", descKey: "catalogue.project3.desc", genreKey: "catalogue.project3.genre", formatKey: "catalogue.project3.format", creditsKey: "catalogue.project3.credits", color: "#e8b84f", image: "/images/les-anciens.png", video: "https://player.vimeo.com/video/884814733" },
  { nameKey: "hero.project4.name", catKey: "hero.project4.category", descKey: "catalogue.project4.desc", genreKey: "catalogue.project4.genre", formatKey: "catalogue.project4.format", creditsKey: "catalogue.project4.credits", color: "#2dd4e0", image: "/images/dysmorphia.png", video: "" },
  { nameKey: "hero.project5.name", catKey: "hero.project5.category", descKey: "catalogue.project5.desc", genreKey: "catalogue.project5.genre", formatKey: "catalogue.project5.format", creditsKey: "catalogue.project5.credits", color: "#e07a9e", image: "/images/cibles-rouges.png", video: "" },
  { nameKey: "hero.project6.name", catKey: "hero.project6.category", descKey: "catalogue.project6.desc", genreKey: "catalogue.project6.genre", formatKey: "catalogue.project6.format", creditsKey: "catalogue.project6.credits", color: "#e8b84f", image: "/images/projet-wf.png", video: "" },
];

const ProjectsModal: React.FC<ProjectsModalProps> = ({ isOpen, onClose, scrollToProject }) => {
  const { t } = useTranslation();
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen && scrollToProject !== undefined) {
      setTimeout(() => {
        const card = document.querySelector(`[data-project-index="${scrollToProject}"]`);
        if (card) card.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 300);
    }
  }, [isOpen, scrollToProject]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (videoUrl) setVideoUrl(null);
        else onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, videoUrl]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="modal-container"
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(3, 7, 18, 0.98)",
          zIndex: 3000,
          overflowY: "auto",
          animation: "modalSlideIn 0.4s ease-out",
          paddingLeft: "120px",
        }}
      >
        {/* Mobile header — identical to Navigation.tsx mobile header */}
        <div
          className="modal-mobile-header"
          style={{
            position: "sticky",
            top: 0,
            display: "none",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 1.2rem",
            height: "70px",
            background: "rgba(3, 7, 18, 0.95)",
            backdropFilter: "blur(10px)",
            zIndex: 3003,
          }}
        >
          {/* Left: Close button (replaces hamburger) */}
          <button
            onClick={onClose}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              flexShrink: 0,
              color: "var(--white)",
              fontSize: "1.5rem",
              fontWeight: 300,
              lineHeight: 1,
            }}
          >
            ✕
          </button>

          {/* Center: Title + Logo — same as Navigation */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); onClose(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              style={{
                fontSize: "1.05rem",
                fontWeight: 900,
                color: "var(--white)",
                textDecoration: "none",
                letterSpacing: "0.15rem",
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ color: "#2dd4e0" }}>JAXA</span> PRODUCTION
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); onClose(); window.scrollTo({ top: 0, behavior: "smooth" }); }} style={{ lineHeight: 0, flexShrink: 0 }}>
              <img
                src="/jaxa-icon.png"
                alt="JAXA Production"
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                }}
              />
            </a>
          </div>

          {/* Right: spacer to balance layout */}
          <div style={{ width: "40px", flexShrink: 0 }} />
        </div>

        {/* Desktop close button — top right */}
        <button
          onClick={onClose}
          className="gradient-text modal-desktop-close"
          style={{
            position: "fixed",
            top: "2rem",
            right: "2rem",
            border: "none",
            fontSize: "2rem",
            cursor: "pointer",
            transition: "transform 0.3s",
            zIndex: 3002,
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.3)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
        >
          ✕
        </button>

        {/* Desktop vertical sidebar */}
        <div
          className="modal-sidebar"
          style={{
            position: "fixed",
            left: "2rem",
            top: "2rem",
            bottom: "2rem",
            zIndex: 3002,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "clamp(0.5rem, 1vh, 1rem)",
          }}
        >
          <a href="#" onClick={(e) => { e.preventDefault(); onClose(); window.scrollTo({ top: 0, behavior: "smooth" }); }} style={{ lineHeight: 0, flexShrink: 0 }}>
            <img src="/jaxa-icon.png" alt="JAXA Production" style={{ width: "clamp(36px, 5vh, 48px)", height: "clamp(36px, 5vh, 48px)", borderRadius: "50%" }} />
          </a>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); onClose(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            style={{
              transform: "rotate(180deg)",
              fontSize: "clamp(1.8rem, 3vh, 2.5rem)",
              fontWeight: 900,
              color: "var(--white)",
              textDecoration: "none",
              writingMode: "vertical-rl",
              letterSpacing: "clamp(0.15rem, 0.3vh, 0.3rem)",
              transition: "color 0.3s ease",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#2dd4e0"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "var(--white)"; }}
          >
            <span style={{ color: "#2dd4e0" }}>JAXA</span> PRODUCTION
          </a>
          <div style={{ flex: "0 0 clamp(0.5rem, 2vh, 2rem)" }} />
          <nav style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "clamp(0.6rem, 1.5vh, 2rem)" }}>
            {[
              { label: t("nav.projects"), action: () => {} },
              { label: t("nav.team"), href: "#equipe" },
              { label: t("nav.services"), href: "#services" },
              { label: t("nav.partners"), href: "#partenaires" },
              { label: t("nav.contact"), href: "#contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href || "#"}
                onClick={(e) => {
                  e.preventDefault();
                  if (item.href) {
                    onClose();
                    setTimeout(() => { document.querySelector(item.href!)?.scrollIntoView({ behavior: "smooth" }); }, 100);
                  }
                }}
                style={{
                  color: "var(--white)",
                  textDecoration: "none",
                  fontSize: "clamp(0.55rem, 0.8vw, 0.8rem)",
                  fontWeight: 600,
                  letterSpacing: "clamp(0.1rem, 0.2vw, 0.2rem)",
                  transition: "all 0.3s ease",
                  textTransform: "lowercase",
                  opacity: 0.7,
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#2dd4e0"; e.currentTarget.style.opacity = "1"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--white)"; e.currentTarget.style.opacity = "0.5"; }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Centered title */}
        <h2
          className="modal-title"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 900,
            textAlign: "center",
            padding: "3rem 0 2rem",
          }}
        >
          {t("catalogue.title")}{" "}
          <span className="gradient-text">{t("catalogue.titleHighlight")}</span>
        </h2>

        {/* Content */}
        <div
          className="modal-content"
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            padding: "3rem 2rem 6rem",
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
                data-project-index={i}
                className="catalogue-card"
                style={{
                  display: "flex",
                  flexDirection: isEven ? "row" : "row-reverse",
                  gap: "2rem",
                  background: "rgba(20, 20, 20, 0.5)",
                  borderRadius: "0",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.06)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${project.color}30`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                }}
              >
                {/* Poster */}
                <div
                  className="card-poster-wrap"
                  style={{
                    width: "260px",
                    minHeight: "370px",
                    flexShrink: 0,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={project.image}
                    alt={t(project.nameKey)}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center center",
                    }}
                  />
                </div>

                {/* Details */}
                <div
                  className="card-details"
                  style={{
                    flex: 1,
                    padding: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
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

                  <h3
                    style={{
                      fontSize: "clamp(1.3rem, 2.5vw, 2rem)",
                      fontWeight: 900,
                      marginBottom: "0.75rem",
                      color: "var(--white)",
                    }}
                  >
                    {t(project.nameKey)}
                  </h3>

                  <p
                    style={{
                      fontSize: "clamp(0.85rem, 2vw, 0.95rem)",
                      color: "var(--gray)",
                      lineHeight: 1.6,
                      marginBottom: "0.75rem",
                    }}
                  >
                    {t(project.descKey)}
                  </p>

                  {/* Credits */}
                  {project.creditsKey && t(project.creditsKey) && (
                    <p
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--gray)",
                        lineHeight: 1.5,
                        marginBottom: "0.75rem",
                        opacity: 0.8,
                        fontStyle: "italic",
                      }}
                    >
                      {t(project.creditsKey)}
                    </p>
                  )}

                  {/* Tech */}
                  {project.techKey && t(project.techKey) !== project.techKey && (
                    <p
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "10px",
                        color: project.color,
                        letterSpacing: "0.1em",
                        marginBottom: "0.5rem",
                        opacity: 0.8,
                      }}
                    >
                      {t(project.techKey)}
                    </p>
                  )}

                  {/* Festivals */}
                  {project.festivalsKey && t(project.festivalsKey) !== project.festivalsKey && (
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--gray)",
                        marginBottom: "0.75rem",
                        opacity: 0.7,
                      }}
                    >
                      {t(project.festivalsKey)}
                    </p>
                  )}

                  {/* Tags */}
                  <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem", flexWrap: "wrap" }}>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "9px",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        padding: "0.3rem 0.7rem",
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
                        fontSize: "9px",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        padding: "0.3rem 0.7rem",
                        border: "1px solid rgba(255,255,255,0.15)",
                        borderRadius: "2rem",
                        color: "var(--gray)",
                      }}
                    >
                      {t(project.formatKey)}
                    </span>
                  </div>

                  {project.video && (
                    <button
                      onClick={() => setVideoUrl(project.video)}
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
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        borderRadius: "0.3rem",
                        cursor: "pointer",
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
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Responsive */}
        <style jsx>{`
          @media (max-width: 968px) {
            .modal-container {
              padding-left: 0 !important;
            }
            .modal-sidebar {
              display: none !important;
            }
            .modal-desktop-close {
              display: none !important;
            }
            .modal-mobile-header {
              display: flex !important;
            }
            .modal-title {
              padding: 1.5rem 1rem 1rem !important;
              font-size: clamp(1.8rem, 6vw, 2.5rem) !important;
            }
            .modal-content {
              padding: 1rem 1rem 4rem !important;
              gap: 2.5rem !important;
            }
            .catalogue-card {
              flex-direction: column !important;
              border: none !important;
              background: transparent !important;
            }
            .card-poster-wrap {
              width: 80% !important;
              margin: 0 auto !important;
              min-height: 0 !important;
              aspect-ratio: unset !important;
              max-height: none !important;
            }
            .card-poster-wrap img {
              position: relative !important;
              width: 100% !important;
              height: auto !important;
            }
            .card-details {
              padding: 1.2rem !important;
            }
          }
        `}</style>
      </div>

      {/* Video Player Modal */}
      {videoUrl && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0, 0, 0, 0.95)",
            zIndex: 4000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
          }}
          onClick={() => setVideoUrl(null)}
        >
          <button
            onClick={() => setVideoUrl(null)}
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "1.5rem",
              background: "none",
              border: "none",
              color: "var(--white)",
              fontSize: "2rem",
              fontWeight: 900,
              cursor: "pointer",
              zIndex: 4001,
            }}
          >
            ✕
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: "900px",
              aspectRatio: "16 / 9",
              borderRadius: "0.5rem",
              overflow: "hidden",
            }}
          >
            <iframe
              src={videoUrl}
              style={{ width: "100%", height: "100%", border: "none" }}
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectsModal;
