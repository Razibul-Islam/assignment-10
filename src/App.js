import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./Components/Blog/Blog";
import Course from "./Components/Course/Course";
import Details from "./Components/Details/Details";
import Error from "./Components/Error/Error";
import Faq from "./Components/FAQ/Faq";
import Home from "./Components/Home/Home";
import premium from "./Components/Premium/Premium";
import PrivateRouter from "./Components/PrivateRouter/PrivateRouter";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import Layout from "./Layout/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <Error></Error>,
      element: <Layout></Layout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/course",
          element: <Course></Course>,
          loader: () => fetch(`http://localhost:5000/course`),
        },
        {
          path: "/faq",
          element: <Faq></Faq>,
        },
        {
          path: "/blog",
          element: (
            <PrivateRouter>
              <Blog></Blog>
            </PrivateRouter>
          ),
        },
        {
          path: "/course/:id",
          element: (
            <PrivateRouter>
              <Details></Details>
            </PrivateRouter>
          ),
          loader: ({ params }) =>
            fetch(`http://localhost:5000/course/${params.id}`),
        },
        {
          path: "/login",
          element: <SignIn></SignIn>,
        },
        {
          path: "/register",
          element: <SignUp></SignUp>,
        },
        {
          path: "/premium",
          element: (
            <PrivateRouter>
              <premium></premium>
            </PrivateRouter>
          ),
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
