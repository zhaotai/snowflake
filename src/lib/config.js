module.exports = {
  HAPI: {
    local: {
      url: 'http://127.0.0.1:5000'
    },
    remote: {
      url: 'http://mysnowflake-zhaotai.rhcloud.com'
    }
  },
  PARSE: {
    APP_ID: '',
    REST_API_KEY: '',
    SESSION_TOKEN_KEY: 'SESSION_TOKEN_KEY'
  },
  backend: {
    parse: false,
    hapiRemote: true,
    hapiLocal: false
  }
}
