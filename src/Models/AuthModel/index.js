class Auth {
  constructor(connection, cryptoHandler) {
    this.connection = connection;
    this.cryptoHandler = cryptoHandler;
  }

  async login(cpf, password) {
    return await this.connection("doctor")
      .select("cpf", "name")
      .where("cpf", cpf)
      .andWhere("password", this.cryptoHandler.encrypt(password))
      .first();
  }
}

module.exports = Auth;
