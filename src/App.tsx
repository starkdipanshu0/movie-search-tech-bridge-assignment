import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./components/Layout/AppLayout";
import Home from "./pages/Home";
import { MovieProvider } from "./_context/MovieContext";
import MovieDetail from "./pages/MovieDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/movie/:imdbID",
    element: <MovieDetail/>, // Placeholder for movie details page
  }
]);


function App() {
  return (
    <>
      <MovieProvider>
        <RouterProvider router={router} />
      </MovieProvider>
      
    </>
  );
}

export default App;
