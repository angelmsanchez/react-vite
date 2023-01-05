import { useState, Suspense, lazy } from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.scss";
const Home = lazy(() => import("./home/components/index/Home"));
const Admin = lazy(() => import("./admin/components/index/Admin"));

function App() {
  const [env] = useState(import.meta.env.VITE_EXAMPLE_VARIABLE);
  console.log("env", env);

  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/home">Home </Link>

        <Link to="/"> Admin</Link>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Admin />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
