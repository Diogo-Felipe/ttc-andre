const { authModel, tokenModel } = require("../../Models");

const { ErrorMessages } = require("../../utils");

module.exports = {
  async index(request, response) {
    const { cpf, password, sessionTime } = request.body;

    const doctor = await authModel.login(cpf, password);

    if (!doctor) {
      return response
        .status(404)
        .json({ error: ErrorMessages.invalidCredentials });
    }

    const token = await tokenModel.createToken(cpf, sessionTime);

    if (!token) {
      return response
        .status(500)
        .json({ error: ErrorMessages.createTokenError });
    }

    return response.status(200).json({ doctor, token });
  },
};
