import { Routes, Route, useNavigate } from "react-router-dom";
import React, { lazy, useEffect, startTransition, Suspense } from "react";
import Page03 from "./Page03.jsx";
import Page04 from "./Page04.jsx";
import Page06 from "./Page06.jsx";
import Page07 from "./Page07.jsx";
import Page08 from "./Page08.jsx";
import Page09 from "./Page09.jsx";
import Page10 from "./Page10.jsx";
import Page11 from "./Page11.jsx";

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
        <Route path="/products/page03" element={<Page03 />} />
        <Route path="/products/page04" element={<Page04 />} />
        <Route path="/products/page06" element={<Page06 />} />
        <Route path="/products/page07" element={<Page07 />} />
        <Route path="/products/page08" element={<Page08 />} />
        <Route path="/products/page09" element={<Page09 />} />
        <Route path="/products/page10" element={<Page10 />} />
        <Route path="/products/page11" element={<Page11 />} />
      </Routes>
    </Suspense>
  );
};

export default App;
