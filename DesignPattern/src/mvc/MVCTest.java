package mvc;

public class MVCTest {


    public static void main(String[] args) {


        Student student =
                new Student(
                        101,
                        "Ashwin",
                        "A"
                );



        StudentView view = new StudentView();



        StudentController controller =
                new StudentController(
                        student,
                        view
                );



        controller.updateView();



        System.out.println();



        controller.setStudentName("Arun");

        controller.setStudentGrade("A+");



        controller.updateView();

    }
}