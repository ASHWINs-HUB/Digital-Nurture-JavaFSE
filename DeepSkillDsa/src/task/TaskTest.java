package task;

public class TaskTest {


    public static void main(String[] args) {


        TaskLinkedList list = new TaskLinkedList();



        list.addTask(
                new Task(
                        1,
                        "Complete Project",
                        "Pending"
                )
        );


        list.addTask(
                new Task(
                        2,
                        "Submit Assignment",
                        "Completed"
                )
        );


        list.addTask(
                new Task(
                        3,
                        "Study DSA",
                        "In Progress"
                )
        );



        System.out.println("Task List:");

        list.displayTasks();



        System.out.println("\nSearch Task:");

        Task result = list.searchTask(2);


        if(result != null) {

            result.display();

        }



        System.out.println("\nAfter Delete:");

        list.deleteTask(1);


        list.displayTasks();

    }
}