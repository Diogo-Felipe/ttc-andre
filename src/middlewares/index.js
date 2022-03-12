const { Errorhandler } = require("../utils");
const { tokenModel } = require("../Models");

const AdmSession = require("./verifyAdmSession");
const DoctorSession = require("./verifyDoctorSession");

const errorhandler = new Errorhandler();

const admSession = new AdmSession(errorhandler);
const doctorSession = new DoctorSession(tokenModel, errorhandler);

module.exports = {
  admSession,
  doctorSession,
};
