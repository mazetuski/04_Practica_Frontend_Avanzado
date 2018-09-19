// Dependencies
import {createArticle} from 'components/article/article-component';
import ArticleService from 'services/Article-Service';
import {appendComponents} from 'utils/utils';

export const updateArticles = (popular = false) => {
  const ArticleServiceInstance = new ArticleService();
  const articleWrapper = document.querySelector('#articles-wrapper');
  const popularWrapper = document.querySelector('#popular-articles');

  // if popular then charge popular articles
  if (popular) {
    ArticleServiceInstance.getArticles(3, 2).then((articlesJSON) => {
      appendComponents(popularWrapper,
        articlesJSON.map(dataJSON => createArticle(dataJSON, false, 'article-little')));
    });
    return;
  }

  ArticleServiceInstance.getArticles(5).then((articlesJSON) => {
    appendComponents(articleWrapper,
      articlesJSON.map(dataJSON => createArticle(dataJSON)));
  });
};

export default updateArticles;
