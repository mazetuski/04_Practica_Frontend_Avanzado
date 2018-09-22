import { getUserImage, getFormattedDatePost } from 'utils/utils';

export const createComment = (commentData) => {
  const comment = document.createElement('div');
  const imgUrl = getUserImage(commentData);
  comment.innerHTML = `
    <div class="comment">
        <div class="profile-wrapper">
            <img src="${imgUrl}" alt="${commentData.author}">
            <p>${commentData.author} ${commentData.lastname}</p>
        </div>
        <div>
            <p>${commentData.comment}</p>
        </div>
        <p class="comment-date">${getFormattedDatePost(commentData.date)}</p>
    </div>`;

  return comment;
};