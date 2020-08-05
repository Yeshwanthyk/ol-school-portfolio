// Import fast-glob package
const fg = require('fast-glob');

const brieflyImages = fg.sync(['**/briefly-images/*', '!**/dist']);
const realPeopleImages = fg.sync(['**/real-people-images/*', '!**/dist']);
console.log(realPeopleImages);

module.exports = (config) => {
  // Set directories to pass through to the dist folder
  config.addPassthroughCopy('./src/briefly-images/');
  config.addPassthroughCopy('./src/real-people-images/');

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
