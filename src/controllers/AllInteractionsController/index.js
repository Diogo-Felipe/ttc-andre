const connection = require("../../database/connection");

module.exports = {
  async index(request, response) {
    const [count] = await connection("interaction").count();

    const interactions = await connection("interaction").select(
      "id",
      "name",
      "description"
    );

    response.header("X-Total-Count", count["count(*)"]);
    return response.status(200).json(interactions);
  },
};
