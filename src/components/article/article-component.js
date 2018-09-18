// Dependencies
import { createImageResponsive } from 'components/image/image-component';
import { createVideoIframe } from 'components/video/video-component';

const getImageOrVideoArticle = (articleData) => {
  if (!articleData.video && !articleData.imageMobile) {
    return;
  }
  if (articleData.video) {
    return createVideoIframe(articleData.video);
  }
  return createImageResponsive(articleData.imageLaptop, articleData.imageTablet, articleData.imageMobile, articleData.title);
};

export const createArticle = (articleData) => {
  const article = document.createElement('div');
  article.classList.add('article');
  let html = `<div>${getImageOrVideoArticle(articleData)}</div>`;
  html += `<div>
        <h4>${articleData.title}</h4>
        <p>${articleData.text}</p>
    </div>`;
  article.innerHTML = html;
  return article;
};

export default {
  createArticle
};
