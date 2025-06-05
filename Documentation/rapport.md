# Rapport

## 1. Choix de modélisation

Pour répondre à la diversité des produits vendus par FlexiShop, j’ai choisi un modèle **flexible et centré sur un seul document `produits`** avec un champ `attributs` de type objet JSON. Ce champ contient les caractéristiques spécifiques à chaque catégorie (ex : taille, couleur pour les vêtements ; nbPieces, difficulté pour les puzzles ; marque, autonomie pour l’informatique). Il n'y à pas de contraintes sur ce champs, il peut contenir aucune données ou plusieurs. Cela peut entrainer des problèmes de cohérence mais offre une grande flexibilité.
Ce modèle évite de multiplier les collections et s’appuie sur la force de MongoDB : la gestion de documents hétérogènes dans une même collection. Il offre aussi la souplesse nécessaire pour ajouter facilement de nouvelles catégories ou attributs sans changer la structure.

---

## 2. Difficultés rencontrées

* **Gestion des données hétérogènes :** créer un jeu de données réaliste avec des attributs dynamiques et variés demandait de concevoir un script d’insertion soigneux.
* **Requêtes d’agrégation complexes :** il fallait calculer des agrégats sur des champs communs tout en respectant la diversité des documents. Les regroupements (group by) par catégorie et disponibilité ont nécessité une bonne compréhension des pipelines d’agrégation MongoDB.
* **API REST simple et efficace :** implémenter des routes couvrant à la fois le CRUD complet et des statistiques avancées tout en restant claire pour un futur tableau de bord.

---

## 3. Logique des requêtes

* **CRUD** : ajout, modification, lecture et suppression gèrent les produits de façon classique, avec prise en charge des attributs dynamiques.
* **Filtres spécifiques** : par exemple, retrouver uniquement les puzzles avec plus de 1000 pièces ou les vêtements disponibles en taille « M ».
* **Agrégations pour le dashboard** :

  * Calcul de la valeur totale en stock par catégorie (prix × stock).
  * Classement des catégories selon le prix moyen des produits (top 3).
  * Répartition simple des produits selon leur disponibilité.
    Ces requêtes répondent aux besoins métiers pour une vue rapide de l’inventaire et des tendances produits.

