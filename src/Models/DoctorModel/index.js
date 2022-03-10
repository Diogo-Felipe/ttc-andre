const { encrypt } = require("../../utils");

class Doctor {

  constructor(connection){
    this.connection = connection
  }

  async getADoctorByCpf(cpf){
    return await this.connection("doctor")
    .select("cpf", "name", "affiliation", "email", "phone")
    .where("cpf", cpf)
    .first();
  }

  async createDoctor(cpf, name, affiliation, email, phone, password){
    return await this.connection("doctor").insert({
      cpf,
      name,
      password: encrypt(password),
      affiliation,
      email,
      phone,
    })
  }

  async deleteDoctorByCpf(cpf){
    return await this.connection("doctor").where("cpf", cpf).delete();
  }

} 

module.exports = Doctor;