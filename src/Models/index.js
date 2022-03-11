const connection = require("../database/connection");

const Auth = require("./AuthModel");
const Doctor = require("./DoctorModel");
const HasInteraction = require("./HasInteractionModel");
const Interaction = require("./InteractionModel");
const Patient = require("./PatientModel");
const Token = require("./TokenModel");

const authModel = new Auth(connection);
const doctorModel = new Doctor(connection);
const hasInteractionModel = new HasInteraction(connection);
const interactionModel = new Interaction(connection);
const patientModel = new Patient(connection, hasInteractionModel);
const tokenModel = new Token(connection);

module.exports = {
  authModel,
  doctorModel,
  hasInteractionModel,
  interactionModel,
  patientModel,
  tokenModel,
};
