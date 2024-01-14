"use strict";
describe('Any', function () {
    it('should support in typescript', function () {
        const person = {
            id: 1,
            name: "Muhammad Arfani Asra",
            age: 22
        };
        person.age = 23;
        person.address = "Indonesia";
        console.info(person);
    });
});
