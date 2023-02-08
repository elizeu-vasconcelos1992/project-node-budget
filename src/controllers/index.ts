import { Request, Response } from "express";
import calculateBudgetServices from "../services/calculateBudget.services";
import listProductsServices from "../services/listProducts.services";
import listUsersServices from "../services/listUsers.services";
import { BudgetRequest } from "../types";

export async function listUsersControllers(req: Request, res: Response) {
  const users = await listUsersServices();
  return res.status(200).send(users);
}

export async function listProductsControllers(req: Request, res: Response) {
  const products = await listProductsServices();
  return res.status(200).send(products);
}

export async function createBudgetControllers(req: Request, res: Response) {
  const data: BudgetRequest = req.body;
  const budget = await calculateBudgetServices(data);
  return res.status(200).json({ value: budget });
}
