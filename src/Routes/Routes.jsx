import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Classes from "../Pages/Classes/Classes";
import Instructors from "../Pages/Instructors/Instructors";
import Dashboard from "../Layouts/Dashboard";
import MySelectedClass from "../Pages/Dashboard/MySelectedClass/MySelectedClass";
import PrivateRoutes from "./PrivateRoutes";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import AdminRoutes from "./AdminRoutes";
import MyEnrolledClass from "../Pages/Dashboard/MyEnrolledClass/MyEnrolledClass";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import MyClasses from "../Pages/Dashboard/MyClass/MyClasses";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/classes',
        element: <Classes></Classes>
      },
      {
        path: '/instructors',
        element: <Instructors></Instructors>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children: [
      {
        path:'mySelectedClasses',
        element: <PrivateRoutes><MySelectedClass></MySelectedClass></PrivateRoutes>
      },
      {
        path: 'manageUsers',
        element: <AdminRoutes><ManageUsers></ManageUsers></AdminRoutes>
      },
      {
        path: 'myClasses',
        element: <PrivateRoutes><MyEnrolledClass></MyEnrolledClass></PrivateRoutes>
      },
      {
        path: 'payment/:id',
        element: <PrivateRoutes><Payment></Payment></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/carts/${params.id}`)
      },
      {
        path:'paymentHistory',
        element: <PrivateRoutes><PaymentHistory></PaymentHistory></PrivateRoutes>
      },
      {
        path: 'addClass',
        element: <AddClass></AddClass>
      },
      {
        path: 'myAddedClasses',
        element: <MyClasses></MyClasses>
      },
      {
        path: 'manageClasses',
        element: <ManageClasses></ManageClasses>
      }
    ]
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
])