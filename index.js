#!/usr/bin/env node
var pixela = require('commander');
var shelljs = require('shelljs');
var exec = require('child_process');
var templates = require('./templates.js');

const COMPONENT_TYPE = 'component';
const PAGE_TYPE = 'page';

pixela.version('0.1.0');

//Create new project
pixela
  .command('init <project_name>')
  .description('Create a new project named: [project_name]')
  .action(function(name) {
    if (!shelljs.which('vue')) {
      shelljs.echo('Installing vue-cli...');
      shelljs.exec('npm install -g vue-cli')
      shelljs.echo('vue-cli installed.');
    }
    shelljs.echo('Creating %s...', name);
    exec.execFileSync('vue', ['init', 'PixelaGt/starter-template#develop', `${name}`], {stdio: 'inherit'});
    shelljs.cd(name);
    shelljs.exec('npm install').stdout;
    shelljs.exec('git init').stdout;
    shelljs.echo('%s created :)', name);
  });

//Generate Component
pixela
  .command('generate')
  .alias('g')
  .option('component, --component [component_name]', "Create a new component in: [component_name]")
  .option('page, --page [page_name]', "Create a new page with name: [page_name]")
  .action((type, route) => {
    if (!shelljs.test('-e', 'package.json')) {
      shelljs.echo('No esta en una carpeta valida');
      shelljs.exit(1);
    }
    switch (type) {
      case COMPONENT_TYPE:
        let componentRoutes = route.split("/");
        let componentName = componentRoutes[componentRoutes.length -1];
        shelljs.echo('Creating component...');
        shelljs.mkdir('-p', `app/components/${route}`);
        shelljs.exec(`echo '${templates.generateComponentHtmlTemplate(componentName)}' > app/components/${route}/${componentName}.html`);
        shelljs.exec(`echo '${templates.generateComponentCssTemplate(componentName)}' > app/components/${route}/${componentName}.scss`);
        shelljs.exec(`echo '${templates.generateComponentJsTemplate(componentName)}' > app/components/${route}/${componentName}.js`);
        shelljs.exec(`echo '${templates.generateVueTemplate(componentName)}' > app/components/${route}/${componentName}.vue`);
        shelljs.echo(`New component ${componentName} created.`);
        break;
      case PAGE_TYPE:
        let pageRoutes = route.split("/");
        let pageName = pageRoutes[pageRoutes.length -1];
        shelljs.echo('Creating page...');
        shelljs.mkdir('-p', `app/components/pages/${route}`)
        shelljs.touch(`app/components/pages/${route}/${pageName}.html`)
        shelljs.touch(`app/components/pages/${route}/${pageName}.scss`)
        shelljs.touch(`app/components/pages/${route}/${pageName}.js`)
        shelljs.touch(`app/pages/${pageName}.vue`)
        shelljs.echo(`New page ${pageName} created.`);
        break;
      default:
        shelljs.echo('No se ingreso ninguna opcion');
        break;
    }
  });

//Parse args
pixela.parse(process.argv);
