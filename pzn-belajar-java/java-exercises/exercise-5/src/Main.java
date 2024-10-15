public class Main {
    public static void main(String[] args) {
        ConcreteClass myObject = new ConcreteClass();

        takeInterface1(myObject);
        takeInterface2(myObject);
        takeInterface3(myObject);
        takeNewInterface(myObject);

        myObject.baseMethod();
    }

    public static void takeInterface1(Interface1 obj) {
        obj.method1();
        obj.method2();
    }

    public static void takeInterface2(Interface2 obj) {
        obj.method3();
        obj.method4();
    }

    public static void takeInterface3(Interface3 obj) {
        obj.method5();
        obj.method6();
    }

    public static void takeNewInterface(NewInterface obj) {
        obj.method7();
    }
}