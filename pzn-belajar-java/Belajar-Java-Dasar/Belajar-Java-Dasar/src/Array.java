import java.sql.SQLOutput;

public class Array {
    public static void main(String[] args) {

        String[] stringArray;
        stringArray = new String[3];

        stringArray[0] = "Hello";
        stringArray[1] = "World";
        stringArray[2] = "Happy";

//        System.out.println(stringArray[0]);
//        System.out.println(stringArray[1]);
//        System.out.println(stringArray[2]);

        stringArray[1] = "Arfani";
//        System.out.println(stringArray[1]);

        String[] stringArray2 = new String[3];

        String[] namaNama = {
                "Muhammad", "Arfani", "Asra"
        };

        int[] arrayInt = new int[]{
                1,2,3,4,5,6,7,8,9,10
        };

        long[] arrayLong = {
                10L, 20L, 30L
        };

        long[] arrayLong2 = {
                10, 90, 80, 67, 29
        };

        arrayLong2[0] = 100;

//        System.out.println(arrayLong2[0]);
//        System.out.println(arrayLong2[1]);
//        System.out.println(arrayLong2.length);

        // Di Java tidak ada istilah penghapusan elemen array, tapi mengganti ke nilai 0 atau null

        // Array di dalam Array
        String[][] members = {
                {"Eko", "Kurniawan", "Khannedy"},
                {"Muhammad", "Arfani", "Asra"},
                {"Budi", "Nugraha"}
        };

        String[] member1 = members[0];
        System.out.println(member1[0]);

        System.out.println(members[1][1]);
        System.out.println(members[2][0]);
        System.out.println(members[1][2]);
    }
}
