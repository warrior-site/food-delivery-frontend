import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Pages
import HomePage from "../pages/HomePage";
import HistoryPage from "../pages/HistoryPage";
import SearchPage from "../pages/SearchPage";
import ProfilePage from "../pages/ProfilePage";
import FoodReel from "../pages/FoodReel";
import OrderFood from "../components/OrderFood";
import HotelDetail from "../components/HotelDetail";
import SignupPage from "../pages/SignUpPage";
import CompleteProfilePage from "../pages/completeProfilePage";
import LoginPage from "../pages/LoginPage";

function MainRotes() {
  const user = useSelector((state) => state.user.user);

  // 🔒 ProtectedRoute inline
  const ProtectedRoute = ({ children }) => {
    if (!user) {
      // Not logged in
      return <Navigate to="/login" replace />;
    }
    if (user.status === "incomplete") {
      // Profile incomplete
      return <Navigate to="/complete-profile" replace />;
    }
    return children;
  };

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/complete-profile" element={<CompleteProfilePage />} />

      {/* Protected routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/history"
        element={
          <ProtectedRoute>
            <HistoryPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/search"
        element={
          <ProtectedRoute>
            <SearchPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/food-reel"
        element={
          <ProtectedRoute>
            <FoodReel />
          </ProtectedRoute>
        }
      />
      <Route
        path="/order-food/:id"
        element={
          <ProtectedRoute>
            <OrderFood />
          </ProtectedRoute>
        }
      />
      <Route
        path="/hotel-detail/:id"
        element={
          <ProtectedRoute>
            <HotelDetail />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default MainRotes;
