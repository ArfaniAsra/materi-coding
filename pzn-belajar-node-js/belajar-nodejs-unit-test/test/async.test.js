import { sayHelloAsync } from "../src/async";

test("test async function", async () => {
    const result = await sayHelloAsync("Arfani");
    expect(result).toBe("Hello, Arfani");
})

test("test async matchers", async () => {
    await expect(sayHelloAsync("Arfani")).resolves.toBe("Hello, Arfani");
    await expect(sayHelloAsync()).rejects.toBe("Name is empty");
})