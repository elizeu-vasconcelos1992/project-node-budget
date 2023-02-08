export type User = {
  id: number;
  name: string;
  tax: number;
};

export type Product = {
  id: number;
  name: string;
  price: number;
};

export type BudgetRequest = {
  user: Pick<User, "id">;
  products: Pick<Product, "id">[];
};
