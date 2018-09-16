export const createImageResponsive = (imageLaptop, imageTablet, imageMobile, imageName) => {
  return `
     <picture>
      <source media="(min-width: 900px)" srcset="${imageTablet}">
      <source media="(min-width: 1200px)" srcset="${imageLaptop}">
      <img src="${imageMobile}" alt="${imageName}">
    </picture> 
`;
};
