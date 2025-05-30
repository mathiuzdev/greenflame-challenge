# 🚗 Challenge Técnico – Alquiler de Vehículos

Este proyecto consiste en una aplicación web desarrollada con React y TypeScript que simula una plataforma de alquiler de vehículos. Se utiliza un archivo `carsJSON.json` como si fuese la respuesta de una API real, a partir de la cual se renderiza el listado de autos para su visualización y filtrado.

La interfaz y la experiencia de usuario están basadas en un diseño provisto en Figma.

---

## 🚀 Tecnologías y Librerías Utilizadas

- React + TypeScript
- Zustand (manejo de estado)
- TailwindCSS (estilos)
- Material UI
- Hooks personalizados: `useState`, `useEffect`, `useMemo`, `useRef`, `useCallback`

---

## 🛠️ Funcionalidades Principales

### ✅ Renderizado de Vehículos

Cada auto se presenta en una tarjeta con:

- Imagen de la compañía
- Valoración con estrellas
- Imagen del vehículo
- Destacado (opcional)
- Grupo y código del vehículo
- Categoría del vehículo
- Detalle del nombre del vehículo
- Características (puertas, maletas, etc.)
- Precio
- Botones de acciones
- Inclusiones del vehículo (Modal)

### ✅ Selector de Orden por Precio

Permite ordenar los vehículos por:

- “Mayor precio”
- “Menor precio”

### ✅ Filtros Dinámicos por Características

- Implementados mediante checkboxes, basados en los datos disponibles en el archivo `carsJSON.json`.
- Filtros: "Compañía rentadora", "Categoría del auto", "Capacidad de maletas", "Cantidad de pasajeros" y "Fijar un rango de precio (COP)".
- En caso de que falte información (como imágenes o atributos específicos), se investigaron datos de las compañías de alquiler (logo, marca, etc.) para completar la visualización y asegurar una experiencia de usuario coherente y atractiva. Por ejemplo, si no se dispone de imágenes de ciertos vehículos, se recurre a recursos utilizados por las propias compañías, como el uso de un vehículo misterioso en Budget, para mantener la consistencia visual en las tarjetas (URL: https://www.budget.com/en/cars/vehicles/us/xx).

### ✅ Tooltip de Inclusiones Tarifarias

Al hacer clic en el ícono de signo de información (`i`) junto a Inclusive Light, se abre un modal con la lista de beneficios incluidos.

### ✅ Selección de Vehículos para Cotización

- Permite seleccionar hasta 5 vehículos.
- Se muestra un número que indica el orden en que fueron seleccionados.
- Se respeta el orden de selección y se evita seleccionar más de 5 vehículos.

### ✅ Filtro de Rango de Precios con Doble Slider

- Permite definir un rango mínimo y máximo de precios.
- Filtra dinámicamente los autos según el rango de precios seleccionado.

---

## 📦 Instalación y Ejecución

1.  **Clonar el repositorio:**

    ```bash
    git clone https://github.com/mathiuzdev/greenflame-challenge.git
    ```

2.  **Navegar al directorio del proyecto:**

    ```bash
    cd greenflame-challenge
    ```

3.  **Instalar las dependencias:**

    ```bash
    npm install
    ```

4.  **Ejecutar la aplicación:**

    ```bash
    npm run dev
    ```

5.  **Abrir en el navegador:**
    ```plaintext
    http://localhost:5173
    ```

---

## 📄 Notas Importantes

- El archivo `carsJSON.json` se utiliza como fuente de datos y simula ser la respuesta de una API.
- Los estilos se han implementado respetando al máximo la guía de diseño de Figma: colores, tipografías, iconografía, espaciado y comportamiento visual.
- Se ha priorizado la experiencia de usuario, utilizando hooks y estados globales con Zustand para garantizar la fluidez y el rendimiento.
- Se ha tenido especial cuidado en construir los filtros de forma dinámica, basados en las propiedades presentes en el JSON.
- Si alguna propiedad no está presente o se encuentra incompleta (por ejemplo, imágenes de marca o íconos de categorías), se ha investigado y completado con datos reales de las compañías de alquiler para mantener la fidelidad visual y la experiencia de usuario.
