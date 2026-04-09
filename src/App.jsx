import { Routes, Route, useNavigate } from "react-router-dom";
import React, { lazy, useEffect, startTransition, Suspense } from "react";

const Page01 = lazy(() => import("./Page01.jsx"));
const Page02 = lazy(() => import("./Page02.jsx"));

const Error = lazy(() => import("./components/Error"));

const App = () => {
  const navigate = useNavigate();
  const url = localStorage.getItem("baseURL");

  useEffect(() => {
    if (
      url &&
      (window.location.pathname === "/" ||
        window.location.pathname === "/products" ||
        window.location.pathname === "/products/")
    ) {
      startTransition(() => {
        navigate(url);
      });
    }
  }, [url, navigate]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="*" element={<Error />} />

        <Route path="/products/page01" element={<Page01 />} />
        <Route path="/products/page02" element={<Page02 />} />
      </Routes>
    </Suspense>
  );
};

export default App;
