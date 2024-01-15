test("array", () => {
    const names = ["Muhammad", "Arfani", "Asra"];
    expect(names).toContain("Arfani");
    expect(names).toEqual(["Muhammad", "Arfani", "Asra"]);

    const person = [{ name: "Muhammad Arfani" }, { name: "Asra" }];
    expect(person).toContainEqual({ name: "Asra" });
    expect(person).toEqual([{ name: "Muhammad Arfani" }, { name: "Asra" }]);
});