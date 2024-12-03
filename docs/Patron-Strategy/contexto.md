
### **Historia y Contexto**

El patrón Strategy también fue formalizado por la "Banda de los Cuatro". Se originó para resolver el problema de manejar múltiples algoritmos en sistemas sin usar estructuras rígidas como `if-else` o `switch-case`.

### **Concepto del Patrón Strategy**

El patrón **Strategy** es un patrón de diseño de comportamiento que permite definir una familia de algoritmos, encapsularlos en clases separadas y hacerlos intercambiables dentro de un mismo contexto. Este patrón facilita la selección dinámica de algoritmos en tiempo de ejecución, eliminando estructuras de control rígidas como condicionales extensos.



## Propósito

**Strategy**  es un patrón de diseño de comportamiento que te permite definir una familia de algoritmos, colocar cada uno de ellos en una clase separada y hacer sus objetos intercambiables.
![enter image description here](https://refactoring.guru/images/patterns/content/strategy/strategy.png?id=379bfba335380500375881a3da6507e0)

**Características clave:**

-   Proporciona flexibilidad al permitir cambiar algoritmos o comportamientos de manera dinámica.
-   Es ideal para problemas donde se requiera mantener la misma interfaz pero con diferentes implementaciones.