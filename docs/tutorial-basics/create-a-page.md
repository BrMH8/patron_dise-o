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

