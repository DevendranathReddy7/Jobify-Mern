import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { AddJob, Admin, AllJobs, DashboardLayout, Error, HomeLayout, Landing, Login, Profile, Register, Stats, EditJob } from './pages'
import { actions as RegisterActions } from "./pages/Register";
import { actions as LoginActions } from "./pages/Login";
import { actions as AddJobActions } from "./pages/AddJob";
import { loader as dashboardLoader } from "./pages/DashboardLayout";
import { loader as allJobsLoader } from "./pages/AllJobs";
import { loader as editJobLoader } from "./pages/EditJob";
import { actions as editJobActions } from "./pages/EditJob";
import { actions as deleteJobActions } from "./pages/DeleteJob";
import { loader as adminLoader } from "./pages/Admin";
import { actions as profileActions } from "./pages/Profile";
import { loader as statsLoader } from "./pages/Stats";




export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
  document.body.classList.toggle('dark-theme', isDarkTheme)
  return isDarkTheme
}
checkDefaultTheme()
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: 'register',
        element: <Register />,
        action: RegisterActions
      },
      {
        path: 'login',
        element: <Login />,
        action: LoginActions
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <AddJob />,
            action: AddJobActions
          },
          {
            path: 'stats',
            element: <Stats />,
            loader: statsLoader
          }, {
            path: 'profile',
            element: <Profile />,
            action: profileActions,
          }, {
            path: 'admin',
            element: <Admin />,
            loader: adminLoader,
          }, {
            path: 'all-jobs',
            element: <AllJobs />,
            loader: allJobsLoader
          }, {
            path: 'edit-job/:id',
            element: <EditJob />,
            loader: editJobLoader,
            action: editJobActions
          }, {
            path: 'delete-job/:id',
            action: deleteJobActions
          }
        ]
      }
    ]
  }

])
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}
export default App