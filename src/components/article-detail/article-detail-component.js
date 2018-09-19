import { getImageOrVideoArticle } from 'utils/utils';

export const updateArticle = (articleData) => {
  const articleDetail = document.querySelector('#article-detail-wrapper');
  let html = getImageOrVideoArticle(articleData);
  html += `
    <div>
        <h4>${articleData.title}</h4>
        <p>${articleData.desc}</p>
    </div>`;
  articleDetail.innerHTML = html;
};
