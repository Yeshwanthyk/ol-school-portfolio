module.exports = {
  // get the paths of the images based on the title of the
  // project
  getPaths(title) {
    const fg = require('fast-glob');

    paths = fg.sync([`**/images/${title}/*`, '!**/dist']);

    // we have to do this because `fast-glob` returns us the
    // path with a prepending `src/` to it that we want to remove
    const sortedPaths = paths.map((path) => {
      return path.substr(3);
    });

    return sortedPaths;
  },
};
