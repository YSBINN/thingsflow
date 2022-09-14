import axios from 'axios';

class Api {
  private createAxios(headerOption?: any) {
    return axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
      headers: {
        Accept: 'application/vnd.github+json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
        ...headerOption,
      },
    });
  }

  protected async get(url?: any, params?: any, headerOption?: any) {
    const axios = this.createAxios(headerOption);
    return await axios.get(url, { params });
  }
}
export default Api;
