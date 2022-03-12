const express = require("express");

const {
  patientProfileController,
  patientController,
  doctorController,
  doctorLoginController,
  interactionController,
  hasInteractionController,
  allInteractionsController,
} = require("../controllers");

const routes = express.Router();

routes.post("/doctorLogin", (request, response) =>
  doctorLoginController.index(request, response)
);

routes.get("/auth/patients", (request, response) =>
  patientController.index(request, response)
);

routes.get("/doctor", (request, response) =>
  doctorController.index(request, response)
);
routes.post("/doctor", (request, response) =>
  doctorController.create(request, response)
);
routes.delete("/doctor", (request, response) =>
  doctorController.delete(request, response)
);

routes.get("/patient", (request, response) =>
  patientProfileController.index(request, response)
);
routes.post("/auth/patient", (request, response) =>
  patientProfileController.create(request, response)
);
routes.delete("/auth/patient", (request, response) =>
  patientProfileController.delete(request, response)
);

routes.get("/interaction", (request, response) =>
  interactionController.index(request, response)
);
routes.post("/adm/interaction", (request, response) =>
  interactionController.create(request, response)
);
routes.delete("/auth/interaction", (request, response) =>
  interactionController.delete(request, response)
);

routes.get("/hasInteraction", (request, response) =>
  hasInteractionController.index(request, response)
);
routes.post("/auth/hasInteraction", (request, response) =>
  hasInteractionController.create(request, response)
);
routes.delete("/auth/hasInteraction", (request, response) =>
  hasInteractionController.delete(request, response)
);

routes.get("/allInteractions", (request, response) =>
  allInteractionsController.index(request, response)
);

module.exports = routes;
