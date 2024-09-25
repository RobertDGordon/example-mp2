const express = require("express");
const app = express();
const port = 3000;

const authRoutes = require('./routes/authRoutes')
const cardRoutes = require('./routes/cardRoutes')

app.use(express.json())  // required for req.body

app.use('/auth', authRoutes)
app.use('/api', cardRoutes)

// Serve your front end
app.use("/", express.static("public"));



app.listen(port, () => {
  console.log(`Mini Project 2 API listening at http://localhost:${port}`);
});
