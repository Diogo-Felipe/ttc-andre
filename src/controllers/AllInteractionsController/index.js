class AllInteractionsController {

  constructor(interactionModel) {
    this.interactionModel = interactionModel;
  }

  async index(request, response) {
    const interactions = await this.interactionModel.getAllInteractions();

    return response.status(200).json(interactions);
  }
}

module.exports = AllInteractionsController;
