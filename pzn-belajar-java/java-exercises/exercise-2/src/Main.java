public class Main {
    public static void main(String[] args) {
        Building house = new Building(2, 200.0, 5);
        Building office = new Building(10, 1000.0, 50);

        System.out.println("House details:");
        house.areaPerPersonPerFloor();

        System.out.println("Office details:");
        office.areaPerPersonPerFloor();
    }
}