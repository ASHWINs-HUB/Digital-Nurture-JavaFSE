package search;

import java.util.Arrays;
import java.util.Comparator;

public class SearchTest {


    // Linear Search O(n)
    public static Product linearSearch(Product[] products, String name) {

        for(Product product : products) {

            if(product.getProductName().equalsIgnoreCase(name)) {

                return product;

            }
        }

        return null;
    }



    // Binary Search O(log n)
    public static Product binarySearch(Product[] products, String name) {


        int low = 0;
        int high = products.length - 1;


        while(low <= high) {


            int mid = (low + high) / 2;


            int result = products[mid]
                    .getProductName()
                    .compareToIgnoreCase(name);



            if(result == 0) {

                return products[mid];

            }
            else if(result < 0) {

                low = mid + 1;

            }
            else {

                high = mid - 1;

            }
        }


        return null;
    }




    public static void main(String[] args) {


        Product[] products = {

                new Product(1,"Laptop","Electronics"),
                new Product(2,"Mobile","Electronics"),
                new Product(3,"Shoes","Fashion"),
                new Product(4,"Watch","Accessories")

        };



        System.out.println("Linear Search:");

        Product result1 =
                linearSearch(products,"Mobile");


        if(result1 != null) {

            result1.display();

        }



        // Sorting array for binary search

        Arrays.sort(products,
                Comparator.comparing(Product::getProductName)
        );



        System.out.println("\nBinary Search:");

        Product result2 =
                binarySearch(products,"Shoes");


        if(result2 != null) {

            result2.display();

        }

    }
}