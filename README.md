# MyWebPlace — Site vitrine

Site vitrine moderne et responsive pour **MyWebPlace**, service de conseil et
d'accompagnement spécialisé dans le développement des ventes en ligne
(Marketplace · E-commerce · Création de sites web).

Construit en **HTML, CSS et JavaScript natifs** — aucune dépendance, aucun
framework, **sans WordPress**.

## Structure

```
mywebplace-v2/
├── index.html                      # Accueil
├── services.html                   # Services (Marketplace / E-commerce / Création)
├── realisations.html               # Réalisations (portfolio filtrable)
├── a-propos.html                   # À propos
├── contact.html                    # Contact (formulaire validé en JS)
├── mentions-legales.html           # Mentions légales
├── politique-confidentialite.html  # Politique de confidentialité (RGPD)
├── README.md
└── assets/
    ├── css/style.css               # Tout le design (responsive inclus)
    ├── js/main.js                  # Menu mobile, animations, FAQ, filtres, formulaire
    └── images/                     # Vos visuels (voir README.txt)
```

## Identité visuelle — Premium SaaS

Direction artistique inspirée de Stripe, Shopify et HubSpot : beaucoup d'espaces
blancs, ombres légères, cartes modernes, boutons élégants et hero impactant.

| Couleur          | Code      | Usage                                          |
|------------------|-----------|------------------------------------------------|
| Bleu principal   | `#8CC6FF` | Aplats, chips d'icônes, accents, sections sombres |
| Bleu nuit        | `#081D2D` | Texte fort, CTA, sections sombres, footer      |
| Blanc            | `#FFFFFF` | Fonds, texte sur fonds sombres                 |
| Fond clair       | `#F8FAFC` | Sections alternées                             |

> Note : pour garantir un contraste accessible, les **textes et liens d'accent**
> sur fond clair utilisent une nuance dérivée (`#2F86D6`), tandis que la couleur
> de marque `#8CC6FF` est utilisée en aplats et sur les fonds sombres.

Les icônes sont des **SVG vectoriels** (aucun emoji décoratif).

## Fonctionnalités

- Design moderne, professionnel et **100 % responsive** (mobile, tablette, desktop)
- Menu de navigation mobile (burger)
- Animations d'apparition au défilement
- Portfolio filtrable par catégorie (Réalisations)
- Accordéon FAQ (Services)
- Formulaire de contact avec **validation côté client**
- Header dynamique au scroll, année du footer automatique
- Icônes SVG vectorielles + visuels en CSS pur — aucune image lourde requise

## Lancer le site

Ouvrez simplement `index.html` dans un navigateur, ou servez le dossier :

```bash
# Python
python -m http.server 8000
# puis http://localhost:8000
```

## À personnaliser avant mise en production

- Coordonnées réelles (e-mail, téléphone, adresse) dans le footer et la page Contact
- Informations légales dans `mentions-legales.html` et `politique-confidentialite.html`
- Connexion du formulaire de contact à un service d'envoi d'e-mails (back-end ou service tiers)
- Ajout du logo, du favicon et des images dans `assets/images/`
