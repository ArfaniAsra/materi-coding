"use strict";
describe('Interface', () => {
    class Person {
        constructor(name) {
            this.name = name;
        }
        sayHello(name) {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }
    it('should support inheritance', () => {
        const person = new Person("Arfani");
        person.sayHello("Budi");
    });
});
