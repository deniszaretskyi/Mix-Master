import {
  About,
  Cocktails,
  Error,
  HomeLayout,
  Landing,
  Newsletter,
} from "./App/pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "about",
          element: <About />,
        },
        {
          path: "cocktails",
          element: <Cocktails />,
        },
        {
          index: true,
          element: <Landing />,
        },
        {
          path: "newsletter",
          element: <Newsletter />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
