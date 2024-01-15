test("test toBe", () => {
    const name = "Arfani";
    const hello = `Hello ${name}`;

    expect(hello).toBe("Hello Arfani");
})

test("test toEqual", () => {
    let person = {id: "arfani"};
    Object.assign(person, { name: "Arfani" });

    expect(person).toEqual({id: "arfani", name: "Arfani"});
})