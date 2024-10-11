public class MethodParameter {
    public static void main(String[] args) {
        sayHello("Arfani", "Asra");
        sayHello("Eko", "Khannedy");
        sayHello("Joko", "Nugraha");
    }

    static void sayHello(String firstName, String lastName) {
        System.out.println("Hello " + firstName + " " + lastName);
    }
}
