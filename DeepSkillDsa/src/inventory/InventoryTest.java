package inventory;

import java.util.HashMap;

public class InventoryTest {

    static HashMap<Integer, Product> inventory = new HashMap<>();

    public static void addProduct(Product product) {
        inventory.put(product.getProductId(), product);
    }

    public static void updateProduct(int id, int quantity) {

        Product product = inventory.get(id);

        if(product != null) {
            product.setQuantity(quantity);
        }
    }

    public static void deleteProduct(int id) {
        inventory.remove(id);
    }

    public static void displayInventory() {

        for(Product product : inventory.values()) {
            product.display();
        }
    }


    public static void main(String[] args) {

        addProduct(new Product(1, "Laptop", 10, 50000));
        addProduct(new Product(2, "Mobile", 20, 20000));

        System.out.println("Initial Inventory:");
        displayInventory();


        System.out.println("\nAfter Update:");
        updateProduct(1, 15);
        displayInventory();


        System.out.println("\nAfter Delete:");
        deleteProduct(2);
        displayInventory();
    }
}