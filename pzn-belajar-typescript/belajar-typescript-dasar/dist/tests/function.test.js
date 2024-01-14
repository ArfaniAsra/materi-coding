"use strict";
describe('Function', function () {
    it('should support in typescript', function () {
        function sayHello(name) {
            return `Hello ${name}`;
        }
        expect(sayHello("Arfani")).toBe("Hello Arfani");
        function printHello(name) {
            console.info(`Hello ${name}`);
        }
        printHello("Arfani");
    });
    it('should support default value', function () {
        function sayHello(name = "Guest") {
            return `Hello ${name}`;
        }
        expect(sayHello()).toBe("Hello Guest");
        expect(sayHello("Arfani")).toBe("Hello Arfani");
    });
    it('should support rest parameter', function () {
        let total = 0;
        function sum(...values) {
            for (const value of values) {
                total += value;
            }
            return total;
        }
        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    });
    it('should support optional parameter', function () {
        function sayHello(firstName, lastName) {
            if (lastName) {
                return `Hello ${firstName} ${lastName}`;
            }
            else {
                return `Hello ${firstName}`;
            }
        }
        expect(sayHello("Arfani")).toBe("Hello Arfani");
        expect(sayHello("Arfani", "Asra")).toBe("Hello Arfani Asra");
    });
    it('should support function overloading', function () {
        function callMe(value) {
            if (typeof value === "string") {
                return value.toUpperCase();
            }
            else if (typeof value === "number") {
                return value * 10;
            }
        }
        expect(callMe(10)).toBe(100);
        expect(callMe("arfani")).toBe("ARFANI");
    });
    it('should support function as parameter', function () {
        function sayHello(name, filter) {
            return `Hello ${filter(name)}`;
        }
        function toUpper(name) {
            return name.toUpperCase();
        }
        expect(sayHello("Arfani", toUpper)).toBe("Hello ARFANI");
        expect(sayHello("Arfani", function (name) {
            return name.toUpperCase();
        })).toBe("Hello ARFANI");
        expect(sayHello("Arfani", (name) => name.toUpperCase())).toBe("Hello ARFANI");
    });
});
