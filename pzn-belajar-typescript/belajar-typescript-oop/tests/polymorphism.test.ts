describe('Polymorphism', () => {
    
    class Employee {
        constructor(public name: string) { }
        
    }

    class Manager extends Employee {

    }

    class VicePresident extends Manager {

    }

    function sayHello(employee: Employee): void {
        if (employee instanceof VicePresident) {
            const vp = employee as VicePresident
            console.info(`Hello VP ${vp.name}`)
        } else if (employee instanceof Manager) {
            const manager = employee as Manager
            console.info(`Hello Manager ${manager.name}`)
        } else {
            console.info(`Hello employee ${employee.name}`)
        }
    }

    function sayHelloWrong(employee: Employee): void {
      if (employee instanceof Manager) {
        const manager = employee as Manager;
        console.info(`Hello Manager ${manager.name}`);
      } else if (employee instanceof VicePresident) {
        const vp = employee as VicePresident;
        console.info(`Hello VP ${vp.name}`);
      } else {
        console.info(`Hello employee ${employee.name}`);
      }
    }
    
    it('should support', () => {
        let employee: Employee = new Employee('Arfani')
        console.info(employee)

        employee = new Manager('Arfani')
        console.info(employee)

        employee = new VicePresident('Arfani')
        console.info(employee)
        
    });

    it('should support parameter polymorphism', () => {
        sayHello(new Employee('Arfani'))
        sayHello(new Manager('Asra'))
        sayHello(new VicePresident('Joko'))
    })
    
    it('should support parameter polymorphism wrong', () => {
        sayHelloWrong(new Employee('Arfani'))
        sayHelloWrong(new Manager('Asra'))
        sayHelloWrong(new VicePresident('Joko'))
    })
});