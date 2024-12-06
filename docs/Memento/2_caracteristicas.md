# Características

El patrón Memento es un patrón de diseño de comportamiento que permite a un objeto volver a un estado anterior, como si se hubiera tomado una instantánea en un momento dado.

### Características Clave
* **Encapsulación del Estado:** El estado interno del objeto se encapsula dentro del memento, protegiéndolo de modificaciones externas.
* **Inmutabilidad:** Una vez creado, el memento no puede ser modificado, garantizando la consistencia del estado guardado.
* **Interfaz Restringida:** El memento expone una interfaz limitada, permitiendo solo al originador acceder a su estado interno.
* **Simplicidad:** El patrón es relativamente fácil de implementar y comprender.
* **Flexibilidad:** Se adapta a diversos escenarios, desde simples operaciones de deshacer/rehacer hasta sistemas complejos.
* **Independencia del Cliente:** El cliente (caretaker) no necesita conocer los detalles internos del memento.

### Beneficios
* **Deshacer/Rehacer:** Facilita la implementación de funcionalidades de deshacer y rehacer.
* **Historial de Versiones:** Permite gestionar múltiples versiones de un objeto.
* **Recuperación de Errores:** Facilita la recuperación de un estado anterior en caso de errores.
* **Simulaciones:** Permite explorar diferentes escenarios.
* **Robustez:** Aumenta la robustez del sistema al permitir revertir cambios.

### Casos de Uso Comunes
* **Editores de Texto:** Guardar versiones anteriores de un documento.
* **Juegos:** Guardar partidas y permitir cargarlas.
* **Simulaciones:** Guardar estados de una simulación para explorarlos.
* **Sistemas de Control de Versiones:** Almacenar versiones anteriores de archivos.

### Limitaciones
* **Consumo de Memoria:** Guardar muchos mementos puede consumir mucha memoria.
* **Complejidad:** En sistemas grandes, la implementación puede volverse compleja.
