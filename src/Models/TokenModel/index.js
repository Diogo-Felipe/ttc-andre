const { encrypt } = require("../../utils");

const VALID_TIME_IN_SECONDS = 1800;

class TokenModel {
  constructor(connection) {
    this.connection = connection;
  }

  async createToken(doctorCpf, validTimeInSeconds = VALID_TIME_IN_SECONDS) {
    const tokenHash = encrypt(new Date().getTime());
    const token = await this.connection("token").insert({
      tokenHash,
      doctorCpf,
      validTimeInSeconds,
    });

    if (!token) {
      return null;
    }

    const tokenObject = await this.connection("token")
      .select("tokenHash", "validTimeInSeconds")
      .where("tokenHash", tokenHash)
      .first();

    return tokenObject;
  }

  async isValidToken(tokenHash, doctorCpf) {
    const token = await this.connection("token")
      .select("*")
      .where("tokenHash", tokenHash)
      .andWhere("doctorCpf", doctorCpf)
      .first();

    if (!token) {
      return false;
    }

    if (token.validTimeInSeconds) {
      const today = new Date();
      const now = today.getTime() + today.getTimezoneOffset() * 60 * 1000;
      const tokenExpiration =
        new Date(token.createdAt).getTime() + token.validTimeInSeconds * 1000;

      if (now > tokenExpiration) {
        return false;
      }
    }

    return true;
  }
}

module.exports = TokenModel;
