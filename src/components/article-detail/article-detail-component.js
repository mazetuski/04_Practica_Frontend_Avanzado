import { getImageOrVideoArticle, getUserImage, getFormattedDatePost } from 'utils/utils';

const isLiked = id => localStorage.getItem(`article-${id}`);

const toggleLike = (id) => {
  const likeValue = isLiked(id) === 'true' ? 'false' : 'true';
  localStorage.setItem(`article-${id}`, likeValue);
};

const setInitialLikeValue = (likeButton, liked) => {
  if (liked === 'true') likeButton.classList.add('fas');
};

export const updateArticle = (articleData) => {
  const articleDetail = document.querySelector('#article-detail-wrapper');
  let html = getImageOrVideoArticle(articleData);
  html += `
    <div class="user-section">
        <img src="${getUserImage(articleData)}" alt="${articleData.author}" class="image-profile">
        <span>${articleData.author} - ${getFormattedDatePost(articleData.createdAt)}</span>
        <i class="far fa-thumbs-up like-article"></i>
    </div>
    <div>
        <h4>${articleData.title}</h4>
        <p>${articleData.desc}</p>
    </div>`;
  articleDetail.innerHTML = html;

  const likeButton = document.querySelector('.like-article');

  setInitialLikeValue(likeButton, isLiked(articleData.id));

  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('fas');
    toggleLike(articleData.id);
  });
};
