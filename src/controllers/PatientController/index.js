const { patientModel } = require("../../Models");

module.exports = {
  async index(request, response) {
    const { doctorCpf } = request.query;

    const patient = await patientModel.getAllDoctorPatientsByDoctorCpf(
      doctorCpf
    );

    return response.status(200).json(patient);
  },
};
