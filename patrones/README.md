#Patrón de Diseño Builder

Introducción

Este README intenta explicar de manera sencilla el patrón de diseño Builder, también conocido como Constructor. Este patrón es bastante útil cuando enfrentamos la tarea de construir objetos complejos.

Propósito
El patrón Builder nos ayuda a construir objetos complejos paso a paso. Es muy útil para evitar crear constructores enormes con demasiados parámetros, lo cual puede hacer el código difícil de leer y mantener.

Problema
Cuando construimos un objeto como una casa, no siempre necesitamos todos los elementos como piscina o garaje. Si utilizamos un constructor tradicional, terminamos con un código largo y difícil de entender.

Solución
El patrón Builder propone extraer el proceso de construcción a una clase independiente, que pueda construir el objeto paso a paso. De esta manera, solo usamos los pasos que necesitamos.

Cómo Funciona
Imaginemos que estamos construyendo diferentes tipos de casas. Con Builder, podemos tener un constructor base que define los pasos como construirParedes o instalarPuertas, y luego constructores específicos que implementen estos pasos de maneras diferentes.

Clase Directora
Podemos tener una clase directora que ordene los pasos de construcción. Esto no es necesario, pero ayuda a reutilizar secuencias de construcción comunes.

Ejemplo:

java
Copy code
// La interfaz del Builder
interface Builder {
    void reset();
    void setWalls(String type);
    void setDoors(int number);
    void setWindows(int number);
    void setRoof(String type);
}

// Constructor concreto para una casa sencilla
class HouseBuilder implements Builder {
    private House house;

    HouseBuilder() {
        this.reset();
    }

    public void reset() {
        this.house = new House();
    }

    public void setWalls(String type) {
        house.setWalls(type);
    }

    public void setDoors(int number) {
        house.setDoors(number);
    }

    public void setWindows(int number) {
        house.setWindows(number);
    }

    public void setRoof(String type) {
        house.setRoof(type);
    }

    public House getResult() {
        return this.house;
    }
}

// Clase director que define la secuencia de construcción
class Director {
    public void constructWoodenHouse(Builder builder) {
        builder.reset();
        builder.setWalls("Wood");
        builder.setDoors(1);
        builder.setWindows(4);
        builder.setRoof("Wood");
    }
}
En este ejemplo, HouseBuilder es un constructor concreto que sigue una interfaz común y Director es una clase que define cómo se construye una casa de madera.

Conclusión
El patrón Builder es una excelente opción cuando necesitamos flexibilidad y claridad al construir objetos complejos.
