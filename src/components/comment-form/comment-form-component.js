import { reportValidity, getFormData } from "utils/utils";
import { updateComments } from "components/comments/comments-component";
import CommentService from 'services/Comment-Service';
const CommentServiceInstance = new CommentService();

/**
 * Function for handle comments form
 * @param articleId
 */
export const initializeForm = (articleId) => {
  const commentForm = document.querySelector('#comment-form');
  const inputs = document.querySelectorAll('.comment-input');
  commentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // check if form is valid
    if (!commentForm.checkValidity()) return;
    // post new comment to database
    const formData = getFormData(inputs);
    formData['articleId'] = articleId;
    CommentServiceInstance.post(formData).then(() => {
      updateComments(articleId);
    });
  });
};
