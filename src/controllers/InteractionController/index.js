const connection = require("../../database/connection");

module.exports = {
  async index(request, response) {
    const { id } = request.query;

    const interaction = await connection("interaction")
      .select("id", "name", "description")
      .where("id", id)
      .first();

    if(!interaction) {
      return response.status(404).json({ error: "Interaction not found" });
    }

    return response.status(200).json(interaction);
  },

  async create(request, response) {
    const { name, description } = request.body;

    await connection("interaction").insert({
      name,
      description,
    });

    return response.status(201).json({ name, description });
  },

  async delete(request, response) {
    const { id } = request.query;

    const interaction = await connection("interaction")
      .where("id", id)
      .delete();

    return response.status(204).json(interaction);
  },
};
