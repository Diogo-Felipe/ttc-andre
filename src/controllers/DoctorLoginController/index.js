class DoctorLoginController {
  constructor(authModel, tokenModel, errorhandler) {
    this.authModel = authModel;
    this.tokenModel = tokenModel;
    this.errorhandler = errorhandler;
  }

  async index(request, response) {
    const { cpf, password, sessionTime } = request.body;

    const doctor = await this.authModel.login(cpf, password);

    if (!doctor) {
      return response
        .status(404)
        .json({
          error: this.errorhandler.getErrorMessage("invalidCredentials"),
        });
    }

    const token = await this.tokenModel.createToken(cpf, sessionTime);

    if (!token) {
      return response
        .status(500)
        .json({ error: this.errorhandler.getErrorMessage("createTokenError") });
    }

    return response.status(200).json({ doctor, token });
  }
}

module.exports = DoctorLoginController;
