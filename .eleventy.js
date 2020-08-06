// Import fast-glob package
const fg = require('fast-glob');
const projectImages = require('./src/_data/projectImages');

module.exports = (config) => {
  // Set directories to pass through to the dist folder
  config.addPassthroughCopy('./src/images/');

  config.addCollection('briefly', function (collection) {
    return projectImages.getPaths('as-i-was-moving-along');
  });

  config.addCollection('realPeople', function (collection) {
    return projectImages.getPaths('real-people');
  });

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
