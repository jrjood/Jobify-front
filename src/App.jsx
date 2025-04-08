import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  HomeLayout,
  Register,
  Login,
  DashboardLayout,
  Error,
  Landing,
  AddJob,
  Stats,
  AllJobs,
  Profile,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing /> },
      { path: 'Jobify-front', element: <Landing /> },
      { path: '/Jobify-front/register', element: <Register /> },
      { path: '/Jobify-front/login', element: <Login /> },
      {
        path: '/Jobify-front/dashboard',
        element: <DashboardLayout />,
        children: [
          { index: true, element: <AddJob /> },
          { path: 'stats', element: <Stats /> },
          { path: 'all-jobs', element: <AllJobs /> },
          { path: 'profile', element: <Profile /> },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
