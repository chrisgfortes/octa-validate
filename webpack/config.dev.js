const CircularDependencyPlugin = require('circular-dependency-plugin');
const merge = require('webpack-merge');
const npmConfig = require('./config.npm');
const webpackBase = require('./config.base');
const glob = require('glob');
const fs = require('fs');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');

const markdown = glob.sync('./changelogs/*.md');

markdown.forEach((md) => {
  fs.readFile(md, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});

module.exports = merge(webpackBase, {
  devtool: 'inline-source-map',
  plugins: [
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: false,
    }),
    new GenerateJsonPlugin('package.json', npmConfig.package),
  ],
});
