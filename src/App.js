import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import { Header } from "./header component/Header";
import "./app.css";

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
      <Header />
      <br />
      <Link to="/path">path</Link>
    </>
  );
}

export default App;
