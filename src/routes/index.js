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

const { verifySession } = require("./middlewares");

const routes = express.Router();

routes.post("/doctorLogin", DoctorLoginController.index);

routes.get("/patients", verifySession, PatientController.index);

routes.get("/doctor", DoctorController.index);
routes.post("/doctor", DoctorController.create);
routes.delete("/doctor", DoctorController.delete);

routes.get("/patient", PatientProfileController.index);
routes.post("/patient", verifySession, PatientProfileController.create);
routes.delete("/patient", verifySession, PatientProfileController.delete);

routes.get("/interaction", InteractionController.index);
routes.post("/interaction", verifySession, InteractionController.create);
routes.delete("/interaction", verifySession, InteractionController.delete);

routes.get("/hasInteraction", HasInteractionController.index);
routes.post("/hasInteraction", verifySession, HasInteractionController.create);
routes.delete("/hasInteraction", verifySession, HasInteractionController.delete);

routes.get("/allInteractions", AllInteractionsController.index);

module.exports = routes;
