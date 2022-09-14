import styled from 'styled-components';
import logo from 'assets/logo/logo.png';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <HeaderContainer>
        <img src={logo} />
        <span>Git Issue.net</span>
      </HeaderContainer>
      <ContentsTitle>issue</ContentsTitle>
      <ul>
        <ConetentsList>Create Issue</ConetentsList>
        <ConetentsList>Update Issue</ConetentsList>
        <ConetentsList>Get List Issues</ConetentsList>
      </ul>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  padding-top: 10px;
  width: 15%;
  min-height: 1080px;
  border-right: 2px solid #222222;
`;

const HeaderContainer = styled.div`
  display: flex;
  img {
    margin: 15px;
  }
  span {
    font-size: 20px;
    font-weight: 800;
    line-height: 80px;
  }
`;
const ContentsTitle = styled.div`
  margin-left: 30px;
`;
const ConetentsList = styled.li`
  color: #87b0ff;
  margin-left: 80px;
`;
