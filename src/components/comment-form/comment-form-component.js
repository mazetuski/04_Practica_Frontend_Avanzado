import { reportValidity, getFormData, checkText, checkEmail, checkTextarea } from "utils/utils";
import { updateComments } from "components/comments/comments-component";
import CommentService from 'services/Comment-Service';
const CommentServiceInstance = new CommentService();

/**
 * Function for add custom validation to an input
 * @param input
 */
const addCustomValidation = (input) => {
  switch (input.type) {
    case 'email':
      checkEmail(input);
      break;
    case 'text':
      checkText(input);
      break;
    default:
      checkTextarea(input);
  }
};

/**
 * Function for add/remove error class of an input
 */
const handleErrorClass = (input) => {
  if (!input.checkValidity()) {
    input.classList.add('error');
    return;
  }
  input.classList.remove('error');
};

/**
 * Function for handle validations of all inputs of a form
 * @param formInputs
 */
const handleValidation = (formInputs) => {
  for (let i = 0; i < formInputs.length; i += 1) {
    const input = formInputs[i];

    input.addEventListener('focus', () => {
      input.classList.add('focus');
    });
    // when lose focus handle validation
    input.addEventListener('blur', () => {
      input.classList.remove('focus');
      addCustomValidation(input);
      handleErrorClass(input);
    });
  }
};

/**
 * Function for handle comments form
 * @param articleId
 */
export const initializeForm = (articleId) => {
  const commentForm = document.querySelector('#comment-form');
  const inputs = document.querySelectorAll('.comment-input');
  handleValidation(inputs);
  commentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    reportValidity(commentForm);
    // check if form is valid
    if (!commentForm.checkValidity()) return;
    // post new comment to database
    const formData = getFormData(inputs);
    formData['articleId'] = articleId;
    formData['date'] = new Date();
    CommentServiceInstance.post(formData).then(() => {
      // update al comments if no errors and clear form
      updateComments(articleId);
      commentForm.reset();
    });
  });
};
