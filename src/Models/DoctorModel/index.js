class Doctor {

  constructor(connection, cryptoHandler){
    this.connection = connection
    this.cryptoHandler = cryptoHandler;
  }

  async getADoctorByCpf(cpf){
    return await this.connection("doctor")
    .select("cpf", "name", "affiliation", "email", "phone")
    .where("cpf", cpf)
    .first();
  }

  async createDoctor(cpf, name, affiliation, email, phone, password){

    //TODO: Validate Information
    return await this.connection("doctor").insert({
      cpf,
      name,
      password: this.cryptoHandler.encrypt(password),
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