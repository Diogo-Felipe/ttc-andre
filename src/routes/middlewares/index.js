const { isValidToken } = require("../../utils/TokenHandler");

module.exports = {
  async verifySession(request, response, next) {
    const { doctorCpf } = request.query;

    const authorization = request.get("Authorization");

    if (!doctorCpf) {
      var error = new Error("Doctor cpf not provided");
      error.status = 401;
      return next(error);
    }

    if (!authorization) {
      var error = new Error("Token not provided");
      error.status = 401;
      return next(error);
    }

    const tokenValid = await isValidToken(authorization, doctorCpf);

    if (!tokenValid) {
      var error = new Error("Invalid token");
      error.status = 401;
      return next(error);
    }

    next();
  },
};
