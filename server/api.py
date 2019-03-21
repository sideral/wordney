import nltk
import random
import re
from flask import Flask, request
from flask_restful import Resource, Api
from gensim.models import KeyedVectors
from flask_cors import CORS
from functools import lru_cache

app = Flask(__name__)
api = Api(app)
CORS(app)


class RandomWordPair(Resource):
    def get(self, degrees):
        nouns = get_nouns()
        first_word = nouns[random.randint(0, len(nouns) - 1)]
        second_word = first_word

        for i in range(degrees):
            similar_words = get_similar_words(second_word)
            second_word = similar_words[random.randint(0, len(similar_words) - 1)]

        return {'words': [first_word, second_word]}


class SimilarWords(Resource):
    def get(self, word):
        return {'words': get_similar_words(word)}


api.add_resource(RandomWordPair, '/word-pair/<int:degrees>')
api.add_resource(SimilarWords, '/similar-words/<string:word>')


def get_similar_words(word):
    model = load_vectors()
    # Check if the word exists in vocabulary, return 404 if not
    similar = model.most_similar([word], topn=50)
    result = [item[0] for item in similar]
    tagged = nltk.pos_tag(result)
    nouns = [tag[0] for tag in tagged if (tag[1] == "NN" or tag[1] == "NNS")]
    common = ["things", "something", "everything", "nothing", "anything", "thing", "anyone", "anybody", "nobody", "somebody", "everybody", "everyone", "knows"]
    less_common = [noun for noun in nouns if noun not in common]
    expr = re.compile('[0-9]+|@|\.')
    less_common = [word for word in less_common if not expr.search(word)]
    return less_common[0:25]


@lru_cache(maxsize=None)
def load_vectors():
    return KeyedVectors.load(r"data/embeddings/vectors.300.kv")


@lru_cache(maxsize=None)
def get_nouns():
    with open('data/nouns.txt', 'r') as file:
        return [noun.replace('\n', '') for noun in file.readlines()]


if __name__ == '__main__':
    app.run(debug=True)