import { Navigate, createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '../routes/routes';
import { HomePage } from '../../pages/HomePage';
import { AboutPage } from '../../pages/AboutPage';
import { BlogPage } from '../../pages/BlogPage';
import { ErrorPage } from '../../pages/ErrorPage';
import { Layout } from '../../pages/Layout/Layout';
import { SinglePage } from '../../pages/SinglePage';
import { CreatePost } from '../../components/CreatePost/CreatePost';
import { EditPage } from '../../pages/EditPage';
import { LoginPage } from '../../pages/LoginPage';
import { RequireAuth } from '../../hoc/RequireAuth';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <HomePage />,
        index: true,
      },
      {
        path: ROUTES.ABOUT,
        element: <AboutPage />,
      },
      {
        path: `${ROUTES.ABOUT}-us`,
        element: <Navigate to='/about' replace />,
      },
      {
        path: ROUTES.BLOG,
        element: <BlogPage />,
      },
      {
        path: `${ROUTES.BLOG}/:id`,
        element: <SinglePage />,
      },
      {
        path: `${ROUTES.BLOG}/new`,
        element: (
          <RequireAuth>
            <CreatePost />
          </RequireAuth>
        ),
      },
      {
        path: `${ROUTES.BLOG}/:id/edit`,
        element: <EditPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
    ],
  },
]);
