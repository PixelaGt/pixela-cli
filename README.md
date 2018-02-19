# Pixela-cli
Pixela-cli es un cliente de terminal (para GNU/Linux) para la generacion de templates utilizados por Pixela para el desarrollo de proyectos, utilizando como base Vue.js y Nuxt.js.

## Instalacion:
```bash
$ npm install -g pixela-cli
```

## Comandos:

### pixela init [nombre]
Inicializa y crea la estructura de un proyecto basico.

Ejemplo:
```bash
$ pixela init project-test
```

### pixela generate [tipo] [nombre]
Genera las carpetas y archivos necesarios ya sea para un nuevo componente o una pagina.

#### pixela generate component [nombre]
Crea un nuevo componente bajo la carpeta app/components/[nombre] junto con los archivos necesarios. (html, scss, js, vue).

Ejemplo:
```bash
$ pixela generate component test-component
```

Se puede utilizar tanto generate como g para este comando.

Ejemplo:
```bash
$ pixela generate component test-component
$ pixela g component test-component
```

Podemos crear sub componentes media vez haya un componente principal creado.

Ejemplo:
```bash
$ pixela generate component test-component/testing
```

#### pixela generate page [nombre]
Crea una nueva pagina, con un componente bajo la carpeta app/components/pages/[nombre] y un archivo vue en app/pages.

Ejemplo:
```bash
$ pixela generate page test-page
```

Se puede utilizar tanto generate como g para este comando.

Ejemplo:
```bash
$ pixela generate page test-page
$ pixela g page test-page
```
