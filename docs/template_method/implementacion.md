---
sidebar_position: 3
---

# Cómo se implementa
# Para implementar:   
1. Analice el algoritmo de destino para ver si puede dividirlo en pasos. Considere qué pasos son comunes a todas las subclases y cuáles siempre serán únicos.
2. Cree la clase base abstracta y declare el método de plantilla y un conjunto de métodos abstractos que representan los pasos del algoritmo. Describa la estructura del algoritmo en el método de plantilla ejecutando los pasos correspondientes. Considere crear el método de plantilla finalpara evitar que las subclases lo anulen.
3. No hay problema si todos los pasos terminan siendo abstractos. Sin embargo, algunos pasos podrían beneficiarse de tener una implementación predeterminada. Las subclases no tienen por qué implementar esos métodos.

4. Piense en agregar ganchos entre los pasos cruciales del algoritmo.

5. Para cada variación del algoritmo, crea una nueva subclase concreta. Debe implementar todos los pasos abstractos, pero también puede anular algunos de los opcionales.

![Diagrama](https://refactoring.guru/images/patterns/content/template-method/template-method.png)

## ✅Pros y ❌Contras
**✅** Puede permitir que los clientes anulen solo ciertas partes de un algoritmo grande, 
lo que los hace menos afectados por los cambios que se producen en otras partes del algoritmo.

**✅** Puedes extraer el código duplicado y llevarlo a una superclase.

**❌** Algunos clientes pueden estar limitados por el esqueleto proporcionado de un algoritmo.

**❌** Podría violar el principio de sustitución de Liskov al suprimir una implementación de paso predeterminada a través de una subclase.

**❌** Los métodos de plantilla tienden a ser más difíciles de mantener cuanto más pasos tienen.