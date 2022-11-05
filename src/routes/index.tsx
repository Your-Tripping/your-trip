import { Routes, Route } from "react-router-dom";
import { AddTrippingModal } from "../components/AddTrippingModal";
import { Dashboard } from "../pages/Dashboard";
import LandingPage from "../pages/Home";
import { UserPage } from "../pages/UserProfile";

export const RoutePages = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="addTripping" element={<AddTrippingModal />} />
      <Route path="userpage" element={<UserPage />} />
    </Routes>
  );
};
