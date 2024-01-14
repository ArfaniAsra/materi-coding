describe("Interface", function () {
    it("should support in typescript", function () {
        const seller = {
            id: 1,
            name: "Toko ABC",
            nib: "123123",
            npwp: "123123",
        };
        seller.name = "Toko Arfani";
        console.info(seller);
    });
    it("should support function interface", function () {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(2, 2)).toBe(4);
    });
    it("should support indexable interface", function () {
        const names = ["Arfani", "Rizki", "Nur"];
        console.info(names);
    });
    it("should support indexable interface for non number index", function () {
        const dictionary = {
            name: "Arfani",
            address: "Jakarta",
            phone: "08123456789",
        };
        expect(dictionary["name"]).toBe("Arfani");
        expect(dictionary["address"]).toBe("Jakarta");
    });
    it('should support extends interface', function () {
        const employee = {
            id: "1",
            name: "Arfani",
            division: "IT"
        };
        console.info(employee);
        const manager = {
            id: "2",
            name: "Asra",
            division: "IT",
            numberOfEmployees: 10
        };
        console.info(manager);
    });
    it('should support function in interface', function () {
        const person = {
            name: "Arfani",
            sayHello: function (name) {
                return `Hello ${name}, my name is ${this.name}`;
            },
        };
        console.info(person.sayHello("Asra"));
    });
    it('should support intersection types', function () {
        const domain = {
            id: "1",
            name: "Arfani"
        };
        console.info(domain);
    });
    it('should support type assertions', function () {
        const person = {
            name: "Arfani",
            age: 22
        };
        const person2 = person;
        // person2.sayHello("Budi")
        console.info(person2);
    });
});
export {};
