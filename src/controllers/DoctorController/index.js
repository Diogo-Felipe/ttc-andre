const { ErrorMessages } = require("../../utils");
class DoctorController {

  constructor(doctorModel) {
    this.doctorModel = doctorModel;
  }

  async index(request, response) {
    const { cpf } = request.query;

    if (!cpf) {
      return response.status(400).json({ error: ErrorMessages.cpfRequired });
    }

    const doctor = await this.doctorModel.getADoctorByCpf(cpf);

    if (!doctor) {
      return response.status(404).json({ error: ErrorMessages.doctorNotFound });
    }

    return response.status(200).json(doctor);
  }

  async create(request, response) {
    const { cpf, name, affiliation, email, phone, password } = request.body;

    const doctorCheck = await this.doctorModel.getADoctorByCpf(cpf);

    if (doctorCheck) {
      return response
        .status(400)
        .json({ error: ErrorMessages.doctorAlreadyExist });
    }

    const doctor = await this.doctorModel.createDoctor(
      cpf,
      name,
      affiliation,
      email,
      phone,
      password
    );

    return response.status(201).json({ doctor });
  }

  async delete(request, response) {
    const { cpf } = request.query;

    const doctor = await this.doctorModel.deleteDoctorByCpf(cpf);

    return response.status(204).json(doctor);
  }
}

module.exports = DoctorController;{

};
