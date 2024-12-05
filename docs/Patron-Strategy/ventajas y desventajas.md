## Ventajas

-   Puedes intercambiar algoritmos usados dentro de un objeto durante el tiempo de ejecución.
-   Puedes aislar los detalles de implementación de un algoritmo del código que lo utiliza.
-   Puedes sustituir la herencia por composición.
-   _Principio de abierto/cerrado_. Puedes introducir nuevas estrategias sin tener que cambiar el contexto.
## Desventajas 

-   Si sólo tienes un par de algoritmos que raramente cambian, no hay una razón real para complicar el programa en exceso con nuevas clases e interfaces que vengan con el patrón.
-   Los clientes deben conocer las diferencias entre estrategias para poder seleccionar la adecuada.
-   Muchos lenguajes de programación modernos tienen un soporte de tipo funcional que te permite implementar distintas versiones de un algoritmo dentro de un grupo de funciones anónimas. Entonces puedes utilizar estas funciones exactamente como habrías utilizado los objetos de estrategia, pero sin saturar tu código con clases e interfaces adicionales.