import 'styles/main.scss';
import { initializeHeader } from 'components/header/header-component';
import queryString from 'query-string';
import ArticleService from 'services/Article-Service';
import { updateArticle } from 'components/article-detail/article-detail-component';
import { updateArticles } from 'components/articles/articles-component';
import { updateComments } from 'components/comments/comments-component';
import { initializeForm } from 'components/comment-form/comment-form-component';

const ArticleServiceInstance = new ArticleService();
const query = queryString.parse(window.location.search);
const articleId = query && query.id;

// put article information if article id exists
if(articleId) {
  ArticleServiceInstance.getArticle(articleId).then(articleData => updateArticle(articleData));
}

initializeHeader();
updateArticles(true);
updateComments(articleId);
initializeForm(articleId);
