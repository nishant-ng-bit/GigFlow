import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, LoginPage, RegisterPage, PostGig, BidsPage } from "./pages";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import AppLayout from "./layouts/AppLayout.jsx";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },

        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
        {
          path: "/post-gig",
          element: (
            <ProtectedRoute>
              <PostGig />
            </ProtectedRoute>
          ),
        },
        {
          path: "/bids/:gigId",
          element: (
            <ProtectedRoute>
              <BidsPage />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
