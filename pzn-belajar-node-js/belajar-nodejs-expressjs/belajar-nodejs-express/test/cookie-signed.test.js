import express from "express";
import request from "supertest";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser("CONTOHRAHASIA"));
app.use(express.json());

app.get("/", (req, res) => {
  const name = req.signedCookies["Login"];
  res.send(`Hello ${name}`);
});

app.post("/login", (req, res) => {
  const name = req.body.name;
  res.cookie("Login", name, { path: "/", signed: true });
  res.send(`Hello ${name}`);
});

test("Test Cookie Read", async () => {
  const response = await request(app)
    .get("/")
    .set(
      "Cookie",
      "Login=s%3AArfani.tZy4oPZ4wHkmN7agUd%2BVjTggg8gibqpeFBI%2FQWo192c; Path=/"
    );
  expect(response.text).toBe("Hello Arfani");
});

test("Test Cookie Write", async () => {
  const response = await request(app).post("/login")
    .send({ name: "Arfani" });
  console.info(response.get("Set-Cookie"));
  expect(response.get("Set-Cookie").toString()).toContain("Arfani");
  expect(response.text).toBe("Hello Arfani");
});