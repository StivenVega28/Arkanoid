# Arkanoid en JavaScript

Proyecto inspirado en **Arkanoid**, desarrollado con **HTML5 Canvas, CSS y JavaScript modular**.  
El objetivo del juego es destruir todos los ladrillos usando una pelota que rebota sobre la paleta controlada por el jugador.

## Características

- Juego arcade tipo Arkanoid con renderizado en Canvas.
- Arquitectura modular separada por responsabilidades: pelota, paleta, ladrillos, entrada, interfaz y almacenamiento.
- Sistema de puntaje en pantalla con visualización del récord más alto.
- Persistencia del high score mediante `localStorage`.
- Uso de sprites e imágenes para el fondo y los ladrillos.

## Estructura del proyecto

```bash
arkanoid/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   ├── ball.js
│   ├── paddle.js
│   ├── bricks.js
│   ├── input.js
│   ├── ui.js
│   └── storage.js
└── assets/
    ├── bkg.png
    ├── bricks.png
    └── sprite.png
```

La lógica principal del juego vive en `main.js`, mientras que cada módulo encapsula una parte específica del comportamiento general del proyecto. Esta organización facilita el mantenimiento, la lectura del código y la ampliación futura del juego.

## Tecnologías usadas

- HTML5
- CSS3
- JavaScript ES Modules
- Canvas API
- `localStorage`

## Cómo jugar

1. Abre el proyecto en el navegador.
2. Mueve la paleta con las flechas izquierda/derecha o con las teclas `A` y `D`.
3. Evita que la pelota caiga y destruye todos los ladrillos para sumar puntos.

## Funcionalidades destacadas

### Puntaje y récord

El juego incrementa el puntaje cada vez que se destruye un ladrillo y guarda automáticamente el mejor resultado alcanzado por el jugador usando `localStorage`.  
Esto permite conservar el récord incluso después de cerrar o recargar la página.

### Interfaz del juego

La interfaz dibuja información en el canvas, como los FPS, el puntaje actual y el mejor puntaje registrado.  
Esto mantiene toda la experiencia visual integrada dentro del propio juego.
