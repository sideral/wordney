
const config = {
  development: {
    apiUrl: 'http://127.0.0.1:5000'
  },
  test: {
    apiUrl: 'http://127.0.0.1:5000'
  },
  production: {
    apiUrl: 'http://127.0.0.1:5000'
  }
};

export default config[process.env.NODE_ENV];