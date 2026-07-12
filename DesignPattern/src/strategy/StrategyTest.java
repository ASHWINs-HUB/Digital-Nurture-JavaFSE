package strategy;


class PaymentContext {


    private PaymentStrategy strategy;


    public void setPaymentStrategy(PaymentStrategy strategy) {

        this.strategy = strategy;

    }


    public void executePayment(double amount) {

        strategy.pay(amount);

    }
}



public class StrategyTest {


    public static void main(String[] args) {


        PaymentContext context = new PaymentContext();



        context.setPaymentStrategy(
                new CreditCardPayment("1234-5678-9012")
        );

        context.executePayment(500);



        System.out.println();



        context.setPaymentStrategy(
                new PayPalPayment("user@gmail.com")
        );

        context.executePayment(750);

    }
}