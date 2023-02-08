import { Router } from "express";
import { listProductsControllers, listUsersControllers } from "../controllers";

const routes = Router();

routes.get("/users", listUsersControllers);
routes.get("/products", listProductsControllers);

export default routes;
