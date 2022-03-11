const { tokenModel } = require("../../Models");
const { ErrorMessages } = require("../../utils");

module.exports = {
  async verifyDoctorSession(request, response, next) {
    const { doctorCpf } = request.query;

    const authorization = request.get("Authorization");

    if (!doctorCpf) {
      response.status(401).json({ error: ErrorMessages.doctorCpfNotProvided });
      return;
    }

    if (!authorization) {
      response.status(401).json({ error: ErrorMessages.tokenNotProvided });
      return;
    }

    const tokenValid = await tokenModel.isValidToken(authorization, doctorCpf);

    if (!tokenValid) {
      response.status(401).json({ error: ErrorMessages.invalidToken });
      return;
    }

    next();
  },
};
