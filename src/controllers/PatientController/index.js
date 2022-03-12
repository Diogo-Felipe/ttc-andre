class PatientController {
  constructor(patientModel) {
    this.patientModel = patientModel;
  }
  async index(request, response) {
    const { doctorCpf } = request.query;

    const patient = await this.patientModel.getAllDoctorPatientsByDoctorCpf(
      doctorCpf
    );

    return response.status(200).json(patient);
  }
}

module.exports = PatientController;
