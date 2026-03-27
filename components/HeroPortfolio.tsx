"use client";

import React from "react";
import { useTranslation } from "@/lib/i18n";

interface ProjectCardProps {
  name: string;
  category: string;
  color: string;
  image?: string;
  index?: number;
  onClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, category, color, image, index = 0, onClick }) => {
  return (
    <div
      className="project-card"
      onClick={onClick}
      style={{
        cursor: "pointer",
        transition: "all 0.4s ease",
        opacity: 0,
        animation: `cardReveal 0.6s ease-out ${0.15 + index * 0.1}s forwards`,
      }}
      onMouseEnter={(e) => {
        const wrapper = e.currentTarget.querySelector(".card-image") as HTMLElement;
        if (wrapper) {
          wrapper.style.transform = "translateY(-5px)";
        }
        const poster = e.currentTarget.querySelector(".card-poster") as HTMLElement;
        if (poster) poster.style.filter = "grayscale(0)";
        const cat = e.currentTarget.querySelector(".card-category") as HTMLElement;
        if (cat) cat.style.color = color;
      }}
      onMouseLeave={(e) => {
        const wrapper = e.currentTarget.querySelector(".card-image") as HTMLElement;
        if (wrapper) {
          wrapper.style.transform = "translateY(0)";
        }
        const poster = e.currentTarget.querySelector(".card-poster") as HTMLElement;
        if (poster) poster.style.filter = "grayscale(1)";
        const cat = e.currentTarget.querySelector(".card-category") as HTMLElement;
        if (cat) cat.style.color = "var(--gray)";
      }}
    >
      {/* Poster image area */}
      <div
        className="card-image"
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "0.5rem",
          aspectRatio: "3 / 4",
          background: "#000",
          transition: "transform 0.4s ease",
          marginBottom: "0.5rem",
        }}
      >
        {image && (
          <img
            src={image}
            alt={name}
            style={{
              position: "absolute",
              top: "-10px",
              left: "-10px",
              width: "calc(100% + 20px)",
              height: "calc(100% + 20px)",
              objectFit: "cover",
              objectPosition: "center top",
              filter: "grayscale(1)",
              transition: "filter 0.4s ease",
            }}
            className="card-poster"
          />
        )}
      </div>

      {/* Title & category below the card */}
      <h3
        style={{
          fontSize: "clamp(0.85rem, 1.1vw, 1rem)",
          fontWeight: 900,
          marginBottom: "0.15rem",
          color: "var(--white)",
        }}
      >
        {name}
      </h3>
      <div
        className="card-category"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "9px",
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          color: "var(--gray)",
          transition: "color 0.4s ease",
          paddingTop: "0.2rem",
        }}
      >
        {category}
      </div>
    </div>
  );
};

interface HeroPortfolioProps {
  onOpenModal: (projectIndex?: number) => void;
}

const HeroPortfolio: React.FC<HeroPortfolioProps> = ({ onOpenModal }) => {
  const { t } = useTranslation();

  const projects = [
    { nameKey: "hero.project1.name", catKey: "hero.project1.category", color: "#2dd4e0", image: "/images/dernier-rappel.png" },
    { nameKey: "hero.project2.name", catKey: "hero.project2.category", color: "#e07a9e", image: "/images/amis-axelle.png" },
    { nameKey: "hero.project3.name", catKey: "hero.project3.category", color: "#e8b84f", image: "/images/les-anciens.png" },
    { nameKey: "hero.project4.name", catKey: "hero.project4.category", color: "#2dd4e0", image: "/images/dysmorphia.png" },
    { nameKey: "hero.project5.name", catKey: "hero.project5.category", color: "#e07a9e", image: "/images/cibles-rouges.png" },
    { nameKey: "hero.project6.name", catKey: "hero.project6.category", color: "#e8b84f", image: "/images/projet-wf.png" },
  ];

  return (
    <section
      className="hero"
      style={{
        background:
          "linear-gradient(135deg, var(--bg-dark) 0%, var(--deep-blue) 100%)",
        position: "relative",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          maxWidth: "clamp(600px, 60vw, 900px)",
          width: "100%",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Projects Grid */}
        <div className="hero-grid">
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              name={t(project.nameKey)}
              category={t(project.catKey)}
              color={project.color}
              image={project.image}
              index={i}
              onClick={() => onOpenModal(i)}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div style={{ textAlign: "center", marginTop: "1.5rem", opacity: 0, animation: "cardReveal 0.6s ease-out 0.9s forwards" }}>
          <button
            className="hero-cta-btn"
            onClick={() => onOpenModal()}
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
              position: "relative",
              overflow: "hidden",
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
            {t("hero.cta")}
          </button>
        </div>
      </div>

    </section>
  );
};

export default HeroPortfolio;
