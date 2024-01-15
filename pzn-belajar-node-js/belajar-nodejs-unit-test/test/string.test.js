test("string", () => {
    const name = "Muhammad Arfani Asra";

    expect(name).toBe("Muhammad Arfani Asra");
    expect(name).toEqual("Muhammad Arfani Asra");
    expect(name).toMatch(/Arfani/);
});