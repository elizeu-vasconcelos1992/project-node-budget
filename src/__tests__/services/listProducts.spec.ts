import app from "../../app";
import request from "supertest";

describe("List products", () => {
  test("GET /products - Must be able to list all products", async () => {
    const response = await request(app).get("/products");

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(100);
  }, 10000);

  test("GET /products - The product must have the id, name and price keys", async () => {
    const response = await request(app).get("/products");

    expect(response.status).toBe(200);
    expect(response.body[0]).toHaveProperty("id");
    expect(response.body[0]).toHaveProperty("name");
    expect(response.body[0]).toHaveProperty("price");
  }, 10000);

  test("GET /products - Product properties must have the correct types", async () => {
    const response = await request(app).get("/products");

    expect(response.status).toBe(200);
    expect(typeof response.body[0].id).toBe("number");
    expect(typeof response.body[0].name).toBe("string");
    expect(typeof response.body[0].price).toBe("number");
  }, 10000);
});
