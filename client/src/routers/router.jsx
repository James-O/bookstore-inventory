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
  ]);
  export default router