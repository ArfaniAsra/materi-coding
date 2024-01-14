"use strict";
describe('Relationship', () => {
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    class Customer {
        constructor(name) {
            this.name = name;
        }
    }
    it('should support relationship', () => {
        const person = new Customer('Arfani');
        console.info(person.name);
    });
});
