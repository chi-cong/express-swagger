const { decryptToken } = require("../util/tokenHandler")

module.exports = (req, res, next) => {
  const authToken = req.headers.bearer
  if (!authToken) {
    return res.sendStatus(401)
  }
  const data = decryptToken(authToken)
  const user = data.userId;
  if (!user) {
    return res.sendStatus(401)
  }
  next()
}