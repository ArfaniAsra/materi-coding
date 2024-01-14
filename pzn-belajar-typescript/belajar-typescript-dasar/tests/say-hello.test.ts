import { sayHello } from "../src/say-hello";

describe('sayHello', function (): void {
    it('should return hello Arfani', function (): void {
        expect(sayHello('Arfani')).toBe('Hello Arfani')
    })
})