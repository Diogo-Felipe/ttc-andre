const {
  interactionModel,
  doctorModel,
  authModel,
  tokenModel,
  hasInteractionModel,
  patientModel
} = require("../Models");

const PatientProfileController = require("./PatientProfileController");
const PatientController = require("./PatientController");
const DoctorController = require("./DoctorController");
const DoctorLoginController = require("./DoctorLoginController");
const InteractionController = require("./InteractionController");
const HasInteractionController = require("./HasInteractionController");
const AllInteractionsController = require("./AllInteractionsController");

const allInteractionsController = new AllInteractionsController(
  interactionModel
);
const hasInteractionController = new HasInteractionController(
  hasInteractionModel
);
const doctorLoginController = new DoctorLoginController(authModel, tokenModel);
const doctorController = new DoctorController(doctorModel);
const interactionController = new InteractionController(interactionModel);
const patientController = new PatientController(patientModel);
const patientProfileController = new PatientProfileController(patientModel);

module.exports = {
  patientProfileController,
  patientController,
  doctorController,
  doctorLoginController,
  interactionController,
  hasInteractionController,
  allInteractionsController,
};
