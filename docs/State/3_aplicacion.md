---
sidebar_position: 2
---
# Aplicabilidad

**Utilice el patrón Estado cuando tenga un objeto que se comporte de manera diferente según su estado actual, la cantidad de estados sea enorme y el código específico del estado cambie con frecuencia.**

**El patrón sugiere que extraigas todo el código específico de cada estado en un conjunto de clases distintas. Como resultado, puedes agregar nuevos estados o cambiar los existentes de forma independiente, lo que reduce el costo de mantenimiento.**

**Utilice el patrón cuando tenga una clase contaminada con condicionales masivos que alteran el modo en que la clase se comporta según los valores actuales de los campos de la clase.**

**El patrón State le permite extraer ramas de estos condicionales en métodos de las clases de estado correspondientes. Al hacerlo, también puede limpiar los campos temporales y los métodos auxiliares involucrados en el código específico del estado de su clase principal.**

# Ejemplo de Estructura
![Diagrama](https://refactoring.guru/images/patterns/diagrams/state/structure-en.png)
