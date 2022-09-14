import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import issuesListApi from 'api/issuesList';
import IssueItem from './components/issueItem';
import Spinner from 'components/spinner';

const IssuesList = () => {
  const [issuesList, setIssuesList] = useState([]);
  const [page, setPage] = useState(1);
  const ioTarget = useRef<HTMLDivElement>(null);

  console.log(issuesList);

  useEffect(() => {
    const onIntersect: IntersectionObserverCallback = entries => {
      if (entries[0].isIntersecting) {
        issuesListApi.getIssuesList({ page }).then(res => {
          setIssuesList(prev => prev.concat(res));
          setPage(prev => prev + 1);
        });
      }
    };

    const io = new IntersectionObserver(onIntersect, { threshold: 0.1 });

    io.observe(ioTarget.current as HTMLDivElement);

    return () => io.disconnect();
  }, [page]);

  return (
    <Container>
      {issuesList.map((el: any) => {
        return <IssueItem key={el.number} />;
      })}
      <div ref={ioTarget}></div>
    </Container>
  );
};

export default IssuesList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
`;
