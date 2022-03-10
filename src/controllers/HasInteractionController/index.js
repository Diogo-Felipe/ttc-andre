const { hasInteractionModel } = require("../../Models");

const { ErrorMessages } = require("../../utils");

module.exports = {
  async index(request, response) {
    const { cpf } = request.query;

    const interaction = await hasInteractionModel.getAllUserInteractionByUserCpf(cpf);

    if (!interaction) {
      return response.status(404).json({ error: ErrorMessages.userDontHaveInteraction });
    }

    return response.status(200).json(interaction);
  },

  async create(request, response) {
    const { cpf, id } = request.body;

    const interaction = await hasInteractionModel.getUserInteractionByCpfAndId(cpf, id);

    if (interaction) {
      return response.status(400).json({ error: ErrorMessages.userHaveInteraction });
    }

    await hasInteractionModel.createUserInteraction(cpf, id);

    return response.status(201).json({ cpf, id });
  },

  async delete(request, response) {
    const { cpf, id } = request.query;

    const interaction = await hasInteractionModel.deleteUserInteraction(cpf, id);

    return response.status(204).json(interaction);
  },
};
