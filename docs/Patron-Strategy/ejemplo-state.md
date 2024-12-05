---
sidebar_position: 2
---

# Ejemplo del Patron de State 
### 1- La interfaz Estado:
La interfaz Estado define el contrato que todos los estados concretos deben implementar. En este caso, el contrato tiene un único método: manejar().
```js title="ejemplo_state.js"
interface Estado {
    void manejar();
}
```
Este método encapsula el comportamiento que cada estado deberá realizar.
Cualquier clase que implemente esta interfaz representará un estado específico de la máquina de café.
### 2- Estados Concretos
Se crean clases concretas que implementan la interfaz Estado. Cada clase define el comportamiento único para ese estado específico:

1- SinMoneda:
Indica que la máquina no tiene una moneda insertada.
El método manejar() pide al usuario que inserte una moneda.

```js title="ejemplo_state.js"
class SinMoneda implements Estado {
    @Override
    public void manejar() {
        System.out.println("Inserta una moneda para continuar.");
    }
}
```
2- ConMoneda:
Indica que ya se ha insertado una moneda en la máquina.
El método manejar() avisa al usuario que presione el botón para obtener café.
```js title="ejemplo_state.js"
class ConMoneda implements Estado {
    @Override
    public void manejar() {
        System.out.println("Moneda recibida. Presiona el botón para obtener tu café.");
    }
}
```
3- SirviendoCafe:
Indica que la máquina está sirviendo café.
El método manejar() muestra el mensaje correspondiente.
```js title="ejemplo_state.js"
class SirviendoCafe implements Estado {
    @Override
    public void manejar() {
        System.out.println("Sirviendo café... ¡Disfrútalo!");
    }
}
```
### 3- Clase Contexto
La clase MaquinaCafe actúa como el Contexto. 
Esta clase contiene:

1- Un atributo estadoActual:

Almacena el estado actual de la máquina (que es un objeto que implementa la interfaz Estado).

2- El método setEstado(Estado estado):

Permite cambiar el estado actual de la máquina.

3-El método solicitar():

Llama al método manejar() del estado actual, delegando el comportamiento correspondiente al estado en el que se encuentra la máquina.
```js title="ejemplo_state.js"
class MaquinaCafe {
    private Estado estadoActual;

    public void setEstado(Estado estado) {
        this.estadoActual = estado;
    }

    public void solicitar() {
        estadoActual.manejar();
    }
}
```
### 4- Uso del Patrón
En el método main, se utiliza la clase MaquinaCafe para simular el cambio de estados y ver cómo responde la máquina según el estado actual.

1- Se crea una instancia de MaquinaCafe.
```js title="ejemplo_state.js"
MaquinaCafe maquina = new MaquinaCafe();
```
2- Estado inicial: Sin Moneda.
Se establece el estado inicial usando setEstado(new SinMoneda()).
Al llamar a solicitar(), se ejecuta el método manejar() del estado SinMoneda, que muestra el mensaje correspondiente.
```js title="ejemplo_state.js"
maquina.setEstado(new SinMoneda());
maquina.solicitar();
```
Salida:
```js title=".js"
Moneda recibida. Presiona el botón para obtener tu café.
```
4- Cambio al estado: Sirviendo Café.
Finalmente, se establece el estado SirviendoCafe.
Al llamar a solicitar(), se ejecuta el método manejar() del estado SirviendoCafe.
```js title="ejemplo_state.js"
maquina.setEstado(new SirviendoCafe());
maquina.solicitar();
```
Salida:
```js title=".js"
Sirviendo café... ¡Disfrútalo!
```
# Ventajas del Patrón State

1- Eliminación de condicionales complejos:

Se evita el uso de estructuras como if-else o switch-case para manejar estados. En lugar de eso, cada estado tiene su propia clase, lo que simplifica el código.

2- Alta cohesión:

Cada estado encapsula su propio comportamiento. Esto significa que las reglas y acciones relacionadas con un estado están centralizadas, lo que facilita la comprensión y el mantenimiento.

3- Fácil de extender:

Es sencillo agregar nuevos estados sin modificar el código existente del contexto o de otros estados. Solo se implementa una nueva clase que cumple con la interfaz del estado.

4- Mantenimiento y legibilidad mejorados:

Al separar el comportamiento de cada estado en clases específicas, el código es más claro, modular y fácil de depurar.

5- Cambio dinámico de comportamiento:

El contexto puede cambiar de estado en tiempo de ejecución, permitiendo que su comportamiento evolucione de manera flexible y adaptable.

6- Reutilización de código:

Las clases de estado pueden ser reutilizadas en diferentes contextos si los estados tienen características similares.

# Desventajas del Patrón State

1- Complejidad adicional:

El patrón introduce múltiples clases para representar cada estado, lo que puede aumentar la cantidad de código y la complejidad general del proyecto, especialmente si el sistema tiene muchos estados.

2- Sobrecarga en sistemas simples:

Si un sistema tiene pocos estados y cambios poco frecuentes, este patrón puede ser excesivo. En estos casos, un simple if-else puede ser más práctico y directo.

3- Comunicación entre estados:

Los estados pueden necesitar información del contexto o de otros estados, lo que puede aumentar el acoplamiento entre las clases.

4- Gestión del ciclo de vida:

Si los estados tienen muchos recursos internos o requieren inicialización compleja, puede ser difícil gestionar su ciclo de vida sin crear un impacto en el rendimiento.

5- Mayor esfuerzo inicial:

La implementación del patrón requiere un diseño cuidadoso desde el principio, lo que puede ser un desafío si no se tiene experiencia con patrones de diseño.
