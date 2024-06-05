import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Authinticate/Login/Login";
import SignUp from "../pages/Authinticate/SignUp/SignUp";
import Dashboard from "../layout/Dashboard";
import AdminHome from "../pages/Dashboard/Admin/AdminHome";
// import Surveys from "../pages/Surveys/Surveys";
import AllUsers from "../pages/Dashboard/Admin/AllUsers/AllUsers";
import Create from "../pages/Dashboard/Surveyor/Create/Create";
import Surveys from "../pages/Dashboard/Surveyor/Surveys/Surveys";
import Update from "../pages/Dashboard/Surveyor/Update/Update";


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
        },
        // survey routes
        {
          path: 'surveyAdd',
          element: <Create></Create>
        },
        {
          path: 'surveyor/surveys',
          element: <Surveys></Surveys>
        }
        ,
        {
          path: 'surveyor/update/:id',
          element: <Update></Update>,
          loader: ({params}) => fetch(`http://localhost:5000/surveyor/${params.id}`)
        }
      ]
    }
  ]);
  export default router;