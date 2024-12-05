---
sidebar_position: 3
---

# Diagrama del Patrón Command
![Diagrama del Patrón Command](https://tse2.mm.bing.net/th?id=OIP.NrAS65_9OSvTeAMDOvlC8gAAAA&pid=Api&P=0&h=180)

### Cliente (Cliente):

Es el actor que crea y configura los objetos del patrón.
Su responsabilidad es asociar el comando concreto (ConcreteCommand) con el receptor (Receptor).
Es quien pasa el comando al invocador (Invocador) para su ejecución.
Ejemplo práctico: En un control remoto universal, el cliente sería la persona que programa el control para que cada botón realice una acción específica.

### Invocador (Invocador):
Es el objeto que solicita la ejecución de un comando.
No conoce los detalles del receptor ni cómo se realiza la acción; simplemente llama al método ejecutar() del comando.
Puede gestionar una cola de comandos o realizar tareas como deshacer y rehacer.
Ejemplo práctico: El control remoto, que tiene botones configurados para realizar acciones como encender la luz o apagar la TV, es el invocador.

### Command ( Command):

Es la interfaz o clase abstracta que define el método ejecutar().
Todos los comandos concretos deben implementarla.
Este método encapsula la acción que se realizará sobre el receptor.
Ejemplo práctico: Una interfaz de comando que tiene implementaciones específicas como encender un dispositivo, apagarlo, o ajustar su configuración.

### ConcreteCommand (ConcreteCommand):

Es una implementación concreta de la interfaz Command.
Contiene la lógica para llamar al método adecuado del receptor para realizar la acción deseada.
Almacena una referencia al receptor y, opcionalmente, a un estado adicional necesario para ejecutar el comando.
Ejemplo práctico: El comando "Encender la TV" contiene una referencia al objeto TV y llama a su método encender().

### Receptor (Receptor):

Es el objeto que conoce cómo realizar la acción solicitada.
La ejecución del comando se delega a este objeto.
Define los métodos específicos que serán invocados por los comandos concretos.
Ejemplo práctico: Un dispositivo, como una TV, que tiene métodos específicos como encender() y apagar().