**Ejemplos de uso:**  El patrón Observer es bastante habitual en el código Java, sobre todo en los componentes GUI. Proporciona una forma de reaccionar a los eventos que suceden en otros objetos, sin acoplarse a sus clases.

Aquí tienes algunos ejemplos del patrón en las principales bibliotecas Java:

-   [`java.util.Observer`](http://docs.oracle.com/javase/8/docs/api/java/util/Observer.html)/[`java.util.Observable`](http://docs.oracle.com/javase/8/docs/api/java/util/Observable.html)  (rara vez utilizado en el mundo real)
-   Todas las implementaciones de  [`java.util.EventListener`](http://docs.oracle.com/javase/8/docs/api/java/util/EventListener.html)  (prácticamente por todos los componentes Swing)
-   [`javax.servlet.http.HttpSessionBindingListener`](http://docs.oracle.com/javaee/7/api/javax/servlet/http/HttpSessionBindingListener.html)
-   [`javax.servlet.http.HttpSessionAttributeListener`](http://docs.oracle.com/javaee/7/api/javax/servlet/http/HttpSessionAttributeListener.html)
-   [`javax.faces.event.PhaseListener`](http://docs.oracle.com/javaee/7/api/javax/faces/event/PhaseListener.html)

**Identificación:**  El patrón puede reconocerse por los métodos de subscripción, que almacenan objetos en una lista, y por las llamadas al método de actualización emitidas a todos los objetos de esa lista.


**Ejemplo programático**

Presentemos primero la interfaz  `WeatherObserver`  y nuestras razas,  `Orcs`  y  `Hobbits`.

```
public interface WeatherObserver {

  void update(WeatherType currentWeather);
}

@Slf4j
public class Orcs implements WeatherObserver {

  @Override
  public void update(WeatherType currentWeather) {
    LOGGER.info("The orcs are facing " + currentWeather.getDescription() + " weather now");
  }
}

@Slf4j
public class Hobbits implements WeatherObserver {

  @Override
  public void update(WeatherType currentWeather) {
    switch (currentWeather) {
      LOGGER.info("The hobbits are facing " + currentWeather.getDescription() + " weather now");
    }
  }
}
```

Luego está el clima  `Weather`, que cambia constantemente.

```
@Slf4j
public class Weather {

  private WeatherType currentWeather;
  private final List<WeatherObserver> observers;

  public Weather() {
    observers = new ArrayList<>();
    currentWeather = WeatherType.SUNNY;
  }

  public void addObserver(WeatherObserver obs) {
    observers.add(obs);
  }

  public void removeObserver(WeatherObserver obs) {
    observers.remove(obs);
  }

  /**
   * Makes time pass for weather.
   */
  public void timePasses() {
    var enumValues = WeatherType.values();
    currentWeather = enumValues[(currentWeather.ordinal() + 1) % enumValues.length];
    LOGGER.info("The weather changed to {}.", currentWeather);
    notifyObservers();
  }

  private void notifyObservers() {
    for (var obs : observers) {
      obs.update(currentWeather);
    }
  }
}
```

Aquí está el ejemplo completo en acción.

```
    var weather = new Weather();
    weather.addObserver(new Orcs());
    weather.addObserver(new Hobbits());
    weather.timePasses();
    weather.timePasses();
    weather.timePasses();
    weather.timePasses();
```

Salida del programa:

```
The weather changed to rainy.
The orcs are facing rainy weather now
The hobbits are facing rainy weather now
The weather changed to windy.
The orcs are facing windy weather now
The hobbits are facing windy weather now
The weather changed to cold.
The orcs are facing cold weather now
The hobbits are facing cold weather now
The weather changed to sunny.
The orcs are facing sunny weather now
The hobbits are facing sunny weather now
```


## Aplicabilidad

Utilice el patrón Observador en cualquiera de las siguientes situaciones:

-   Cuando una abstracción tiene dos aspectos, uno dependiente del otro. Encapsular estos aspectos en objetos separados te permite variarlos y reutilizarlos independientemente.
-   Cuando un cambio en un objeto requiere cambiar otros, y no sabes cuántos objetos necesitan ser cambiados.
-   Cuando un objeto debe ser capaz de notificar a otros objetos sin hacer suposiciones sobre quiénes son estos objetos. En otras palabras, no quieres que estos objetos estén estrechamente acoplados.

## Usos conocidos

-   [java.util.Observer](http://docs.oracle.com/javase/8/docs/api/java/util/Observer.html)
-   [java.util.EventListener](http://docs.oracle.com/javase/8/docs/api/java/util/EventListener.html)
-   [javax.servlet.http.HttpSessionBindingListener](http://docs.oracle.com/javaee/7/api/javax/servlet/http/HttpSessionBindingListener.html)
-   [RxJava](https://github.com/ReactiveX/RxJava)
