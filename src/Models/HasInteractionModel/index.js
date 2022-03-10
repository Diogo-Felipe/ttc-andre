class HasInteractionModel {
  constructor(connection) {
    this.connection = connection;
  }

  async getUserInteractionByCpfAndId(cpf, id) {
    return await this.connection("hasInteraction")
    .select("*")
    .where("cpf", cpf)
    .andWhere("id", id)
    .first();
  }

  async createUserInteraction(cpf, id) {
    return await this.connection("hasInteraction").insert({
      cpf,
      id,
    });
  }

  async deleteUserInteraction(cpf, id) {
    return await this.connection("hasInteraction")
      .where("cpf", cpf)
      .andWhere("id", id)
      .delete();
  }

  async getAllUserInteractionByUserCpf(cpf) {
    return await this.connection("hasInteraction")
      .select("patient.name", "interaction.name", "interaction.description")
      .join("patient", "patient.cpf", "=", "hasInteraction.cpf")
      .join("interaction", "interaction.id", "=", "hasInteraction.id")
      .where("patient.cpf", cpf);
  }
}

module.exports = HasInteractionModel;
