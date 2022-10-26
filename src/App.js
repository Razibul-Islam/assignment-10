import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Error from "./Components/Error/Error";
import Home from "./Components/Home/Home";
import Layout from "./Layout/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement:<Error></Error>,
      element: <Layout></Layout>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
      ],
    },
  ]);

  return<div>
    <RouterProvider router={router}></RouterProvider>
  </div>;
}

export default App;
