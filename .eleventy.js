// Import fast-glob package
const fg = require('fast-glob');

const brieflyImages = fg.sync([
  '**/images/as-i-was-moving-along/*',
  '!**/dist',
]);
const realPeopleImages = fg.sync(['**/images/real-people/*', '!**/dist']);

module.exports = (config) => {
  // Set directories to pass through to the dist folder
  config.addPassthroughCopy('./src/images/');

  config.addCollection('briefly', function (collection) {
    const sortedImages = brieflyImages.map((image) => {
      return image.substr(3);
    });
    return sortedImages;
  });

  config.addCollection('realPeople', function (collection) {
    const sortedImages = realPeopleImages.map((image) => {
      return image.substr(3);
    });
    return sortedImages;
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
