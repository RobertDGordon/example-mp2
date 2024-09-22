const userData = [
  {
    id: 0,
    email: "test@test.com",
    password: "badpassword"
  },
  {
    id: 1,
    email: "bill@bill.com",
    password: "sillybilly"
  },
  {
    id: 2,
    email: "bob@bob.com",
    password: "burgertime"
  },
]

const loginUser = (req, res) => {
  let email = req.body.email
  let password = req.body.password

  console.log('loginController.jsx - loginUser', email, password)

  res.status(200)
}

module.exports = {
  loginUser
}