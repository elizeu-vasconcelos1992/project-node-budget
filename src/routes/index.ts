import { Router } from "express";
import listUsersControllers from "../controllers";

const usersRoutes = Router();

usersRoutes.get("", listUsersControllers);

export default usersRoutes;
