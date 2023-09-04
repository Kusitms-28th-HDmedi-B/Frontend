import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Career from './pages/career';
import Contact from './pages/contact';
import News from './pages/news';
import Service from './pages/service';
import Tech from './pages/tech';
import Story from './pages/story';
import Main from './pages/main';
import Layout from './components/layout/Layout';

const route = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // 메인 페이지
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: 'career',
        element: <Career />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'news',
        element: <News />,
      },
      {
        path: 'service',
        element: <Service />,
      },
      {
        path: 'tech',
        element: <Tech />,
      },
      {
        path: 'story',
        element: <Story />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={route} />;

export default App;
