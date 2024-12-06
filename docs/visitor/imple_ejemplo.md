---
sidebar_position: 2
---
# Analogía e implementación 
## Analogía en la vida real 
![Diagrama](https://refactoring.guru/images/patterns/content/visitor/visitor-comic-1.png)

* Imaginemos a un agente de seguros experimentado que está ansioso por conseguir nuevos clientes. Puede visitar todos los edificios de un vecindario e intentar vender seguros a todas las personas que conozca. Según el tipo de organización que ocupe el edificio, puede ofrecer pólizas de seguros especializadas:

* Si se trata de un edificio residencial, vende seguros médicos.
* Si es un banco, vende seguros contra robo.
* Si se trata de una cafetería, vende seguros contra incendios e inundaciones.

## Cómo implementar
1. **Declare la interfaz de visitante con un conjunto de métodos de “visita”, uno por cada clase de elemento concreto que exista en el programa.**

2. **Declare la interfaz del elemento. Si está trabajando con una jerarquía de clases de elementos existente, agregue el método abstracto “acceptance” a la clase base de la jerarquía. Este método debe aceptar un objeto visitante como argumento.**

3. **Implemente los métodos de aceptación en todas las clases de elementos concretos. Estos métodos simplemente deben redirigir la llamada a un método visitante en el objeto visitante entrante que coincida con la clase del elemento actual.**

4. **Las clases de elementos solo deben funcionar con los visitantes a través de la interfaz de visitantes. Sin embargo, los visitantes deben conocer todas las clases de elementos concretas, a las que se hace referencia como tipos de parámetros de los métodos de visita.** 

5. **Para cada comportamiento que no se pueda implementar dentro de la jerarquía de elementos, cree una nueva clase de visitante concreta e implemente todos los métodos de visita.**

6. **Es posible que te encuentres con una situación en la que el visitante necesite acceder a algunos miembros privados de la clase del elemento. En este caso, puedes hacer que estos campos o métodos sean públicos, violando así la encapsulación del elemento, o anidar la clase del visitante en la clase del elemento. Esto último solo es posible si tienes la suerte de trabajar con un lenguaje de programación que admita clases anidadas.**

7. **El cliente debe crear objetos de visitante y pasarlos a elementos a través de métodos de “aceptación”.**
