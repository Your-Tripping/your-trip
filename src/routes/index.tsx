import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import HandleTrip from "../pages/HandleTrip";
import LandingPage from "../pages/Home";
import SearchPage from "../pages/SearchResults";
import { UserPage } from "../pages/UserProfile";
import { NotFoundPage } from "./NotFoundPages";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const RoutePages = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="addTripping" element={<HandleTrip />} />
        <Route path="userProfile" element={<UserPage />} />
        <Route path="search" element={<SearchPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
