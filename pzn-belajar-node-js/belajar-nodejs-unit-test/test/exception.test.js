import { MyException, callMe } from "../src/exception";

test("exception", () => { 
    expect(() => callMe("Arfani")).toThrow();
    expect(() => callMe("Arfani")).toThrow(MyException);
    expect(() => callMe("Arfani")).toThrow("Ups my exception happens");
});

test("exception not happens", () => {
    expect(callMe("Eko")).toBe("OK");
});