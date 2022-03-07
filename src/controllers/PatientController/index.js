const connection = require("../../database/connection");

module.exports = {
  async index(request, response) {
    const { doctorCpf } = request.query;

    const patient = await connection("patient")
      .select(
        "patient.cpf",
        "patient.name",
        "patient.responsibleName",
        "patient.gender"
      )
      .join("doctor", "patient.doctorCpf", "=", "doctor.cpf")
      .where("patient.doctorCpf", doctorCpf);

    return response.status(200).json(patient);
  },
};
