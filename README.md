# React + Vite

Este proyecto es una aplicación de carrito de compras desarrollada con React y Vite. Proporciona una interfaz para explorar productos, agregarlos al carrito y gestionar las compras.

## Características

- Listado de productos obtenidos desde una API externa.
- Agregar, quitar y modificar la cantidad de productos en el carrito.
- Cálculo automático del total de la compra.
- Funcionalidad para simular la compra.

## Instalación

1. Clona este repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd carrito-compras-react

## Estructura del proyecto

src/
├── components/       # Componentes reutilizables como Card y NavBar
├── context/          # Contextos y proveedores para el estado global
├── pages/            # Páginas principales de la aplicación
├── styles/           # Archivos CSS para estilos personalizados
├── [main.jsx](http://_vscodecontentref_/1)          # Punto de entrada principal
├── [CarritoApp.jsx](http://_vscodecontentref_/2)    # Componente raíz de la aplicación

## Dependencias principales

- React: Biblioteca para construir interfaces de usuario.
- React Router DOM: Manejo de rutas en la aplicación.
- Material UI: Componentes de interfaz de usuario.
- Vite: Herramienta de construcción rápida para proyectos web.