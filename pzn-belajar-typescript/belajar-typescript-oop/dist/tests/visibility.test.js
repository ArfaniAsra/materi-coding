"use strict";
describe('Visibility', () => {
    class Counter {
        constructor() {
            this.counter = 0;
        }
        increment() {
            this.counter++;
        }
        getCounter() {
            return this.counter;
        }
    }
    class DoubleCounter extends Counter {
        increment() {
            this.counter += 2;
        }
    }
    it('should support private', () => {
        const counter = new Counter();
        counter.increment();
        counter.increment();
        counter.increment();
        console.info(counter.getCounter());
    });
    it('should support protected', () => {
        const counter = new DoubleCounter();
        counter.increment();
        counter.increment();
        counter.increment();
        console.info(counter.getCounter());
    });
});
