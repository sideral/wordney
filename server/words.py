import nltk

with open('data/english.txt', 'r') as file:
    lines = [line.replace('\n', '') for line in file.readlines()]

tagged = nltk.pos_tag(lines)

# Filter nouns
nouns = [tag[0] for tag in tagged if tag[1] == "NN" and len(tag[0]) > 2]

with open('data/nouns.txt', 'w') as out:
    for noun in nouns:
        out.write(noun + '\n')
