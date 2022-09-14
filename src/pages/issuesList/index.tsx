import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import issuesListApi from 'api/issuesList';
import IssueItem from './components/issueItem';

const IssuesList = () => {
  const [issuesList, setIssuesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const ioTarget = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onIntersect: IntersectionObserverCallback = entries => {
      if (entries[0].isIntersecting) {
        setIsLoading(true);
        issuesListApi.getIssuesList({ page }).then(res => {
          const prevList = [...issuesList];
          const currentList = prevList.concat(res);
          const sortedCurrentList = currentList.sort((a: any, b: any) => b.comments - a.comments);
          setIssuesList(sortedCurrentList);
          setPage(prev => prev + 1);
          setIsLoading(false);
        });
      }
    };

    const io = new IntersectionObserver(onIntersect, { threshold: 0.1 });

    io.observe(ioTarget.current as HTMLDivElement);

    return () => io.disconnect();
  }, [page]);

  return (
    <Container>
      {issuesList.map((el: any, idx: number) =>
        isLoading ? (
          <Skeleton key={el.number} />
        ) : idx === 3 ? (
          <React.Fragment key={el.number}>
            <IssueItem
              number={el.number}
              title={el.title}
              comments={el.comments}
              userName={el.user.login}
              userAvatar={el.user.avatar_url}
              createdDate={el.created_at.split('T')[0]}
            />
            <a href="https://thingsflow.com/ko/home">
              <AdImg src="https://younuk.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fbf0a0656-3146-4e9b-8739-7bca3d0d2cb4%2F%25E1%2584%2584%25E1%2585%25B5%25E1%2586%25BC%25E1%2584%2589%25E1%2585%25B3%25E1%2584%2591%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A9%25E1%2584%258B%25E1%2585%25AE_%25E1%2584%2585%25E1%2585%25A9%25E1%2584%2580%25E1%2585%25A9_%25E1%2584%2580%25E1%2585%25B5%25E1%2584%2587%25E1%2585%25A9%25E1%2586%25AB%25E1%2584%2592%25E1%2585%25A7%25E1%2586%25BC.png?table=block&id=23d7e96e-0dbc-4ba3-9e41-c0f22a5ba926&spaceId=72b256b1-ae08-4e70-bb6c-f9c3cad5a793&width=2000&userId=&cache=v2" />
            </a>
          </React.Fragment>
        ) : (
          <IssueItem
            key={el.number}
            number={el.number}
            title={el.title}
            comments={el.comments}
            userName={el.user.login}
            userAvatar={el.user.avatar_url}
            createdDate={el.created_at.split('T')[0]}
          />
        ),
      )}
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

const Skeleton = styled.div`
  width: 80%;
  height: 140px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  margin-top: 20px;
`;

const AdImg = styled.img`
  width: 100%;
  height: 140px;
  margin-top: 20px;
`;
