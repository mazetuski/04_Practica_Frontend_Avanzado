class APIService {
  constructor() {
    this.baseUrl = process.env.API_URL;
  }

  /**
   * Function for get data from an url
   * @param url
   * @param limit
   * @param skip
   * @returns {Promise<*>}
   */
  async get(url, limit, skip) {
    try {
      const response = await fetch(this.baseUrl + url + '?_limit=' + limit + '&_page=' + skip);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async post(url, data) {
    try {
      const response = await fetch(this.baseUrl + url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    } catch (err) {
      console.error(err);
      return err;
    }
  }
}

export default APIService;
