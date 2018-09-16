// Dependencies
import { createArticle } from 'components/article/article-component';
import ArticleService from 'services/Article-Service';
import { appendComponents } from 'utils/utils';

export const updateArticles = () => {
  const ArticleServiceInstance = new ArticleService();
  const articleWrapper = document.querySelector('#articles-wrapper');
  ArticleServiceInstance.getArticles().then((articlesJSON) => {
    appendComponents(articleWrapper,
      articlesJSON.map(dataJSON => createArticle(dataJSON)));
  });
};

export default updateArticles;
