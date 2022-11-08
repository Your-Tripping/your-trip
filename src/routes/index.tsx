import { Routes, Route } from "react-router-dom";
import { AddTrip } from "../components/AddTrip";
import { Dashboard } from "../pages/Dashboard";
import LandingPage from "../pages/Home";
import { UserPage } from "../pages/UserProfile";
import { NotFoundPage } from "./NotFoundPages";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const RoutePages = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="userpage" element={<UserPage />} />
      </Route>
      <Route path="addTripping" element={<AddTrip />} />
      <Route path="userProfile" element={ <UserPage /> } />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
