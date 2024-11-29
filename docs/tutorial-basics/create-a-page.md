---
sidebar_position: 1
---

# Descripción

El Patrón Command es un patrón de diseño de comportamiento que encapsula una solicitud como un objeto, permitiendo parametrizar objetos con operaciones, registrar solicitudes para ejecutarlas en un momento posterior, y soportar operaciones reversibles. Este patrón es ideal cuando necesitas separar el objeto que realiza una operación del objeto que la solicita, promoviendo la adherencia al principio de responsabilidad única y facilitando la extensibilidad del sistema.

![Diagrama del Patrón Command](https://i.ytimg.com/vi/5i12FFiRl8A/maxresdefault.jpg)


## Estructura del Patrón Command
![Command](https://www.oscarblancarteblog.com/wp-content/uploads/2014/11/Command-pattern.jpg)

### Command (Interfaz o Clase Abstracta):

Declara un método que se ejecutará para realizar una acción.
Este método generalmente se denomina execute().

### ConcreteCommand (Comandos Concretos):

Implementa la interfaz Command y define la conexión entre una acción específica y el receptor correspondiente.
Almacena una referencia al receptor y encapsula los detalles de la llamada a los métodos del receptor.

### Receiver (Receptor):

Es el objeto que conoce cómo realizar las operaciones asociadas a la solicitud.
El comando delega la ejecución de la solicitud al receptor.

### Invoker (Invocador):

Es el objeto que solicita la ejecución del comando.
Puede gestionar una cola de comandos y realizar operaciones como ejecutar, deshacer o rehacer.

### Client (Cliente):

Crea y configura los objetos Command, asociándolos con los receptores y asignándolos al invocador.

# Ejemplo 

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