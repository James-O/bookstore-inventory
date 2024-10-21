import {
    createBrowserRouter
  } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../components/SingleBook";
import ErrorPage from "../error";
import Singlebook from "../shop/Singlebook";
import DashboardLayout from "../Dashboard/DashboardLayout";
import Dashboard from "../Dashboard/Dashboard";
import Uploadbook from "../Dashboard/Uploadbook";
import Managebooks from "../Dashboard/Managebooks";
import Editbook from "../Dashboard/Editbook";
import Signup from "../components/Signup";
import Login from "../components/Login";
import PrivateRoute from "../protectedRoute/PrivateRoute";
import Logout from "../components/Logout";

  const router = createBrowserRouter([
    {
      path: "/",
      //element: <div>Hello world!</div>,
      element: <App/>,
      errorElement: <ErrorPage />,
      children: [
        {
            path: "/",
            //element: <div>About page</div>,
            element: <Home/>,
          },
        {
          path: "/shop",
          element: <Shop/>,
        },
        {
          path: "/about",
          element: <About/>,
        },
        {
            path:"/blog",
            element:<Blog/>,
        },
        {
            path:"/singlebook",
            element:<SingleBook/>,
        },
        {
          path:"/book/:id",
          element:<Singlebook/>,
          loader:({params})=>fetch(`http://localhost:5001/book/${params.id}`)
        }
      ],
    },
    {
      path:"/admin/dashboard",
      element:<DashboardLayout/>,
      children:[
        {
          path:"/admin/dashboard",
          element:<PrivateRoute><Dashboard/></PrivateRoute>
        },
        {
          path:"/admin/dashboard/upload",
          element:<Uploadbook/>
        },
        {
          path:"/admin/dashboard/manage",
          element:<Managebooks/>
        },
        {
          path:"/admin/dashboard/edit/:id",
          element:<Editbook/>,
          loader:({params})=>fetch(`http://localhost:5001/book/${params.id}`)
        }
      ]
    },
    {
      path:"signup",
      element:<Signup/>,
    },
    {
      path:"login",
      element:<Login/>
    },
    {
      path:"logout",
      element:<Logout/>
    }
  ]);
  export default router