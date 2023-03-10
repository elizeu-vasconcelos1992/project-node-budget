import { AxiosError } from "axios";
import { Request, Response, NextFunction } from "express";

export class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number = 400) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default async function checkErrors(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      message: error.message,
    });
  }

  return res.status(500).json({
    message: "Internal server error",
  });
}

export function handleErrors(error: AxiosError | any) {
  if (error instanceof AxiosError) {
    if (error.response?.status) {
      throw new AppError(error.message, error.response?.status);
    }
    throw new AppError(error.message);
  }
  throw new AppError("An unexpected error occurred");
}
