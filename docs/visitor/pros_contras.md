---
sidebar_position: 2
---
# Pros y Contras
**✅** Principio de apertura/cierre . Puede introducir un nuevo comportamiento que funcione con objetos de diferentes clases sin cambiar estas clases.

**✅** Principio de responsabilidad única . Es posible trasladar varias versiones del mismo comportamiento a la misma clase.

**✅** Un objeto visitante puede acumular información útil mientras trabaja con varios objetos. Esto puede resultar útil cuando se desea recorrer una estructura de objetos compleja, como un árbol de objetos, y aplicar el visitante a cada objeto de esta estructura.

**❌** Debe actualizar a todos los visitantes cada vez que se agrega o elimina una clase de la jerarquía de elementos.

**❌** Es posible que los visitantes carezcan del acceso necesario a los campos y métodos privados de los elementos con los que se supone que deben trabajar.

![Diagrama](https://refactoring.guru/images/patterns/content/visitor/visitor.png)