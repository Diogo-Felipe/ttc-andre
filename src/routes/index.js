const express = require("express");

const {
  PatientController,
  DoctorController,
  DoctorLoginController,
} = require("../controllers");

const routes = express.Router();

routes.post("/doctorLogin", DoctorLoginController.index);

routes.get("/doctor", DoctorController.index);
routes.post("/doctor", DoctorController.create);
routes.delete("/doctor", DoctorController.delete);

routes.get("/patient", PatientController.index);
routes.post("/patient", PatientController.create);

module.exports = routes;
