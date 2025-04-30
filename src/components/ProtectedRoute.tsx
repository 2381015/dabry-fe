import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Box, Spinner, Center, cookieStorageManager } from "@chakra-ui/react";
import { useAuth } from "../context/AuthContext";
import Cookies from "js-cookie";

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <Center h="100vh">
        <Spinner size="xl" />
      </Center>
    );
  }

  if (!Cookies.get("token")) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
