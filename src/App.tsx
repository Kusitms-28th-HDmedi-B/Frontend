import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import News from './pages/news';
import Story from './pages/story';
import Main from './pages/main';
import Layout from './components/layout/Layout';
import Recruit from './pages/recruit';
import Notice from './pages/notice';
import Info from './pages/info';
import Ask from './pages/ask';
import GlobalStyle from './styles/GlobalStyles';

const route = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // 헤더 및 푸터
    children: [
      {
        index: true,
        element: <Main />, // 홈페이지
      },
      {
        path: 'recruit',
        element: <Recruit />, //채용공고 페이지
      },
      {
        path: 'notice',
        element: <Notice />, //공지사항 페이지
      },
      {
        path: 'news',
        element: <News />, //뉴스 페이지
      },
      {
        path: 'info',
        element: <Info />, //기업 정보 페이지
      },
      {
        path: 'ask',
        element: <Ask />, //문의하기 페이지
      },
      {
        path: 'story',
        element: <Story />, // 보류
      },
    ],
  },
]);

const App = () => (
  <>
    <GlobalStyle />
    <RouterProvider router={route} />
  </>
);

export default App;
