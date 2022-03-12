class DoctorSession {
  constructor(tokenModel, errorhandler) {
    this.tokenModel = tokenModel;
    this.errorhandler = errorhandler;
  }

  async verify(request, response, next) {
    const { doctorCpf } = request.query;

    const authorization = request.get("Authorization");

    if (!doctorCpf) {
      response
        .status(401)
        .json({
          error: this.errorhandler.getErrorMessage("doctorCpfNotProvided"),
        });
      return;
    }

    if (!authorization) {
      response
        .status(401)
        .json({ error: this.errorhandler.getErrorMessage("tokenNotProvided") });
      return;
    }

    const tokenValid = await this.tokenModel.isValidToken(
      authorization,
      doctorCpf
    );

    if (!tokenValid) {
      response
        .status(401)
        .json({ error: this.errorhandler.getErrorMessage("invalidToken") });
      return;
    }

    next();
  }
}

module.exports = DoctorSession;
