import CommentService from 'services/Comment-Service';
import { appendComponents } from 'utils/utils';
import { createComment } from 'components/comment/comment-component';
import { createLoading } from 'components/loading/loading-component';

const CommentServiceInstance = new CommentService();

export const updateComments = async (idArticle) => {
  const commentsWrapper = document.querySelector('#comments-wrapper');
  // put loading
  commentsWrapper.appendChild(createLoading());
  // reset html
  commentsWrapper.innerHTML = '';
  // put number of comments
  const numberComments = document.querySelector('#number-comments');
  numberComments.innerHTML = await CommentServiceInstance.getNumberOfComments(idArticle);
  // add all comments with pagination
  CommentServiceInstance.getCommentByArticle(idArticle, 5).then((commentsData) => {
    appendComponents(commentsWrapper,
      commentsData.map(commentData => createComment(commentData)));
  }).catch(() => {
    commentsWrapper.innerHTML = 'No se ha podido contactar con el servidor';
  });
};
