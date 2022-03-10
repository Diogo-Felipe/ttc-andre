const { interactionModel } = require("../../Models");

const { ErrorMessages } = require("../../utils");

module.exports = {
  async index(request, response) {
    const { id } = request.query;

    const interaction = await interactionModel.getInteractionById(id);

    if (!interaction) {
      return response
        .status(404)
        .json({ error: ErrorMessages.interactionNotFound });
    }

    return response.status(200).json(interaction);
  },

  async create(request, response) {
    const { name, description } = request.body;

    await interactionModel.createInteraction(name, description);

    return response.status(201).json({ name, description });
  },

  async delete(request, response) {
    const { id } = request.query;

    const interaction = await interactionModel.deleteInteractionById(id);

    return response.status(204).json(interaction);
  },
};
