function tagFunction(array, ...args) {
    console.info(array);
    console.info(args);
}

test("tag function", () => { 
    const name = "Arfani";
    const lastName = "Asra";

    tagFunction`Hello ${name} ${lastName}!, How are you?`;
    tagFunction`Bye ${name} ${lastName}!, see you later!`;
});

test("tag function sql", () => { 
    const name = "Arfani";
    const age = 30;

    tagFunction`SELECT * FROM users WHERE name = ${name} AND age = ${age}`;
});