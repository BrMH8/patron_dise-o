## Analogía en el mundo real

![Varias estrategias de transporte](https://refactoring.guru/images/patterns/content/strategy/strategy-comic-1-es.png?id=1cf442d8c2d5d78f214499bb72dfdc72)

Varias estrategias para llegar al aeropuerto.

Imagina que tienes que llegar al aeropuerto. Puedes tomar el autobús, pedir un taxi o ir en bicicleta. Éstas son tus estrategias de transporte. Puedes elegir una de las estrategias, dependiendo de factores como el presupuesto o los límites de tiempo.

## Estructura

![Estructura del patrón de diseño Strategy](https://refactoring.guru/images/patterns/diagrams/strategy/structure.png?id=c6aa910c94960f35d100bfca02810ea1)

1.  La clase  **Contexto**  mantiene una referencia a una de las estrategias concretas y se comunica con este objeto únicamente a través de la interfaz estrategia.
    
2.  La interfaz  **Estrategia**  es común a todas las estrategias concretas. Declara un método que la clase contexto utiliza para ejecutar una estrategia.
    
3.  Las  **Estrategias Concretas**  implementan distintas variaciones de un algoritmo que la clase contexto utiliza.
    
4.  La clase contexto invoca el método de ejecución en el objeto de estrategia vinculado cada vez que necesita ejecutar el algoritmo. La clase contexto no sabe con qué tipo de estrategia funciona o cómo se ejecuta el algoritmo.
    
5.  El  **Cliente**  crea un objeto de estrategia específico y lo pasa a la clase contexto. La clase contexto expone un modificador  _set_  que permite a los clientes sustituir la estrategia asociada al contexto durante el tiempo de ejecución.
    

## Pseudocódigo

En este ejemplo, el contexto utiliza varias  **estrategias**  para ejecutar diversas operaciones aritméticas.

```

// La interfaz estrategia declara operaciones comunes a todas
// las versiones soportadas de algún algoritmo. El contexto
// utiliza esta interfaz para invocar el algoritmo definido por
// las estrategias concretas.
interface Strategy is
    method execute(a, b)

// Las estrategias concretas implementan el algoritmo mientras
// siguen la interfaz estrategia base. La interfaz las hace
// intercambiables en el contexto.
class ConcreteStrategyAdd implements Strategy is
    method execute(a, b) is
        return a + b

class ConcreteStrategySubtract implements Strategy is
    method execute(a, b) is
        return a - b

class ConcreteStrategyMultiply implements Strategy is
    method execute(a, b) is
        return a * b

// El contexto define la interfaz de interés para los clientes.
class Context is
    // El contexto mantiene una referencia a uno de los objetos
    // de estrategia. El contexto no conoce la clase concreta de
    // una estrategia. Debe trabajar con todas las estrategias a
    // través de la interfaz estrategia.
    private strategy: Strategy

    // Normalmente, el contexto acepta una estrategia a través
    // del constructor y también proporciona un setter
    // (modificador) para poder cambiar la estrategia durante el
    // tiempo de ejecución.
    method setStrategy(Strategy strategy) is
        this.strategy = strategy

    // El contexto delega parte del trabajo al objeto de
    // estrategia en lugar de implementar varias versiones del
    // algoritmo por su cuenta.
    method executeStrategy(int a, int b) is
        return strategy.execute(a, b)

// El código cliente elige una estrategia concreta y la pasa al
// contexto. El cliente debe conocer las diferencias entre
// estrategias para elegir la mejor opción.
class ExampleApplication is
    method main() is
        Create context object.

        Read first number.
        Read last number.
        Read the desired action from user input.

        if (action == addition) then
            context.setStrategy(new ConcreteStrategyAdd())

        if (action == subtraction) then
            context.setStrategy(new ConcreteStrategySubtract())

        if (action == multiplication) then
            context.setStrategy(new ConcreteStrategyMultiply())

        result = context.executeStrategy(First number, Second number)

        Print result.
        ```

## Aplicabilidad

Utiliza el patrón Strategy cuando quieras utiliza distintas variantes de un algoritmo dentro de un objeto y poder cambiar de un algoritmo a otro durante el tiempo de ejecución.

El patrón Strategy te permite alterar indirectamente el comportamiento del objeto durante el tiempo de ejecución asociándolo con distintos subobjetos que pueden realizar subtareas específicas de distintas maneras.

Utiliza el patrón Strategy cuando tengas muchas clases similares que sólo se diferencien en la forma en que ejecutan cierto comportamiento.

El patrón Strategy te permite extraer el comportamiento variante para ponerlo en una jerarquía de clases separada y combinar las clases originales en una, reduciendo con ello el código duplicado.

Utiliza el patrón para aislar la lógica de negocio de una clase, de los detalles de implementación de algoritmos que pueden no ser tan importantes en el contexto de esa lógica.

El patrón Strategy te permite aislar el código, los datos internos y las dependencias de varios algoritmos, del resto del código. Los diversos clientes obtienen una interfaz simple para ejecutar los algoritmos y cambiarlos durante el tiempo de ejecución.

Utiliza el patrón cuando tu clase tenga un enorme operador condicional que cambie entre distintas variantes del mismo algoritmo.

El patrón Strategy te permite suprimir dicho condicional extrayendo todos los algoritmos para ponerlos en clases separadas, las cuales implementan la misma interfaz. El objeto original delega la ejecución a uno de esos objetos, en lugar de implementar todas las variantes del algoritmo.


## Cómo implementarlo

1.  En la clase contexto, identifica un algoritmo que tienda a sufrir cambios frecuentes. También puede ser un enorme condicional que seleccione y ejecute una variante del mismo algoritmo durante el tiempo de ejecución.
    
2.  Declara la interfaz estrategia común a todas las variantes del algoritmo.
    
3.  Uno a uno, extrae todos los algoritmos y ponlos en sus propias clases. Todas deben implementar la misma interfaz estrategia.
    
4.  En la clase contexto, añade un campo para almacenar una referencia a un objeto de estrategia. Proporciona un modificador  _set_  para sustituir valores de ese campo. La clase contexto debe trabajar con el objeto de estrategia únicamente a través de la interfaz estrategia. La clase contexto puede definir una interfaz que permita a la estrategia acceder a sus datos.
    
5.  Los clientes de la clase contexto deben asociarla con una estrategia adecuada que coincida con la forma en la que esperan que la clase contexto realice su trabajo principal.


## Ejemplo pythom

**Ejemplos de uso:**  El patrón Strategy es muy común en el código Python. Se utiliza a menudo en varios  _frameworks_  para proporcionar a los usuarios una forma de cambiar el comportamiento de una clase sin extenderla.

**Identificación:**  El patrón Strategy se puede reconocer por un método que permite a los objetos anidados hacer el verdadero trabajo, así como el método  _setter_  (modificador) que permite sustituir ese objeto por otro diferente.

## Ejemplo conceptual

Este ejemplo ilustra la estructura del patrón de diseño  **Strategy**. Se centra en responder las siguientes preguntas:

-   ¿De qué clases se compone?
-   ¿Qué papeles juegan esas clases?
-   ¿De qué forma se relacionan los elementos del patrón?

## Ejemplo conceptual
```

from __future__ import annotations
from abc import ABC, abstractmethod
from typing import List

class Context():
    """
 The Context defines the interface of interest to clients.
 """

    def __init__(self, strategy: Strategy) -> None:
        """
 Usually, the Context accepts a strategy through the constructor, but
 also provides a setter to change it at runtime.
 """

        self._strategy = strategy

    @property
    def strategy(self) -> Strategy:
        """
 The Context maintains a reference to one of the Strategy objects. The
 Context does not know the concrete class of a strategy. It should work
 with all strategies via the Strategy interface.
 """

        return self._strategy

    @strategy.setter
    def strategy(self, strategy: Strategy) -> None:
        """
 Usually, the Context allows replacing a Strategy object at runtime.
 """

        self._strategy = strategy

    def do_some_business_logic(self) -> None:
        """
 The Context delegates some work to the Strategy object instead of
 implementing multiple versions of the algorithm on its own.
 """

        # ...

        print("Context: Sorting data using the strategy (not sure how it'll do it)")
        result = self._strategy.do_algorithm(["a", "b", "c", "d", "e"])
        print(",".join(result))

        # ...

class Strategy(ABC):
    """
 The Strategy interface declares operations common to all supported versions
 of some algorithm.

 The Context uses this interface to call the algorithm defined by Concrete
 Strategies.
 """

    @abstractmethod
    def do_algorithm(self, data: List):
        pass

"""
Concrete Strategies implement the algorithm while following the base Strategy
interface. The interface makes them interchangeable in the Context.
"""

class ConcreteStrategyA(Strategy):
    def do_algorithm(self, data: List) -> List:
        return sorted(data)

class ConcreteStrategyB(Strategy):
    def do_algorithm(self, data: List) -> List:
        return reversed(sorted(data))

if __name__ == "__main__":
     The client code picks a concrete strategy and passes it to the context.
     The client should be aware of the differences between strategies in order
     to make the right choice.

    context = Context(ConcreteStrategyA())
    print("Client: Strategy is set to normal sorting.")
    context.do_some_business_logic()
    print()

    print("Client: Strategy is set to reverse sorting.")
    context.strategy = ConcreteStrategyB()
    context.do_some_business_logic()

**  Resultado de la ejecución

Client: Strategy is set to normal sorting.
Context: Sorting data using the strategy (not sure how it'll do it)
a,b,c,d,e

Client: Strategy is set to reverse sorting.
Context: Sorting data using the strategy (not sure how it'll do it)
e,d,c,b,a