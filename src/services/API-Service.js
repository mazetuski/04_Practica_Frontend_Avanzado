class APIService {
  constructor() {
    this.baseUrl = process.env.API_URL;
  }

  /**
   * Function for get data from an url
   * @param url
   * @returns {Promise<*>}
   */
  async get(url) {
    try {
      const response = await fetch(this.baseUrl + url);
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

      if (!response.ok){
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
