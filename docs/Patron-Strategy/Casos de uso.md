### Algoritmos de Ordenamiento

En sistemas que requieren diferentes métodos de ordenamiento (por ejemplo, burbuja, merge sort o quick sort), el patrón Strategy permite cambiar fácilmente el algoritmo según el contexto sin modificar el cliente.

**Ejemplo real:**

-   Un sistema de gestión de grandes volúmenes de datos donde se selecciona el método de ordenamiento más eficiente según el tamaño de los datos o el tipo de estructura.

----------

### **Cálculo de Tarifas de Envío**

Sistemas de comercio electrónico pueden usar diferentes estrategias para calcular costos de envío, como envío estándar, exprés, o basado en la ubicación del cliente.

**Ejemplo real:**

-   Amazon: Usa una estrategia para calcular tarifas según el peso, la distancia y el método de entrega seleccionado por el cliente.

----------

### **Compresión de Archivos**

Aplicaciones que ofrecen múltiples opciones de compresión (ZIP, RAR, TAR, GZIP) pueden implementar el patrón Strategy para seleccionar el algoritmo adecuado sin alterar la estructura principal.

**Ejemplo real:**

-   WinRAR o 7-Zip, donde el usuario selecciona el tipo de compresión según sus necesidades.

----------

### **Generación de Gráficos**

Una herramienta que puede renderizar gráficos en diferentes formatos (barras, pastel, líneas, etc.) usa Strategy para definir y cambiar dinámicamente el algoritmo de representación.

**Ejemplo real:**

-   Google Charts o herramientas de visualización como Power BI, que permiten cambiar fácilmente entre diferentes tipos de gráficos según los datos.

----------

### ** Validación de Datos**

Los sistemas que requieren validaciones personalizadas (por ejemplo, validar correos electrónicos, números de teléfono o contraseñas) pueden implementar el patrón Strategy para encapsular diferentes métodos de validación.

**Ejemplo real:**

-   Formularios web dinámicos, donde cada campo utiliza una estrategia diferente de validación.

----------

### **Inteligencia Artificial en Juegos**

Los personajes no jugables (NPCs) en videojuegos pueden usar diferentes estrategias de comportamiento, como ataque, defensa, o escape, dependiendo del estado actual del juego.

**Ejemplo real:**

-   Juegos como _Age of Empires_ o _Starcraft_, donde los NPCs adaptan su estrategia según la dificultad o las acciones del jugador.

----------

### ** Conversión de Monedas**

Una aplicación financiera puede usar diferentes estrategias para convertir monedas dependiendo de las tasas de cambio actuales o las reglas del mercado.

**Ejemplo real:**

-   PayPal o aplicaciones de banca digital que convierten monedas automáticamente al realizar transacciones internacionales.

----------

### **Formatos de Pago**

En sistemas de comercio electrónico o puntos de venta, el patrón Strategy permite implementar diferentes métodos de pago, como tarjetas de crédito, PayPal, criptomonedas o transferencias bancarias.

**Ejemplo real:**

-   Shopify, que ofrece varias pasarelas de pago configurables según las preferencias del cliente.

----------

### ** Filtrado de Resultados en Buscadores**

Sistemas que filtran datos con diferentes criterios (por fecha, relevancia, popularidad, etc.) usan Strategy para implementar diversos métodos de clasificación.

**Ejemplo real:**

-   Motores de búsqueda como Google o sistemas de recomendaciones como Netflix, donde las estrategias de filtrado varían según el perfil del usuario.

----------

### **Planificación de Rutas**

Aplicaciones de navegación pueden usar diferentes estrategias para calcular rutas, como la más corta, la más rápida, o la que evita peajes.

**Ejemplo real:**

-   Google Maps o Waze, que adaptan las rutas según las preferencias del usuario y las condiciones del tráfico.

----------

### **Descuentos y Promociones**

Sistemas de ventas implementan distintas estrategias para calcular descuentos, como descuentos por volumen, cupones, o promociones por temporada.

**Ejemplo real:**

-   Aplicaciones como Uber Eats o MercadoLibre, donde los descuentos se aplican según reglas configuradas dinámicamente.

----------

### **Reconocimiento de Imágenes**

En aplicaciones de visión por computadora, diferentes estrategias pueden usarse para reconocer patrones en imágenes, como detección de bordes o reconocimiento facial.

**Ejemplo real:**

-   Sistemas de seguridad que usan múltiples estrategias de reconocimiento para autenticar a usuarios.