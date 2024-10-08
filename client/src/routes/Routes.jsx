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
import SingleSurvey from "../pages/Dashboard/Surveyor/SingleSurvey/SingleSurvey";
import AllSurveys from "../pages/Dashboard/Admin/AllSurveys/AllSurveys";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/User/PaymentHistory/PaymentHistory";
import SurveysDetails from "../pages/Home/SurveysDetails/SurveysDetails";
import SurveysPage from "../pages/SurveysPage/SurveysPage";
import Bvote from "../pages/Home/SurveysDetails/Bvote";
import PrivateRoute from "./PrivateRoute";
import ParticipateSurveys from "../pages/Dashboard/User/ParticipateSurveys/ParticipateSurveys";
import ReportedSurveys from "../pages/Dashboard/User/ReportedSurveys/ReportedSurveys";
import CommentedProUser from "../pages/Dashboard/User/CommentedProUser/CommentedProUser";
import FeedBack from "../pages/Dashboard/Surveyor/FeedBack/FeedBack";
import FBack from "../pages/Dashboard/Surveyor/FeedBack/FBeed/FBack";
import MembarShip from "../pages/MemberShip/MembarShip";
import ProPayment from "../pages/Dashboard/User/ProPayment/ProPayment";
import AllUpdate from "../pages/Dashboard/Surveyor/AllUpdate/AllUpdate";
import AllResponses from "../pages/Dashboard/Admin/AllResponses/AllResponses";
import ErrorPage from "../pages/ErrorPage/ErrorPage";




  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
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

          
          {
            path: '/surveydetails/:id',
            element: <SurveysDetails></SurveysDetails>
          },

          {
            path: '/vote/:id',
            element: <PrivateRoute><Bvote></Bvote></PrivateRoute>
          },
         
          
          {
            path: '/surveysPages',
            element: <SurveysPage></SurveysPage>
          },
          {
          path: 'membarShip',
          element: <MembarShip></MembarShip>
        },
        
        {
          path: 'payment',
          element: <PrivateRoute><Payment></Payment></PrivateRoute>
        }
        


      ]
    },
    {
      path: 'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute> ,
      children: [
        {
          path: 'adminHome',
          element: <AdminHome></AdminHome>
        },
        // admin routes
        {
          path: 'admin/users',
          element: <AllUsers></AllUsers>
        },

        {
          path: 'admin/surveys',
          element: <AllSurveys></AllSurveys>
        },

        ,

        {
          path: 'admin/responses',
          element: <AllResponses></AllResponses>
        },

        // survey routes
        {
          path: 'surveyAdd',
          element: <Create></Create>
        },
        {
          path: 'surveyor/surveys',
          element: <Surveys></Surveys>
        },
        {
          path: 'surveyor/allupdate',
          element: <AllUpdate></AllUpdate>
        },
        {
          path: 'surveyor/update/:id',
          element: <Update></Update>,
          loader: ({params}) => fetch(`https://survey-app-ashy.vercel.app/surveyor/${params.id}`)
        },
        {
          path: 'surveyor/surveys/:id',
          element: <SingleSurvey></SingleSurvey>,
          loader: ({params}) => fetch(`https://survey-app-ashy.vercel.app/surveyor/${params.id}`)
        }
        
        ,
        {
          path: 'surveyor/feedback/:id',
          element: <FBack></FBack>,
          loader: ({params}) => fetch(`https://survey-app-ashy.vercel.app/feedback/${params.id}`)
        },
        // {
        //   path: 'payment',
        //   element: <Payment></Payment>
        // },
        
        {
          path: 'user/paymentHistory',
          element: <PaymentHistory></PaymentHistory>
        },

        {
          path: 'user/pro/paymentHistory',
          element: <ProPayment></ProPayment>
        },

        {
          path: 'user/surveys',
          element: <ParticipateSurveys></ParticipateSurveys>
        },
        {
          path:'user/my-reports',
          element:<ReportedSurveys></ReportedSurveys>
        },
        {
          path:'user/comments',
          element:<CommentedProUser></CommentedProUser>
        },
        {
          path:'surveyor/feedbacks',
          element:<FeedBack></FeedBack>
        }

      ]
    }
  ]);
  export default router;