"use strict";
describe('Super Constructor', () => {
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    class Employee extends Person {
        constructor(name, department) {
            super(name);
            this.department = department;
        }
    }
    it('should support', () => {
        const employee = new Employee("Arfani", "Tech");
        console.info(employee.name);
        console.info(employee.department);
    });
});
