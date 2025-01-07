import {
  About,
  Cocktails,
  Error,
  HomeLayout,
  Landing,
  Newsletter,
  SinglePageError,
} from "./App/pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loader as landingLoader } from "./App/pages/Landing";
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
          errorElement: <SinglePageError />,
        },
        {
          path: "cocktails",
          element: <Cocktails />,
          errorElement: <SinglePageError />,
        },
        {
          index: true,
          element: <Landing />,
          loader: landingLoader,
          errorElement: <SinglePageError />,
        },
        {
          path: "newsletter",
          element: <Newsletter />,
          errorElement: <SinglePageError />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
