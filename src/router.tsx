import App from 'App';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Suspense fallback={<Spinner />}> */}
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
        {/* </Suspense> */}
      </BrowserRouter>
    </>
  );
};

export default Router;
