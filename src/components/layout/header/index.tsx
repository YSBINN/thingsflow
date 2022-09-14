import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>Repository</HeaderTitle>
      <OrganizationName>angular</OrganizationName>
      <span>/</span>
      <RepositoryName>angular-cil</RepositoryName>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  border-bottom: 2px solid black;
  height: 80px;
  line-height: 100px;
`;
const HeaderTitle = styled.div`
  font-size: 32px;
  font-weight: 800;
  padding-left: 15%;
  margin-right: 10px;
`;
const OrganizationName = styled.div`
  font-weight: 500;
  font-size: 20px;
  color: #0969da;
  margin-right: 5px;
`;

const RepositoryName = styled.div`
  font-weight: 700;
  font-size: 20px;
  color: #0969da;
  margin-left: 5px;
`;
