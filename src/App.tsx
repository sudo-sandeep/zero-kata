import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Game from "./pages/Game";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Game />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const App = () => {
  return (
    <div className="bg-slate-200 h-full">
      <div className="container relative mx-auto bg-white h-full max-w-5xl text-center font-mono grid place-items-center bg-background bg-cover bg-center">
        <RouterProvider router={router} />
      </div>
    </div>
  );
};

export default App;
