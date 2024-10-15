public class Building {
    // Public members
    public int floors;
    public double area;
    public int occupants;

    // Constructor
    public Building(int floors, double area, int occupants) {
        this.floors = floors;
        this.area = area;
        this.occupants = occupants;
    }

    public void areaPerPersonPerFloor(){
        if (occupants > 0 && floors > 0) {
            double areaPerFloor = area / floors;
            double areaPerPersonPerFloor = areaPerFloor / occupants;
            System.out.println("The building has " + floors + " floors.");
            System.out.println("Area per person per floor: " + areaPerPersonPerFloor + " square meters.");
        } else if (occupants == 0) {
            System.out.println("Error: No occupants in the building.");
        } else if (floors == 0) {
            System.out.println("Error: No floors in the building.");
        }
    }
}