public class ConcreteClass extends BaseClass implements NewInterface {
    @Override
    public void method1() {
        System.out.println("Method 1 from Interface1");
    }

    @Override
    public void method2() {
        System.out.println("Method 2 from Interface1");
    }

    @Override
    public void method3() {
        System.out.println("Method 3 from Interface2");
    }

    @Override
    public void method4() {
        System.out.println("Method 4 from Interface2");
    }

    @Override
    public void method5() {
        System.out.println("Method 5 from Interface3");
    }

    @Override
    public void method6() {
        System.out.println("Method 6 from Interface3");
    }

    @Override
    public void method7() {
        System.out.println("Method 7 from NewInterface");
    }
}
