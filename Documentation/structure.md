**structure.json**

```json
{
  "nom": "string",
  "categorie": "string",
  "prix": "float",
  "stock": "int",
  "disponible": "bool",
  "dateAjout": "date",
  "attributs": "object (clé-valeur spécifique à la catégorie)"
}
```

---

**Explication :**

* `nom` : le nom du produit.
* `categorie` : catégorie principale du produit (ex. Vêtements, Jeux, Informatique).
* `prix` : prix unitaire du produit.
* `stock` : quantité disponible.
* `disponible` : état de disponibilité.
* `dateAjout` : date d'ajout du produit, qui est crée automatiquement en fonction de la réelle date d'ajout
* `attributs` : objet JSON flexible qui varie selon la catégorie. Par exemple :

  * Vêtements → `{ taille, couleur, genre }`
  * Jeux → `{ nbPieces, difficulte, format }`
  * Informatique → `{ marque, connectivite, autonomie }`.

On a décidé de ne pas mettre de contraintes sur "attributs" pour garder de la flexibilité. D'autres données peuvent être ajouté dans "attributs" et les champs ne sont pas obligatoire
