import { Request, Response, NextFunction } from "express";
import { BudgetRequest, Product } from "../types";
import * as yup from "yup";
import { AppError } from "../errors";

export const validate =
  (schema: any) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedBody = await schema.validate(req.body, {
        stripUnknown: true,
        abortEarly: false,
      });

      return next();
    } catch (errors: yup.ValidationError | any) {
      return res.status(400).json({ message: errors.errors });
    }
  };

export function validateArray(req: Request, res: Response, next: NextFunction) {
  req.body.productsId.map((item: Pick<BudgetRequest, "productsId">) => {
    if (typeof item != "number") {
      throw new AppError("the array must only contain numbers");
    }
  });
  return next();
}
