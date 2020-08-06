// Import fast-glob package
const fg = require('fast-glob');
const projectImages = require('./src/_data/projectImages');
const { naturalSort } = require('./src/utils/natural-sort.js');

module.exports = (config) => {
  config.addCollection('home', function (collection) {
    return projectImages.getPaths('home');
  });

  config.addCollection('asIWasMovingAlong', function (collection) {
    let paths = projectImages.getPaths('as-i-was-moving-along');
    return paths.sort((a, b) => naturalSort(a, b));
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
