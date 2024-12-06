---
sidebar_position: 2
---
# Concepto
## ¿Qué es?
El estado "state" es un patrón de diseño de comportamiento que permite que un objeto modifique su comportamiento cuando cambia su estado interno. Parece como si el objeto cambiara de clase.
![Diagrama](https://refactoring.guru/images/patterns/content/state/state-en.png)

## Ejemplo de codigo orientado a un problema de semáforo
```python
from enum import Enum

class SignalState(Enum):
    RED = 1
    YELLOW = 2
    GREEN = 3

class TrafficLight:
    def __init__(self):
        self.state = SignalState.RED

    def change_state(self):
        if self.state == SignalState.RED:
            self.state = SignalState.GREEN
        elif self.state == SignalState.GREEN:
            self.state = SignalState.YELLOW
        elif self.state == SignalState.YELLOW:
            self.state = SignalState.RED

    def show_state(self):
        print(f"El semáforo está en {self.state.name}")

# Uso del semáforo
traffic_light = TrafficLight()
traffic_light.show_state()  # Salida: El semáforo está en RED

for _ in range(5):
    traffic_light.change_state()
    traffic_light.show_state()
