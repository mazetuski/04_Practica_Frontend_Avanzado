class APIService {
  constructor() {
    this.baseUrl = process.env.API_URL;
  }

  /**
   * Function for get data from an url
   * @param url
   * @param limit
   * @param skip
   * @param sortField
   * @param order
   * @returns {Promise<*>}
   */
  async get(url, limit, skip, sortField = null, order = 'asc') {
    try {
      let urlGet = this.baseUrl + url + '?_limit=' + limit + '&_page=' + skip;
      if (sortField) {
        urlGet += `&_sort=${sortField}&_order=${order}`;
      }
      const response = await fetch(urlGet);
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
