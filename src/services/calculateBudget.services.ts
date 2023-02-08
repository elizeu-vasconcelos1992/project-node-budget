import { handleErrors } from "../errors";
import { BudgetRequest, Product, User } from "../types";
import api from "./api";

export default async function calculateBudgetServices(
  data: BudgetRequest
): Promise<number> {
  const user: User = await api(`/users/${data.user}`)
    .then(res => res.data)
    .catch(error => handleErrors(error));

  const response = data.products.map(async (id: any) => {
    const res = await api(`/products/${id}`)
      .then(res => res.data)
      .catch(error => handleErrors(error));
    return res;
  });

  const products: Product[] = await Promise.all(response).then(res => res);

  const budget = products.reduce(
    (acc, cur) => acc + (cur.price * user.tax) / 100,
    0
  );

  return budget;
}
