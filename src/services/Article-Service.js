import APIService from 'services/API-Service';

class ArticleService {
  constructor() {
    this.APIServiceInstance = new APIService();
    this.model = 'articles';
  }

  async getArticles(limit = 5, skip = 0) {
    return this.APIServiceInstance.get(this.model, limit, skip);
  }

  async getArticle(id){
    return this.APIServiceInstance.get(`${this.model}/${id}`);
  }

  async post(data) {
    return this.APIServiceInstance.post(this.model, data);
  }
}

export default ArticleService;
