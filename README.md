# Arkanoid Game

Un clon del clásico juego Arkanoid desarrollado en JavaScript.

## Estructura del Proyecto

```
arkanoid/
├── index.html
├── assets/
│   ├── sprite.png
│   ├── bricks.png
│   └── bkg.png
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
└── README.md
```

## Descripción de Archivos

- **index.html**: Archivo principal HTML que carga todos los recursos
- **assets/**: Carpeta que contiene las imágenes del juego
  - `sprite.png`: Sprite de la paleta
  - `bricks.png`: Sprite de los ladrillos
  - `bkg.png`: Imagen de fondo
- **css/style.css**: Estilos del juego
- **js/**: Módulos JavaScript del juego
  - `main.js`: Inicialización y bucle principal del juego
  - `ball.js`: Lógica de la pelota (movimiento y dibujo)
  - `paddle.js`: Lógica de la paleta (movimiento y dibujo)
  - `bricks.js`: Lógica de los ladrillos (generación, dibujo y colisiones)
  - `input.js`: Manejo de entrada del teclado
  - `ui.js`: Funciones de interfaz de usuario
  - `storage.js`: Funcionalidad de almacenamiento (placeholder para futuras características)

## Cómo Jugar

Abre `index.html` en tu navegador web.

### Controles

- **Flecha Izquierda** o **A**: Mover la paleta a la izquierda
- **Flecha Derecha** o **D**: Mover la paleta a la derecha

## Características

- Movimiento fluido a 60 FPS
- Detección de colisiones
- Ladrillos con colores aleatorios
- Sistema de puntuación FPS en pantalla

## Tecnologías Utilizadas

- HTML5 Canvas
- JavaScript (ES6+)
- CSS3
