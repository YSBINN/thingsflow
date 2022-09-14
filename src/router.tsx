import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from 'components/layout';
import Spinner from 'components/spinner';

const IssuesList = lazy(() => import('pages/issuesList'));
const IssueDetail = lazy(() => import('pages/issueDetail'));

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<IssuesList />} />
              <Route path="/:id" element={<IssueDetail />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default Router;
