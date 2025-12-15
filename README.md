# SpaceX Dashboard

Une application de tableau de bord pour visualiser les données de SpaceX réalisée par Baptiste Laborde.

## Fonctionnalités

L'application propose plusieurs pages pour explorer les différentes activités de SpaceX :

- **Dashboard** : Vue d'ensemble de l'entreprise SpaceX (informations générales, statistiques, localisation).
- **Rockets** : Liste détaillée des fusées développées par SpaceX.
- **Dragons** : Informations sur les capsules Dragon.
- **History** : Chronologie des événements marquants de l'histoire de SpaceX.
- **Landpads** : Détails sur les zones d'atterrissage.
- **Launches** : Historique et calendrier des lancements.
- **Ships** : Informations sur la flotte de navires de récupération et de support.

## Stack Technique

- **Next.js** : Framework React pour le développement de l'application.
- **Shadcn UI** : Librairie de composants réutilisables et accessibles.
- **Lucide React** : Collection d'icônes pour une interface visuelle cohérente.
- **SWR** : Bibliothèque pour la récupération de données avec gestion de cache et revalidation, utilisée via des hooks personnalisés.

## Documentation

Pour plus de détails sur les choix techniques, les fonctionnalités implémentées et les limitations, consultez le [dossier d'architecture (ADR)](ADR.md).

## Développement

L'intelligence artificielle a été utilisée pour aider à l'agencement des éléments et à la mise en page avec Tailwind CSS.

## Installation et Lancement

Pour lancer l'application en mode développement, utilisez la commande suivante :

```bash
pnpm dev
```

Ouvrez ensuite [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.
