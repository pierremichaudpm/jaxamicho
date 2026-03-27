# CLAUDE.md — Jaxa Micho

## Projet
Site vitrine de JAXA Production (maison de production audiovisuelle, Montréal).
Bilingue FR/EN, déployé sur Netlify avec domaine personnalisé jaxa.ca.

## Stack
- **Framework** : Next.js 16.1.1 (Turbopack)
- **React** : 19.2.3
- **CSS** : Tailwind 4 + styles inline (pas de CSS modules)
- **i18n** : Système maison via React Context (`lib/i18n.tsx`)
- **Déploiement** : Netlify (auto-deploy depuis GitHub `pierremichaudpm/jaxamicho`)
- **Domaine** : jaxa.ca (DNS GoDaddy → Netlify)
- **Repo** : git@github.com:pierremichaudpm/jaxamicho.git

## Structure
```
app/
  globals.css        # Styles globaux, responsive, grilles
  layout.tsx         # Layout racine avec I18nProvider
  page.tsx           # Page unique (SPA scroll)
components/
  HeroPortfolio.tsx  # Hero avec grille de 6 cartes projets
  ProjectsModal.tsx  # Modal catalogue complet des projets
  Partners.tsx       # Logos partenaires (10)
  Pillars.tsx        # 3 piliers de services
  TeamDuo.tsx        # Section équipe (Virginie + Pierre)
  Tagline.tsx        # Tagline animée
  Pitch.tsx          # CTA final + contacts
  Navigation.tsx     # Nav desktop (sidebar verticale) + mobile (hamburger)
  VerticalBrand.tsx  # Branding vertical sidebar
  Catalogue.tsx      # (unused?)
  LanguageToggle.tsx # Toggle FR/EN
lib/
  i18n.tsx           # Traductions FR/EN, contexte React
public/
  images/            # Affiches projets + logos partenaires
  jaxa-*.png/svg     # Logos JAXA (icon, flat, white, dark, og)
  studio-micho-icon.png  # Icône Studio Micho (M)
```

## Conventions
- Composants en inline styles (pas de classes CSS sauf pour responsive)
- Les media queries sont dans `<style jsx>` à l'intérieur des composants ou dans `globals.css`
- Les logos partenaires utilisent `filter: brightness(0) invert(1)` pour forcer le blanc, sauf Normal et Hubblo qui sont déjà blancs (`noFilter: true`)
- Les traductions sont gérées par clés dans `lib/i18n.tsx` — toujours ajouter FR et EN

## DNS (GoDaddy → Netlify)
- **A** @ → 75.2.60.5
- **CNAME** www → jaxamicho.netlify.app
- MX records Google Workspace intacts
- CNAME agenda/documents/mail → ghs.google.com (Google Workspace)
