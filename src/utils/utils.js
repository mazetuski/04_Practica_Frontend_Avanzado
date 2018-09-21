// Dependencies
import {createImageResponsive} from 'components/image/image-component';
import {createVideoIframe} from 'components/video/video-component';

// REGEXP
const EMAIL_REGEXP = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const TEXTAREA_REGEXP = /^(?:\b\w+\b[\s\r\n]*){0,499}$/;


export const urlImgDefault = 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/18/18f150c5a9da43bdd3e40d1b193a9f74328abba2_full.jpg';

/**
 * Function for append components in a container
 * @param elems
 * @param container
 */
export const appendComponents = (container, elems) => {
  elems.forEach(elem => container.appendChild(elem));
};

/**
 * Function for get formatted string from date for posts
 * @param string
 * @returns {string}
 */
export const getFormattedDatePost = (string) => {
  // get difference in milliseconds
  const date = new Date(string);
  const dateNow = new Date();
  const milliseconds = Math.floor(dateNow.getTime() - date.getTime());
  // get number of days
  const day = 1000 * 60 * 60 * 24;
  const days = milliseconds / day;
  // if have 1 or more days format and return it
  if (days >= 1) {
    let lastString = 'días';
    if (Math.floor(days) === 1) {
      lastString = 'día';
    }
    return `Hace ${Math.floor(days)} ${lastString}`;
  }
  // Get in hours
  const hours = days * 24;
  if (hours >= 1) {
    let lastString = 'horas';
    if (Math.floor(hours) === 1) {
      lastString = 'hora';
    }
    return `Hace ${Math.floor(hours)} ${lastString}`;
  }

  // get in minutes
  const minutes = hours * 60;
  if (minutes >= 1) {
    let lastString = 'minutos';
    if (Math.floor(minutes) === 1) {
      lastString = 'minuto';
    }
    return `Hace ${Math.floor(minutes)} ${lastString}`;
  }

  // if not then return default string
  return 'Hace menos de 1 minuto';
};

/**
 * Function for create video or image depends of article data
 * @param articleData
 * @returns {string}
 */
export const getImageOrVideoArticle = (articleData) => {
  if (!articleData.video && !articleData.imageMobile) {
    return;
  }
  if (articleData.video) {
    return createVideoIframe(articleData.video);
  }
  return createImageResponsive(articleData.imageLaptop, articleData.imageTablet, articleData.imageMobile, articleData.title);
};

/**
 * Polyfill for reportValidity
 * @param form
 */
export const reportValidity = (form) => {
  if (HTMLFormElement.prototype.reportValidity) {
    form.reportValidity();
  } else {
    HTMLFormElement.prototype.reportValidity = () => {
      if (form.checkValidity()) return true;
      const btn = document.createElement('button');
      form.appendChild(btn);
      btn.click();
      form.removeChild(btn);
      return false;
    };
  }
};

/**
 * Function for get formdata from inputs
 * @param formInputs
 */
export const getFormData = (formInputs) => {
  const formData = {};
  for (let i = 0; i < formInputs.length; i += 1) {
    const input = formInputs[i];
    formData[input.name] = input.value;
  }
  return formData;
};

/**
 * Method for test regexp
 * @param string
 * @param regexp
 * @returns {boolean}
 */
export const check = (string, regexp) => {
  return regexp.test(string);
};

/**
 * Check comment validity
 * @returns {boolean}
 */
export const checkTextarea = (input) => {
  if (!check(input.value, TEXTAREA_REGEXP)) {
    input.setCustomValidity('El máximo de palabras es 150');
    return false;
  }
  input.setCustomValidity('');
  return true;
};

/**
 * Check email validity
 * @returns {boolean}
 */
export const checkEmail = (input) => {
  if (!check(input.value, EMAIL_REGEXP)) {
    input.setCustomValidity('El email no es válido');
    return false;
  }
  input.setCustomValidity('');
  return true;
};

/**
 * Check simple text validity
 * @returns {boolean}
 */
export const checkText = input => input.checkValidity();
