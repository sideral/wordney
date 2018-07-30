from flask import Flask, request
from flask_restful import Resource, Api
from gensim.models import KeyedVectors
from flask_cors import CORS
import nltk
import random

app = Flask(__name__)
api = Api(app)
CORS(app)
model = KeyedVectors.load(r"data/embeddings/vectors.300.kv")

with open('data/nouns.txt', 'r') as file:
    nouns = [noun.replace('\n', '') for noun in file.readlines()]


class RandomWords(Resource):
    def get(self):
        first_word = nouns[random.randint(0, len(nouns) - 1)]
        second_word = nouns[random.randint(0, len(nouns) - 1)]
        return {'words': [first_word, second_word]}


class SimilarWords(Resource):
    def get(self, word):
        # Check if the word exists in vocabulary, return 404 if not
        similar = model.most_similar([word], topn=50)
        result = [item[0] for item in similar]
        tagged = nltk.pos_tag(result)
        nouns = [tag[0] for tag in tagged if (tag[1] == "NN" or tag[1] == "NNS")]
        common = ["things", "something", "everything", "nothing", "anything", "thing", "anyone"]
        less_common = [noun for noun in nouns if noun not in common]
        return {'words': less_common[0:40]}


class WordArithmetic(Resource):
    def get(self, word):
        similar = model.most_similar(positive=[word, 'machine'], negative=['animal', 'number'], topn=1)
        result = [item[0] for item in similar]
        return {'words': result}


api.add_resource(RandomWords, '/random-words')
api.add_resource(SimilarWords, '/similar-words/<string:word>')
api.add_resource(WordArithmetic, '/word-arithmetic/<string:word>')


if __name__ == '__main__':
    app.run(debug=True)