



### Ventajas
-   _Principio de responsabilidad única_. Puedes extraer las comunicaciones entre varios componentes dentro de un único sitio, haciéndolo más fácil de comprender y mantener.
    
-   _Principio de abierto/cerrado_. Puedes introducir nuevos mediadores sin tener que cambiar los propios componentes.
    
-   Puedes reducir el acoplamiento entre varios componentes de un programa.
    
-   Puedes reutilizar componentes individuales con mayor facilidad.

### Desventajas
-   Sobrecarga en el Mediador: Si el Mediador gestiona demasiadas interacciones, puede volverse complejo y difícil de mantener.
    
-   Dependencia del Mediador: Los objetos dependen del Mediador, lo que introduce un único punto de falla.
    
-   Dificultad en pruebas: La lógica concentrada en el Mediador puede hacer que sea difícil probar int