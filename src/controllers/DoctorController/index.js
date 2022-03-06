const connection = require("../../database/connection");
const { encrypt } = require("../../utils/CryptoHandler");

module.exports = {
  async index(request, response) {
    const { cpf } = request.query;

    const doctor = await connection("doctor")
      .select("cpf", "name")
      .where("cpf", cpf)
      .first();

    if (!doctor) {
      return response.status(404).json({ error: "Doctor not found" });
    }

    return response.status(200).json(doctor);
  },

  async create(request, response) {
    const { cpf, name, password } = request.body;

    const doctorCheck = await connection("doctor").where("cpf", cpf).first();

    if (doctorCheck) {
      return response.status(400).json({ error: "Doctor already exists" });
    }

    const doctor = await connection("doctor").insert({
      cpf,
      name,
      password: encrypt(password),
    });

    return response.status(201).json({ doctor });
  },

  async delete(request, response) {
    const { cpf } = request.query;

    const doctor = await connection("doctor").where("cpf", cpf).delete();

    return response.status(204).json(doctor);
  },
};