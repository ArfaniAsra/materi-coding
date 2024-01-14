"use strict";
describe('Static Properties', () => {
    class Configuration {
    }
    Configuration.NAME = "Belajar Typescript OOP";
    Configuration.VERSION = 1.0;
    Configuration.AUTHOR = "Muhammad Arfani Asra";
    class MathUtil {
        static sum(...values) {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        }
    }
    it('should support static properties', () => {
        console.info(Configuration.NAME);
        console.info(Configuration.VERSION);
        console.info(Configuration.AUTHOR);
    });
    it('should support static method', () => {
        console.info(MathUtil.sum(1, 2, 3, 4, 5));
    });
});
