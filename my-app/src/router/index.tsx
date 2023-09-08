import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../components/Landing/Landing";
import QuestionsDash from "../components/QuizPage/QuizDashboard";

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path={`/`} element={<LandingPage />} />
        <Route path={`/:id`} element={<QuestionsDash />} />
      </Routes>
    </div>
  );
};
