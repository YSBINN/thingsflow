import React from 'react';
import styled from 'styled-components';

const IssueItem = () => {
  return (
    <IssuesListItemContainer>
      <IssueHeader>
        <div>
          <IssueNumber>1</IssueNumber>
          <IssueTitle>Issue title</IssueTitle>
        </div>
        <div>
          <IssueComments>comment()</IssueComments>
        </div>
      </IssueHeader>
      <IssueOverViewWrapper>
        <IssueOverView>개요</IssueOverView>
      </IssueOverViewWrapper>
      <IssueDescriptopnWrapper>
        <IssueDescriptopn>
          <IssueUserAvatar src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png"></IssueUserAvatar>
          <IssueUserName>작성자</IssueUserName>
          <IssueCreatedDate>작성일</IssueCreatedDate>
        </IssueDescriptopn>
      </IssueDescriptopnWrapper>
    </IssuesListItemContainer>
  );
};

export default IssueItem;

const IssuesListItemContainer = styled.div`
  width: 80%;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  margin-top: 20px;
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
  line-height: 70px;
`;

const IssueComments = styled.div`
  line-height: 70px;
  margin-right: 30px;
`;

const IssueOverViewWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const IssueOverView = styled.div`
  width: 70%;
`;

const IssueDescriptopnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const IssueDescriptopn = styled.div`
  display: flex;
`;
const IssueUserAvatar = styled.img`
  width: 30px;
  border-radius: 100%;
`;
const IssueUserName = styled.span``;
const IssueCreatedDate = styled.span``;
