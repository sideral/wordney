from gensim.scripts.glove2word2vec import glove2word2vec
from gensim.models import KeyedVectors

output_file = "embeddings/gensim_w2v300_vectors.txt"

glove2word2vec(glove_input_file="embeddings/glove.6B.300d.txt", word2vec_output_file=output_file)

model = KeyedVectors.load_word2vec_format(output_file, binary=False)

model.save("embeddings/vectors.300.kv")