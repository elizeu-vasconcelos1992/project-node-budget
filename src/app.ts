import "express-async-errors";
import express from "express";
import checkErrors from "./errors";
import routes from "./routes";
import swaggerUI from "swagger-ui-express";
import swaggerDocument from "../swagger.json";

const app = express();

app.use(express.json());

app.use(routes);
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use(checkErrors);

export default app;
