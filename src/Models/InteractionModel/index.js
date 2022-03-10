class Interaction {
  constructor(connection) {
    this.connection = connection;
  }

  async getInteractionById(id) {
    return await this.connection("interaction")
      .select("id", "name", "description")
      .where("id", id)
      .first();
  }

  async createInteraction(name, description) {
    return await this.connection("interaction").insert({
      name,
      description,
    });
  }

  async deleteInteractionById(id) {
    return await this.connection("interaction").where("id", id).delete();
  }

  async getAllInteractions() {
    return await this.connection("interaction").select(
      "id",
      "name",
      "description"
    );
  }
}

module.exports = Interaction;
