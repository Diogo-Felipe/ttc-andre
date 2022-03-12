const { ErrorMessages } = require("../../utils");

class DoctorLoginController {
  constructor(authModel, tokenModel) {
    this.authModel = authModel;
    this.tokenModel = tokenModel;
  }

  async index(request, response) {
    const { cpf, password, sessionTime } = request.body;

    const doctor = await this.authModel.login(cpf, password);

    if (!doctor) {
      return response
        .status(404)
        .json({ error: ErrorMessages.invalidCredentials });
    }

    const token = await this.tokenModel.createToken(cpf, sessionTime);

    if (!token) {
      return response
        .status(500)
        .json({ error: ErrorMessages.createTokenError });
    }

    return response.status(200).json({ doctor, token });
  }
}

module.exports = DoctorLoginController;
