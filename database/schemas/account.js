const { accounts } = require("../../util/data")

const getUserByName = (username) => {
  return accounts.find((e) => e.username === username)
}

module.exports = { getUserByName }