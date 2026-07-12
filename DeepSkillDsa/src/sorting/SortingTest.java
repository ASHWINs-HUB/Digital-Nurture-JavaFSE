package sorting;

public class SortingTest {


    // Bubble Sort O(n²)
    public static void bubbleSort(Order[] orders) {


        for(int i = 0; i < orders.length - 1; i++) {


            for(int j = 0; j < orders.length - i - 1; j++) {


                if(orders[j].getTotalPrice() >
                        orders[j + 1].getTotalPrice()) {


                    Order temp = orders[j];

                    orders[j] = orders[j + 1];

                    orders[j + 1] = temp;

                }
            }
        }
    }




    // Quick Sort O(n log n)
    public static void quickSort(Order[] orders, int low, int high) {


        if(low < high) {


            int pivotIndex = partition(
                    orders,
                    low,
                    high
            );


            quickSort(
                    orders,
                    low,
                    pivotIndex - 1
            );


            quickSort(
                    orders,
                    pivotIndex + 1,
                    high
            );

        }
    }



    private static int partition(
            Order[] orders,
            int low,
            int high) {


        double pivot =
                orders[high].getTotalPrice();


        int i = low - 1;


        for(int j = low; j < high; j++) {


            if(orders[j].getTotalPrice() <= pivot) {


                i++;


                Order temp = orders[i];

                orders[i] = orders[j];

                orders[j] = temp;

            }
        }


        Order temp = orders[i + 1];

        orders[i + 1] = orders[high];

        orders[high] = temp;


        return i + 1;

    }




    public static void display(Order[] orders) {


        for(Order order : orders) {

            order.display();

        }

    }




    public static void main(String[] args) {


        Order[] orders = {

                new Order(1,"Ashwin",5000),
                new Order(2,"Arun",15000),
                new Order(3,"Kumar",8000),
                new Order(4,"Raj",20000)

        };



        System.out.println("Before Sorting:");

        display(orders);



        System.out.println("\nBubble Sort:");

        bubbleSort(orders);

        display(orders);




        Order[] orders2 = {

                new Order(1,"Ashwin",5000),
                new Order(2,"Arun",15000),
                new Order(3,"Kumar",8000),
                new Order(4,"Raj",20000)

        };



        System.out.println("\nQuick Sort:");

        quickSort(
                orders2,
                0,
                orders2.length - 1
        );

        display(orders2);

    }
}