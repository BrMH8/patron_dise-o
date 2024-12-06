---
sidebar_position: 2
---

# Aplicabilidad

Utilice el Visitante cuando necesite realizar una operación en todos los elementos de una estructura de objeto compleja (por ejemplo, un árbol de objetos).

El patrón Visitor le permite ejecutar una operación sobre un conjunto de objetos con diferentes clases haciendo que un objeto visitante implemente varias variantes de la misma operación, que corresponden a todas las clases de destino.

Utilice Visitor para limpiar la lógica empresarial de los comportamientos auxiliares.

El patrón le permite hacer que las clases principales de su aplicación se centren más en sus trabajos principales al extraer todos los demás comportamientos en un conjunto de clases de visitantes.

Utilice el patrón cuando un comportamiento tiene sentido sólo en algunas clases de una jerarquía de clases, pero no en otras.

Puede extraer este comportamiento en una clase de visitante separada e implementar solo aquellos métodos de visita que acepten objetos de clases relevantes, dejando el resto vacío.

## Ejemplo de Diagrama
![Diagrama](https://refactoring.guru/images/patterns/diagrams/template-method/example.png)

