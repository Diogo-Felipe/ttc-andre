const ErrorMessages = {
  doctorAlreadyExist: "Doctor already exists",
  doctorNotFound: "Doctor not found",
  invalidCredentials: "Invalid credentials",
  createTokenError: "Error creating token",
  userDontHaveInteraction: "User do not have this interaction",
  userHaveInteraction : "User already have this interaction",
  userHaveAllInteractions : "User already have all interactions",
  interactionNotFound: "Interaction not found",
  patientNotFound : "Patient not found",
  doctorCpfNotProvided: "Doctor cpf not provided",
  tokenNotProvided: "Token not provided",
  invalidToken: "Invalid token",
  cpfRequired: "CPF required",
  admPassNotProvided: "Adm pass not provided",
  emailNotProvided: "Email not provided",
};
class Errorhandler {
  getErrorMessage(error){
    return ErrorMessages[error];
  }
}



module.exports = { ErrorMessages };
