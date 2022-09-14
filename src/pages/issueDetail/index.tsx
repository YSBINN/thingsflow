import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import issueDetailApi from 'api/Issuedetail';
import styled from 'styled-components';
import Spinner from 'components/spinner';

const IssueDetail = () => {
  const { id } = useParams();

  const [issueDetail, setIssueDetail] = useState<IssueDetail>();

  console.log(issueDetail, 'issueDetail');

  useEffect(() => {
    issueDetailApi.getIssue(id as string).then(res => setIssueDetail(res));
  }, []);

  if (!issueDetail) {
    return <Spinner />;
  }

  return (
    <Container>
      <IssueHeader>
        <IssueNumberAndTitleContainer>
          <IssueNumber>#{issueDetail.number}</IssueNumber>
          <IssueTitle>{issueDetail.title}</IssueTitle>
        </IssueNumberAndTitleContainer>
        <IssueDescription>
          <IssueUserAvatar src={issueDetail.user.avatar_url} />
          <IssueUserName>{issueDetail.user.login}</IssueUserName>
          <IssueCreatedDate>{issueDetail.created_at.split('T')[0]}</IssueCreatedDate>
        </IssueDescription>
      </IssueHeader>
      <IssueContent>
        <ReactMarkdown>{issueDetail.body}</ReactMarkdown>
      </IssueContent>
      <IssueComments>comment : {issueDetail.comments}</IssueComments>
    </Container>
  );
};

export default IssueDetail;

const Container = styled.div`
  width: 85%;
  margin-top: 20px;
`;

const IssueHeader = styled.div``;

const IssueNumberAndTitleContainer = styled.div``;

const IssueNumber = styled.span`
  font-weight: 800;
  font-size: 38px;
  padding-right: 15px;
  margin-left: 30px;
`;

const IssueTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 70px;
`;

const IssueDescription = styled.div`
  display: flex;
  margin-left: 50px;
  align-items: flex-end;
  justify-content: flex-end;
  margin-right: 100px;
`;

const IssueUserAvatar = styled.img`
  width: 30px;
  border-radius: 100%;
  margin-right: 5px;
`;

const IssueUserName = styled.span`
  margin-right: 5px;
`;

const IssueCreatedDate = styled.span``;

const IssueContent = styled.div`
  margin: 50px;
  font-weight: 700;
  font-size: 16px;
`;

const IssueComments = styled.div`
  margin-left: 50px;
  margin-top: 50px;
  font-weight: 800;
`;

interface IssueDetail {
  number: number;
  title: string;
  created_at: string;
  body: string;
  comments: number;
  user: { avatar_url: string; login: string };
}
