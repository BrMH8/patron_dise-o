---
sidebar_position: 3
---

# Diagrama del Patrón Iterador
![Patrón iterador](https://tse2.mm.bing.net/th?id=OIP.jlHbcuJjWlLTUXQJDI-IWQHaEE&pid=Api&P=0&h=180)

## 1. Aggregate (Agregado)
Descripción: Es una interfaz o clase abstracta que define el contrato para crear un iterador.
Método importante:
iterator(): Devuelve un objeto que implementa la interfaz Iterator, lo que permite recorrer los elementos de la colección.
Función en el patrón: Proporciona un punto de acceso uniforme para que el cliente pueda obtener un iterador.
## 2. ConcreteAggregate (Agregado Concreto)
Descripción: Es la implementación concreta de la interfaz Aggregate. Representa la colección de elementos que se desean recorrer.
Método importante:
iterator(): Implementa el método para devolver un objeto iterador específico de esta colección.
Ejemplo práctico: Una lista de nombres o un conjunto de elementos almacenados.
## 3. Iterator (Iterador)
Descripción: Es una interfaz o clase abstracta que define los métodos estándar para recorrer una colección.
Métodos importantes:
next(): Devuelve el siguiente elemento de la colección.
hasNext(): Verifica si hay más elementos para recorrer.
Función en el patrón: Permite al cliente interactuar con la colección sin conocer su estructura interna.
## 4. ConcreteIterator (Iterador Concreto)
Descripción: Implementa la interfaz Iterator y proporciona la lógica específica para recorrer los elementos de la colección concreta (ConcreteAggregate).
Métodos importantes:
next(): Implementa la lógica para devolver el siguiente elemento de la colección.
hasNext(): Verifica si hay elementos restantes.
Función en el patrón: Gestiona el estado del recorrido (por ejemplo, la posición actual en la colección).
Relaciones
Aggregate y ConcreteAggregate:

ConcreteAggregate hereda o implementa Aggregate, asegurando que pueda devolver un iterador.
Iterator y ConcreteIterator:

ConcreteIterator implementa la interfaz Iterator, lo que asegura que puede recorrer los elementos definidos en ConcreteAggregate.
Dependencia entre ConcreteAggregate y ConcreteIterator:

El ConcreteAggregate crea y devuelve instancias de su correspondiente ConcreteIterator.