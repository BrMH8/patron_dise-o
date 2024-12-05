---
sidebar_position: 6
---

## ¿Qué es?
**Mediator** es un patrón de diseño de comportamiento que te permite reducir las dependencias caóticas entre objetos. El patrón restringe las comunicaciones directas entre los objetos, forzándolos a colaborar únicamente a través de un objeto mediador.


#### **Concepto**

El **Patrón Mediator** es un patrón de diseño de comportamiento que centraliza la comunicación entre varios objetos, eliminando las dependencias directas entre ellos. Esto se logra a través de un objeto intermediario llamado _mediador_, que actúa como un punto central para coordinar y controlar las interacciones.

El objetivo principal es reducir el acoplamiento entre los componentes del sistema, haciéndolos más fáciles de modificar, reutilizar y mantener.

![Mediator](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqHKTbKHHO0j3pIbOXd-h6p_uDUMvkAjyOOA&s)

### **Historia y Contexto**

El patrón Mediator fue introducido y formalizado en el libro _"Design Patterns: Elements of Reusable Object-Oriented Software"_ por la _Banda de los Cuatro_ (Gamma, Helm, Johnson, y Vlissides). Este patrón se originó como una solución para sistemas complejos donde múltiples objetos interactúan constantemente entre sí, dificultando su mantenimiento debido a las dependencias cruzadas.

En la informática moderna, el patrón Mediator es utilizado ampliamente en sistemas distribuidos, aplicaciones con interfaces gráficas complejas, y sistemas de control centralizado.

#### **Dato Curioso**

En el control de tráfico aéreo, un ejemplo clásico del mundo real de Mediator, la torre de control actúa como un mediador, facilitando las interacciones entre múltiples aeronaves. Sin la torre, los aviones tendrían que comunicarse entre sí, lo que sería caótico e ineficiente.