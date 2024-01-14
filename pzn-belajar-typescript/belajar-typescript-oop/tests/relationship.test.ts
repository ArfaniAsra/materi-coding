describe('Relationship', () => {
    
    class Person {
        constructor(public name: string) {}
    }

    class Customer {
        constructor(public name: string) {}
    }

    it('should support relationship', () => {
        // Not recommended to do this
        const person: Person = new Customer('Arfani')
        console.info(person.name)
        
    });
});