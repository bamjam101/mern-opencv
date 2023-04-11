import { lazy, Suspense } from "react";
import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Navigate } from "react-router-dom";
import Layout from "./components/Layout";
const Register = lazy(() => import("./pages/Register"));
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
import Loader from "./components/Loader";
import Dashboard from "./pages/Dashboard";
import { getFromLocalStorage } from "./utlis";

const ProtectedRoute = ({ children }) => {
  const user = getFromLocalStorage("PROFILE");
  if (!user) {
    return <Navigate to={"/login"} />;
  }
  return children;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </>
  )
);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
