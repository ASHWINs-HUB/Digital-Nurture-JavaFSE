package library;

import java.util.Arrays;
import java.util.Comparator;

public class LibraryTest {



    // Linear Search O(n)
    public static Book linearSearch(Book[] books, String title) {


        for(Book book : books) {


            if(book.getTitle().equalsIgnoreCase(title)) {

                return book;

            }

        }


        return null;

    }





    // Binary Search O(log n)
    public static Book binarySearch(Book[] books, String title) {


        int low = 0;

        int high = books.length - 1;



        while(low <= high) {


            int mid = (low + high) / 2;



            int result =
                    books[mid]
                            .getTitle()
                            .compareToIgnoreCase(title);



            if(result == 0) {

                return books[mid];

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



        Book[] books = {


                new Book(
                        1,
                        "Java Programming",
                        "James Gosling"
                ),


                new Book(
                        2,
                        "Data Structures",
                        "Mark Allen"
                ),


                new Book(
                        3,
                        "Algorithms",
                        "Robert Sedgewick"
                ),


                new Book(
                        4,
                        "Database Systems",
                        "Elmasri"
                )

        };



        System.out.println("Linear Search:");

        Book result1 =
                linearSearch(
                        books,
                        "Algorithms"
                );


        if(result1 != null) {

            result1.display();

        }




        // Sort books before binary search

        Arrays.sort(
                books,
                Comparator.comparing(Book::getTitle)
        );



        System.out.println("\nBinary Search:");

        Book result2 =
                binarySearch(
                        books,
                        "Java Programming"
                );


        if(result2 != null) {

            result2.display();

        }

    }
}