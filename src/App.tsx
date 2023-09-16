import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import News from './pages/news';
import Main from './pages/main';
import Layout from './components/layout/Layout';
import Recruit from './pages/recruit';
import Notice from './pages/notice';
import Info from './pages/info';
import Ask from './pages/ask';
import GlobalStyle from './styles/GlobalStyles';
import GlobalFont from './styles/GlobalFont';
import About from './pages/about';
import Detail from './pages/notice/Detail';
import Value from './pages/value';
import { RecoilRoot } from 'recoil';
import Technology from './pages/technology';
import Upp from './pages/service/upp';
import Lms from './pages/service/lms';

import Login from './pages/admin/login';

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
        children: [
          {
            index: true,
            element: <Notice />, //공지사항 페이지
          },
          {
            path: ':id',
            element: <Detail />, //세부 공지사항
          },
        ],
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
        path: 'value',
        element: <Value />, // 인재상 페이지
      },
      {
        path: 'about',
        element: <About />, // 기업 소개 페이지
      },
      {
        path: 'technology',
        element: <Technology />, // 기술 페이지
      },
      {
        path: 'service',
        element: <Outlet />,
        children: [
          {
            path: 'upp',
            element: <Upp />,
          },
          {
            path: 'lms',
            element: <Lms />,
          },
        ],
      },
    ],
  },
  {
    path: 'admin',
    element: <Outlet />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
]);
        
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <GlobalFont />
      <GlobalStyle />
      <RouterProvider router={route} />
    </RecoilRoot>
  </QueryClientProvider>
);

export default App;
