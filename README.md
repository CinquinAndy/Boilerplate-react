# ARHI
https://confluence.infotel.com/pages/viewpage.action?pageId=106959734

## Installation du projet
### Prérequis
- Installer NodeJS (18.15.0 LTS)
- Installer pnpm (latest)

### Installation
- Cloner le projet
- Se placer dans le dossier du projet
- Lancer la commande `pnpm install`
- Lancer la commande `pnpm dev`

## Présentation du projet
### Description
Ce projet est un projet de test pour la mise en place d'une architecture front-end ReactJS.

### Architecture du projet
- `public` : dossier contenant les fichiers statiques (favicon, manifest, images, etc...)
- `src` : dossier contenant le code source du projet
- `src/api` : dossier contenant les requêtes (fetch)
- `src/components` : dossier contenant les composants React (la logique métier)
  - `src/components/{NomDuComposant}` : Le nom du composant doit être en PascalCase
    - `src/components/{NomDuComposant}/{NomDuComposant}.tsx` : Le fichier principal du composant
    - `src/components/{NomDuComposant}/{NomDuComposant}.module.scss` : Le fichier de style du composant (scopé au composant)
    - `src/components/{NomDuComposant}/{NomDuComposant}.test.ts` : Le fichier de test unitaire du composant
- `src/e2e` : dossier contenant les tests e2e (Cypress)
- `src/pages` : dossier contenant les pages React (plus simpliste, la logique métier est dans les composants)
- `src/routes` : dossier contenant les routes (react-router)
- `src/stores` : dossier contenant les clés du store (react-query)
- `src/styles` : dossier contenant les styles globaux (variables, mixins, fonctions, etc...)
- `src/translations` : dossier contenant les traductions (i18n)
- `src/types` : dossier contenant les types (interfaces, types, etc...)
- `src/utils` : dossier contenant les utilitaires (fonctions réutilisable, etc...)
- `src/main.tsx` : fichier principal du projet (point d'entrée)
- package.json : fichier de configuration du projet (pnpm) !! Les chapeaux devant les dépendances ne sont pas à mettre dans le package.json !!

### Lien confluence
https://confluence.infotel.com/pages/viewpage.action?pageId=106955723

### Choix des technos & Roadmap
- [X] React Router
- [X] i18n (internationalisation)
- [X] React Query ( pour les requêtes & le cache coté client & le store )
- [X] Bibliothèque front :  MUI
- [ ] Bibliothèque de test :  ( Jest + Cypress + Sorry-Cypress par exemple )
- [X] Configuration Linter & Editeur de code : ( Eslint + Prettier + EditorConfig par exemple )
- [ ] Notification utilisateur : ( React-toastify par exemple // Ou composants de Mui ? )
- [X] Material icon
- [ ] Bibliothèque d'utilitaire : ( Ramda par exemple + DayJS / Moment / Luxon pour la gestion des dates )
- [X] Vite en builder 
- [X] pnpm en gestionnaire de paquets 

### Le projet de test en lui même
- [x] Exemple de composants
- [x] Exemple de pages
- [x] Exemple de routes
- [x] Exemple de requêtes
- [x] Exemple de guardian
- [X] Exemple de store
- [ ] Exemple de test unitaire
- [ ] Exemple de test e2e
- [ ] Exemple de test de performance
- [ ] Exemple de TNR
- [ ] Exemple de Notification (avec composant mui global)
- [ ] Exemple d'internationalisation
- [ ] Exemple de gestion des erreurs
- [ ] Exemple de gestion des logs
- [ ] Exemple de gestion des permissions
- [ ] Exemple de gestion des thèmes
