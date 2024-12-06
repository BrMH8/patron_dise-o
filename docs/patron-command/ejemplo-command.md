---
sidebar_position: 2
---

# Ejemplo de patron Command

### 1. Command (Interfaz del comando)
Define un método genérico execute que será implementado por cada comando concreto.

```js title="ejemplo.js"
interface Command {
    void execute();
}
```

### 2. ConcreteCommand (Comandos específicos)
Implementa la interfaz Command y define acciones específicas para cada dispositivo. Por ejemplo:

Encender la TV:
```js title="ejemplo.js"
class TurnOnTVCommand implements Command {
    private Television tv;

    public TurnOnTVCommand(Television tv) {
        this.tv = tv;
    }

    @Override
    public void execute() {
        tv.turnOn();
    }
}
```

Apagar la Luz:
```js title="ejemplo.js"
class TurnOffLightCommand implements Command {
    private Light light;

    public TurnOffLightCommand(Light light) {
        this.light = light;
    }

    @Override
    public void execute() {
        light.turnOff();
    }
}
```
### 3. Receiver (Receptor)
Son los dispositivos que realizan las acciones reales. Por ejemplo, una televisión, una luz o un aire acondicionado:

Television:
```js title="ejemplo.js"
class Television {
    public void turnOn() {
        System.out.println("La televisión está encendida.");
    }

    public void turnOff() {
        System.out.println("La televisión está apagada.");
    }
}
```
Luz:
```js title="ejemplo.js"
class Light {
    public void turnOn() {
        System.out.println("La luz está encendida.");
    }

    public void turnOff() {
        System.out.println("La luz está apagada.");
    }
}
```
### 4. Invoker (Invocador)
El control remoto que ejecuta los comandos:
```js title="ejemplo.js"
class RemoteControl {
    private Command command;

    public void setCommand(Command command) {
        this.command = command;
    }

    public void pressButton() {
        command.execute();
    }
}
```
### 5. Client (Cliente)
El cliente configura el control remoto asociando los comandos con los dispositivos.
```js title="ejemplo.js"
public class Main {
    public static void main(String[] args) {
        // Crear los receptores
        Television tv = new Television();
        Light light = new Light();

        // Crear los comandos
        Command turnOnTV = new TurnOnTVCommand(tv);
        Command turnOffLight = new TurnOffLightCommand(light);

        // Configurar el control remoto
        RemoteControl remote = new RemoteControl();

        // Encender la TV
        remote.setCommand(turnOnTV);
        remote.pressButton();

        // Apagar la luz
        remote.setCommand(turnOffLight);
        remote.pressButton();
    }
}
```
### Salida del Programa
La televisión está encendida.
La luz está apagada.

## Explicación
### Receivers (Television, Light):

Contienen la lógica específica para realizar las acciones, como encender o apagar un dispositivo.
### Comandos concretos (TurnOnTVCommand, TurnOffLightCommand):

Actúan como intermediarios entre el control remoto (invocador) y los dispositivos (receptores). Esto permite agregar nuevos comandos o modificar los existentes sin cambiar el invocador.
### Control Remoto (RemoteControl):

No sabe nada acerca de cómo funcionan los dispositivos, solo sabe cómo ejecutar comandos. Esto hace que sea flexible y reutilizable.
### Cliente (Main):

Configura el sistema asociando dispositivos, comandos y botones del control remoto.

## Ventajas del Ejemplo

#### Desacoplamiento: 
El control remoto no necesita saber cómo funciona cada dispositivo. Solo llama al método execute del comando.
#### Flexibilidad:
Puedes agregar nuevos dispositivos o comandos (como "Subir Volumen" para la TV) sin afectar el resto del código.
#### Extensibilidad: 
Permite implementar fácilmente funciones como "deshacer" al agregar un método undo en los comandos.