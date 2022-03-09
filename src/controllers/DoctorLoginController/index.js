const connection = require("../../database/connection");

const { encrypt } = require("../../utils/CryptoHandler");
const { createToken } = require("../../utils/TokenHandler");
const { ErrorMessages } = require("../../utils/ErrorHandler");

module.exports = {
  async index(request, response) {
    const { cpf, password, sessionTime } = request.body;

    const doctor = await connection("doctor")
      .select("cpf", "name")
      .where("cpf", cpf)
      .andWhere("password", encrypt(password))
      .first();

    if (!doctor) {
      return response
        .status(404)
        .json({ error: ErrorMessages.invalidCredentials });
    }

    const token = await createToken(cpf, sessionTime);

    if (!token) {
      return response
        .status(500)
        .json({ error: ErrorMessages.createTokenError });
    }

    return response.status(200).json({ doctor, token });
  },
};
