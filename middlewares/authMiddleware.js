const { decryptToken } = require("../util/tokenHandler")

module.exports = (req, res, next) => {
  const authToken = req.headers.bearer
  if (!authToken) {
    return res.status(401).json({ message: "unauthorized request" })
  }
  const data = decryptToken(authToken)
  const user = data.id;
  if (!user) {
    return res.status(401).json({ message: "user not founded" })
  }
  next()
}