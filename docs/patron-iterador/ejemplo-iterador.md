---
sidebar_position: 2
---

# Ejemplo de Iterador
## Lista de Nombres
Supongamos que queremos crear una aplicación que gestione una lista de nombres y permita recorrerlos sin exponer cómo se almacenan internamente.

### 1. Interfaz del Iterador (Iterator)
Define los métodos estándar para recorrer una colección.
```js title="ejemplo iterador.js"
interface Iterador<T> {
    boolean tieneSiguiente();  
    T siguiente();             
}
```
### 2. Colección (Aggregate)
Define la interfaz de la colección que proporciona un método para obtener el iterador.
```js title="ejemplo iterador.js"
interface Coleccion<T> {
    Iterador<T> crearIterador(); 
}
```
### 3. Iterador Concreto (ConcreteIterator)
Implementa la lógica para recorrer los elementos de la colección concreta.
```js title="ejemplo iterador.js"
class IteradorLista<T> implements Iterador<T> {
    private List<T> lista;
    private int posicion = 0;

    public IteradorLista(List<T> lista) {
        this.lista = lista;
    }

    @Override
    public boolean tieneSiguiente() {
        return posicion < lista.size();
    }

    @Override
    public T siguiente() {
        if (!tieneSiguiente()) {
            throw new RuntimeException("No hay más elementos.");
        }
        return lista.get(posicion++);
    }
}
```
### 4. Colección Concreta (ConcreteAggregate)
Implementa la lógica de la colección y proporciona el iterador correspondiente.
```js title="ejemplo iterador.js"
class ListaNombres implements Coleccion<String> {
    private List<String> nombres = new ArrayList<>();

    public void agregar(String nombre) {
        nombres.add(nombre);
    }

    @Override
    public Iterador<String> crearIterador() {
        return new IteradorLista<>(nombres);
    }
}
```
### 5. Cliente
Usa el iterador para recorrer la colección sin conocer su implementación interna.
```js title="ejemplo iterador.js"
public class Main {
    public static void main(String[] args) {
        ListaNombres lista = new ListaNombres();
        lista.agregar("Juan");
        lista.agregar("Ana");
        lista.agregar("Luis");

        Iterador<String> iterador = lista.crearIterador();

        while (iterador.tieneSiguiente()) {
            System.out.println(iterador.siguiente());
        }
    }
}
```
### Salida del Programa
```js title=""
Juan
Ana
Luis
```
### Explicación 
Definir Interfaces:

La interfaz Iterador define cómo se recorre la colección (tieneSiguiente y siguiente).
La interfaz Coleccion define cómo se obtienen iteradores para una colección (crearIterador).

Implementar el Iterador Concreto:

La clase IteradorLista recorre una lista genérica, manteniendo un índice interno (posicion).

Implementar la Colección Concreta:

La clase ListaNombres almacena una lista de nombres y delega el recorrido al iterador.

Uso en el Cliente:

El cliente trabaja con el iterador para recorrer la colección, sin preocuparse por cómo están almacenados los nombres.

### Ventajas 
El uso del patrón Iterador en el ejemplo presentado tiene varias ventajas importantes:

1. Desacoplamiento entre la colección y el cliente
Beneficio: El cliente (en este caso, el método main) no necesita saber cómo se almacenan los elementos en la colección (ListaNombres).
Por qué es útil: Si en el futuro decidimos cambiar la estructura interna de la colección (por ejemplo, de una ArrayList a una LinkedList), el cliente no se verá afectado, ya que sigue utilizando el iterador para recorrer los elementos.
2. Uniformidad al recorrer colecciones
Beneficio: El patrón proporciona una interfaz consistente (Iterador) para recorrer cualquier tipo de colección.
Por qué es útil: Puedes implementar el mismo método de iteración para listas, conjuntos, árboles, o cualquier otra estructura sin cambiar el código del cliente.
3. Facilita el mantenimiento del código
Beneficio: La lógica de iteración está encapsulada en la clase IteradorLista, separada de la lógica de la colección (ListaNombres).
Por qué es útil: Si necesitamos modificar cómo se recorre la colección (por ejemplo, agregar un filtro o recorrer en orden inverso), solo es necesario cambiar el iterador, sin tocar la colección o el cliente.
4. Soporte para múltiples iteradores
Beneficio: Puedes crear diferentes tipos de iteradores para una misma colección (por ejemplo, iteradores filtrados, iteradores inversos, etc.).
Por qué es útil: Si quisieras, por ejemplo, recorrer solo los nombres que empiezan con "A", podrías crear un nuevo iterador que implemente esta lógica sin modificar la colección ni el cliente.
5. Mejora la legibilidad del código
Beneficio: El cliente utiliza métodos claros como tieneSiguiente() y siguiente(), lo que hace que el código sea fácil de leer y entender.
Por qué es útil: Comparado con tener que gestionar manualmente índices o punteros, el iterador oculta los detalles internos y simplifica la interacción con la colección.

