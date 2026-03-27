"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

export type Locale = "fr" | "en";

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const translations: Record<Locale, Record<string, string>> = {
  fr: {
    // Navigation
    "nav.projects": "Projets",
    "nav.team": "Équipe",
    "nav.services": "Services",
    "nav.partners": "Partenaires",
    "nav.contact": "Contact",

    // Ticker
    "ticker.news": "Virginie sera présente à New Images du 7 au 10 avril à Paris pour présenter le projet en développement « We are, nous sommes » de Michel Lemieux",

    // Hero Portfolio
    "hero.subtitle": "Productions originales",
    "hero.tagline": "Nous créons des expériences immersives, mémorables et audacieuses.",
    "hero.cta": "Détails des projets",
    "hero.project1.name": "Dernier rappel",
    "hero.project1.category": "En distribution",
    "hero.project2.name": "Les amis d'Axelle",
    "hero.project2.category": "En distribution",
    "hero.project3.name": "Les anciens",
    "hero.project3.category": "En distribution",
    "hero.project4.name": "Dysmorphia",
    "hero.project4.category": "En production",
    "hero.project5.name": "Cibles rouges",
    "hero.project5.category": "En développement",
    "hero.project6.name": "Projet immersif",
    "hero.project6.category": "En prototypage",

    // Catalogue
    "catalogue.title": "Nos",
    "catalogue.titleHighlight": "projets",
    "catalogue.demo": "Voir la démo",
    "catalogue.project1.desc": "Biopic animé immersif, basé sur les archives du chanteur d'opéra Joseph Rouleau. Grâce à une conversation posthume avec la réalisatrice Émilie Rosas, l'œuvre vise à dépoussiérer le monde de l'opéra et révéler Joseph Rouleau, grand pionnier de l'art lyrique du Québec.",
    "catalogue.project1.genre": "Documentaire VR",
    "catalogue.project1.format": "20 min",
    "catalogue.project1.credits": "Réalisation : Émilie Rosas & Colas Wohlfahrt · En collaboration avec Les Films Camera Oscura",
    "catalogue.project1.tech": "Meta Quest 2 (LBE & Oculus Store)",
    "catalogue.project1.festivals": "SXSW 2024 · FNC Montréal 2023 · Avanca · Pordenone Docs · Aesthetica · FIVARS",
    "catalogue.project2.desc": "Axelle propose la découverte d'activités sportives, culturelles et éducatives à travers l'expérience personnelle de ses amis. Les enfants expriment leurs coups de cœur ainsi que les défis rencontrés dans leur passion.",
    "catalogue.project2.genre": "Série web jeunesse",
    "catalogue.project2.format": "Série",
    "catalogue.project2.credits": "Réalisation : Virginie Jaffredo · Avec : Axelle Michaud · Distribution : HG Distribution",
    "catalogue.project3.desc": "L'idée est née de la rencontre avec une vieille dame à Châteaudouble, un village du sud de la France. Comme des milliers d'anciens partout dans le monde, elle représente la mémoire vivante de son village. Un parcours touristique axé sur les récits des anciens, avec des stations thématiques et des vidéos accessibles par code QR.",
    "catalogue.project3.genre": "Parcours touristique",
    "catalogue.project3.format": "Expérience interactive",
    "catalogue.project3.credits": "Pierre Michaud & Sylvain Caron · 8 stations thématiques · Vidéos max 2 min · Sous-titres multilingues",
    "catalogue.project4.desc": "Projet artistique et sensible qui explore la thématique complexe de la dysmorphie corporelle. L'expérience confronte les visiteurs à eux-mêmes, à leur reflet, afin de susciter la réflexion sur la perception de notre corps à travers un reflet.",
    "catalogue.project4.genre": "Expérience interactive",
    "catalogue.project4.format": "Installation",
    "catalogue.project4.credits": "Idée originale : Sarah Sozzi",
    "catalogue.project5.desc": "Qui étaient les prisonniers de guerre allemands au Canada pendant la Seconde Guerre mondiale? Cibles Rouges est une incursion dans la vie quotidienne des prisonniers — officiers, soldats, civils juifs allemands. L'expérience retrace leurs destins et s'interroge sur le traitement des prisonniers de guerre dans les conflits actuels.",
    "catalogue.project5.genre": "Expérience immersive muséale",
    "catalogue.project5.format": "FR · EN · DE",
    "catalogue.project5.credits": "Idée originale et réalisation : Catherine Veaux-Logeat · En collaboration avec Les Films Camera Oscura",
    "catalogue.project6.desc": "Expérience immersive en réalité virtuelle. Une forêt qui murmure, un monde à découvrir.",
    "catalogue.project6.genre": "XR / Immersif",
    "catalogue.project6.format": "Expérience VR",
    "catalogue.project6.credits": "",

    // Team Duo
    "team.subtitle": "Qui nous sommes",
    "team.title": "Deux expertises.",
    "team.titleHighlight": "Une seule vision.",
    "team.virginie.name": "Virginie Jaffredo",
    "team.virginie.role": "Présidente et productrice",
    "team.virginie.point1": "Direction de projets créatifs et immersifs",
    "team.virginie.point2": "Administration, budgets, suivi de production",
    "team.virginie.point3": "Interface client principale — votre point de contact",
    "team.virginie.point4": "Expérience en production numérique et XR",
    "team.pierre.name": "Pierre Michaud",
    "team.pierre.role": "Producteur numérique · Développeur IA",
    "team.pierre.point1": "25 ans d'expérience — Radio-Canada, Olympiques",
    "team.pierre.point2": "Expertise numérique et développement IA",
    "team.pierre.point3": "Conception, construction et déploiement",
    "team.pierre.point4": "Sites web, applications, outils sur mesure",
    "team.stat1.value": "10+",
    "team.stat1.label": "productions",
    "team.stat2.value": "100%",
    "team.stat2.label": "créatif",
    "team.stat3.value": "0",
    "team.stat3.label": "compromis",

    // Tagline
    "tagline.prefix": "Nos",
    "tagline.highlight": "expériences touchent, inspirent et rassemblent.",
    "tagline.cta": "Nos projets",

    // Modal
    "modal.title": "Nos",
    "modal.titleHighlight": "projets",

    // Pillars (Services)
    "pillars.title": "Nos",
    "pillars.titleHighlight": "piliers",
    "pillars.1.title": "Idéation et création",
    "pillars.1.desc": "Révéler le plein potentiel des créateurs et des entreprises grâce à des stratégies innovantes, adaptées et visionnaires. De l'idée initiale à la production finale.",
    "pillars.2.title": "Administration de projet",
    "pillars.2.desc": "Accompagnement complet des projets créatifs. Budgets, échéanciers, coordination d'équipes, logistique — pour que vous puissiez vous concentrer sur la création.",
    "pillars.3.title": "Expertise numérique",
    "pillars.3.desc": "Optimisation de votre présence numérique. Sites, applications, outils de gestion — en collaboration avec notre partenaire technologique.",
    "pillars.3.partner": "En partenariat avec",

    // Partners
    "partners.title": "Nos",
    "partners.titleHighlight": "partenaires",

    // Pitch
    "pitch.prefix": "Nos",
    "pitch.highlight": "expériences touchent, inspirent et rassemblent.",
    "pitch.cta": "On en parle?",
    "pitch.subcta": "Dites-nous votre projet, on le rend réel.",
    "pitch.footer": "JAXA Production · Montréal",
    "pitch.virginie.role": "Production · Direction de projets",
    "pitch.pierre.role": "Numérique · Développement",

    // Metadata
    "meta.title": "JAXA Production - Expériences immersives et audacieuses",
    "meta.description": "Nous créons des expériences immersives, mémorables et audacieuses, où la culture, l'humain et la créativité rayonnent au centre de chaque projet. JAXA Production, Montréal.",
  },
  en: {
    // Navigation
    "nav.projects": "Projects",
    "nav.team": "Team",
    "nav.services": "Services",
    "nav.partners": "Partners",
    "nav.contact": "Contact",

    // Ticker
    "ticker.news": "News text coming soon",

    // Hero Portfolio
    "hero.subtitle": "Original Productions",
    "hero.tagline": "We create immersive, memorable and bold experiences.",
    "hero.cta": "Project details",
    "hero.project1.name": "Dernier rappel",
    "hero.project1.category": "In distribution",
    "hero.project2.name": "Les amis d'Axelle",
    "hero.project2.category": "In distribution",
    "hero.project3.name": "Les anciens",
    "hero.project3.category": "In distribution",
    "hero.project4.name": "Dysmorphia",
    "hero.project4.category": "In production",
    "hero.project5.name": "Cibles rouges",
    "hero.project5.category": "In development",
    "hero.project6.name": "Immersive project",
    "hero.project6.category": "In prototyping",

    // Catalogue
    "catalogue.title": "Our",
    "catalogue.titleHighlight": "projects",
    "catalogue.demo": "Watch demo",
    "catalogue.project1.desc": "An immersive animated biopic based on the archives of opera singer Joseph Rouleau. Through a posthumous conversation with director Émilie Rosas, the work aims to dust off the world of opera and reveal Joseph Rouleau, a great pioneer of lyric art in Quebec.",
    "catalogue.project1.genre": "VR Documentary",
    "catalogue.project1.format": "20 min",
    "catalogue.project1.credits": "Direction: Émilie Rosas & Colas Wohlfahrt · In collaboration with Les Films Camera Oscura",
    "catalogue.project1.tech": "Meta Quest 2 (LBE & Oculus Store)",
    "catalogue.project1.festivals": "SXSW 2024 · FNC Montréal 2023 · Avanca · Pordenone Docs · Aesthetica · FIVARS",
    "catalogue.project2.desc": "Axelle introduces children to sports, cultural and educational activities through the personal experience of her friends. The kids share their passions and the challenges they face in pursuing them.",
    "catalogue.project2.genre": "Children's web series",
    "catalogue.project2.format": "Series",
    "catalogue.project2.credits": "Direction: Virginie Jaffredo · With: Axelle Michaud · Distribution: HG Distribution",
    "catalogue.project3.desc": "The idea was born from meeting an elderly woman in Châteaudouble, a village in the south of France. Like thousands of elders around the world, she represents the living memory of her village. A tourist trail focused on the stories of elders, with thematic stations and videos accessible via QR code.",
    "catalogue.project3.genre": "Tourist trail",
    "catalogue.project3.format": "Interactive experience",
    "catalogue.project3.credits": "Pierre Michaud & Sylvain Caron · 8 thematic stations · Videos max 2 min · Multilingual subtitles",
    "catalogue.project4.desc": "A sensitive artistic project exploring the complex theme of body dysmorphia. The experience confronts visitors with themselves, with their reflection, to spark reflection on the perception of our bodies through a mirror.",
    "catalogue.project4.genre": "Interactive experience",
    "catalogue.project4.format": "Installation",
    "catalogue.project4.credits": "Original idea: Sarah Sozzi",
    "catalogue.project5.desc": "Who were the German prisoners of war in Canada during World War II? Cibles Rouges is an incursion into the daily lives of prisoners — officers, soldiers, German Jewish civilians. The experience traces their destinies and questions the treatment of prisoners of war in current conflicts.",
    "catalogue.project5.genre": "Immersive museum experience",
    "catalogue.project5.format": "FR · EN · DE",
    "catalogue.project5.credits": "Original idea and direction: Catherine Veaux-Logeat · In collaboration with Les Films Camera Oscura",
    "catalogue.project6.desc": "An immersive virtual reality experience. A whispering forest, a world to discover.",
    "catalogue.project6.genre": "XR / Immersive",
    "catalogue.project6.format": "VR Experience",
    "catalogue.project6.credits": "",

    // Team Duo
    "team.subtitle": "Who we are",
    "team.title": "Two expertises.",
    "team.titleHighlight": "One vision.",
    "team.virginie.name": "Virginie Jaffredo",
    "team.virginie.role": "President and Producer",
    "team.virginie.point1": "Creative and immersive project direction",
    "team.virginie.point2": "Administration, budgets, production tracking",
    "team.virginie.point3": "Main client interface — your point of contact",
    "team.virginie.point4": "Experience in digital and XR production",
    "team.pierre.name": "Pierre Michaud",
    "team.pierre.role": "Digital Producer · AI Developer",
    "team.pierre.point1": "25 years experience — CBC/Radio-Canada, Olympics",
    "team.pierre.point2": "Digital expertise and AI development",
    "team.pierre.point3": "Design, build and deploy",
    "team.pierre.point4": "Websites, applications, custom tools",
    "team.stat1.value": "10+",
    "team.stat1.label": "productions",
    "team.stat2.value": "100%",
    "team.stat2.label": "creative",
    "team.stat3.value": "0",
    "team.stat3.label": "compromise",

    // Tagline
    "tagline.prefix": "Our",
    "tagline.highlight": "experiences touch, inspire and unite.",
    "tagline.cta": "Our projects",

    // Modal
    "modal.title": "Our",
    "modal.titleHighlight": "projects",

    // Pillars (Services)
    "pillars.title": "Our",
    "pillars.titleHighlight": "pillars",
    "pillars.1.title": "Ideation & Creation",
    "pillars.1.desc": "Reveal the full potential of creators and businesses through innovative, adapted and visionary strategies. From initial idea to final production.",
    "pillars.2.title": "Project Administration",
    "pillars.2.desc": "Complete support for creative projects. Budgets, timelines, team coordination, logistics — so you can focus on creating.",
    "pillars.3.title": "Digital Expertise",
    "pillars.3.desc": "Optimize your digital presence. Websites, applications, management tools — in collaboration with our technology partner.",
    "pillars.3.partner": "In partnership with",

    // Partners
    "partners.title": "Our",
    "partners.titleHighlight": "partners",

    // Pitch
    "pitch.prefix": "Our",
    "pitch.highlight": "experiences touch, inspire and unite.",
    "pitch.cta": "Let's talk?",
    "pitch.subcta": "Tell us your project, we'll make it real.",
    "pitch.footer": "JAXA Production · Montréal",
    "pitch.virginie.role": "Production · Project Direction",
    "pitch.pierre.role": "Digital · Development",

    // Metadata
    "meta.title": "JAXA Production - Immersive and bold experiences",
    "meta.description": "We create immersive, memorable and bold experiences, where culture, humanity and creativity shine at the center of each project. JAXA Production, Montréal.",
  },
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>("fr");

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale;
    if (saved === "en" || saved === "fr") {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
    document.documentElement.lang = newLocale;
  }, []);

  const t = useCallback((key: string): string => {
    return translations[locale][key] || key;
  }, [locale]);

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useTranslation = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useTranslation must be used within I18nProvider");
  }
  return context;
};
