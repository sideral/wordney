from flask import Flask, request
from flask_restful import Resource, Api
from gensim.models import KeyedVectors
import nltk
import random

app = Flask(__name__)
api = Api(app)
model = KeyedVectors.load(r"embeddings/vectors.300.kv")

with open('data/nouns.txt', 'r') as file:
    nouns = [noun.replace('\n', '') for noun in file.readlines()]


class RandomWords(Resource):
    def get(self):
        first_word = nouns[random.randint(0, len(nouns) - 1)]
        second_word = nouns[random.randint(0, len(nouns) - 1)]
        return {'words': [first_word, second_word]}


class SimilarWords(Resource):
    def get(self, word):
        similar = model.most_similar([word], topn=30)
        result = [item[0] for item in similar]
        tagged = nltk.pos_tag(result)
        nouns = [tag[0] for tag in tagged if (tag[1] == "NN" or tag[1] == "NNS")]
        return {'words': nouns[0:15]}


api.add_resource(RandomWords, '/random-words')
api.add_resource(SimilarWords, '/similar-words/<string:word>')

if __name__ == '__main__':
    app.run(debug=True)