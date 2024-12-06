# Concepto
## ¿Qué es el patrón Memento?

El patrón Memento es un patrón de diseño de comportamiento que permite a un objeto volver a un estado anterior, como si se hubiera tomado una instantánea en un momento dado. Es como tener una máquina del tiempo para tu objeto, permitiéndote revertir cambios o explorar diferentes estados.

## ¿Para qué sirve?

* **Deshacer/Rehacer:** Implementa funcionalidades de deshacer y rehacer en aplicaciones.
* **Historial de versiones:** guarda versiones anteriores de documentos o datos.
* **Juegos:** Permite guardar el estado de un juego para que los jugadores puedan volver a un punto anterior.
Simulaciones: Permite explorar diferentes escenarios al volver a estados previos.

## ¿Cómo funciona?
* **Creador (Caretaker):** Este objeto crea y almacena los mementos. No conoce el contenido interno del memento.
* **Origen (Originator):** El objeto cuyo estado queremos guardar. Crea mementos que contienen una copia de su estado interno.
* **Memento:** Un objeto inmutable que almacena el estado de un Originator en un momento dado. El Originator no puede modificar directamente el memento, pero puede acceder a la información que contiene.

## Ejemplo simplificado (en pseudo-código):
```python
class Originator {
    private String state;

    public Memento createMemento() {
        return new Memento(state);
    }

    public void setMemento(Memento memento) {
        state = memento.getState();
    }
}

class Memento {
    private String state;

    // Constructor privado para evitar modificaciones directas
    private Memento(String state) {
        this.state = state;
    }

    public String getState() {
        return state;
    }
}

class Caretaker {
    private List<Memento> mementos = new ArrayList<>();

    public void addMemento(Memento memento) {
        mementos.add(memento);
    }

    public Memento getMemento(int index) {
        return mementos.get(index);
    }
}