const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware")
const { getUserByName } = require("../database/schemas/account")

router.post("/login", authMiddleware, (req, res) => {
  const { username, password } = req.body
  const userAccount = getUserByName(username)
  if (!userAccount) {
    return res.sendStatus(404).json({ error: "No account founded" })
  }
  if (!password === userAccount) {
    return res.sendStatus(404).json({ error: "Incorrect password" })
  }

})

module.exports = router