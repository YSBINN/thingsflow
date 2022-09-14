import { useEffect, FC, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: FC<ScrollToTopProps> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
};
export default ScrollToTop;

interface ScrollToTopProps {
  children: ReactNode;
}
