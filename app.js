if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const { engine } = require("express-handlebars");
const app = express();

//config
//handlebars
app.engine("handlebars", engine({ defaultLayout: "main" })); //
app.set("view engine", "handlebars");

//css
app.use(express.static("public"));

//mongoDB
const mongoose = require("mongoose");
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
  })
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
  });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));
//
app.get("/", (req, res) => {
  res.render("index");
});

const PORT = 2022 || process.env.PORT;
app.listen(PORT, () => {
  console.log("Servidor rodando na porta: " + PORT);
});
