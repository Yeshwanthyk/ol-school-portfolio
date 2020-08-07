// Import fast-glob package
const projectImages = require('./src/_data/projectImages');

module.exports = (config) => {
  // Set directories to pass through to the dist folder
  config.addPassthroughCopy('./src/assets');

  config.addCollection('home', function (collection) {
    return projectImages.getPaths('home', 2);
  });

  config.addCollection('asIWasMovingAlong', function (collection) {
    return projectImages.getPaths('as-i-was-moving-along', 21);
  });

  config.addCollection('realPeople', function (collection) {
    return projectImages.getPaths('real-people', 4);
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
