import {createImageResponsive} from 'components/image/image-component';
import {createVideoIframe} from 'components/video/video-component';

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
