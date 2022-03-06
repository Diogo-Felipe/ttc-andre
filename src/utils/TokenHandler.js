const { encrypt } = require("../utils/CryptoHandler");
const connection = require("../database/connection");

const VALID_TIME_IN_SECONDS = 1800;

const createToken = async (
  doctorCpf,
  validTimeInSeconds = VALID_TIME_IN_SECONDS
) => {
  const tokenHash = encrypt(new Date().getTime());
  const token = await connection("token").insert({
    tokenHash,
    doctorCpf,
    validTimeInSeconds,
  });

  if (!token) {
    return null;
  }

  const tokenObject = await connection("token")
    .select("tokenHash", "validTimeInSeconds")
    .where("tokenHash", tokenHash)
    .first();

  return tokenObject;
};

const isValidToken = async (tokenHash, doctorCpf) => {
  const token = await connection("token")
    .select("*")
    .where("tokenHash", tokenHash)
    .andWhere("doctorCpf", doctorCpf)
    .first();

  if (!token) {
    return false;
  }

  if (token.validTimeInSeconds) {
    const now = new Date().getTime();
    const tokenExpiration =
      token.createdAt.getTime() + token.validTimeInSeconds * 1000;

    if (now > tokenExpiration) {
      return false;
    }
  }

  return true;
};

module.exports = {
  createToken,
  isValidToken,
};
