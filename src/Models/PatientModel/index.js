class Patient {
  constructor(connection) {
    this.connection = connection;
  }

  async getPatientByCpf(cpf) {
    return await this.connection("patient")
      .select(
        "patient.cpf",
        "patient.name",
        "patient.responsibleName",
        "patient.gender",
        "doctor.name as doctorName"
      )
      .join("doctor", "patient.doctorCpf", "=", "doctor.cpf")
      .where("patient.cpf", cpf)
      .first();
  }

  async createPatient(cpf, name, responsibleName, doctorCpf, gender) {
    return await this.connection("patient").insert({
      cpf,
      name,
      responsibleName,
      doctorCpf,
      gender,
    });
  }

  async deletePatientByCpf(cpf) {
    return await connection("patient").where("cpf", cpf).delete();
  }

  async getAllDoctorPatientsByDoctorCpf(doctorCpf) {
    return await this.connection("patient")
    .select(
      "patient.cpf",
      "patient.name",
      "patient.responsibleName",
      "patient.gender"
    )
    .join("doctor", "patient.doctorCpf", "=", "doctor.cpf")
    .where("patient.doctorCpf", doctorCpf);
  }
}

module.exports = Patient;
