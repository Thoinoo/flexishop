from flask import Flask, request, jsonify
from pymongo import MongoClient
from bson import ObjectId
import datetime
import config

app = Flask(__name__)
client = MongoClient(config.MONGO_URI)
db = client[config.DB_NAME]
produits = db[config.COLLECTION_NAME]


def serialize_produit(produit):
    produit['_id'] = str(produit['_id'])
    return produit

# GET /produits → liste (filtrée par catégorie optionnelle)
@app.route('/produits', methods=['GET'])
def get_produits():
    query = {}
    categorie = request.args.get('categorie')
    if categorie:
        query['categorie'] = categorie
    produits = list(db.produits.find(query))
    produits = [serialize_produit(p) for p in produits]
    return jsonify(produits)

# GET /produits/<id> → un produit
@app.route('/produits/<id>', methods=['GET'])
def get_produit(id):
    produit = db.produits.find_one({'_id': ObjectId(id)})
    if produit:
        return jsonify(serialize_produit(produit))
    return jsonify({'error': 'Produit non trouvé'}), 404

# POST /produits → ajouter un produit
@app.route('/produits', methods=['POST'])
def create_produit():
    data = request.json
    # Valider les champs minimaux requis (à compléter selon besoin)
    required_fields = ['nom', 'categorie', 'prix', 'stock', 'disponible', 'attributs']
    if not all(field in data for field in required_fields):
        return jsonify({'error': 'Champs requis manquants'}), 400
    data['dateAjout'] = datetime.datetime.utcnow()
    result = db.produits.insert_one(data)
    return jsonify({'message': 'Produit ajouté', 'id': str(result.inserted_id)}), 201

# PUT /produits/<id> → modifier un produit
@app.route('/produits/<id>', methods=['PUT'])
def update_produit(id):
    data = request.json
    if not data:
        return jsonify({'error': 'Aucune donnée reçue'}), 400
    # Autoriser mise à jour partielle, y compris attributs dynamiques
    result = db.produits.update_one({'_id': ObjectId(id)}, {'$set': data})
    if result.matched_count == 0:
        return jsonify({'error': 'Produit non trouvé'}), 404
    return jsonify({'message': 'Produit mis à jour'})

# DELETE /produits/<id> → supprimer un produit
@app.route('/produits/<id>', methods=['DELETE'])
def delete_produit(id):
    result = db.produits.delete_one({'_id': ObjectId(id)})
    if result.deleted_count == 0:
        return jsonify({'error': 'Produit non trouvé'}), 404
    return jsonify({'message': 'Produit supprimé'})

# GET /stats/valeur-stock → valeur totale du stock par catégorie
@app.route('/stats/valeur-stock', methods=['GET'])
def valeur_stock():
    pipeline = [
        {
            "$group": {
                "_id": "$categorie",
                "valeurStock": { "$sum": { "$multiply": ["$prix", "$stock"] } }
            }
        }
    ]
    result = list(db.produits.aggregate(pipeline))
    # Nettoyer la sortie pour JSON
    for r in result:
        r['categorie'] = r.pop('_id')
    return jsonify(result)

# GET /stats/top-categories → top 3 des catégories les plus chères (prix moyen)
@app.route('/stats/top-categories', methods=['GET'])
def top_categories():
    pipeline = [
        {
            "$group": {
                "_id": "$categorie",
                "prixMoyen": { "$avg": "$prix" }
            }
        },
        { "$sort": { "prixMoyen": -1 } },
        { "$limit": 3 }
    ]
    result = list(db.produits.aggregate(pipeline))
    for r in result:
        r['categorie'] = r.pop('_id')
    return jsonify(result)

# GET /stats/repartition-disponibilite → répartition produits selon disponibilité
@app.route('/stats/repartition-disponibilite', methods=['GET'])
def repartition_disponibilite():
    pipeline = [
        {
            "$group": {
                "_id": "$disponible",
                "total": { "$sum": 1 }
            }
        }
    ]
    result = list(db.produits.aggregate(pipeline))
    repartition = {str(r['_id']): r['total'] for r in result}
    return jsonify(repartition)

if __name__ == '__main__':
    app.run(debug=True)