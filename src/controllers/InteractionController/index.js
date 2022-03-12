class InteractionController {
  constructor(interactionModel, errorhandler) {
    this.interactionModel = interactionModel;
    this.errorhandler = errorhandler;
  }

  async index(request, response) {
    const { id } = request.query;

    const interaction = await this.interactionModel.getInteractionById(id);

    if (!interaction) {
      return response
        .status(404)
        .json({ error: this.errorhandler.getErrorMessage("interactionNotFound") });
    }

    return response.status(200).json(interaction);
  }

  async create(request, response) {
    const { name, description } = request.body;

    await this.interactionModel.createInteraction(name, description);

    return response.status(201).json({ name, description });
  }

  async delete(request, response) {
    const { id } = request.query;

    const interaction = await this.interactionModel.deleteInteractionById(id);

    return response.status(204).json(interaction);
  }
}

module.exports = InteractionController;
