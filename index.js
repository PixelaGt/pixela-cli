#!/usr/bin/env node
var pixela = require('commander');
var shelljs = require('shelljs');

pixela.version('0.1.0');

//Create new project
pixela
  .command('init <project_name>')
  .description('Create a new project named: [project_name]')
  .action(function(name) {
    shelljs.echo('Creating %s...', name);
    shelljs.exec('npm install -g @vue/cli', {silent:true}).stdout;
    shelljs.exec('npm install -g @vue/cli-init', {silent:true}).stdout;
    shelljs.exec(`vue init @pixela/starter-template ${name}`, {silent:true}).stdout;
    shelljs.mkdir(name);
    shelljs.cd(name);
    shelljs.exec('npm install', {silent:true}).stdout;
    shelljs.exec('git init', {silent:true}).stdout;
    shelljs.echo('%s created :)', name);
  })

//Generate Component

//Parse args
pixela.parse(process.argv);
