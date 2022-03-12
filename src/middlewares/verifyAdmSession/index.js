class AdmSession {
  constructor(errorhandler) {
    this.errorhandler = errorhandler;
  }

  async verify(request, response, next) {
    const email = request.get("email");
    const admPass = request.get("admPass");

    if (!admPass) {
      response.status(401).json({ error: this.errorhandler.getErrorMessage("admPassNotProvided") });
      return;
    }

    if (!email) {
      response.status(401).json({ error: this.errorhandler.getErrorMessage("emailNotProvided") });
      return;
    }


    if (email !== "andre@adm.com" || admPass !== "123") {
      response.status(401).json({ error: this.errorhandler.getErrorMessage("invalidCredentials") });
      return;
    }

    next();
  }
}

module.exports = AdmSession