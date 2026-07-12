package employee;

public class EmployeeTest {


    static Employee[] employees = new Employee[10];

    static int count = 0;



    // Add employee O(1)
    public static void addEmployee(Employee employee) {

        if(count < employees.length) {

            employees[count] = employee;

            count++;

        }

    }



    // Search employee O(n)
    public static Employee searchEmployee(int id) {


        for(int i = 0; i < count; i++) {


            if(employees[i].getEmployeeId() == id) {

                return employees[i];

            }

        }


        return null;

    }



    // Traverse employees O(n)
    public static void displayEmployees() {


        for(int i = 0; i < count; i++) {

            employees[i].display();

        }

    }



    // Delete employee O(n)
    public static void deleteEmployee(int id) {


        for(int i = 0; i < count; i++) {


            if(employees[i].getEmployeeId() == id) {


                for(int j = i; j < count - 1; j++) {

                    employees[j] = employees[j + 1];

                }


                count--;

                break;

            }

        }

    }



    public static void main(String[] args) {


        addEmployee(
                new Employee(
                        101,
                        "Ashwin",
                        "Developer",
                        50000
                )
        );


        addEmployee(
                new Employee(
                        102,
                        "Arun",
                        "Tester",
                        40000
                )
        );


        addEmployee(
                new Employee(
                        103,
                        "Kumar",
                        "Manager",
                        70000
                )
        );



        System.out.println("Employees:");

        displayEmployees();



        System.out.println("\nSearch Employee:");

        Employee result = searchEmployee(102);


        if(result != null) {

            result.display();

        }



        System.out.println("\nAfter Delete:");

        deleteEmployee(101);

        displayEmployees();

    }
}