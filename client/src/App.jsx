import React from "react";
import { Routes, Route } from "react-router-dom";
import Root from "./pages/root.jsx";
import Contact from "./pages/contact.jsx";
import About from "./pages/about.jsx";
import Certificates from "./pages/certificates.jsx";

function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Root />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/certificates" element={<Certificates />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
