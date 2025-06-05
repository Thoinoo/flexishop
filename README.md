# FlexiShop

## Présentation du projet

FlexiShop est une plateforme e-commerce vendant des produits variés tels que des vêtements, des puzzles ou de l’électronique. Chaque produit possède des attributs différents selon sa catégorie. Ce projet a pour objectif de :

* Créer une base de données MongoDB.
* Implémenter des requêtes adaptées aux besoins de FlexiShop (filtrage, agrégation).
* Développer une API RESTful pour interagir avec la base de données.

## Contenu du projet

* **documentation/** : la documentation du projet :

  * `structure.md` : structure de la base de données.
  * `insert_data.js` : script d’initialisation avec des données réalistes.
  * `requetes.js` : requêtes MongoDB pour les besoins spécifiques.
  * `rapport.md` : rapport synthétique sur les choix techniques.
* **app.py** : code principal de l’API RESTful avec Flask.
* **requirements.txt** : dépendances Python nécessaires.
* **config.py** : configuration de la base de données et des paramètres généraux.

## Prérequis

* Python 3.13 ou supérieur.
* MongoDB installé et démarré.

## Installation

1. Installer les dépendances :

   ```
   pip install -r requirements.txt
   ```

2. remplir la base de données avec le script init_data.js :


## Lancer l’API

Lancer le serveur Flask :

```
python app.py
```

L’API sera accessible à l’adresse suivante :

```
http://localhost:5000/
```
ou l'ip du serveur mongoDB s'il ne se trouve pas sur la même machine

## Structure de l’API

* **GET /produits** : lister les produits (avec filtrage possible par catégorie).
* **GET /produits/<id>** : obtenir un produit par ID.
* **POST /produits** : ajouter un nouveau produit.
* **PUT /produits/<id>** : mettre à jour un produit.
* **DELETE /produits/<id>** : supprimer un produit.
* **GET /stats/valeur-stock** : valeur totale du stock par catégorie.
* **GET /stats/top-categories** : top 3 des catégories les plus chères.
* **GET /stats/repartition-disponibilite** : répartition des produits disponibles et non disponibles.

## Notes

* Toutes les requêtes MongoDB sont disponibles dans le fichier `documentation/requetes.js`.
* La structure de la base de données est décrite dans `documentation/structure.json`.

## Auteurs

* Antoine Garnier
* Jean-Christophe Malinur
* Maxence Rio
