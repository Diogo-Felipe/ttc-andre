const { ErrorMessages } = require("../../utils");

module.exports = {
  async verifyAdmSession(request, response, next) {
    const email = request.get("email");
    const admPass = request.get("admPass");

    if (!admPass) {
      response.status(401).json({ error: ErrorMessages.admPassNotProvided });
      return;
    }

    if (!email) {
      response.status(401).json({ error: ErrorMessages.emailNotProvided });
      return;
    }


    if (email !== "andre@adm.com" || admPass !== "123") {
      response.status(401).json({ error: ErrorMessages.invalidCredentials });
      return;
    }

    next();
  },
};