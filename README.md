# Portfolio — Anthia Diallo

Site vitrine personnel développé en HTML, CSS et JavaScript natifs (sans framework).
BUT Informatique — Université Sorbonne Paris Nord.

🔗 **Site en ligne :** https://[ton-pseudo].github.io/Portfolio-Anthia/

## Structure

```
Portfolio-Anthia/
├── index.html          # Page unique (one-page scroll)
├── css/
│   ├── style.css       # Design, layout, composants
│   └── animations.css  # Révélations au scroll, transitions
├── js/
│   └── main.js         # Navigation, filtres projets, animations
├── assets/
│   ├── photo.jpg       # ← à ajouter
│   └── CV_Anthia_Diallo.pdf  # ← à ajouter
├── GUIDE.md            # Guide de rédaction (à supprimer avant rendu)
└── README.md
```

## Sections

1. **Hero** — accroche et présentation immédiate
2. **Qui suis-je** — histoire, valeurs, projet professionnel
3. **Parcours** — formation et expérience + téléchargement du CV
4. **Compétences** — techniques (4 catégories) + blocs de compétences BUT
5. **Projets** — 9 projets filtrables par technologie/compétence
6. **Veille technologique** — sujets suivis et sources
7. **Savoir-être** — soft skills illustrées
8. **Contact**

## Choix techniques

- **Aucun framework** : HTML/CSS/JS natifs, pour maîtriser entièrement le rendu
- **Séparation des responsabilités** : structure (HTML), présentation (CSS), comportement (JS)
- **Variables CSS** pour la cohérence graphique et la maintenabilité
- **IntersectionObserver** pour les animations au défilement (performant, pas de listener scroll coûteux)
- **Filtrage des projets** par attributs `data-tags`, sans rechargement
- **Responsive** : grilles CSS adaptatives, menu burger en mobile
- **Accessibilité** : `aria-pressed` sur les filtres, focus visible, `prefers-reduced-motion` respecté

## Développement local

**Option 1 — VS Code + Live Server**
Clic droit sur `index.html` → *Open with Live Server*

**Option 2 — Serveur Python**
```bash
python3 -m http.server 8000
```
Puis http://localhost:8000

## Déploiement

Hébergé sur GitHub Pages :
Settings → Pages → Deploy from a branch → `main` → `/ (root)`

## Mise à jour du contenu

- **Ajouter un projet** : dupliquer un bloc `.projet-item` et renseigner `data-tags`
  (valeurs possibles : `java`, `python`, `sql`, `data`, `web`, `systeme`, `equipe`)
- **Ajouter un filtre** : ajouter un `<button class="filter-btn" data-filter="...">`
- **Modifier un niveau de compétence** : attribut `data-level` (0 à 100)

## Licence

Contenu personnel — tous droits réservés.
