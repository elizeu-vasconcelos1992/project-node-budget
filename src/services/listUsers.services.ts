import { AxiosError } from "axios";
import { AppError } from "../errors";
import { User } from "../types";
import api from "./api";

export default async function listUsersServices(): Promise<User[]> {
  try {
    const { data } = await api<User[]>("/users");
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status) {
        throw new AppError(error.message, error.response?.status);
      }
      throw new AppError(error.message);
    }
    throw new AppError("An unexpected error occurred");
  }
}
