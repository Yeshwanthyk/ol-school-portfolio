module.exports = {
  // get the paths of the images based on the title of the
  // project
  getPaths(projectName, imagesCount) {
    const srcsetWidths = [320, 480, 640, 960, 1280];
    const fallbackWidth = 640;

    let imagesPaths = [];

    // This would build the images path for how they appear in the folder
    // The assumption is that the cloudinary folder contains images that are sequenced
    // the way we want them. And, that they share the same name as the folder they are placed
    // in
    for (i = 1; i < imagesCount + 1; i++) {
      imagesPaths.push(`${projectName}\/${projectName}-${i}`);
    }

    // We grab and set the srcset widths for all the images we want to show
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
        `<img loading="lazy" src="${src}" srcset="${srcset}" sizes="(max-width: 400px) 320px, 480px" alt="images for project ${projectName}">`
      );
    });

    return finalPaths;
  },
};
