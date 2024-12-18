import {
  About,
  Cocktails,
  Error,
  HomeLayout,
  Landing,
  Newsletter,
} from "./App/pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loader as landingLoader } from "./App/pages/Landing/Landing";
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
          loader: landingLoader,
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
