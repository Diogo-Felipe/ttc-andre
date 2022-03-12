const connection = require("../database/connection");

const { CryptoHandler } = require("../utils");

const Auth = require("./AuthModel");
const Doctor = require("./DoctorModel");
const HasInteraction = require("./HasInteractionModel");
const Interaction = require("./InteractionModel");
const Patient = require("./PatientModel");
const Token = require("./TokenModel");

const cryptoHandler = new CryptoHandler();

const authModel = new Auth(connection, cryptoHandler);
const doctorModel = new Doctor(connection, cryptoHandler);
const hasInteractionModel = new HasInteraction(connection);
const interactionModel = new Interaction(connection);
const patientModel = new Patient(connection, hasInteractionModel);
const tokenModel = new Token(connection, cryptoHandler);

module.exports = {
  authModel,
  doctorModel,
  hasInteractionModel,
  interactionModel,
  patientModel,
  tokenModel,
};
