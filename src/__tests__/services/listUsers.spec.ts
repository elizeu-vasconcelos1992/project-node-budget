import app from "../../app";
import request from "supertest";

describe("List users", () => {
  test("GET /users - Must be able to list all users", async () => {
    const response = await request(app).get("/users");

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(100);
  }, 10000);

  test("GET /users - The user must have the id, name and tax keys", async () => {
    const response = await request(app).get("/users");

    expect(response.status).toBe(200);
    expect(response.body[0]).toHaveProperty("id");
    expect(response.body[0]).toHaveProperty("name");
    expect(response.body[0]).toHaveProperty("tax");
  }, 10000);

  test("GET /users - User properties must have the correct types", async () => {
    const response = await request(app).get("/users");

    expect(response.status).toBe(200);
    expect(typeof response.body[0].id).toBe("number");
    expect(typeof response.body[0].name).toBe("string");
    expect(typeof response.body[0].tax).toBe("number");
  }, 10000);
});
