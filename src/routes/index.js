const express = require("express");

const {
  PatientProfileController,
  PatientController,
  DoctorController,
  DoctorLoginController,
  InteractionController,
  HasInteractionController,
  AllInteractionsController,
} = require("../controllers");

const routes = express.Router();

routes.post("/doctorLogin", DoctorLoginController.index);

routes.get("/auth/patients", PatientController.index);

routes.get("/doctor", DoctorController.index);
routes.post("/doctor", DoctorController.create);
routes.delete("/doctor", DoctorController.delete);

routes.get("/patient", PatientProfileController.index);
routes.post("'/auth/patient", PatientProfileController.create);
routes.delete("'/auth/patient", PatientProfileController.delete);

routes.get("/interaction", InteractionController.index);
routes.post("/auth/interaction", InteractionController.create);
routes.delete("/auth/interaction", InteractionController.delete);

routes.get("/hasInteraction", HasInteractionController.index);
routes.post("/auth/hasInteraction", HasInteractionController.create);
routes.delete("/auth/hasInteraction", HasInteractionController.delete);

routes.get("/allInteractions", AllInteractionsController.index);

module.exports = routes;
