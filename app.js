const express = require("express");
const { engine } = require("express-handlebars");
const app = express();

//config
//handlebars
app.engine("handlebars", engine({ defaultLayout: "main" })); //
app.set("view engine", "handlebars");
//
app.get("/", (req, res) => {
  res.render("index");
});

const PORT = 2022 || process.env.PORT;
app.listen(PORT, () => {
  console.log("Servidor rodando na porta: " + PORT);
});
