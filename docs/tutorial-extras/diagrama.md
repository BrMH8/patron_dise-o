---
sidebar_position: 3
---

# Diagrama UML
![Diagrama del Patrón State](https://tse1.mm.bing.net/th?id=OIP.AOke_HPjTZ9k2Yl4SHVqmwAAAA&pid=Api&P=0&h=180)

## Componentes del Diagrama UML

Contexto:

Representa el objeto principal que tiene un estado actual.
Contiene un atributo que referencia a un objeto de tipo Estado (la interfaz o clase abstracta).
Proporciona el método peticion() (o solicitar()), que delega la solicitud al estado actual.
Cambia su estado dinámicamente al interactuar con los estados concretos.

Estado:

Es una interfaz o clase abstracta que define el contrato común para todos los estados.
Contiene el método manejar() (o handle()), que será implementado por cada estado concreto.
Este método encapsula el comportamiento específico asociado con un estado.

EstadoConcretoA y EstadoConcretoB:

Son las clases concretas que implementan la interfaz Estado.
Cada clase define el comportamiento específico del método manejar() para ese estado.
Pueden cambiar el estado del contexto a otro estado concreto después de manejar la solicitud.
Flujo de Interacción

Inicialización del Contexto:

El Contexto tiene una referencia a un objeto de tipo Estado. Inicialmente, este podría ser EstadoConcretoA.

Delegación de la Solicitud:

Cuando el Contexto recibe una llamada al método peticion(), este delega la solicitud al método manejar() del estado actual.

Ejecución de la Lógica del Estado:

El estado actual (por ejemplo, EstadoConcretoA) ejecuta su lógica específica al manejar la solicitud.

Cambio de Estado (Opcional):

Durante o después de manejar la solicitud, el estado actual puede cambiar el estado del Contexto a otro (por ejemplo, EstadoConcretoB).

## Ventajas del Diagrama
### Modularidad: 
Cada estado tiene su lógica separada, lo que facilita el mantenimiento y la extensión.
### Flexibilidad: 
Los estados se pueden cambiar dinámicamente sin modificar el Contexto.
### Claridad: 
El flujo de ejecución está claramente definido, lo que hace que sea más fácil entender cómo cambia el comportamiento del Contexto dependiendo del estado.