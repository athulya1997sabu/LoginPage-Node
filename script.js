const express = require("express");

const app = express();
app.use(express.static("views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const email1 = "athulyasabu1997@gmail.com";
const pass1 = "12345";

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (email === email1 && password === pass1) {
    res.send("<h1>Login Successfull</h1>");
  } else {
    res.send("<h1>Login Failed</h1>");
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT);
