import { Router } from "express";
import {
  createBudgetControllers,
  listProductsControllers,
  listUsersControllers,
} from "../controllers";

const routes = Router();

routes.get("/users", listUsersControllers);
routes.get("/products", listProductsControllers);
routes.post("/budget", createBudgetControllers);

export default routes;
