// Dependencies
import { getFormattedDatePost } from 'utils/utils';
import { getImageOrVideoArticle } from 'utils/utils';
import commentImage from 'assets/comments.png';

export const createArticle = (articleData, text = true, articleClass = 'article') => {
  const article = document.createElement('div');
  const urlDetail = `/article/?id=${articleData.id}`;
  article.classList.add(articleClass);
  const formattedDate = getFormattedDatePost(articleData.createdAt);
  let html = `<div><a href="${urlDetail}">${getImageOrVideoArticle(articleData)}</a></div>`;
  html += `<div><h4>${articleData.title}</h4>`;
  if (text) {
    html += `<p>${articleData.text}... <a href="${urlDetail}">LEER MÁS</a></p>
             <p class="article-footer">${articleData.author} - ${formattedDate} - <a href="${urlDetail}#comments"><img class="icon" src="${commentImage}" alt="Comentarios"></a></p>`;
  }
  html += '</div>';
  article.innerHTML = html;
  return article;
};

export default {
  createArticle
};
