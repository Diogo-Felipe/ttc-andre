const { patientModel } = require("../../Models");

const { ErrorMessages } = require("../../utils");

module.exports = {
  async index(request, response) {
    const { cpf } = request.query;

    const patient = await patientModel.getPatientByCpf(cpf);

    if (!patient) {
      return response
        .status(404)
        .json({ error: ErrorMessages.patientNotFound });
    }

    return response.status(200).json(patient);
  },

  async create(request, response) {
    const { cpf, name, responsibleName, doctorCpf, gender } = request.body;

    const user = await patientModel.createPatient(
      cpf,
      name,
      responsibleName,
      doctorCpf,
      gender
    );

    return response.json(user);
  },

  async delete(request, response) {
    const { cpf } = request.query;

    const patient = await patientModel.deletePatientByCpf(cpf);

    return response.status(204).json(patient);
  },
};
