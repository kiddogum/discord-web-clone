import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./layout/Layout.jsx";
import DownloadPage from "./pages/DownloadPage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import NitroPage from "./pages/NitroPage.jsx";
import {} from "react";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/nitro" element={<NitroPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
