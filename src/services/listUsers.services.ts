import { handleErrors } from "../errors";
import { User } from "../types";
import api from "./api";

export default async function listUsersServices(): Promise<User[] | void> {
  try {
    const { data } = await api<User[]>("/users");
    return data;
  } catch (error) {
    handleErrors(error);
  }
}
