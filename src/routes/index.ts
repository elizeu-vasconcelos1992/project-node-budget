import { Router } from "express";
import {
  createBudgetControllers,
  listProductsControllers,
  listUsersControllers,
} from "../controllers";
import { calculateBudgetValidator } from "../validators/schema";
import { validate, validateArray } from "../validators/validate";

const routes = Router();

routes.get("/users", listUsersControllers);
routes.get("/products", listProductsControllers);
routes.post(
  "/budget",
  validate(calculateBudgetValidator),
  validateArray,
  createBudgetControllers
);

export default routes;
