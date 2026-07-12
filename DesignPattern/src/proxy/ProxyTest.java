package proxy;

public class ProxyTest {

    public static void main(String[] args) {


        Image image = new ProxyImage("nature.jpg");


        System.out.println("First call:");

        image.display();


        System.out.println();


        System.out.println("Second call:");

        image.display();

    }
}