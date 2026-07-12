package builder;

public class BuilderTest {

    public static void main(String[] args) {


        Computer gamingPC = new Computer.Builder()
                .setCPU("Intel i9")
                .setRAM("32GB")
                .setStorage("1TB SSD")
                .setGraphicsCard("NVIDIA RTX 4080")
                .build();


        gamingPC.displayInfo();



        System.out.println();



        Computer officePC = new Computer.Builder()
                .setCPU("Intel i5")
                .setRAM("16GB")
                .setStorage("512GB SSD")
                .build();


        officePC.displayInfo();

    }
}