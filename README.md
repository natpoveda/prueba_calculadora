README

Para integrar el desarrollo en el CMS se me ocurren 2 cosas:
1. Pasarlo como un iframe, dado que esos fragmentos solo aceptan html
2. Pasar un bloque de HTML, llamando las cdns de React y React Dom, de alguna manera hacer una version comprimida del proyecto e implementarla

No alcance a revisar en google tag manager y tampoco a desplegarlo en un ambiente publico

Cómo ejecutar el proyecto
Requisitos
Git.
Node.js 20.19 o superior, o 22.12 o superior.
npm, que se instala junto con Node.js.
Instalación y ejecución
Clona el repositorio y entra a la carpeta de la aplicación:

git clone https://github.com/natpoveda/prueba_calculadora.git
cd prueba_calculadora\calculadora

Instala las dependencias y ejecuta el servidor de desarrollo:
npm ci
npm run dev

Abre en el navegador la dirección que indique Vite, normalmente:
http://localhost:5173

Pruebas y validación
Ejecuta las pruebas automatizadas:

npm test

Para compilar la aplicación:

npm run build

El proyecto usa React, TypeScript y Vite. Las pruebas están implementadas con Vitest y Testing Library. Para que los eventos de Google Tag Manager se envíen al servicio, se necesita conexión a internet.

Nota: actualmente, npm run lint puede reportar un error existente de Fast Refresh en src/Context/contextCalculadora.tsx; la compilación y las pruebas se validan con los comandos anteriores.
