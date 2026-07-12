package forecasting;

public class FinancialForecast {



    // Recursive method to calculate future value
    public static double calculateFutureValue(
            double currentValue,
            double growthRate,
            int years) {


        if(years == 0) {

            return currentValue;

        }


        return calculateFutureValue(
                currentValue * (1 + growthRate),
                growthRate,
                years - 1
        );

    }



    // Optimized recursive method using formula
    public static double optimizedForecast(
            double currentValue,
            double growthRate,
            int years) {


        return currentValue *
                Math.pow(
                        (1 + growthRate),
                        years
                );

    }

}