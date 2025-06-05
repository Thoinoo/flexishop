
//  Ajouter un produit avec attributs dynamiques
db.produits.insertOne({
  nom: "Sweat capuche",
  categorie: "Vêtements",
  prix: 29.99,
  stock: 25,
  disponible: true,
  dateAjout: ISODate("2025-06-05"),
  attributs: { taille: "S", couleur: "Rouge", genre: "Unisexe" }
});

//  Modifier un champ dans attributs
db.produits.updateOne(
  { nom: "Puzzle 1500 pièces" }, // on filtre sur un champs
  { $set: { "attributs.difficulte": "Très difficile" } } // on modifie le champs voulue
);

//  Récupérer tous les produits d'une catégorie donnée (ex: Vêtements)
db.produits.find({ categorie: "Vêtements" });

//  Trouver les puzzles de plus de 1000 pièces
db.produits.find({
  categorie: "Jeux",
  "attributs.nbPieces": { $gt: 1000 }
});

//  Trouver les vêtements disponibles en taille "M"
db.produits.find({
  categorie: "Vêtements",
  disponible: true,
  "attributs.taille": "M"
});

//  Calculer la valeur totale du stock par catégorie
db.produits.aggregate([
  {
    $group: {
      _id: "$categorie",
      valeurStock: { $sum: { $multiply: ["$prix", "$stock"] } } // pour chaque article on calcul la valeur puis on fait la somme de ces valeurs
    }
  }
]);

//  Générer un top 3 des catégories les plus chères (en moyenne)
db.produits.aggregate([
  {
    $group: {
      _id: "$categorie",
      prixMoyen: { $avg: "$prix" } // on group par catégorie pour ensuite obtenir la moyenne du prix
    }
  },
  { $sort: { prixMoyen: -1 } }, // on trie dans l'ordre décroissant
  { $limit: 3 } // on limite le nombre de résultats à trois
]);

//  Obtenir une répartition des produits selon leur disponibilité
db.produits.aggregate([
  {
    $group: {
      _id: "$disponible", // on groupe par disponibilité
      total: { $sum: 1 } // on comptabilise le nombre d'articles différents et non la somme de leur stock
    }
  }
]);

