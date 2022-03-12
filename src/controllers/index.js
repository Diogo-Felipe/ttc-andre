const {
  interactionModel,
  doctorModel,
  authModel,
  tokenModel,
  hasInteractionModel,
  patientModel
} = require("../Models");

const { Errorhandler } = require("../utils");

const PatientProfileController = require("./PatientProfileController");
const PatientController = require("./PatientController");
const DoctorController = require("./DoctorController");
const DoctorLoginController = require("./DoctorLoginController");
const InteractionController = require("./InteractionController");
const HasInteractionController = require("./HasInteractionController");
const AllInteractionsController = require("./AllInteractionsController");

const errorhandler = new Errorhandler();

const allInteractionsController = new AllInteractionsController(
  interactionModel
);
const hasInteractionController = new HasInteractionController(
  hasInteractionModel, errorhandler
);
const doctorLoginController = new DoctorLoginController(authModel, tokenModel, errorhandler);
const doctorController = new DoctorController(doctorModel, errorhandler);
const interactionController = new InteractionController(interactionModel, errorhandler);
const patientController = new PatientController(patientModel);
const patientProfileController = new PatientProfileController(patientModel, errorhandler);

module.exports = {
  patientProfileController,
  patientController,
  doctorController,
  doctorLoginController,
  interactionController,
  hasInteractionController,
  allInteractionsController,
};
