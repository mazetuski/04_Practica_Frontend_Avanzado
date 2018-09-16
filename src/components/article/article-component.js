// Dependencies
import { createImageResponsive } from 'components/image/image-component';

const getImageOrVideoArticle = (articleData) => {
  if (!articleData.video && !articleData.image) {
    return;
  }
  if (articleData.video) {
    return 'video';
  }
  return createImageResponsive(articleData.imageLaptop, articleData.imageTablet, articleData.imageMobile, articleData.title);
};

export const createArticle = (articleData) => {
  const article = document.createElement('div');
  let html = `<h4>${articleData.title}</h4>`;
  html += getImageOrVideoArticle(articleData);
  article.innerHTML = html;
  return article;
};

export default {
  createArticle
};
