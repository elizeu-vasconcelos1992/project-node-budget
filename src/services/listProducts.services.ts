import { handleErrors } from "../errors";
import { Product } from "../types";
import api from "./api";

export default async function listProductsServices() {
  try {
    const { data } = await api<Product[]>("/products");
    return data;
  } catch (error) {
    handleErrors(error);
  }
}
