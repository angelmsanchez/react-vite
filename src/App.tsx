import { useState, Suspense, lazy } from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.scss";
const Home = lazy(() => import("./home/components/index/Home"));
const Admin = lazy(() => import("./admin/components/index/Admin"));

function App() {
  const [env] = useState(import.meta.env.VITE_EXAMPLE_VARIABLE);
  console.log("env", env);

  return (
    <div className="app">
      <BrowserRouter>
        <header className="app__header">
          <Link to="/home">Home </Link>
          <Link to="/"> Admin</Link>
        </header>
        <main className="app__main">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Admin />} />
            </Routes>
          </Suspense>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
