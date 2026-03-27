"use client";

import React, { useState } from "react";
import { I18nProvider } from "@/lib/i18n";
import Navigation from "@/components/Navigation";
import VerticalBrand from "@/components/VerticalBrand";
import LanguageToggle from "@/components/LanguageToggle";
import HeroPortfolio from "@/components/HeroPortfolio";
import TeamDuo from "@/components/TeamDuo";
import Pillars from "@/components/Pillars";
import Partners from "@/components/Partners";
import Pitch from "@/components/Pitch";
import ProjectsModal from "@/components/ProjectsModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollToProject, setScrollToProject] = useState<number | undefined>(undefined);

  const openModal = (projectIndex?: number) => {
    setScrollToProject(projectIndex);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setScrollToProject(undefined);
  };

  return (
    <I18nProvider>
      <Navigation />
      <VerticalBrand />
      <LanguageToggle />
      <div id="projets">
        <HeroPortfolio onOpenModal={openModal} />
      </div>
      <div id="equipe">
        <TeamDuo />
      </div>
      <div id="services">
        <Pillars />
      </div>
      <div id="partenaires">
        <Partners />
      </div>
      <div id="contact">
        <Pitch />
      </div>
      <ProjectsModal isOpen={isModalOpen} onClose={closeModal} scrollToProject={scrollToProject} />
    </I18nProvider>
  );
}
