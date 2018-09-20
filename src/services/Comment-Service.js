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
}

export default CommentService;
