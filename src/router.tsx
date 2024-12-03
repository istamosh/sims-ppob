import React, { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "./App";
import Registration from "./components/Registration";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
