---
sidebar_position: 2
---
# Concepto y Ejemplo de código 
## Patrón de Diseño Visitor

**¿Qué es?**

El patrón Visitor es un patrón de comportamiento que permite separar un algoritmo de un objeto sobre el que opera. En otras palabras, permite definir nuevas operaciones sobre una estructura de objetos sin modificar las clases de esos objetos.



**Ejemplo Básico con Python:**

```python
# Interfaz de la estructura de objetos
class Element:
    def accept(self, visitor):
        pass

# Clases concretas de la estructura de objetos
class ConcreteElementA(Element):
    def accept(self, visitor):
        visitor.visitConcreteElementA(self)

class ConcreteElementB(Element):
    def accept(self, visitor):
        visitor.visitConcreteElementB(self)

# Interfaz del visitante
class Visitor:
    def visitConcreteElementA(self, element):
        pass

    def visitConcreteElementB(self, element):
        pass

# Clase concreta del visitante
class ConcreteVisitor(Visitor):
    def visitConcreteElementA(self, element):
        print("Visitando ConcreteElementA")

    def visitConcreteElementB(self, element):
        print("Visitando ConcreteElementB")

# Uso del patrón
a = ConcreteElementA()
b = ConcreteElementB()
visitor = ConcreteVisitor()

a.accept(visitor)
b.accept(visitor)

