import CommentService from 'services/Comment-Service';
import { appendComponents } from 'utils/utils';
import { createComment } from 'components/comment/comment-component';

const CommentServiceInstance = new CommentService();

export const updateComments = (idArticle) => {
  const commentsWrapper = document.querySelector('#comments-wrapper');
  const numberComments = document.querySelector('#number-comments');
  CommentServiceInstance.getCommentByArticle(idArticle).then((commentsData) => {
    numberComments.innerHTML = commentsData.length;
    appendComponents(commentsWrapper,
      commentsData.map(commentData => createComment(commentData)));
  });
};
