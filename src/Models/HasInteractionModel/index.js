class HasInteractionModel {
  constructor(connection) {
    this.connection = connection;
  }

  async getUserInteractionByCpfAndIdList(cpf, idList) {
    const exitingInteractions = await this.connection("hasInteraction")
      .select("*")
      .whereIn("id", idList)
      .where("cpf", cpf);

    return idList.filter((id) => {
      return !exitingInteractions.find((interaction) => interaction.id === id);
    })
  }

  async getUserInteractionByCpfAndId(cpf, id) {
    return await this.connection("hasInteraction")
      .select("*")
      .where("cpf", cpf)
      .andWhere("id", id)
      .first();
  }

  async createUserInteraction(cpf, interactionsList) {
    return await this.connection("hasInteraction").insert(
      interactionsList.map((interaction) => ({ cpf, id: interaction }))
    );
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
