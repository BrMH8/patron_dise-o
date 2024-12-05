---
sidebar_position: 1
---

# Concepto
## ¿Qué es? 
Es un patrón de diseño de comportamiento que define el esqueleto de un algoritmo en la superclase pero permite que las subclases sobrescriban pasos del algoritmo sin cambiar su estructura.

## Ejemplo de Pseudocódigo

Create a file at `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
// La clase abstracta define un método de plantilla que contiene un 
// esqueleto de algún algoritmo compuesto de llamadas, generalmente a 
// operaciones primitivas abstractas. Las subclases concretas implementan 
// estas operaciones, pero dejan el método de plantilla en sí 
// intacto. 
clase  GameAI  es 
    // El método de plantilla define el esqueleto de un algoritmo. 
    método  turn ( )  es 
        collectResources ( ) 
        buildStructures ( ) 
        buildUnits ( ) 
        attack ( )

     // Algunos de los pasos pueden implementarse directamente en una // clase base 
    . método
     collectResources (  ) es foreach  ( 
        s  en this.builtStructures  )  do s.collect ( ) // Y algunos de ellos pueden definirse como abstractos. método abstracto buildStructures ( ) método abstracto buildUnits ( ) 
        // Una clase puede tener varios métodos de plantilla . método ataque ( ) es enemigo = nearestEnemy ( ) si ( enemigo = = null ) enviarScouts ( mapa.centro ) de lo contrario enviarWarriors ( enemigo.posición ) método abstracto enviarScouts ( posición ) método abstracto enviarWarriors ( posición ) 
        // Las clases concretas tienen que implementar todas las operaciones abstractas de 
        // la clase base pero no deben anular el método de plantilla 
        // en sí. clase OrcsAI extiende GameAI es el método buildStructures ( ) es si ( hay algunos recursos ) entonces 
        // Construye granjas , luego cuarteles, luego fortaleza. método buildUnits ( ) es si ( hay muchos recursos ) entonces si ( hay muchos recursos ) 
 
```
## Ejemplo de Diagrama 
![Diagrama](https://refactoring.guru/images/patterns/diagrams/template-method/example.png)

## Relaciones entre Patrones

* El método de fábrica es una especialización del método de plantilla . Al mismo tiempo, un método de fábrica puede servir como paso en un método de plantilla más grande .

* El método Template se basa en la herencia: permite modificar partes de un algoritmo extendiendo esas partes en subclases. La estrategia se basa en la composición: se pueden modificar partes del comportamiento del objeto proporcionándole diferentes estrategias que correspondan a ese comportamiento. El método Template funciona a nivel de clase, por lo que es estático. La estrategia funciona a nivel de objeto, lo que permite cambiar comportamientos en tiempo de ejecución.