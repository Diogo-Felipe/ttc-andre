const md5 = require("md5");
class CryptoHandler {
  encrypt = (value) => {
    return md5(value);
  };
}

module.exports = CryptoHandler;
