import { useParams } from 'react-router-dom';
import GetIssue from 'api/Issuedetail';

const IssueDetail = () => {
  // const { id } = useParams();
  const id = '1';
  GetIssue.getIssue(id as string).then(res => console.log(res));

  return <div>IssueDetail</div>;
};

export default IssueDetail;
