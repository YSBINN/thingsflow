import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface IssueItemProps {
  number: number;
  title: string;
  comments: number;
  userName: string;
  userAvatar: string;
  createdDate: string;
}
const IssueItem = (props: IssueItemProps) => {
  const { number, title, comments, userName, userAvatar, createdDate } = props;
  const navigate = useNavigate();

  const gotoDetail = (id: number) => {
    navigate(`/${id}`);
  };
  return (
    <IssuesListItemContainer onClick={() => gotoDetail(number)}>
      <IssueHeader>
        <div>
          <IssueNumber>#{number}</IssueNumber>
          <IssueTitle>{title}</IssueTitle>
        </div>
        <div>
          <IssueComments>comment : {comments}</IssueComments>
        </div>
      </IssueHeader>
      <IssueDescriptopn>
        <IssueUserAvatar src={userAvatar} />
        <IssueUserName>{userName}</IssueUserName>
        <IssueCreatedDate>{createdDate}</IssueCreatedDate>
      </IssueDescriptopn>
    </IssuesListItemContainer>
  );
};

export default IssueItem;

const IssuesListItemContainer = styled.div`
  width: 80%;
  height: 140px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  margin-top: 20px;
  cursor: pointer;
`;

const IssueHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

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

const IssueComments = styled.div`
  line-height: 70px;
  margin-right: 30px;
`;

const IssueDescriptopn = styled.div`
  display: flex;
  margin-left: 50px;
  align-items: flex-end;
`;
const IssueUserAvatar = styled.img`
  width: 30px;
  border-radius: 100%;
  margin-right: 5px;
`;
const IssueUserName = styled.span`
  margin-right: 5px;
  font-weight: 500;
`;
const IssueCreatedDate = styled.span``;
