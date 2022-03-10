const { interactionModel } = require("../../Models");

module.exports = {
  async index(request, response) {
    const interactions = await interactionModel.getAllInteractions();

    return response.status(200).json(interactions);
  },
};
