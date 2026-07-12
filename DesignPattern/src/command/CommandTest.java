package command;


class LightOffCommand implements Command {


    private Light light;


    public LightOffCommand(Light light) {

        this.light = light;

    }


    @Override
    public void execute() {

        light.turnOff();

    }
}



class RemoteControl {


    private Command command;


    public void setCommand(Command command) {

        this.command = command;

    }


    public void pressButton() {

        command.execute();

    }
}



public class CommandTest {


    public static void main(String[] args) {


        Light light = new Light();


        Command lightOn =
                new LightOnCommand(light);


        Command lightOff =
                new LightOffCommand(light);



        RemoteControl remote = new RemoteControl();



        remote.setCommand(lightOn);

        remote.pressButton();



        remote.setCommand(lightOff);

        remote.pressButton();

    }
}