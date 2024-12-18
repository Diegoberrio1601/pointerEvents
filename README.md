# Lista Animada con pointerEvents en React Native

Este proyecto es una aplicación simple creada con React Native que utiliza el componente `Animated` para implementar una animación fluida al mostrar y ocultar una lista interactiva. Además, se hace uso de la propiedad `pointerEvents` para controlar la interactividad de los elementos en función del estado de visibilidad.

## Características

- Lista animada que aparece y desaparece con un efecto de opacidad.
- Uso de `pointerEvents` para habilitar o deshabilitar la interactividad de los elementos según el estado.
- Diseño minimalista con estilos personalizados.
- Ejemplo práctico de uso de `Animated` y `useState` en React Native.
- Implementación de un botón para alternar la visibilidad de la lista.
- Diseño adaptable con componentes básicos de React Native.

## Uso

- Presiona el botón "Mostrar lista" para desplegar la lista con un efecto de animación.
- La propiedad `pointerEvents` asegura que los elementos de la lista solo sean interactivos cuando están visibles.
- Selecciona un elemento de la lista para ocultarla nuevamente.

## Propiedad `pointerEvents`

La propiedad `pointerEvents` es clave para evitar interacciones no deseadas con los elementos que no son visibles. En este proyecto:

- Cuando la lista no está visible (`toggle` es `false`), `pointerEvents` se configura como `"none"`, lo que deshabilita completamente la interactividad con los elementos.
- Cuando la lista está visible (`toggle` es `true`), `pointerEvents` se configura como `"auto"`, permitiendo la interacción.

Esto mejora la experiencia del usuario al garantizar que los elementos de la lista no interfieran con otros elementos de la interfaz cuando están ocultos.

Hecho con ❤️ por [Diego Berrio](https://github.com/diegoberrio1601)

