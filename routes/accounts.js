const express = require("express");
const router = express.Router();
const { generateToken } = require("../util/tokenHandler")
const { getUserByName } = require("../database/schemas/account")

router.post("/login", (req, res) => {
  const { username, password } = req.body
  const userAccount = getUserByName(username)
  if (!userAccount) {
    return res.status(404).json({ error: "No account founded" })
  }
  if (!password === userAccount.password) {
    return res.status(404).json({ error: "Incorrect password" })
  }
  return res.status(200).json(generateToken({ id: userAccount.id }))
})

module.exports = router