public class MethodVariableArgument {
    public static void main(String[] args) {
        int[] values = {40, 30, 80, 94, 73};
        sayCongrats("Arfani", values);

        sayCongrats("Arfani", 90, 80, 86, 88, 78);
    }

    // Penggunaan variable argument (tipe_data...)
    static void sayCongrats(String name, int... values){
        var total = 0;
        for (var value: values){
            total += value;
        }

        var finalValue = total / values.length;

        if (finalValue >= 75) {
            System.out.println("Selamat " + name + ", Anda Lulus");
        } else {
            System.out.println("Maaf " + name + ", Anda Tidak Lulus");
        }
    }
}
