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
    const { cpf, interactionsList } = request.body;

    const interactions = await hasInteractionModel.getUserInteractionByCpfAndIdList(cpf, interactionsList);

    if (!interactions) {
      return response.status(400).json({ error: ErrorMessages.userHaveAllInteractions });
    }

    await hasInteractionModel.createUserInteraction(cpf, interactions);

    return response.status(201).json({ cpf, interactions });
  },

  async delete(request, response) {
    const { cpf, id } = request.query;

    const interaction = await hasInteractionModel.deleteUserInteraction(cpf, id);

    return response.status(204).json(interaction);
  },
};
