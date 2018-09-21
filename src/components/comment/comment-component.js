import { urlImgDefault } from 'utils/utils';

export const createComment = (commentData) => {
  const comment = document.createElement('div');
  let imgUrl = urlImgDefault;
  if (commentData.userImage) {
    imgUrl = commentData.userImage;
  }
  comment.innerHTML = `
    <div class="comment">
        <div class="profile-wrapper">
            <img src="${imgUrl}" alt="${commentData.author}">
            <p>${commentData.author} ${commentData.lastname}</p>
        </div>
        <div>
            <p>${commentData.comment}</p>
        </div>
    </div>`;

  return comment;
};