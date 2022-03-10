const { encrypt } = require("../../utils");

class Auth {
  constructor(connection) {
    this.connection = connection;
  }

  async login(cpf, password) {
    return await this.connection("doctor")
      .select("cpf", "name")
      .where("cpf", cpf)
      .andWhere("password", encrypt(password))
      .first();
  }
}

module.exports = Auth;
