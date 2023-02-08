import app from "../../app";
import request from "supertest";

describe("Calculate budget", () => {
  test("POST /budget - Must be able to correctly calculate the requested budget", async () => {
    const budget = {
      userId: 1,
      productsId: [1, 2, 3],
    };

    const response = await request(app).post("/budget").send(budget);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("value");
    expect(response.body.value).toBe(11348.35);
  }, 10000);

  test("POST /budget - Should return an error if userId field is not sent", async () => {
    const budget = {
      productsId: [1, 2, 3],
    };

    const response = await request(app).post("/budget").send(budget);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("message");
    expect(response.body.message[0]).toEqual("Required field userId");
  });

  test("POST /budget - Should return an error if productsId field is not sent", async () => {
    const budget = {
      userId: 1,
    };

    const response = await request(app).post("/budget").send(budget);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("message");
    expect(response.body.message[0]).toEqual("Required field productsId");
  });

  test("POST /budget - Should return an error if userId field is zero or negative", async () => {
    const budget = {
      userId: 0,
      productsId: [1, 2, 3],
    };

    const response = await request(app).post("/budget").send(budget);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("message");
    expect(response.body.message[0]).toEqual(
      "userId must be a positive number"
    );
  });

  test("POST /budget - It should return an error if the sent array contains a type other than number", async () => {
    const budget = {
      userId: 1,
      productsId: [1, 2, "string"],
    };

    const response = await request(app).post("/budget").send(budget);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("message");
    expect(response.body.message).toEqual(
      "the array must only contain numbers"
    );
  });
});
