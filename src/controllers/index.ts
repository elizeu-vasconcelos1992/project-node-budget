import { Request, Response } from "express";
import listUsersServices from "../services/listUsers.services";

export default async function listUsersControllers(
  req: Request,
  res: Response
) {
  const users = await listUsersServices();
  return res.status(200).send(users);
}
