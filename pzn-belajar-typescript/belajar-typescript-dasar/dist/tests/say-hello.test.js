import { sayHello } from "../src/say-hello";
describe('sayHello', function () {
    it('should return hello Arfani', function () {
        expect(sayHello('Arfani')).toBe('Hello Arfani');
    });
});
