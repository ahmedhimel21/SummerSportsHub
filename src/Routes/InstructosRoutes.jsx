import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useInstructor } from "../hooks/useInstructor";

const InstructorsRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const [isInstructor, isInstructorLoading] = useInstructor();
  const location = useLocation();

  if (loading || isInstructorLoading) {
    return (
      <progress
        className="progress progress-primary w-56 lg:mx-[584px] lg:mt-56"
        value="100"
        max="100"
      ></progress>
    );
  }
  if (user && isInstructor) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default InstructorsRoutes ;
