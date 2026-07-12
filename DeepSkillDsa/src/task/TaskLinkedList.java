package task;

public class TaskLinkedList {


    class Node {

        Task task;
        Node next;


        Node(Task task) {

            this.task = task;

            this.next = null;

        }
    }



    private Node head;



    // Add task O(1)
    public void addTask(Task task) {


        Node newNode = new Node(task);


        newNode.next = head;


        head = newNode;

    }



    // Search task O(n)
    public Task searchTask(int id) {


        Node current = head;


        while(current != null) {


            if(current.task.getTaskId() == id) {

                return current.task;

            }


            current = current.next;

        }


        return null;

    }



    // Traverse O(n)
    public void displayTasks() {


        Node current = head;


        while(current != null) {


            current.task.display();


            current = current.next;

        }

    }



    // Delete task O(n)
    public void deleteTask(int id) {


        if(head == null) {

            return;

        }



        if(head.task.getTaskId() == id) {

            head = head.next;

            return;

        }



        Node current = head;


        while(current.next != null) {


            if(current.next.task.getTaskId() == id) {


                current.next = current.next.next;

                return;

            }


            current = current.next;

        }

    }
}