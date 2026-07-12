package decorator;

public class DecoratorTest {

    public static void main(String[] args) {


        Notifier notifier = new EmailNotifier();


        notifier.send("Server is running");


        System.out.println();


        Notifier smsNotifier =
                new SMSNotifierDecorator(notifier);


        smsNotifier.send("Server is down");

    }
}