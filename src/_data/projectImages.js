module.exports = {
  // get the paths of the images based on the title of the
  // project
  getPaths(projectName, imagesCount) {
    const srcsetWidths = [320, 640, 960, 1280];
    const fallbackWidth = 640;

    let imagesPaths = [];

    for (i = 1; i < imagesCount + 1; i++) {
      imagesPaths.push(`${projectName}\/${projectName}-${i}`);
    }

    const finalPaths = [];
    imagesPaths.forEach((path) => {
      const fetchBase = `https://res.cloudinary.com/yesh/image/upload/`;
      const src = `${fetchBase}q_auto,f_auto,w_${fallbackWidth}/${path}.jpg`;

      const srcset = srcsetWidths
        .map((w) => {
          return `${fetchBase}q_auto:eco,f_auto,w_${w}/${path}.jpg ${w}w`;
        })
        .join(', ');
      finalPaths.push(
        `<img loading="lazy" src="${src}" srcset="${srcset}" sizes="(max-width: 320px) 300px, 400px" alt="images for project ${projectName}">`
      );
    });

    return finalPaths;
  },
};
