
## Aplicabilidad

Utiliza el patrón Mediator cuando resulte difícil cambiar algunas de las clases porque están fuertemente acopladas a un puñado de otras clases.

El patrón te permite extraer todas las relaciones entre clases dentro de una clase separada, aislando cualquier cambio en un componente específico, del resto de los componentes.

Utiliza el patrón cuando no puedas reutilizar un componente en un programa diferente porque sea demasiado dependiente de otros componentes.

Una vez aplicado el patrón Mediator, los componentes individuales no conocen los otros componentes. Todavía pueden comunicarse entre sí, aunque indirectamente, a través del objeto mediador. Para reutilizar un componente en una aplicación diferente, debes darle una nueva clase mediadora.

Utiliza el patrón Mediator cuando te encuentres creando cientos de subclases de componente sólo para reutilizar un comportamiento básico en varios contextos.

Debido a que todas las relaciones entre componentes están contenidas dentro del mediador, resulta fácil definir formas totalmente nuevas de colaboración entre estos componentes introduciendo nuevas clases mediadoras, sin tener que cambiar los propios componentes.

## Cómo implementarlo

1.  Identifica un grupo de clases fuertemente acopladas que se beneficiarían de ser más independientes (p. ej., para un mantenimiento más sencillo o una reutilización más simple de esas clases).
    
2.  Declara la interfaz mediadora y describe el protocolo de comunicación deseado entre mediadores y otros varios componentes. En la mayoría de los casos, un único método para recibir notificaciones de los componentes es suficiente.
    
    Esta interfaz es fundamental cuando quieras reutilizar las clases del componente en distintos contextos. Siempre y cuando el componente trabaje con su mediador a través de la interfaz genérica, podrás vincular el componente con una implementación diferente del mediador.
    
3.  Implementa la clase concreta mediadora. Esta clase se beneficiará de almacenar referencias a todos los componentes que gestiona.
    
4.  Puedes ir más lejos y hacer la interfaz mediadora responsable de la creación y destrucción de objetos del componente. Tras esto, la mediadora puede parecerse a una  [fábrica](https://refactoring.guru/es/design-patterns/abstract-factory)  o una  [fachada](https://refactoring.guru/es/design-patterns/facade).
    
5.  Los componentes deben almacenar una referencia al objeto mediador. La conexión se establece normalmente en el constructor del componente, donde un objeto mediador se pasa como argumento.
    
6.  Cambia el código de los componentes de forma que invoquen el método de notificación del mediador en lugar de los métodos de otros componentes. Extrae el código que implique llamar a otros componentes dentro de la clase mediadora. Ejecuta este código cuando el mediador reciba notificaciones de ese componente.


## Ejemplo con Python 

Este ejemplo ilustra la estructura del patrón de diseño  **Mediator**. Se centra en responder las siguientes preguntas:

-   ¿De qué clases se compone?
-   ¿Qué papeles juegan esas clases?
-   ¿De qué forma se relacionan los elementos del patrón?
```

from __future__ import annotations
from abc import ABC

class Mediator(ABC):
    """
 The Mediator interface declares a method used by components to notify the
 mediator about various events. The Mediator may react to these events and
 pass the execution to other components.
 """

    def notify(self, sender: object, event: str) -> None:
        pass

class ConcreteMediator(Mediator):
    def __init__(self, component1: Component1, component2: Component2) -> None:
        self._component1 = component1
        self._component1.mediator = self
        self._component2 = component2
        self._component2.mediator = self

    def notify(self, sender: object, event: str) -> None:
        if event == "A":
            print("Mediator reacts on A and triggers following operations:")
            self._component2.do_c()
        elif event == "D":
            print("Mediator reacts on D and triggers following operations:")
            self._component1.do_b()
            self._component2.do_c()

class BaseComponent:
    """
 The Base Component provides the basic functionality of storing a mediator's
 instance inside component objects.
 """

    def __init__(self, mediator: Mediator = None) -> None:
        self._mediator = mediator

    @property
    def mediator(self) -> Mediator:
        return self._mediator

    @mediator.setter
    def mediator(self, mediator: Mediator) -> None:
        self._mediator = mediator

"""
Concrete Components implement various functionality. They don't depend on other
components. They also don't depend on any concrete mediator classes.
"""

class Component1(BaseComponent):
    def do_a(self) -> None:
        print("Component 1 does A.")
        self.mediator.notify(self, "A")

    def do_b(self) -> None:
        print("Component 1 does B.")
        self.mediator.notify(self, "B")

class Component2(BaseComponent):
    def do_c(self) -> None:
        print("Component 2 does C.")
        self.mediator.notify(self, "C")

    def do_d(self) -> None:
        print("Component 2 does D.")
        self.mediator.notify(self, "D")

if __name__ == "__main__":
    # The client code.
    c1 = Component1()
    c2 = Component2()
    mediator = ConcreteMediator(c1, c2)

    print("Client triggers operation A.")
    c1.do_a()

    print("\n", end="")

    print("Client triggers operation D.")
    c2.do_d()

#### [](https://refactoring.guru/es/design-patterns/mediator/python/example#example-0--Output-txt)**Output.txt:**  Resultado de la ejecución

Client triggers operation A.
Component 1 does A.
Mediator reacts on A and triggers following operations:
Component 2 does C.


Client triggers operation D.
Component 2 does D.
Mediator reacts on D and triggers following operations:
Component 1 does B.
Component 2 does C.

```



### **Otras areas del patrón Mediator**

####  **Sistemas de Gestión de Eventos en Aplicaciones UI**

-   **Escenario**: En una interfaz gráfica compleja con múltiples componentes como botones, cuadros de texto, y menús desplegables.
-   **Uso del Mediator**: Coordina la interacción entre los componentes. Por ejemplo, si un cuadro de texto debe habilitar un botón solo cuando hay texto, el Mediator controla esta lógica sin que los componentes conozcan entre sí.

----------

#### **Sistemas de Chat o Mensajería**

-   **Escenario**: En plataformas como Slack, WhatsApp, o Discord.
-   **Uso del Mediator**: Un servidor central (mediador) gestiona los mensajes entre los usuarios, asegurando que solo los destinatarios adecuados reciban las comunicaciones.

----------

####  **Control de Tráfico Aéreo**

-   **Escenario**: Aeronaves interactuando en un aeropuerto.
-   **Uso del Mediator**: Una torre de control central actúa como mediador, comunicando información entre aviones para gestionar despegues, aterrizajes y evitar colisiones.

----------

####  **Juegos Multijugador en Línea**

-   **Escenario**: Juegos como Fortnite, Minecraft o League of Legends.
-   **Uso del Mediator**: Los servidores de juego actúan como mediadores entre los jugadores, controlando la comunicación, sincronización y estado del juego en tiempo real.

----------

#### **Automatización de Flujos de Trabajo**

-   **Escenario**: Herramientas como Zapier o Power Automate, donde varias aplicaciones interactúan automáticamente.
-   **Uso del Mediator**: Coordina las tareas entre aplicaciones (por ejemplo, enviar un correo al recibir un formulario y luego actualizar una hoja de cálculo).