import APIService from 'services/API-Service';

class CommentService {
  constructor() {
    this.APIServiceInstance = new APIService();
    this.model = 'comments';
    this.modelArticle = 'articles';
  }

  async getCommentByArticle(idArticle, limit = 10, skip = 0) {
    return this.APIServiceInstance.get(`${this.modelArticle}/${idArticle}/${this.model}`, limit, skip, 'id');
  }

  async post(data) {
    return this.APIServiceInstance.post(this.model, data);
  }

  async getNumberOfComments(idArticle) {
    // get number of comments
    const number = this.APIServiceInstance.get(`${this.modelArticle}/${idArticle}/${this.model}`, null, null, 'id')
      .then(commentsData => commentsData.length)
      .catch(() => 0);
    // if number is valid return it if not return 0
    if (number) return number;
    return 0;
  }
}

export default CommentService;
