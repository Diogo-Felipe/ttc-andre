const connection = require("../../database/connection");

const { ErrorMessages } = require("../../utils/ErrorHandler");

module.exports = {
  async index(request, response) {
    const { cpf } = request.query;

    const interaction = await connection("hasInteraction")
      .select("patient.name", "interaction.name", "interaction.description")
      .join("patient", "patient.cpf", "=", "hasInteraction.cpf")
      .join("interaction", "interaction.id", "=", "hasInteraction.id")
      .where("patient.cpf", cpf);

    if (!interaction) {
      return response.status(404).json({ error: ErrorMessages.userDontHaveInteraction });
    }

    return response.status(200).json(interaction);
  },

  async create(request, response) {
    const { cpf, id } = request.body;

    const interaction = await connection("hasInteraction")
      .select("*")
      .where("cpf", cpf)
      .andWhere("id", id)
      .first();

    if (interaction) {
      return response.status(400).json({ error: ErrorMessages.userHaveInteraction });
    }

    await connection("hasInteraction").insert({
      cpf,
      id,
    });

    return response.status(201).json({ cpf, id });
  },

  async delete(request, response) {
    const { cpf, id } = request.query;

    const interaction = await connection("hasInteraction")
      .where("cpf", cpf)
      .where("id", id)
      .delete();

    return response.status(204).json(interaction);
  },
};
