import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import "./app.css";
import { HeaderComponent } from "./header component/HeaderComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FigmaApp />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}
function FigmaApp() {
  return (
    <>
      <HeaderComponent />
      <br />
      <Link to="/path">path</Link>
    </>
  );
}

export default App;
