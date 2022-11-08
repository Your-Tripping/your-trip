import { Routes, Route } from "react-router-dom";
import { AddTrippingModal } from "../components/AddTrippingModal";
import { Dashboard } from "../pages/Dashboard";
import LandingPage from "../pages/Home";
import { UserProfile } from "../pages/UserProfile";
import { NotFoundPage } from "./NotFoundPages";
import { ProtectedRoutes } from "./ProtectedRoutes";
export const RoutePages = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
      <Route path="addTripping" element={<AddTrippingModal />} />
      <Route path="userProfile" element={ <UserProfile /> } />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
