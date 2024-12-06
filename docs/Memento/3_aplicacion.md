# Aplicabilidad 

**Utilice el patrón Memento cuando desee producir instantáneas del estado del objeto para poder restaurar un estado anterior del objeto.**

**El patrón Memento permite realizar copias completas del estado de un objeto, incluidos los campos privados, y almacenarlos por separado del objeto. Si bien la mayoría de las personas recuerdan este patrón gracias al caso de uso "deshacer", también es indispensable cuando se trabaja con transacciones (es decir, si necesita revertir una operación en caso de error).**

**Utilice el patrón cuando el acceso directo a los campos/captadores/definidores del objeto viole su encapsulación.**

**Memento hace que el propio objeto sea responsable de crear una instantánea de su estado. Ningún otro objeto puede leer la instantánea, lo que hace que los datos de estado del objeto original estén protegidos y seguros.**

## Ejemplo de diagrama de implementación basada en clases anidadas
![Diagrama](https://refactoring.guru/images/patterns/diagrams/memento/structure1.png)
