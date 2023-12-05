import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import StudentRegistration from "./pages/StudentRegistration/Index";
import PrimaryRouteLayout from "./layouts/PrimaryRouteLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<PrimaryRouteLayout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Route>
      <Route path="/register" element={<StudentRegistration />} />
    </>
  )
);
export default router;
