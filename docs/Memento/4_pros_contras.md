# Pros y Contras
**✅** Puede producir instantáneas del estado del objeto sin violar su encapsulación.

**✅**  Puede simplificar el código del originador permitiendo que el cuidador mantenga el historial del estado del originador.

**❌** La aplicación puede consumir mucha RAM si los clientes crean recuerdos con demasiada frecuencia.

**❌** Los cuidadores deben rastrear el ciclo de vida del originador para poder destruir los recuerdos obsoletos.

**❌** La mayoría de los lenguajes de programación dinámicos, como PHP, Python y JavaScript, no pueden garantizar que el estado dentro del memento permanezca intacto.