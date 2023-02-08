import "express-async-errors";
import express from "express";
import usersRoutes from "./routes";
import checkErrors from "./errors";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);
app.use(checkErrors);

app.listen(3000, () => {
  console.log("Servidor executando");
});
