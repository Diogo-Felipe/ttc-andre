const express = require("express");

const {
  PatientProfileController,
  PatientController,
  DoctorController,
  DoctorLoginController,
} = require("../controllers");

const {
  verifySession
} = require("./middlewares")

const routes = express.Router();

routes.post("/doctorLogin", DoctorLoginController.index);

routes.get("/patients", verifySession, PatientController.index);

routes.get("/doctor", DoctorController.index);
routes.post("/doctor", DoctorController.create);
routes.delete("/doctor", DoctorController.delete);

routes.get("/patient", PatientProfileController.index);
routes.post("/patient", verifySession, PatientProfileController.create);

module.exports = routes;
