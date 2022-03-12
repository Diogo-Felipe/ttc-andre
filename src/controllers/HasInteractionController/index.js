
const { ErrorMessages } = require("../../utils");
class hasInteractionController {
  constructor(hasInteractionModel) {
    this.hasInteractionModel = hasInteractionModel;
  }

  async index(request, response) {
    const { cpf } = request.query;

    const interaction =
      await this.hasInteractionModel.getAllUserInteractionByUserCpf(cpf);

    if (!interaction) {
      return response
        .status(404)
        .json({ error: ErrorMessages.userDontHaveInteraction });
    }

    return response.status(200).json(interaction);
  }

  async create(request, response) {
    const { cpf, interactionsList } = request.body;

    const interactions =
      await this.hasInteractionModel.getUserInteractionByCpfAndIdList(
        cpf,
        interactionsList
      );

    if (!interactions) {
      return response
        .status(400)
        .json({ error: ErrorMessages.userHaveAllInteractions });
    }

    await this.hasInteractionModel.createUserInteraction(cpf, interactions);

    return response.status(201).json({ cpf, interactions });
  }

  async delete(request, response) {
    const { cpf, id } = request.query;

    const interaction = await this.hasInteractionModel.deleteUserInteraction(
      cpf,
      id
    );

    return response.status(204).json(interaction);
  }
}

module.exports = hasInteractionController;
