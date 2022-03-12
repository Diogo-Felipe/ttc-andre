class DoctorController {
  constructor(doctorModel, errorhandler) {
    this.doctorModel = doctorModel;
    this.errorhandler = errorhandler;
  }

  async index(request, response) {
    const { cpf } = request.query;

    if (!cpf) {
      return response
        .status(400)
        .json({ error: this.errorhandler.getErrorMessage("cpfRequired") });
    }

    const doctor = await this.doctorModel.getADoctorByCpf(cpf);

    if (!doctor) {
      return response
        .status(404)
        .json({ error: this.errorhandler.getErrorMessage("doctorNotFound") });
    }

    return response.status(200).json(doctor);
  }

  async create(request, response) {
    const { cpf, name, affiliation, email, phone, password } = request.body;

    const doctorCheck = await this.doctorModel.getADoctorByCpf(cpf);

    if (doctorCheck) {
      return response
        .status(400)
        .json({
          error: this.errorhandler.getErrorMessage("doctorAlreadyExist"),
        });
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

module.exports = DoctorController;
{
}
