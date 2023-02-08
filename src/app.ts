import "express-async-errors";
import express from "express";
import checkErrors from "./errors";
import routes from "./routes";

const app = express();

app.use(express.json());

app.use(routes);
app.use(checkErrors);

app.listen(3000, () => {
  console.log("Servidor executando");
});
