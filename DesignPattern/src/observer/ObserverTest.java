package observer;

class MobileApp implements Observer {


    @Override
    public void update(double price) {

        System.out.println(
                "Mobile App: Stock price updated to $" + price
        );

    }
}


class WebApp implements Observer {


    @Override
    public void update(double price) {

        System.out.println(
                "Web App: Stock price updated to $" + price
        );

    }
}



public class ObserverTest {


    public static void main(String[] args) {


        StockMarket market = new StockMarket();


        Observer mobile = new MobileApp();

        Observer web = new WebApp();


        market.registerObserver(mobile);

        market.registerObserver(web);



        market.setStockPrice(150.50);


        System.out.println();


        market.setStockPrice(175.75);

    }
}