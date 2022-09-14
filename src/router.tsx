import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from 'utils/scrollToTop';
import Layout from 'components/layout';
import Spinner from 'components/spinner';

const IssuesList = lazy(() => import('pages/issuesList'));
const IssueDetail = lazy(() => import('pages/issueDetail'));

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Layout>
            <Suspense fallback={<Spinner />}>
              <Routes>
                <Route path="/" element={<IssuesList />} />
                <Route path="/:id" element={<IssueDetail />} />
              </Routes>
            </Suspense>
          </Layout>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
};

export default Router;
