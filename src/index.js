const express = require("express");
const path = require("path");

const app = express();
const exphbs = require("express-handlebars");
const port = 3001;
const route = require("./routes"); // tu dong choc vao file index
const morgan = require("morgan");
const db = require("./config/db");
db.connect();
app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.urlencoded({
    extended: true,
  })
); 
app.use(express.json());
app.engine("hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources","views"));
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
