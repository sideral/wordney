import config from 'config';

export default class Api {
  static fetchRandomWords() {
    return fetch(`${config.apiUrl}/random-words`)
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