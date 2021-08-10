class FetchAdapter {
  /**
   * Instantiate the Fetch Adapter
   * @param {String} token (Optional) Bearer Token
   * @param {Object} fetchLibrary (Optional) pass in the fetch object if using on browser
   */
  constructor(token, fetchLibrary) {
    this.fetch = fetchLibrary || require("node-fetch");
    this.options = {
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (token) this.options.headers.Authorization = `Bearer ${token}`;
  }

  handleError(error) {
    return "FetchError: " + error;
  }

  async apiResponse(url, options) {
    let response = {};

    try {
      const res = await this.fetch(url, options);
      const data = await res.json();
      const status = await res.status;
      response = { data, status };
      if (response.status !== 200) throw new Error(JSON.stringify(response));
    } catch (error) {
      response = this.handleError(error);
      throw new Error(response);
    }

    return response;
  }

  async get(url, queryParameters) {
    this.options.method = "GET";

    const queryString = queryParameters
      ? new URLSearchParams(queryParameters).toString()
      : "";

    try {
      return await this.apiResponse(url + queryString, this.options);
    } catch (error) {
      throw error;
    }
  }

  async delete(url, queryParameters, body) {
    this.options.method = "DELETE";

    const queryString = queryParameters
      ? new URLSearchParams(queryParameters).toString()
      : "";

    this.options.body = body ? JSON.stringify(body) : null;

    try {
      return await this.apiResponse(url + queryString, this.options);
    } catch (error) {
      throw error;
    }
  }

  async put(url, queryParameters, body) {
    this.options.method = "PUT";

    const queryString = queryParameters
      ? new URLSearchParams(queryParameters).toString()
      : "";

    this.options.body = body ? JSON.stringify(body) : null;

    try {
      return await this.apiResponse(url + queryString, this.options);
    } catch (error) {
      throw error;
    }
  }

  async patch(url, queryParameters, body) {
    this.options.method = "PATCH";

    const queryString = queryParameters
      ? new URLSearchParams(queryParameters).toString()
      : "";

    this.options.body = body ? JSON.stringify(body) : null;

    try {
      return await this.apiResponse(url + queryString, this.options);
    } catch (error) {
      throw error;
    }
  }

  async post(url, queryParameters, body) {
    this.options.method = "POST";

    const queryString = queryParameters
      ? new URLSearchParams(queryParameters).toString()
      : "";

    this.options.body = body ? JSON.stringify(body) : null;

    try {
      return await this.apiResponse(url + queryString, this.options);
    } catch (error) {
      throw error;
    }
  }
}

class AxiosAdapter {
  /**
   * Instantiate The Axios Adapter
   * @param {string} token bearer token
   */
  constructor(token) {
    this.axios = require("axios").default;
    this.options = {
      headers: {
        Authorization: token ? `Bearer ${token}` : null,
        "Content-Type": "application/json",
      },
    };
  }

  async handleError(error) {
    return "AxiosError: " + error;
  }

  async apiResponse(method, url, body, options) {
    let response = "";

    try {
      response = await this.axios({
        method,
        url,
        responseType: "json",
        data: body,
        headers: options.headers,
      });
      response = response.data;
    } catch (error) {
      response = this.handleError(error);
    }

    return response;
  }

  async get(url, queryParameters) {
    const queryString = queryParameters
      ? new URLSearchParams(queryParameters).toString()
      : "";

    return await this.apiResponse("get", url + queryString, null, this.options);
  }

  async delete(url, queryParameters, body) {
    const queryString = queryParameters
      ? new URLSearchParams(queryParameters).toString()
      : "";

    return await this.apiResponse(
      "delete",
      url + queryString,
      body ? JSON.stringify(body) : null,
      this.options
    );
  }

  async put(url, queryParameters, body) {
    const queryString = queryParameters
      ? new URLSearchParams(queryParameters).toString()
      : "";

    return await this.apiResponse(
      "put",
      url + queryString,
      body ? JSON.stringify(body) : null,
      this.options
    );
  }

  async patch(url, queryParameters, body) {
    const queryString = queryParameters
      ? new URLSearchParams(queryParameters).toString()
      : "";

    return await this.apiResponse(
      "patch",
      url + queryString,
      body ? JSON.stringify(body) : null,
      this.options
    );
  }

  async post(url, queryParameters, body) {
    const queryString = queryParameters
      ? new URLSearchParams(queryParameters).toString()
      : "";

    return await this.apiResponse(
      "post",
      url + queryString,
      body ? JSON.stringify(body) : null,
      this.options
    );
  }
}

class Request {
  /**
   * Instantiate the request library
   * @param {Object} adapter FetchAdapter or AxiosAdapter object expected
   */
  constructor(adapter) {
    this.adapter = adapter;
  }

  /**
   * GET HTTP request
   * @param {string} url
   * @param {object} queryParameters key, pair which includes query parameter
   * @returns {Promise} resolves into the JSON object of given request
   */
  async get(url, queryParameters) {
    try {
      return await this.adapter.get(url, queryParameters);
    } catch (error) {
      throw error;
    }
  }

  /**
   * DELETE HTTP request
   * @param {string} url
   * @param {object} queryParameters key, pair which includes query parameter
   * @param {object} body key, pair which will be the request json bodyr
   * @returns {Promise} resolves into the JSON object of given request
   */
  async delete(url, queryParameters, body) {
    try {
      return await this.adapter.delete(url, queryParameters, body);
    } catch (error) {
      throw error;
    }
  }

  /**
   * POST HTTP request
   * @param {string} url
   * @param {object} queryParameters key, pair which includes query parameter
   * @param {object} body key, pair which will be the request json bodyr
   * @returns {Promise} resolves into the JSON object of given request
   */
  async post(url, queryParameters, body) {
    try {
      return await this.adapter.post(url, queryParameters, body);
    } catch (error) {
      throw error;
    }
  }

  /**
   * PUT HTTP request
   * @param {string} url
   * @param {object} queryParameters key, pair which includes query parameter
   * @param {object} body key, pair which will be the request json bodyr
   * @returns {Promise} resolves into the JSON object of given request
   */
  async put(url, queryParameters, body) {
    try {
      return await this.adapter.put(url, queryParameters, body);
    } catch (error) {
      throw error;
    }
  }

  /**
   * PATCH HTTP request
   * @param {string} url
   * @param {object} queryParameters key, pair which includes query parameter
   * @param {object} body key, pair which will be the request json body
   * @returns {Promise} resolves into the JSON object of given request
   */
  async patch(url, queryParameters, body) {
    try {
      return await this.adapter.patch(url, queryParameters, body);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = {
  Request,
  FetchAdapter,
  AxiosAdapter,
};
