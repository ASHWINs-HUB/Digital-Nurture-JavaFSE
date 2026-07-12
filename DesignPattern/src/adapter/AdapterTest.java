package adapter;

public class AdapterTest {

    public static void main(String[] args) {


        PayPalGateway gateway = new PayPalGateway();


        PaymentProcessor paymentProcessor =
                new PayPalAdapter(gateway);


        paymentProcessor.processPayment(250.00);

    }
}