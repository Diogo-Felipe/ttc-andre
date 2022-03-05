const express = require("express");

const {
  PatientController,
  DoctorController,
} = require("../controllers");

const routes = express.Router();

routes.get("/doctor", DoctorController.index);
routes.post("/doctor", DoctorController.create);
routes.delete("/doctor", DoctorController.delete);

routes.get("/patient", PatientController.index);
routes.post("/patient", PatientController.create);

module.exports = routes;
