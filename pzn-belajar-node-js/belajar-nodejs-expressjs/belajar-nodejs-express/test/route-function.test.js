import express from "express";
import request from "supertest";

const app = express();

app.route("/products")
  .get((req, res) => {
    res.send("Get Products");
  })
  .post((req, res) => {
    res.send("Create Products");
  })
  .put((req, res) => {
    res.send("Update Products");
  });

test("Test Route Function", async () => { 
  let response = await request(app).get("/products");
  expect(response.text).toBe("Get Products");
  
  response = await request(app).post("/products");
  expect(response.text).toBe("Create Products");
  
  response = await request(app).put("/products");
  expect(response.text).toBe("Update Products");
});


