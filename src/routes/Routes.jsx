import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Category from "../Pages/Home/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../Pages/Login/Login";
import News from "../Pages/News/News/News";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: '/category',
    element: <Main></Main>,
    children: [
      {
        path: ':id',
        element: <Category></Category>,
        loader: ({ params }) => fetch(`http://localhost:4000/categories/${params.id}`)
      }
    ]
  },
  {
    path: '/news',
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ':id',
        element: <PrivateRoute><News></News></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:4000/news/${params.id}`)
      }
    ]
  }
]);

export default router;