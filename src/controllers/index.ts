import { Request, Response } from "express";
import listProductsServices from "../services/listProducts.services";
import listUsersServices from "../services/listUsers.services";

export async function listUsersControllers(req: Request, res: Response) {
  const users = await listUsersServices();
  return res.status(200).send(users);
}

export async function listProductsControllers(req: Request, res: Response) {
  const products = await listProductsServices();
  return res.status(200).send(products);
}
