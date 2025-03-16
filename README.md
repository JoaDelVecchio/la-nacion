# Documentación

## Tabla de Contenidos

1. [Introducción](#introduccion)
2. [Estructura del Proyecto](#estructura-del-proyecto)
3. [Decisiones de Diseño y Desarrollo](#decisiones-de-diseno-y-desarrollo)
4. [Testing](#testing)
5. [Instalación y Configuración](#instalacion-y-configuracion)

---

## Introducción

Esta es una **web** que consume un API con artículos y los muestra en una grilla, desarrollada con nextjs15 y con un enfoque en Performance, accesibilidad y CoreWebVitals.

### Lighthouse 
**Performance:** 🟢 100

**Accessibility:** 🟢 98

**Best Practices:** 🟢 96

**SEO:** 🟢 100


La aplicación está desplegada en **Vercel** y puede accederse en el siguiente enlace:

[https://la-nacion-pearl.vercel.app/](https://la-nacion-pearl.vercel.app/)

---

## Estructura del Proyecto

Mantengo todo lo relacionado con **routing dentro de `app/`** y separo el resto del código en carpetas específicas (`components/`, `services/`, `utils/`), permitiendo:

```
📂 proyecto-noticias
│── 📂 __tests__            # Pruebas unitarias
│   ├── 📂 components
│   ├── 📂 mockData
│   ├── fetchArticles.test.js
│   ├── formatToLongDate.test.js
│   ├── getTopTags.test.js
│
│── 📂 app
│   ├── 📂 api/webhooks     # Webhook para revalidar cache de artículos mediante backend/CMS
    │   ├── route.js
│   ├── 📂 tema/[slug]
    │   ├── layout.jsx
    │   ├── page.jsx
│   ├── error.jsx
│   ├── layout.jsx
│   ├── page.jsx
│   ├── loading.jsx
│   ├── not-found.jsx
│
│── 📂 components
│   ├── ArticleCard.jsx
│   ├── ArticlesGrid.jsx           # Contenedor de ArticleCards
│   ├── ArticlesAndTagsContainer.jsx # Logica y muestra de los artículo, los tags populares y el boton para cargar mas.
│   ├── ArticlesDataLoader.jsx      # Serve componente que carga articulos de la API y los pasa a ArticlesAndTagsContainer.jsx
│   ├── GridTitle.jsx
│   ├── LoadMoreButton.jsx          # Botón para cargar más artículos
│   ├── MainContent.jsx
│   ├── NoArticlesFound.jsx
│   ├── SidebarAds.jsx
│   ├── TrendingTags.jsx
│
│── 📂 hooks
│   ├── usePagination.jsx
│
│── 📂 lib                  # Configuración y constantes especificas al proyecto
│   ├── config.js
│   ├── constants.js
│
│── 📂 services             #Interacción con APIs
│   ├── articleService.js
│
│── 📂 utils                # Utilidades y funciones puras auxiliares
│   ├── utils.js            # Funciones reutilizables y generales
│
│── 📂 public
│── .env.local
│── README.md
│── package.json
│── next.config.ts
│── jest.config.js
│── eslint.config.mjs
```

---

## Razonamiento y Decisiones de Diseño y Desarrollo

# Enfoque de Fetching y Renderizado

Para estructurar el desarrollo en cuanto a la búsqueda y renderizado de artículos, comparé diferentes enfoques:  
**Server-Side Rendering (SSR), Client-Side Rendering (CSR) y un enfoque híbrido (SSR + CSR).**

- **SSR** es excelente para **SEO** y asegura que los buscadores indexen correctamente el contenido. Sin embargo, si la cantidad de artículos aumenta significativamente, cada petición al servidor podría ralentizar la carga inicial.
- **CSR**, en cambio, ofrece una **mejor experiencia de usuario** en términos de navegación fluida y menor carga en el servidor, pero **sacrifica SEO y Core Web Vitals**.
- **Por eso, opté por un enfoque híbrido** que combina lo mejor de ambos, **equilibrando SEO, performance y experiencia de usuario**.

Dado que este es un **sitio de noticias**, prioricé la **optimización de SEO**, enfocándome en la **indexación en Google** y la **velocidad de carga**, factores esenciales para mejorar la visibilidad en los motores de búsqueda y aumentar las probabilidades de que nuestros artículos **se posicionen mejor en los rankings** cuando alguien busca un tema relevante. Para lograrlo, implementé **SSR en la carga inicial**, asegurando que los artículos sean **indexados correctamente**.

Para mitigar los efectos negativos del `fetch`, declaré la función con **caché revalidada dinámicamente**, lo que permite que la **primera petición de un usuario almacene los datos y los comparta** con el resto de visitantes **hasta que haya cambios en los artículos**, ya sea desde el **backend o el CMS mediante /api/webhook/route.ts**.  
Además, si la función se llama en varias partes del código, **no se realizan múltiples requests**, sino que **se comparten los datos**, reduciendo la carga en el servidor y mejorando significativamente el rendimiento.

Para mejorar la **experiencia del usuario y la velocidad**, implementé la **paginación en el cliente**, eliminando recargas innecesarias y optimizando **Core Web Vitals y performance** con técnicas avanzadas como:

- `useMemo`
- `useCallback`
- `React.memo`
- Elementos de Next.js como `Image` (_unoptimized_, para evitar conflictos con CSS ya definido) y `Link`

Esto garantiza que la interfaz siga siendo **rápida y responsiva**, evitando cálculos innecesarios y asegurando que **solo se rendericen los componentes esenciales** en cada momento.

# Enfoque en Modularidad y Separación de Responsabilidades

Para mantener un código claro, escalable y fácil de mantener, estructuré el proyecto separando las responsabilidades en distintas carpetas y componentes. Cada componente cumple una única responsabilidad, separando la lógica de negocio de la presentación (Presentational & Container Components Pattern). Esto mejora la modularidad, permitiendo hacer cambios en la lógica sin afectar la UI y viceversa.

## Optimizaciones en Accesibilidad y Performance

Modifiqué los `<a>` e `<img>` por `Link` e `Image` de Next.js para mejorar **accesibilidad, SEO y Core Web Vitals**. Esto optimiza la **carga de imágenes** con `next/image` (mejorando el **LCP**) y permite un **pre-renderizado eficiente de enlaces** con `next/link`, reduciendo el tiempo de navegación. Además, `Image` usa `unoptimized` para evitar posibles conflictos con el css ya definido.

## Optimización de Rendimiento en Lighthouse

Optimizé al máximo el rendimiento de la aplicación siguiendo las mejores prácticas de **Lighthouse**, logrando excelentes resultados en métricas clave como **LCP, INP y CLS**. Hubo, sin embargo, un par de aspectos en **HTML y CSS** que podrían haberse mejorado aún más, pero no los modifiqué debido a la indicación de utilizar la estructura proporcionada.

---

## Decisión sobre Context API

No utilicé **Context API** porque los datos no se compartían entre múltiples componentes ni requerían un estado global, evitando así una complejidad innecesaria. Opté simplemente por **pasar los datos por `props`** desde `ArticlesDataLoader` hacia `ArticlesAndTagsContainer`, manteniendo el código más limpio y eficiente.

---

## Unit Testing 🧪

### **Ejecutar Pruebas**

Ejemplo de ejecución de pruebas unitarias y de componentes:

```bash
# Ejecutar prueba de funciones puras y services a API con Node.js nativo
node __tests__/fetchArticles.test.js

# Ejecutar prueba de componentes con Jest
npm test __tests__/components/ArticlesAndTagsContainer.test.jsx

---
```

## Instalación y Configuración Local

### **Clonar el Repositorio**

```bash
git clone https://github.com/JoaDelVecchio/la-nacion.git
cd proyecto-noticias
```

### **Instalar dependencias**

```bash
npm install
```

### **Configurar Variables de Entorno**

Crear un archivo `.env.local` con la siguiente variable:

```
API_URL=https://jrt2bb3b2nlkw5ozvfcld62wbe0pnifh.lambda-url.us-east-1.on.aws/
```

### **Ejecutar el Proyecto**

```bash
npm run dev
```

---

# la-nacion
