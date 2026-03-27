# WORKING_LOG — Jaxa Micho

## Session 2026-03-27

### Progrès
- Logos partenaires : corrigé Normal Studio et Hubblo (fond noir → transparent, pixels forcés blanc)
- Augmenté taille Camera Obscura et Neek Studio (maxH: 80, maxW: 240)
- Retiré le hover opacity sur les logos partenaires (était 0.5 → 1 au hover, maintenant toujours 1)
- Hero mobile : grille 2 colonnes (au lieu de 1), centrée avec `margin: 0 auto`
- Hero cards : ratio 2/3, image non croppée (`objectPosition: center center`), légère surlargueur 105% pour masquer bordures
- Column gap augmenté entre les hero cards
- Modal projets mobile : bordures retirées, images à 80% largeur, taille naturelle
- Image dernier-rappel.png : croppé les bordures grises
- Icône Pillars "Expertise numérique" : remplacé jaxa-icon.png (J) par studio-micho-icon.png (M)
- Ajouté toutes les traductions anglaises du catalogue (6 projets complets)
- CTA pitch : "On en jase?" → "On en parle?"
- TypeScript fix : `onClick={() => onOpenModal()}` pour compatibilité MouseEventHandler

### Décisions techniques
- **Logos blancs** : Normal et Hubblo ont `noFilter: true` car leurs sources sont déjà blanches. Les autres passent par `brightness(0) invert(1)`
- **Taille logos** : Camera Obscura et Neek ont des propriétés `maxH`/`maxW` custom car les images sources sont petites
- **Mobile hero 2 colonnes** : choix de garder 2 cartes par rangée même sur petit écran plutôt qu'une seule, pour un look plus dense
- **Modal images mobile** : `width: 80%` centré, pas pleine largeur, avec `position: relative` et `height: auto` pour respecter le ratio naturel des affiches

### Problèmes rencontrés
- Les logos Normal et Hubblo avaient un fond noir opaque même sur jaxa.ca — il a fallu retirer le fond en Python (PIL)
- Le filtre CSS `brightness(0) invert(1)` + `opacity: 0.5` rendait tout gris — retiré l'opacity et le hover
- L'image dernier-rappel.png avait des bordures grises (~187,187,187) intégrées dans le fichier source, difficiles à détecter au premier crop
- Le build Netlify échouait sur une erreur TypeScript (MouseEventHandler vs number)
- Le SSL Let's Encrypt a pris du temps car le DNS .ca propage lentement

### Infrastructure
- Repo GitHub : pierremichaudpm/jaxamicho (SSH)
- Netlify : jaxamicho.netlify.app → jaxa.ca
- DNS nettoyé sur GoDaddy : retiré tous les vieux records secureserver.net, gardé MX Google + CNAME Google Workspace

### Prochaines étapes
- Vérifier le rendu desktop de la modal (images côte à côte avec texte)
- Vérifier que le SSL est bien provisionné sur jaxa.ca
- Tester toutes les pages en anglais pour valider les traductions
- Possiblement ajouter des liens vers les sites des partenaires
- Optimiser les images (compression, formats modernes)
