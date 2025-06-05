use flexishopDB;

db.produits.insertMany([
  {
    nom: "T-shirt col rond",
    categorie: "Vêtements",
    prix: 19.99,
    stock: 30,
    disponible: true,
    dateAjout: ISODate("2025-06-01"),
    attributs: { taille: "M", couleur: "Bleu", genre: "Homme" }
  },
  {
    nom: "Jean slim",
    categorie: "Vêtements",
    prix: 49.99,
    stock: 20,
    disponible: true,
    dateAjout: ISODate("2025-06-02"),
    attributs: { taille: "L", couleur: "Noir", genre: "Femme" }
  },
  {
    nom: "Robe d'été",
    categorie: "Vêtements",
    prix: 39.99,
    stock: 15,
    disponible: true,
    dateAjout: ISODate("2025-06-03"),
    attributs: { taille: "S", couleur: "Rouge", genre: "Femme" }
  },
  {
    nom: "Sweat à capuche",
    categorie: "Vêtements",
    prix: 29.99,
    stock: 25,
    disponible: false,
    dateAjout: ISODate("2025-06-04"),
    attributs: { taille: "XL", couleur: "Gris", genre: "Unisexe" }
  },
  {
    nom: "Pantalon cargo",
    categorie: "Vêtements",
    prix: 34.99,
    stock: 10,
    disponible: true,
    dateAjout: ISODate("2025-06-05"),
    attributs: { taille: "M", couleur: "Vert", genre: "Homme" }
  },
  {
    nom: "Puzzle 1500 pièces",
    categorie: "Jeux",
    prix: 24.99,
    stock: 12,
    disponible: true,
    dateAjout: ISODate("2025-06-01"),
    attributs: { nbPieces: 1500, difficulte: "Difficile", format: "Paysage" }
  },
  {
    nom: "Puzzle 500 pièces",
    categorie: "Jeux",
    prix: 12.99,
    stock: 20,
    disponible: true,
    dateAjout: ISODate("2025-06-02"),
    attributs: { nbPieces: 500, difficulte: "Facile", format: "Portrait" }
  },
  {
    nom: "Puzzle 1000 pièces",
    categorie: "Jeux",
    prix: 18.99,
    stock: 8,
    disponible: false,
    dateAjout: ISODate("2025-06-03"),
    attributs: { nbPieces: 1000, difficulte: "Moyenne", format: "Carré" }
  },
  {
    nom: "Puzzle 2000 pièces",
    categorie: "Jeux",
    prix: 29.99,
    stock: 5,
    disponible: true,
    dateAjout: ISODate("2025-06-04"),
    attributs: { nbPieces: 2000, difficulte: "Expert", format: "Panoramique" }
  },
  {
    nom: "Puzzle 300 pièces",
    categorie: "Jeux",
    prix: 9.99,
    stock: 18,
    disponible: true,
    dateAjout: ISODate("2025-06-05"),
    attributs: { nbPieces: 300, difficulte: "Débutant", format: "Panoramique" }
  },
  {
    nom: "Ordinateur portable",
    categorie: "Informatique",
    prix: 899.99,
    stock: 5,
    disponible: true,
    dateAjout: ISODate("2025-06-01"),
    attributs: { marque: "Dell", connectivite: "WiFi", autonomie: "10h" }
  },
  {
    nom: "Casque Bluetooth",
    categorie: "Informatique",
    prix: 199.99,
    stock: 12,
    disponible: true,
    dateAjout: ISODate("2025-06-02"),
    attributs: { marque: "Sony", connectivite: "Bluetooth", autonomie: "30h" }
  },
  {
    nom: "Souris sans fil",
    categorie: "Informatique",
    prix: 29.99,
    stock: 25,
    disponible: true,
    dateAjout: ISODate("2025-06-03"),
    attributs: { marque: "Logitech", connectivite: "Wireless", autonomie: "12 mois" }
  },
  {
    nom: "Clavier mécanique",
    categorie: "Informatique",
    prix: 79.99,
    stock: 10,
    disponible: false,
    dateAjout: ISODate("2025-06-04"),
    attributs: { marque: "Corsair", connectivite: "USB", autonomie: "N/A" }
  },
  {
    nom: "Enceinte portable",
    categorie: "Informatique",
    prix: 59.99,
    stock: 18,
    disponible: true,
    dateAjout: ISODate("2025-06-05"),
    attributs: { marque: "JBL", connectivite: "Bluetooth", autonomie: "15h" }
  },
  {
    nom: "T-shirt graphique",
    categorie: "Vêtements",
    prix: 22.99,
    stock: 22,
    disponible: true,
    dateAjout: ISODate("2025-06-06"),
    attributs: { taille: "M", couleur: "Blanc", genre: "Unisexe" }
  },
  {
    nom: "Puzzle 750 pièces",
    categorie: "Jeux",
    prix: 14.99,
    stock: 14,
    disponible: true,
    dateAjout: ISODate("2025-06-07"),
    attributs: { nbPieces: 750, difficulte: "Intermédiaire", format: "Carré" }
  },
  {
    nom: "Smartphone milieu de gamme",
    categorie: "Informatique",
    prix: 499.99,
    stock: 7,
    disponible: true,
    dateAjout: ISODate("2025-06-08"),
    attributs: { marque: "Samsung", connectivite: "5G", autonomie: "24h" }
  },
  {
    nom: "Short de sport",
    categorie: "Vêtements",
    prix: 19.99,
    stock: 16,
    disponible: false,
    dateAjout: ISODate("2025-06-09"),
    attributs: { taille: "L", couleur: "Noir", genre: "Homme" }
  }
]);
