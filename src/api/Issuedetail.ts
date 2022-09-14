import BaseApi from './Base';

class IssueApi extends BaseApi {
  getIssue = async (id: string) => {
    const { data } = await this.get(`/${id}`);
    return data;
  };
}

export default new IssueApi();
