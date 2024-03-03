const jwt = require("jsonwebtoken")
const { worldSuperInternationalSecretKey } = require("../projectSetting")

const generateToken = (data, aliveMins = 120, secretKey = worldSuperInternationalSecretKey, algo = "RS256") => {
  const expDate = Math.floor(date.now() / 1000) + aliveMins * 60
  const payload = {
    ...data,
    exp: expDate
  }
  return { token: jwt.sign(payload, secretKey, { algorithm: algo }), exp: expDate }
}

const decryptToken = (token, secretKey = worldSuperInternationalSecretKey) => {
  return jwt.verify(token, secretKey)
}

module.exports = { decryptToken, generateToken }