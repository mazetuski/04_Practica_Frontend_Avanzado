import APIService from 'services/API-Service';

class CommentService {
  constructor() {
    this.APIServiceInstance = new APIService();
    this.model = 'comments';
    this.modelArticle = 'articles';
  }

  async getCommentByArticle(idArticle, limit = 5, skip = 0) {
    return this.APIServiceInstance.get(`${this.modelArticle}/${idArticle}/${this.model}`, limit, skip);
  }
}

export default CommentService;
