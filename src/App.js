import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

import { Home } from "./header component/home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <FigmaApp />,
  },
  {
    path: "/path",
    element: <div>hi</div>,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}
function FigmaApp() {
  return (
    <>
      <Home />
      <br />
      <Link to="/path">path</Link>
    </>
  );
}

export default App;
