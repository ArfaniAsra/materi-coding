describe("Instance Of", () => {
  class Employee {}
  class Manager {}

  const budi = new Employee();
  const arfani = new Manager();

  it("should have problem using typeof", () => {
    console.info(typeof budi);
    console.info(typeof arfani);
  });
    
    it('should support instanceof', () => { 
        expect(budi instanceof Employee).toBe(true)
        expect(budi instanceof Manager).toBe(false)

        expect(arfani instanceof Employee).toBe(false)
        expect(arfani instanceof Manager).toBe(true)
    })
});
