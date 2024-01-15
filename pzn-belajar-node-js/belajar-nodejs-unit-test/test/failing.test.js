import { sayHello } from "../src/sayHello";

test("sayHello success", () => {
    expect(sayHello("Arfani")).toBe("Hello Arfani");
})

test.failing("sayHello error", () => {
    sayHello(null);
})

// atau bisa juga dengan cara

test("sayHello error matchers", () => { 
    expect(() => sayHello(null)).toThrow();
})