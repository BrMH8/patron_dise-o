---
sidebar_position: 1
---

# Descripción
El patrón Iterador es un patrón de diseño de comportamiento que permite recorrer elementos de una colección (como listas, conjuntos o arreglos) sin exponer su implementación subyacente. Este patrón proporciona una interfaz estándar para iterar sobre una colección, de modo que se pueda acceder secuencialmente a sus elementos sin necesidad de conocer cómo están almacenados. La clave del patrón Iterador es separar la lógica de iteración de la colección misma, manteniendo el principio de responsabilidad única.

![Patrón iterador](https://refactoring.guru/images/patterns/content/iterator/iterator-es.png)

# Propósito
El objetivo principal del patrón Iterador es proporcionar un mecanismo uniforme para recorrer diferentes tipos de colecciones, independientemente de su estructura interna. Por ejemplo, puedes usar el mismo método para recorrer un arreglo, una lista enlazada o un árbol binario sin preocuparte por sus diferencias internas. Este patrón es muy útil para reducir el acoplamiento entre la colección y el cliente que la utiliza, ya que el cliente no necesita saber nada sobre cómo se almacenan los datos.

## Estructura del Patrón Iterador
El patrón Iterador generalmente se representa con los siguientes elementos clave en su estructura:

1. Iterador (Iterator):

Es una interfaz que declara las operaciones necesarias para recorrer los elementos de una colección.
Métodos comunes:
hasNext(): Indica si hay más elementos para recorrer.
next(): Devuelve el siguiente elemento de la colección.
(Opcional) remove(): Elimina el último elemento devuelto por el iterador.

2. Iterador Concreto (ConcreteIterator):

Es una implementación de la interfaz Iterator que mantiene el seguimiento de la posición actual en la colección.
Contiene la lógica para recorrer una colección específica.
Gestiona el estado interno necesario para moverse entre elementos.

3. Colección (Aggregate):

Es una interfaz o clase abstracta que declara un método para obtener un iterador asociado con la colección.
Métodos típicos:
createIterator(): Devuelve un objeto iterador.

4. Colección Concreta (ConcreteAggregate):

Es una implementación de la interfaz Aggregate que contiene los datos reales y su estructura interna.
Proporciona el método createIterator() para devolver una instancia del iterador correspondiente.
Relaciones entre los Componentes
El cliente utiliza la colección concreta (ConcreteAggregate) para obtener un iterador (createIterator()).
El cliente utiliza el iterador (Iterator) para acceder a los elementos de la colección sin conocer su estructura interna.
El iterador concreto (ConcreteIterator) se encarga de realizar el recorrido sobre la colección concreta.

![Patrón iterador](https://i.ytimg.com/vi/vRCeaDLgyng/maxresdefault.jpg)