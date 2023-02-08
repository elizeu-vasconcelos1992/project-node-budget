import * as yup from "yup";
import { BudgetRequest } from "../types";

export const calculateBudgetValidator = yup
  .object<Record<keyof BudgetRequest, yup.AnySchema>>()
  .shape({
    userId: yup.number().positive().required("Required field userId"),
    productsId: yup
      .array()
      .min(1, "The array must have at least one product")
      .required("Required field productsId"),
  });
