const { ErrorMessages } = require("../../utils");

const { doctorModel } = require("../../Models");

module.exports = {
  async index(request, response) {
    const { cpf } = request.query;

    if (!cpf) {
      return response.status(400).json({ error: ErrorMessages.cpfRequired });
    }

    const doctor = await doctorModel.getADoctorByCpf(cpf);

    if (!doctor) {
      return response.status(404).json({ error: ErrorMessages.doctorNotFound });
    }

    return response.status(200).json(doctor);
  },

  async create(request, response) {
    const { cpf, name, affiliation, email, phone, password } = request.body;

    const doctorCheck = await doctorModel.getADoctorByCpf(cpf);

    if (doctorCheck) {
      return response
        .status(400)
        .json({ error: ErrorMessages.doctorAlreadyExist });
    }

    const doctor = await doctorModel.createDoctor(
      cpf,
      name,
      affiliation,
      email,
      phone,
      password
    );

    return response.status(201).json({ doctor });
  },

  async delete(request, response) {
    const { cpf } = request.query;

    const doctor = await doctorModel.deleteDoctorByCpf(cpf);

    return response.status(204).json(doctor);
  },
};
