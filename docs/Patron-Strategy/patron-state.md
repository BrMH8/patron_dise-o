---
sidebar_position: 1
---

# Descripción de Patron State

El patrón State permite a un objeto alterar su comportamiento cuando su estado interno cambia. El objeto parecerá cambiar de clase.
El patrón State (Estado) es un patrón de diseño comportamental que permite a un objeto cambiar su comportamiento cuando cambia su estado interno. Este patrón es útil para evitar múltiples sentencias condicionales (como if-else o switch) y, en su lugar, delegar el comportamiento a clases específicas que representan diferentes estados del objeto.

## Propósito
State es un patrón de diseño de comportamiento que permite a un objeto alterar su comportamiento cuando su estado interno cambia. Parece como si el objeto cambiara su clase.

![Patrón State](https://refactoring.guru/images/patterns/content/state/state-es.png)

## Estructura
El patrón State consta de los siguientes elementos clave:

### Contexto (Context):

Es la clase principal que contiene el estado actual del objeto.
Mantiene una referencia a un objeto que implementa la interfaz Estado.
Delega las operaciones relacionadas al estado actual.

### Interfaz Estado (State):

Define una interfaz común para todos los estados.
Declara los métodos que cada estado concreto debe implementar.

### Estados Concretos (ConcreteState):

Son clases concretas que implementan la interfaz State.
Cada clase concreta representa un estado específico y define el comportamiento asociado a ese estado.
