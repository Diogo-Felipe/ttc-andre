class PatientProfileController {
  constructor(patientModel, errorhandler) {
    this.patientModel = patientModel;
    this.errorhandler = errorhandler;
  }

  async index(request, response) {
    const { cpf } = request.query;

    const patient = await this.patientModel.getPatientByCpf(cpf);

    if (!patient) {
      return response
        .status(404)
        .json({ error: this.errorhandler.getErrorMessage("patientNotFound") });
    }

    return response.status(200).json(patient);
  }

  async create(request, response) {
    const { cpf, name, responsibleName, doctorCpf, gender, interactionsList } =
      request.body;

    const user = await this.patientModel.createPatient(
      cpf,
      name,
      responsibleName,
      doctorCpf,
      gender,
      interactionsList
    );

    return response.json(user);
  }

  async delete(request, response) {
    const { cpf } = request.query;

    const patient = await this.patientModel.deletePatientByCpf(cpf);

    return response.status(204).json(patient);
  }
}

module.exports = PatientProfileController;
