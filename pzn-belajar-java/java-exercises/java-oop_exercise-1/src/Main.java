import java.util.InputMismatchException;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        while (true) {
            showMenu();

            String choice = scanner.next();

            if (shouldExit(choice)) {
                System.out.println("Exiting the program...");
                break;
            }

            // Check if the choice is valid before asking for numbers
            if (!isValidChoice(choice)) {
                System.out.println("Invalid choice! Please choose a valid choice.\n");
                continue;
            }

            // Read the two numbers form the user
            Integer angka1 = getValidNumber(scanner, "Enter the first number: ");
            Integer angka2 = getValidNumber(scanner, "Enter the second number: ");

            // Determine the operation based on the user's choice
            performOperation(choice, angka1, angka2);
        }

        scanner.close();
    }

    private static void showMenu() {
        System.out.println("EXERCISE-1: CALCULATOR PROGRAM");
        System.out.println("MENU OPTION");
        System.out.println("1. Addition (+)");
        System.out.println("2. Subtraction (-)");
        System.out.println("3. Multiplication (*)");
        System.out.println("4. Division (/)");
        System.out.println("5. Exit (x)");
        System.out.print("Input your choice: ");
    }

    private static boolean shouldExit(String choice) {
        return choice.equalsIgnoreCase("x") || choice.equals("5");
    }

    private static boolean isValidChoice(String choice) {
        return choice.equals("1") || choice.equals("2") || choice.equals("3") || choice.equals("4") ||
               choice.equals("+") || choice.equals("-") || choice.equals("*") || choice.equals("/");

    }

    // Method to get a valid number from the user with error handling
    private static Integer getValidNumber(Scanner scanner, String message) {
        Integer number = null;
        while (number == null) {
            System.out.print(message);
            try {
                number = scanner.nextInt();
            } catch (InputMismatchException e) {
                System.out.println("Invalid input. Please enter a valid number.");
                scanner.next();
            }
        }
        return number;
    }

    // Method to perform the chosen operation
    private static void performOperation(String choice, Integer angka1, Integer angka2) {
        switch (choice) {
            case "+":
            case "1":
                System.out.println("The Result is: " + (angka1 + angka2) + ".\n");
                break;
            case "-":
            case "2":
                System.out.println("The Result is: " + (angka1 - angka2) + ".\n");
                break;
            case "*":
            case "3":
                System.out.println("The Result is: " + (angka1 * angka2) + ".\n");
                break;
            case "/":
            case "4":
                if (angka2 == 0) {
                    System.out.println("Error: Division by zero is not allowed.Try again.\n");
                } else {
                    System.out.println("The Result is: " + ((double) angka1 / angka2) + ".\n");
                }
                break;
        }
    }
}