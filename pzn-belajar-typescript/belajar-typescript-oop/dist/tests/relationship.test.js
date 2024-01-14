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
        // Not recommended to do this
        const person = new Customer('Arfani');
        console.info(person.name);
    });
});
