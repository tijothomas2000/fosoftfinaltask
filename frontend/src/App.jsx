import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout/RootLayout";
import LoginLayout from "./layouts/LoginLayout/LoginLayout.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import SinglePage from "./pages/SinglePage/SinglePage.jsx";
import { singlePageLoader } from "./loader.js";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "",
          element: <HomePage />
        },
        {
          path: "/:id",
          element: <SinglePage />,
          loader: singlePageLoader,
        },
      ]
    },
    {
      path: "/login",
      element: <LoginLayout />,
      children: [
        {
          path: "",
          element: <LoginPage />
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App
