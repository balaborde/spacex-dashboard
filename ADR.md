# Architecture Decision Record (ADR) - SpaceX Dashboard

## 1. Contexte

Ce document décrit l'état actuel de l'application "SpaceX Dashboard", les choix techniques effectués, les fonctionnalités implémentées, ainsi que les limitations connues et les fonctionnalités non implémentées.

## 2. Architecture Technique

- **Framework** : Next.js 16 (App Router)
- **Langage** : TypeScript
- **Styling** : Tailwind CSS v4
- **Composants UI** : Radix UI (via shadcn/ui)
- **Data Fetching** : SWR pour la gestion des requêtes API
- **API** : SpaceX API v4 (https://api.spacexdata.com/v4)

## 3. Fonctionnalités Implémentées

L'application se concentre sur une vue d'ensemble des données SpaceX via plusieurs tableaux de bord.

### Routes et Vues Principales

Les fonctionnalités suivantes sont accessibles via la navigation principale :

- **Dashboard** (`/dashboard`) : Vue synthétique (actuellement un placeholder ou une vue résumée).
- **Rockets** (`/rockets`) : Liste des fusées (Falcon 1, Falcon 9, Falcon Heavy, Starship).
- **Dragons** (`/dragons`) : Liste des capsules Dragon.
- **Landpads** (`/landpads`) : Liste des zones d'atterrissage.
- **Ships** (`/ships`) : Liste des navires de récupération et de support.
- **History** (`/history`) : Historique des événements marquants de SpaceX.
- **Launches** (`/launches`) : Liste de tous les lancements.

### Gestion des Données

- Utilisation de hooks personnalisés (`useSpaceX`, `useRockets`, etc.) pour centraliser les appels API.
- Typage fort des données via des interfaces TypeScript (`Rocket`, `Dragon`, `Launch`, etc.).

## 4. Fonctionnalités Non Implémentées et Limitations

### Routes API "One" (Détails)

L'application actuelle se concentre sur les vues de type "Liste" (`getAll`). Les vues détaillées pour chaque entité (accessibles via les endpoints `/:id` de l'API) n'ont pas été implémentées par manque d'intérêt (les appels aux routes "all" suffisaient).

### Autres Entités de l'API

Certaines sections de l'API SpaceX v4 n'ont pas été intégrées dans le dashboard :

- **Capsules** : Détails des capsules individuelles (différent de `Dragons` qui sont les types de véhicules)
- **Cores** : Premier étage des fusées
- **Crew** : Informations sur les équipages
- **Payloads** : Charges utiles des missions
- **Launchpads** : Pas de tir (distinct de `Landpads`)
- **Starlink** : Données de la constellation Starlink
- **Roadster** : Position de la Tesla Roadster d'Elon Musk

### Carte Interactive (Map)

- **Non implémenté** : Une visualisation cartographique (Map) pour afficher la position des launchpads, des landpads ou simplement de SpaceX sur la page d'accueil du dashboard.

## 5. Conclusion

L'application fournit une base solide pour explorer les données principales de SpaceX. Les futures évolutions pourraient se concentrer sur l'ajout des vues détaillées ("One") et l'intégration d'une carte interactive pour enrichir l'expérience utilisateur.
