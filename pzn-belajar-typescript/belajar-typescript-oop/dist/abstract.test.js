"use strict";
describe('Abstract Class', () => {
    class Customer {
        constructor(id) {
            this.id = id;
        }
        hello() {
            console.info('Hello');
        }
    }
    class RegularCustomer extends Customer {
        constructor(id, name) {
            super(id);
            this.name = name;
        }
        sayHello(name) {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }
    it('should support', () => {
        const customer1 = new RegularCustomer(1, 'Arfani');
        customer1.sayHello("Budi");
    });
});
