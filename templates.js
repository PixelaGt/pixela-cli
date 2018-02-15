module.exports = {
  generateComponentHtmlTemplate: (name) => {
    return `<h1>Hi there, this is ${name} component</h1>`;
  },

  generateComponentCssTemplate: (name) => {
    return `h1 {\n  font-size: 32px;\n  text-align: center;\n}`;
  },

  generateComponentJsTemplate: (name) => {
    return `export default {\n\tname: "${name}",\n}`;
  },

  generateVueTemplate: (name) => {
    return `<template src="./${name}.html"/>\n<script src="./${name}.js"/>\n<style lang="scss" scoped src="./${name}.scss"/>`;
  }
};
