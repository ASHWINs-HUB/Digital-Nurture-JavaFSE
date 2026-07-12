package forecasting;

public class ForecastTest {


    public static void main(String[] args) {


        double initialAmount = 10000;

        double growthRate = 0.10;   // 10% growth

        int years = 5;



        double futureValue =
                FinancialForecast.calculateFutureValue(
                        initialAmount,
                        growthRate,
                        years
                );



        System.out.println(
                "Future Value using Recursion: "
                        + futureValue
        );



        double optimizedValue =
                FinancialForecast.optimizedForecast(
                        initialAmount,
                        growthRate,
                        years
                );



        System.out.println(
                "Future Value using Optimization: "
                        + optimizedValue
        );

    }
}