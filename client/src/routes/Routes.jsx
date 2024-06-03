import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Authinticate/Login/Login";
import SignUp from "../pages/Authinticate/SignUp/SignUp";
import Dashboard from "../layout/Dashboard";
import AdminHome from "../pages/Dashboard/Admin/AdminHome";
import Surveys from "../pages/Surveys/Surveys";
import AllUsers from "../pages/Dashboard/Admin/AllUsers/AllUsers";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
          {
            path:'/',
            element:<Home></Home>
          },
          {
            path: 'surveys',
            element: <Surveys></Surveys>
          },
          {
            path: 'login',
            element: <Login></Login>
          },
          {
            path: 'signup',
            element: <SignUp></SignUp>
          },
      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'adminHome',
          element: <AdminHome></AdminHome>
        },
        // admin routes
        {
          path: 'users',
          element: <AllUsers></AllUsers>
        }
      ]
    }
  ]);
  export default router;