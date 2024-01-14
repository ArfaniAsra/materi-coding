"use strict";
describe('Polymorphism', () => {
    class Employee {
        constructor(name) {
            this.name = name;
        }
    }
    class Manager extends Employee {
    }
    class VicePresident extends Manager {
    }
    function sayHello(employee) {
        if (employee instanceof VicePresident) {
            const vp = employee;
            console.info(`Hello VP ${vp.name}`);
        }
        else if (employee instanceof Manager) {
            const manager = employee;
            console.info(`Hello Manager ${manager.name}`);
        }
        else {
            console.info(`Hello employee ${employee.name}`);
        }
    }
    function sayHelloWrong(employee) {
        if (employee instanceof Manager) {
            const manager = employee;
            console.info(`Hello Manager ${manager.name}`);
        }
        else if (employee instanceof VicePresident) {
            const vp = employee;
            console.info(`Hello VP ${vp.name}`);
        }
        else {
            console.info(`Hello employee ${employee.name}`);
        }
    }
    it('should support', () => {
        let employee = new Employee('Arfani');
        console.info(employee);
        employee = new Manager('Arfani');
        console.info(employee);
        employee = new VicePresident('Arfani');
        console.info(employee);
    });
    it('should support parameter polymorphism', () => {
        sayHello(new Employee('Arfani'));
        sayHello(new Manager('Asra'));
        sayHello(new VicePresident('Joko'));
    });
    it('should support parameter polymorphism wrong', () => {
        sayHelloWrong(new Employee('Arfani'));
        sayHelloWrong(new Manager('Asra'));
        sayHelloWrong(new VicePresident('Joko'));
    });
});
