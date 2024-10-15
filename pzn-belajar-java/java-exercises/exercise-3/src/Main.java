import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Create and initialize an array at once
        // int[] numbers = {28, 39, 18, 92, 49, 30, 29, 39, 84, 49};

        int[] numbers = new int[10];

        // Print elements of the array
        System.out.println("Enter 10 numbers:");
        for (int i = 0; i < 10; i++) {
            System.out.print("Number " + (i + 1) + ": ");
            numbers[i] = scanner.nextInt();
        }

        double sum_numbers = 0;
        for (int i = 0; i < 10; i++) {
            sum_numbers += numbers[i];
        }

        double average = sum_numbers / 10;
        System.out.println("\nAverage of numbers is: " + average);

        int greaterThanAverage = 0;
        for (int i = 0; i < 10; i++) {
            if (numbers[i] > average) {
                greaterThanAverage++;
            }
        }
        System.out.println("Number of items greater than the average: " + greaterThanAverage);

        scanner.close();
    }
}