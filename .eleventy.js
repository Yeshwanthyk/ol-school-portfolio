// Import fast-glob package
const fg = require('fast-glob');
const projectImages = require('./src/_data/projectImages');

module.exports = (config) => {
  // Set directories to pass through to the dist folder
  config.addPassthroughCopy('./src/images/');

  config.addCollection('home', function (collection) {
    return projectImages.getPaths('home');
  });

  config.addCollection('asIWasMovingAlong', function (collection) {
    return projectImages.getPaths('as-i-was-moving-along');
  });

  config.addCollection('realPeople', function (collection) {
    return projectImages.getPaths('real-people');
  });

  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false);

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
