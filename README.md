# Mechanic Diagnosis App

## Descripción

Mechanic Diagnosis App es una aplicación web desarrollada con **React** y **Vite**, diseñada para proporcionar una interfaz intuitiva y eficiente para diagnosticar fallas mecánicas en vehículos. La aplicación consume los servicios de la **[Mechanic Diagnosis API](https://github.com/mdaniotti/mechanic-diagnosis-api)** y permite a los usuarios interactuar con el sistema de diagnóstico de manera sencilla.

## Arquitectura

La aplicación sigue una arquitectura modular basada en componentes, asegurando escalabilidad y mantenibilidad.

### Tecnologías Utilizadas

- **Vite**: Se usa **Vite** como herramienta de construcción debido a su rapidez en el desarrollo y su configuración optimizada.
- **React**: Se optó por **React** debido a su flexibilidad y reusabilidad de componentes.
- **React Query**: Se utiliza para la gestión eficiente de datos y peticiones a la API, evitando estados globales innecesarios y optimizando el rendimiento.
- **React Router DOM**: Se emplea para manejar la navegación y las rutas dentro de la aplicación.
- **Axios**: Se utiliza para realizar las peticiones HTTP a la API, proporcionando un manejo de errores y respuestas más robusto.
- **React Hook Form**: Se usa para la gestión de formularios, mejorando la validación y el rendimiento en comparación con soluciones nativas de React.
- **Bootstrap**: Se incorpora **Bootstrap** para agilizar el desarrollo de la interfaz con estilos predefinidos y componentes responsivos.

### Estructura del Proyecto

```
/src
├── components       # Componentes reutilizables
├── pages            # Páginas principales de la aplicación
├── api.ts           # Todos los request a la API
├── main.tsx         # Punto de entrada principal
└── App.tsx          # Componente principal de la aplicación
```

## Decisiones Técnicas

1. **Uso de Vite en lugar de CRA**: Se eligió **Vite** por su velocidad de desarrollo y compilación, mejorando la experiencia de desarrollo.
2. **Gestión de Datos con React Query**: Permite manejar la lógica de consultas y mutaciones de datos de manera eficiente, optimizando las actualizaciones de la UI.
3. **Navegación con React Router DOM**: Proporciona una estructura clara para gestionar rutas y la navegación dentro de la aplicación.
4. **Manejo de Formularios con React Hook Form**: Mejora la validación y control de formularios con un enfoque optimizado en rendimiento.
5. **Uso de Axios para Peticiones HTTP**: Proporciona una mejor gestión de solicitudes asíncronas y manejo de errores.
6. **Diseño con Bootstrap**: Acelera la creación de una UI atractiva y responsiva sin necesidad de escribir estilos desde cero.

## Instalación y Configuración

### Requisitos previos

- Node.js (v18 o superior)
- Yarn o NPM

### Pasos de instalación

```sh
# Clonar el repositorio
git clone https://github.com/mdaniotti/mechanic-diagnosis-app.git
cd mechanic-diagnosis-app

# Instalar dependencias
yarn install  # o npm install

# Iniciar el servidor de desarrollo
yarn dev  # o npm run dev
```

## Uso

Una vez iniciado el servidor, la aplicación estará disponible en:

```
http://localhost:5173/
```
## Demo

https://github.com/user-attachments/assets/e9a1e8dd-07eb-4e28-a599-b400db25348f

## Contribuciones

Si deseas contribuir al proyecto, por favor abre un **issue** o envía un **pull request** con tus mejoras.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más información.
