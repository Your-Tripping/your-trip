import { Routes, Route } from "react-router-dom";
import { AddTrippingModal } from "../components/AddTrippingModal";
import { Dashboard } from "../pages/Dashboard";
import LandingPage from "../pages/Home";
<<<<<<< HEAD
import { UserPage } from "../pages/UserProfile";

=======
import { NotFoundPage } from "./NotFoundPages";
import { ProtectedRoutes } from "./ProtectedRoutes";
>>>>>>> 16d1b0df950a226187aaca75221dc2a49be84cf3
export const RoutePages = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
<<<<<<< HEAD
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="addTripping" element={<AddTrippingModal />} />
      <Route path="userpage" element={<UserPage />} />
=======
      <Route element={<ProtectedRoutes />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
      <Route path="addTripping" element={<AddTrippingModal />} />
      <Route path="*" element={<NotFoundPage />} />
>>>>>>> 16d1b0df950a226187aaca75221dc2a49be84cf3
    </Routes>
  );
};
