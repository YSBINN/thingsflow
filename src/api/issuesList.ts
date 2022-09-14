import BaseApi from './Base';

class IssuesListApi extends BaseApi {
  getIssuesList = async (page?: { page: number }) => {
    const { data } = await this.get('', page);
    return data;
  };
}

export default new IssuesListApi();
