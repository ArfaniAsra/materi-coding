"use strict";
describe("Parameter Properties", () => {
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    it('should support', () => {
        const person = new Person("Arfani");
        console.info(person.name);
        person.name = "Budi";
        console.info(person.name);
    });
});
