import config from 'config';

export default class Api {
  static fetchWordPair(degrees) {
    return fetch(`${config.apiUrl}/word-pair/${degrees}`)
            .then((response) => response.json())
            .then((data) => data.words)
            .catch(console.error);
  }

  static fetchRelatedWords(word) {
    return fetch(`${config.apiUrl}/similar-words/${word}`)
            .then((response) => response.json())
            .then((data) => data.words)
            .catch(console.error);
  }
}